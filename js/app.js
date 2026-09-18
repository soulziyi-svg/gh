document.addEventListener('DOMContentLoaded', () => {
  const materialGuide = document.querySelector('.material-guides');
  const pageMain = document.querySelector('main');
  if (materialGuide && pageMain) pageMain.appendChild(materialGuide);

  const toggleBtn = document.getElementById('mobileToggle');
  const panel = document.getElementById('mobilePanel');

  if (toggleBtn && panel) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = !panel.hasAttribute('hidden');
      if (isOpen) {
        panel.setAttribute('hidden', '');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-label', '전체 메뉴 열기');
      } else {
        panel.removeAttribute('hidden');
        toggleBtn.setAttribute('aria-expanded', 'true');
        toggleBtn.setAttribute('aria-label', '전체 메뉴 닫기');
      }
    });

    panel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        panel.setAttribute('hidden', '');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-label', '전체 메뉴 열기');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        panel.setAttribute('hidden', '');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-label', '전체 메뉴 열기');
      }
    });
  }

  document.querySelectorAll('[data-dropzone]').forEach((zone) => {
    const input = zone.querySelector('.dropzone__input');
    const filesLabel = zone.querySelector('[data-dropzone-files]');
    const preview = zone.querySelector('[data-dropzone-preview]');
    const promptIcon = zone.querySelector('.dropzone__label > svg');
    const promptTitle = zone.querySelector('.dropzone__label > b');
    let previewUrls = [];
    if (!input || !filesLabel) return;

    const updateFilesLabel = () => {
      const files = input.files;
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
      previewUrls = [];
      if (preview) preview.replaceChildren();
      if (!files || files.length === 0) {
        filesLabel.textContent = '선택된 파일 없음';
        filesLabel.hidden = false;
        if (promptIcon) promptIcon.hidden = false;
        if (promptTitle) promptTitle.hidden = false;
        if (preview) preview.hidden = true;
      } else if (files.length === 1) {
        filesLabel.textContent = files[0].name;
      } else {
        filesLabel.textContent = `${files.length}개 파일 선택됨`;
      }

      if (files && files.length > 0 && preview) {
        [...files].forEach((file, index) => {
          if (!file.type.startsWith('image/')) return;
          const url = URL.createObjectURL(file);
          previewUrls.push(url);
          const figure = document.createElement('figure');
          const image = document.createElement('img');
          image.src = url;
          image.alt = `${file.name} 미리보기`;
          const caption = document.createElement('figcaption');
          caption.textContent = file.name;
          figure.append(image, caption);
          preview.append(figure);
          if (index === 0) image.fetchPriority = 'high';
        });
        promptIcon.hidden = true;
        promptTitle.hidden = true;
        filesLabel.hidden = true;
        preview.hidden = false;
        zone.classList.add('has-preview');
      } else {
        zone.classList.remove('has-preview');
      }
    };

    input.addEventListener('change', updateFilesLabel);

    ['dragenter', 'dragover'].forEach((eventName) => {
      zone.addEventListener(eventName, (event) => {
        event.preventDefault();
        event.stopPropagation();
        zone.classList.add('is-dragover');
      });
    });

    ['dragleave', 'dragend'].forEach((eventName) => {
      zone.addEventListener(eventName, (event) => {
        event.preventDefault();
        event.stopPropagation();
        zone.classList.remove('is-dragover');
      });
    });

    zone.addEventListener('drop', (event) => {
      event.preventDefault();
      event.stopPropagation();
      zone.classList.remove('is-dragover');
      const droppedFiles = event.dataTransfer?.files;
      if (droppedFiles && droppedFiles.length > 0) {
        input.files = droppedFiles;
        updateFilesLabel();
      }
    });
  });

  const startForm = document.getElementById('startForm');
  const startStatus = document.getElementById('startStatus');
  const consentCheckbox = startForm?.querySelector('#startAgree');
  const planSubmitButton = startForm?.querySelector('button[type="submit"]');
  const consentRequired = document.body.classList.contains('residential-page');
  let isSubmitting = false;
  const updatePlanButton = () => {
    if (planSubmitButton) planSubmitButton.disabled = isSubmitting || (consentRequired && !consentCheckbox?.checked);
  };
  consentCheckbox?.addEventListener('change', updatePlanButton);
  startForm?.addEventListener('reset', () => queueMicrotask(updatePlanButton));
  window.addEventListener('pageshow', updatePlanButton);
  updatePlanButton();
  const otherScope = startForm?.querySelector('input[name="scopeOther"]');
  otherScope?.addEventListener('input', () => {
    if (otherScope.value.trim()) {
      startForm.querySelector('input[name="scope"][value="기타"]').checked = true;
    }
  });
  startForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (isSubmitting || (consentRequired && !consentCheckbox?.checked)) return;
    if (!startForm.reportValidity()) return;
    const files = [...startForm.querySelectorAll('input[type="file"]')].flatMap(input => [...input.files]);
    if (files.reduce((total, file) => total + file.size, 0) > 10 * 1024 * 1024) {
      startStatus.textContent = '첨부 사진의 총 용량을 10MB 이하로 줄여주세요. 입력 내용은 유지됩니다.';
      return;
    }
    isSubmitting = true;
    updatePlanButton();
    startStatus.textContent = '사진과 신청 내용을 안전하게 전송하고 있습니다…';
    const payload = new FormData(startForm);
    if (payload.get('scope') !== '기타') payload.delete('scopeOther');
    payload.append('신청페이지', location.href);
    startForm.querySelectorAll('input[type="file"]').forEach(input => {
      payload.delete(input.name);
      [...input.files].forEach((file, index) => payload.append(`attachment_${input.name}_${index + 1}`, file, file.name));
    });
    payload.append('_subject', '[룸픽] 새로운 공간 계획 신청');
    payload.append('_template', 'table');
    payload.append('_captcha', 'false');
    payload.append('개인정보동의', '동의함');
    try {
      const response = await fetch('https://formsubmit.co/ajax/soulziyi@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });
      if (!response.ok) throw new Error('mail service error');
      const result = await response.json();
      if (result.success !== true && result.success !== 'true') throw new Error('mail service rejected submission');
      startStatus.textContent = '이메일 발송 요청이 접수되었습니다. 확인 후 안내드리겠습니다.';
      startForm.reset();
      startForm.querySelectorAll('.dropzone__input').forEach((input) => {
        input.dispatchEvent(new Event('change'));
      });
    } catch (error) {
      startStatus.textContent = '전송하지 못했습니다. 잠시 후 다시 시도하거나 soulziyi@gmail.com으로 보내주세요.';
    } finally {
      isSubmitting = false;
      updatePlanButton();
    }
  });
});
