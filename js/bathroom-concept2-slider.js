(() => {
  'use strict';
  if (new URLSearchParams(location.search).get('space') !== 'bathroom') return;
  // CONCEPT 2 retains review ID 03. Preserve the original alongside the edit.
  const card = document.getElementById('bathroom-03');
  const figure = card?.querySelector('.bathroom-shot');
  if (!figure || figure.classList.contains('bath2-slider')) return;
  const slides = [
    {src:'img/bathroom-concepts/bathroom-03-portrait-v1.png', label:'기존 시안'},
    {src:'img/bathroom-concepts/bathroom-03-portrait-v2.png', label:'젠다이·반다리 세면대 수정안'}
  ];
  figure.classList.add('bath2-slider');
  figure.setAttribute('aria-label','컨셉 2 시안 비교, 0.5초 자동 슬라이드');
  figure.setAttribute('aria-roledescription','슬라이드');
  figure.innerHTML = slides.map((slide,i) => `<img src="${slide.src}" alt="컨셉 2 ${slide.label}" class="bath2-slide${i===1?' is-active':''}" aria-hidden="${i!==1}" width="1024" height="1536" decoding="async">`).join('') +
    '<figcaption class="bath2-controls"><span class="bath2-label"></span><div class="bath2-buttons"><button type="button" data-bath2-select="0">기존</button><button type="button" data-bath2-select="1">수정</button><button type="button" data-bath2-toggle>일시정지</button></div></figcaption>';
  const description = card.querySelector('h2 + p');
  description.textContent = '기존 시안과 수정안을 0.5초 간격으로 비교합니다. 수정안은 유리블록 하단을 젠다이 높이에 맞춰 타일벽으로 바꾸고, 러그를 제거했습니다. 슬림형 반다리 세면대와 천장 휴젠트형 복합 환기장치를 표현했습니다.';
  card.querySelector('.reference-note').textContent = 'AI 디자인 시안 · 휴젠트 참고 외형을 반영한 표현이며 특정 모델의 정확한 재현이나 설치 가능성을 보증하지 않습니다. 유리블록 고정·방수, 천장 깊이·덕트·전원은 현장 확인이 필요합니다. 일시정지 또는 기존/수정 버튼으로 고정해서 볼 수 있습니다.';
  const images = [...figure.querySelectorAll('.bath2-slide')];
  const label = figure.querySelector('.bath2-label');
  const toggle = figure.querySelector('[data-bath2-toggle]');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let index = 1;
  let paused = motion.matches;
  let visible = false;
  let hovered = false;
  let ready = false;
  let timer;
  function show(next) {
    index = next;
    images.forEach((image,i) => {
      image.classList.toggle('is-active',i===index);
      image.setAttribute('aria-hidden',String(i!==index));
    });
    label.textContent = `${index+1} / 2 · ${slides[index].label}`;
    figure.querySelectorAll('[data-bath2-select]').forEach(button => button.setAttribute('aria-pressed',String(Number(button.dataset.bath2Select)===index)));
  }
  function sync() {
    clearInterval(timer);
    toggle.textContent = paused ? '자동재생' : '일시정지';
    toggle.setAttribute('aria-label',paused ? '0.5초 간격 자동재생 시작' : '자동 슬라이드 일시정지');
    if (ready && visible && !paused && !hovered && !document.hidden) timer = setInterval(() => show((index+1)%slides.length),500);
  }
  toggle.addEventListener('click',() => { paused = !paused; sync(); });
  figure.querySelectorAll('[data-bath2-select]').forEach(button => button.addEventListener('click',() => {
    paused = true; show(Number(button.dataset.bath2Select)); sync();
  }));
  // Reading with a pointer or keyboard must not force a rapid image change.
  figure.addEventListener('mouseenter',() => { hovered = true; sync(); });
  figure.addEventListener('mouseleave',() => { hovered = false; sync(); });
  figure.addEventListener('focusin',() => { clearInterval(timer); });
  document.addEventListener('visibilitychange',sync);
  motion.addEventListener('change',event => { if (event.matches) paused = true; sync(); });
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); },{threshold:0.15}).observe(figure);
  show(index); sync();
  Promise.all(images.map(image => image.decode())).then(() => { ready = true; sync(); }).catch(() => {
    paused = true; sync(); label.textContent = '이미지를 불러오지 못했습니다. 새로고침해 주세요.';
  });
})();
