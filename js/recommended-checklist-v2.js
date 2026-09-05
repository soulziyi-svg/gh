(() => {
  'use strict';
  const key = 'space-pick-02-checklist-v2';
  const checks = [...document.querySelectorAll('[data-check]')];
  const notes = [...document.querySelectorAll('[data-note]')];
  let saved = {};
  const storageMessage = () => {
    document.getElementById('storage-status').textContent = '현재 브라우저에서 저장을 사용할 수 없습니다. 페이지를 닫기 전에 인쇄 / PDF 저장을 이용하세요.';
  };
  try { saved = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch { storageMessage(); }
  checks.forEach(input => { input.checked = saved.checks?.[input.dataset.check] === true; });
  notes.forEach(input => { input.value = typeof saved.notes?.[input.dataset.note] === 'string' ? saved.notes[input.dataset.note] : ''; });
  function progress() { document.getElementById('progress').textContent = `확인 ${checks.filter(input => input.checked).length} / ${checks.length}`; }
  function save() {
    const state = { checks: {}, notes: {} };
    checks.forEach(input => { state.checks[input.dataset.check] = input.checked; });
    notes.forEach(input => { state.notes[input.dataset.note] = input.value; });
    try { localStorage.setItem(key, JSON.stringify(state)); } catch { storageMessage(); }
    progress();
  }
  checks.forEach(input => input.addEventListener('change', save));
  notes.forEach(input => input.addEventListener('input', save));
  document.getElementById('reset').addEventListener('click', () => {
    if (!window.confirm('이 페이지에 저장한 체크와 메모를 모두 지울까요?')) return;
    checks.forEach(input => { input.checked = false; });
    notes.forEach(input => { input.value = ''; });
    save();
  });
  const memoDetails = [...document.querySelectorAll('.memo')];
  let printState = [];
  window.addEventListener('beforeprint', () => {
    printState = memoDetails.map(detail => detail.open);
    memoDetails.forEach(detail => { if (detail.querySelector('textarea').value) detail.open = true; });
  });
  window.addEventListener('afterprint', () => { memoDetails.forEach((detail, i) => { detail.open = printState[i] || false; }); });
  document.getElementById('print').addEventListener('click', () => window.print());
  const visualRanges = [
    { from: 12, to: 15, file: 'check-detail-12-15.png' },
    { from: 16, to: 19, file: 'check-detail-16-19.png' },
    { from: 20, to: 23, file: 'check-detail-20-23.png' },
    { from: 24, to: 27, file: 'check-detail-24-27.png' },
    { from: 28, to: 31, file: 'check-detail-28-31.png' },
    { from: 32, to: 35, file: 'check-detail-32-35.png' },
    { from: 36, to: 37, file: 'check-detail-36-37.png' }
  ];
  document.querySelectorAll('.point').forEach(point => {
    const number = Number(point.id.replace('point-', ''));
    if (number < 12) return;
    const range = visualRanges.find(item => number >= item.from && number <= item.to);
    if (!range) return;
    const quadrant = range.from === 36 ? (number === 36 ? 0 : 2) : number - range.from;
    const title = point.querySelector('.point-heading h3')?.textContent.trim() || `체크 ${number}`;
    const figure = document.createElement('figure');
    figure.className = 'point-generated';
    figure.innerHTML = `<a href="img/recommended/${range.file}" target="_blank" rel="noopener" aria-label="${title} 생성 이미지 크게 보기"><span class="point-generated__image q${quadrant}" style="background-image:url('img/recommended/${range.file}')" role="img" aria-label="${title} 설명용 생성 이미지"></span><i>크게 보기 ↗</i></a><figcaption>${title}<small>해당 점검 항목을 이해하기 위한 룸픽 생성 이미지</small></figcaption>`;
    point.querySelector('.lead')?.insertAdjacentElement('afterend', figure);
  });
  const dialog = document.getElementById('photo-dialog');
  const photo = document.getElementById('large-photo');
  let opener;
  document.querySelectorAll('.photo-button').forEach(button => button.addEventListener('click', () => {
    opener = button;
    photo.className = `detail-photo ${button.dataset.board} q${button.dataset.quadrant}`;
    photo.setAttribute('aria-label', `${button.dataset.caption} · AI 설명 이미지`);
    document.getElementById('photo-caption').textContent = button.dataset.caption;
    dialog.showModal();
  }));
  document.getElementById('close-photo').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => opener?.focus());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  progress();
})();
