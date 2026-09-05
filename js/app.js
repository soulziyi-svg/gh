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

  const dialog = document.getElementById('authDialog');
  const form = document.getElementById('authForm');
  const title = document.getElementById('authTitle');
  const kicker = document.getElementById('authKicker');
  const submit = form?.querySelector('.auth-submit');
  const status = document.getElementById('authStatus');
  const switchBtn = document.getElementById('authSwitch');
  const switchText = document.getElementById('authSwitchText');
  const password = document.getElementById('authPassword');
  const agree = document.getElementById('authAgree');
  let authMode = 'login';

  const updateAccountView = (loggedIn) => {
    document.querySelectorAll('[data-auth]').forEach((button) => { button.hidden = loggedIn; });
    document.querySelectorAll('[data-mypage]').forEach((button) => { button.hidden = !loggedIn; });
  };

  updateAccountView(sessionStorage.getItem('roomPickLoggedIn') === 'true');

  const setAuthMode = (mode) => {
    authMode = mode;
    const signup = mode === 'signup';
    document.querySelectorAll('.signup-only').forEach((element) => { element.hidden = !signup; });
    title.textContent = signup ? '회원가입' : '로그인';
    kicker.textContent = signup ? '내 공간 계획을 안전하게 보관하세요' : '룸픽에 다시 오신 것을 환영합니다';
    submit.textContent = signup ? '회원가입' : '로그인';
    switchText.textContent = signup ? '이미 회원이신가요?' : '아직 회원이 아니신가요?';
    switchBtn.textContent = signup ? '로그인' : '회원가입';
    password.autocomplete = signup ? 'new-password' : 'current-password';
    agree.required = signup;
    status.textContent = '';
  };

  document.querySelectorAll('[data-auth]').forEach((button) => {
    button.addEventListener('click', () => {
      setAuthMode(button.dataset.auth);
      panel?.setAttribute('hidden', '');
      toggleBtn?.setAttribute('aria-expanded', 'false');
      dialog.showModal();
    });
  });
  dialog?.querySelector('.auth-dialog__close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  switchBtn?.addEventListener('click', () => setAuthMode(authMode === 'login' ? 'signup' : 'login'));
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (authMode === 'signup') {
      status.textContent = '회원가입 화면이 준비되었습니다. 인증 서버 연결 후 실제 가입이 가능합니다.';
      return;
    }
    sessionStorage.setItem('roomPickLoggedIn', 'true');
    updateAccountView(true);
    status.textContent = '로그인되었습니다. 이제 마이페이지를 이용할 수 있습니다.';
    window.setTimeout(() => dialog.close(), 700);
  });

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
  startForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!startForm.reportValidity()) return;
    const submitButton = startForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    startStatus.textContent = '사진과 신청 내용을 안전하게 전송하고 있습니다…';
    const payload = new FormData(startForm);
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
      startStatus.textContent = '접수가 완료되었습니다. 확인 후 안내드리겠습니다.';
      startForm.reset();
      startForm.querySelectorAll('.dropzone__input').forEach((input) => {
        input.dispatchEvent(new Event('change'));
      });
    } catch (error) {
      startStatus.textContent = '전송하지 못했습니다. 잠시 후 다시 시도하거나 soulziyi@gmail.com으로 보내주세요.';
    } finally {
      submitButton.disabled = false;
    }
  });
});
