(() => {
  const hero = document.querySelector('.space-hero');
  if (!hero) return;
  const items = [
    ['거실','LIVING ROOM','빛과 우드로 연결하는 일상','img/recommended/nordic-living-kitchen-v2.png','space-concepts.html?space=living'],
    ['욕실','BATHROOM','재료와 기능의 차분한 균형','img/recommended/nordic-bathroom-v2.png','space-concepts.html?space=bathroom'],
    ['주방','KITCHEN','취향과 생활이 만나는 곳','img/recommended/nordic-kitchen-v2.png','space-concepts.html?space=kitchen'],
    ['침실','BEDROOM','하루를 내려놓는 편안한 공간','img/recommended/case02-bedroom.png','space-concepts.html?space=bedroom'],
    ['웜 미니멀','WARM MINIMAL','선과 빛으로 정리한 거실','img/recommended/case02-living.png','space-concepts.html?space=living'],
    ['차분한 욕실','CALM BATH','매일의 편안함을 위한 공간','img/recommended/case02-bathroom.png','space-concepts.html?space=bathroom'],
    ['우드 주방','WOOD KITCHEN','따뜻한 재료와 단정한 수납','img/recommended/case02-kitchen.png','space-concepts.html?space=kitchen'],
    ['현관','ENTRANCE','집의 첫인상을 만드는 공간','img/recommended/nordic-entry-v2.png','space-concepts.html?space=entrance']
  ];
  const holder = hero.querySelector('[data-hero-cards]');
  const cards = items.map(([name,label,description,src,href]) => {
    const card = document.createElement('a');
    card.className = 'space-hero__card'; card.href = href;
    card.innerHTML = `<img src="${src}" alt="${name} AI 디자인 시안" decoding="async"><span class="space-hero__copy"><small>${label}</small><strong>${name}</strong><span>${description}</span><b>공간 살펴보기 ↗</b></span>`;
    holder.append(card); return card;
  });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const pause = hero.querySelector('[data-hero-pause]');
  const counter = hero.querySelector('[data-hero-count]');
  const progress = document.createElement('span');
  progress.className='space-hero__progress';
  const fill=document.createElement('i');progress.append(fill);counter.replaceWith(progress);
  const markers=items.map((item,i)=>{const button=document.createElement('button');button.type='button';button.setAttribute('aria-label',`${i+1}번 ${item[0]} 시안`);button.addEventListener('click',()=>{current=i;paint();schedule();});progress.append(button);return button;});
  let current = 0, paused = reduced.matches, hovered = false, focused = false, visible = true, timer;
  function paint() {
    cards.forEach((card,i) => {
      const slot = (i-current+items.length+3)%items.length-3;
      const previous = Number(card.dataset.slot);
      // Recycle only offstage, without animating a card across the gallery.
      const wrapped = card.dataset.slot !== undefined && Math.abs(previous-slot)>1;
      if(wrapped) card.style.transition='none';
      card.dataset.slot=String(slot);
      card.style.setProperty('--slot',slot);
      const distance=Math.abs(slot);
      const angle=Math.sign(slot)*Math.min(distance,2)*22;
      card.style.setProperty('--angle',`${angle}deg`);
      // Position by projected edges, not equal center spacing: every visible gap is 36px.
      const width=parseFloat(getComputedStyle(hero).getPropertyValue('--card-w'));
      const edge=(level,side)=>{const scale=1-level*.24,rad=level*22*Math.PI/180,x=side*width*scale/2;return x*Math.cos(rad)/(1+x*Math.sin(rad)/650);};
      let center=0,right=width/2+10;
      for(let level=1;level<=distance;level++){center=right+36-edge(level,-1);right=center+edge(level,1);}
      card.style.setProperty('--offset',`${Math.sign(slot)*center}px`);
      card.style.setProperty('--scale',1-Math.min(Math.abs(slot),3)*.24);
      card.style.setProperty('--layer',5-Math.abs(slot));
      card.style.opacity=Math.abs(slot)>2?'0':'1';
      card.style.pointerEvents=Math.abs(slot)>2?'none':'auto';
      card.setAttribute('aria-hidden',String(Math.abs(slot)>2));
      if(wrapped){void card.offsetWidth;card.style.transition='';}
      card.tabIndex = slot === 0 ? 0 : -1;
      if(slot === 0) card.setAttribute('aria-current','true'); else card.removeAttribute('aria-current');
    });
    fill.style.width=`${100/items.length}%`;fill.style.transform=`translateX(${current*100}%)`;
    markers.forEach((button,i)=>button.setAttribute('aria-current',String(i===current)));
  }
  function schedule() {
    clearInterval(timer);
    if (!paused && !hovered && !focused && visible && !document.hidden) timer = setInterval(() => step(1,false),2000);
  }
  function step(delta,reset=true) { current=(current+delta+items.length)%items.length;paint();if(reset)schedule(); }
  function pauseLabel() {pause.textContent=paused?'▶':'Ⅱ';pause.setAttribute('aria-label',paused?'자동 재생 시작':'자동 재생 일시정지');}
  pause.addEventListener('click',()=>{paused=!paused;pauseLabel();schedule();});
  hero.querySelector('[data-hero-prev]').addEventListener('click',()=>step(-1));
  hero.querySelector('[data-hero-next]').addEventListener('click',()=>step(1));
  cards.forEach(card=>{
    card.addEventListener('mouseenter',()=>{hovered=true;schedule();});
    card.addEventListener('mouseleave',()=>{hovered=false;schedule();});
  });
  window.addEventListener('resize',paint);
  hero.addEventListener('focusin',()=>{focused=true;schedule();});
  hero.addEventListener('focusout',e=>{if(!hero.contains(e.relatedTarget)){focused=false;schedule();}});
  hero.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();step(e.key==='ArrowRight'?1:-1);}});
  document.addEventListener('visibilitychange',schedule);
  reduced.addEventListener('change',e=>{paused=e.matches;pauseLabel();schedule();});
  new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;schedule();}).observe(hero);
  paint();pauseLabel();schedule();
  const header=document.querySelector('.residential-page .header');
  const copy=document.querySelector('.hero__copy');
  if(header && copy){
    header.querySelector('.header__inner').append(copy);
    const updateHeader=()=>header.classList.toggle('is-scrolled',window.scrollY>72);
    window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
  }
})();
