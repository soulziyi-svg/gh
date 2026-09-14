(() => {
  'use strict';
  const scopeValues = document.querySelectorAll('.scope b');
  if (scopeValues[1]) scopeValues[1].textContent = '128';
  const editorParagraphs = document.querySelectorAll('.editor-note p');
  if (editorParagraphs[1]) editorParagraphs[1].textContent = editorParagraphs[1].textContent.replace('01~11 항목', '01~28 항목');
  const sourceParagraphs = document.querySelectorAll('.source-note p');
  if (sourceParagraphs[1]) sourceParagraphs[1].textContent = sourceParagraphs[1].textContent.replace('01~11번 디테일 이미지 44컷', '01~28번 디테일 이미지 112컷');
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
  const enhancedDetails = {
    12: { diagram: 'lighting-sightline-explained.svg', diagramAlt: '현관에서 거실까지 조명 시야와 높이 확인 도식', diagramCaption: '진입 시야와 앉은 눈높이에서 조명 높이 확인', image: 'generated-12-sightline-lighting.png', captions: ['현관에서 본 시야', '앉은 눈높이', '펜던트 하부 높이', '시야를 비운 대안'] },
    13: { diagram: 'undercabinet-light-explained.svg', diagramAlt: '상부장 하부 조명의 숨김 위치와 조사 범위 도식', diagramCaption: '광원은 숨기고 작업면에는 빛이 닿게', image: 'generated-13-undercabinet-light.png', captions: ['상부장 하부 광원', '뒤쪽 설치의 그림자', '앞쪽 광원 노출', '확산광 작업면'] },
    14: { diagram: 'linear-t5-explained.svg', diagramAlt: '라인 조명과 T5 구성 요소 비교 도식', diagramCaption: '광원·확산판·이음부·전원장치를 함께 비교', image: 'generated-14-linear-t5-lighting.png', captions: ['연속 라인 조명', '점광원·어두운 이음', 'T5 연결부', '교체 가능한 전원부'] },
    15: { diagram: 'backsplash-grid-explained.svg', diagramAlt: '상부장 상판 콘센트와 타일 줄눈 정렬 도식', diagramCaption: '장 끝·상판·콘센트를 포함한 줄눈 기준선', image: 'generated-15-backsplash-grout.png', captions: ['주방 벽 전체 기준', '장 끝과 줄눈 정렬', '모서리 좁은 재단', '콘센트 중심 조정'] },
    16: { diagram: 'task-shadow-explained.svg', diagramAlt: '사람의 위치에 따른 주방 작업면 그림자 도식', diagramCaption: '천장등보다 몸 앞쪽의 작업면 조명이 중요', image: 'generated-16-task-shadow.png', captions: ['천장등만 있는 작업대', '몸이 만든 손 그림자', '싱크볼 작업등', '도마 위 균일한 빛'] },
    17: { diagram: 'balcony-boundary-explained.svg', diagramAlt: '발코니 확장부 창 벽 바닥 경계 점검 도식', diagramCaption: '큰 면보다 창 주변·벽 끝·바닥 경계를 확인', image: 'generated-17-balcony-boundary.png', captions: ['확장부 전체 경계', '창 주변 코너', '바닥 재료 접합', '단열 연결 마감'] },
    18: { diagram: 'plumbing-access-explained.svg', diagramAlt: '싱크 하부 배관 밸브 트랩 점검 공간 도식', diagramCaption: '가려도 밸브와 트랩에 손이 닿는 구조', image: 'generated-18-plumbing-access.png', captions: ['닫힌 싱크 하부', '탈착식 가림판', '밸브 접근 공간', '트랩 청소 공간'] },
    19: { diagram: 'undersink-power-explained.svg', diagramAlt: '싱크 하부 배관과 전기 콘센트 분리 도식', diagramCaption: '물길과 전원을 분리하고 플러그 접근 확보', image: 'generated-19-undersink-power.png', captions: ['기기별 전원 계획', '물과 가까운 위험 위치', '배관과 분리한 콘센트', '플러그 점검 접근'] },
    20: { diagram: 'turning-door-explained.svg', diagramAlt: '터닝도어 열림 반경과 주변 기기 간섭 도식', diagramCaption: '문짝 회전·손잡이·문틀 단열을 함께 확인', image: 'generated-20-turning-door.png', captions: ['닫힌 터닝도어', '세탁기와 열림 간섭', '손잡이 회전 여유', '문틀 단열 접합'] },
    21: { diagram: 'cabinet-ceiling-explained.svg', diagramAlt: '천장 오차를 흡수하는 가구 상부 필러 도식', diagramCaption: '천장 휨은 얇은 필러와 보정 범위로 흡수', image: 'generated-21-cabinet-ceiling.png', captions: ['천장 휨과 장 상부', '좁은 틈 발생', '필러로 오차 흡수', '정돈된 상부 마감'] },
    22: { diagram: 'curtain-box-explained.svg', diagramAlt: '커튼박스 레일 원단 전원 여유 도식', diagramCaption: '레일 수·원단 두께·모이는 폭부터 역산', image: 'generated-22-curtain-box.png', captions: ['속커튼·암막 2중 레일', '깊이 부족 간섭', '커튼을 모은 폭', '전동레일 전원·보강'] },
    23: { diagram: 'wood-channel-explained.svg', diagramAlt: '목찬넬 손잡이 홈과 손가락 여유 비교 도식', diagramCaption: '얇은 선보다 손가락이 편하게 들어가는 단면', image: 'generated-23-wood-channel.png', captions: ['실제 잡는 위치', '홈 깊이와 모서리', '얕은 홈의 불편', '연속된 손잡이 선'] },
    24: { diagram: 'usable-storage-explained.svg', diagramAlt: '가구 외경과 내부 유효 치수 비교 도식', diagramCaption: '경첩·뒤판·레일을 뺀 실제 수납 치수 확인', image: 'generated-24-usable-storage.png', captions: ['팬트리 전체 외경', '하드웨어 차지 공간', '큰 물건의 간섭', '유효 치수에 맞춘 수납'] },
    25: { diagram: 'hinge-drawer-explained.svg', diagramAlt: '경첩 열림각과 내부 서랍 간섭 도식', diagramCaption: '문이 충분히 열려야 내부 서랍도 인출 가능', image: 'generated-25-hinge-drawer.png', captions: ['벽 옆 도어 열림', '내부 서랍 간섭', '필러로 확보한 여유', '서랍 완전 인출'] },
    26: { diagram: 'lift-reach-explained.svg', diagramAlt: '상부 리프트 도어 높이와 손 닿는 범위 도식', diagramCaption: '최대 열림보다 다시 닫을 수 있는 높이 확인', image: 'generated-26-lift-reach.png', captions: ['상부 도어 최대 열림', '손이 닿지 않는 높이', '천장과 도어 간섭', '접근 가능한 정지각'] },
    27: { diagram: 'hinge-lift-explained.svg', diagramAlt: '경첩과 리프트 장치 역할 및 균형 도식', diagramCaption: '경첩·지지 장치의 호환성과 좌우 균형 확인', image: 'generated-27-hinge-lift.png', captions: ['경첩과 지지 장치', '연결부 근접 확인', '좌우 불균형 상태', '안정적인 중간 정지'] },
    28: { diagram: 'pullout-storage-explained.svg', diagramAlt: '인출식 수납의 내부 폭과 통로 점유 도식', diagramCaption: '꺼내기 쉬운 만큼 레일 폭과 통로 공간 확인', image: 'generated-28-pullout-storage.png', captions: ['깊은 고정 선반', '인출 바구니 내부 폭', '통로 점유 범위', '냄비 완전 인출'] }
  };
  Object.entries(enhancedDetails).forEach(([number, item]) => {
    const point = document.getElementById(`point-${number}`);
    if (!point) return;
    const crops = [['0%', '0%'], ['-100%', '0%'], ['0%', '-100%'], ['-100%', '-100%']];
    const gallery = item.captions.map((caption, index) => `<figure class="actual-reference"><a href="img/recommended/${item.image}" target="_blank" rel="noopener" aria-label="${caption} 생성 이미지 모음 확대"><div class="generated-crop" style="--crop-x:${crops[index][0]};--crop-y:${crops[index][1]}"><img src="img/recommended/${item.image}" alt="${caption} · 설명용 생성 이미지" loading="lazy" width="1536" height="1024"></div><span>0${index + 1} · 확대 ↗</span></a><figcaption><b>${caption}</b><small>설명용 생성 이미지</small></figcaption></figure>`).join('');
    const evidence = document.createElement('div');
    evidence.className = 'detail-evidence';
    evidence.innerHTML = `<figure class="explain-figure"><a href="img/recommended/${item.diagram}" target="_blank" rel="noopener" aria-label="${item.diagramAlt} 큰 이미지 보기"><img src="img/recommended/${item.diagram}" alt="${item.diagramAlt}" loading="lazy" width="1000" height="680"><span>큰 이미지로 보기 ↗</span></a><figcaption>${item.diagramCaption}<small>룸픽 제작 설명도 · 비축척 개념도이며 시공도면이 아닙니다.</small></figcaption></figure><div class="actual-gallery generated-gallery" aria-label="${number}번 설명용 생성 이미지 4컷"><div class="actual-grid">${gallery}</div><p class="actual-gallery-note">설명의 핵심을 보여주기 위해 만든 생성 이미지입니다. 실제 시공사례·특정 제품 사진이 아니며, 치수·하드웨어·접합 구조는 현장 도면과 제품 시방으로 확인하세요.</p></div>`;
    point.querySelector('.lead')?.insertAdjacentElement('afterend', evidence);
  });
  const initialTarget = location.hash && document.querySelector(location.hash);
  if (initialTarget && /^point-(1[2-9]|2[0-8])$/.test(initialTarget.id)) {
    requestAnimationFrame(() => initialTarget.scrollIntoView());
    window.addEventListener('load', () => setTimeout(() => initialTarget.scrollIntoView(), 80), { once: true });
  }
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
    if (number < 29) return;
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
