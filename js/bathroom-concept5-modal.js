(() => {
  'use strict';
  if (new URLSearchParams(location.search).get('space') !== 'bathroom') return;
  const data = window.roompickBath5, card = document.getElementById('bathroom-23');
  if (!data || !card || document.getElementById('bath5-modal')) return;
  const esc = value => String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const money = value => value.toLocaleString('ko-KR')+'원';
  const zoom = (src,caption,cls='bath3-reference-photo') => `<button type="button" class="${cls}" data-bath5-zoom="${esc(src)}" data-caption="${esc(caption)}"><img src="${esc(src)}" alt="${esc(caption)}" loading="lazy"><span>이미지 확대 ↗</span></button>`;
  const photos = [
    [data.scene,'전체 시안','ROOM PICK · 기존 AI 시안'],
    [data.board,'이미지보드','컨셉5 전용 보드 · 실측 전 계획'],
    ['img/bathroom-products/concept5/blue.jpg','블루 타일','EQUIPE Tribeca Blue Note · 실제 제품 샘플'],
    ['img/bathroom-products/concept5/cotto.jpg','코토 타일','EQUIPE Argile Cotto · 실제 제품 샘플'],
    ['img/younglim-reference/E470.jpg','시에나','영림 2024 카다로그 제품 샘플'],
    ['img/younglim-reference/E650-1.jpg','라보나','영림 2024 카다로그 제품 샘플']
  ];
  const tabs = [['board','이미지보드'],['checks','욕실 체크리스트'],['products','제품·규격'],['estimate','가견적']];
  const costs = [
    ['보양·철거·반출','욕실 1실','보양재·포장재','철거 인원 × 작업일','폐기물·운반 경비 분리'],
    ['설비·방수·바탕','실측 면적/배관 길이','배관·방수재·몰탈','설비·방수 공수','배관 이설·숨은 누수 별도'],
    ['블루 / 코토 타일','면별 면적 + 재단 손실','BOX 단가 × BOX 수','컬러별 붙임·재단·줄눈','수입 공급가·운송 확인'],
    ['시에나 / 라보나','벽/바닥 각각 실측','1.44㎡ / 1.08㎡ BOX 올림','대형 벽타일·경사 절단','바닥 유가 주변 분할'],
    ['세면 하부장·상부장','각 1EA 계획','맞춤 가구·상판·철물','벽 보강·고정·타공','볼 별도 비용과 중복 금지'],
    ['도기·수전·거울','각 1SET','공개 표시가 표 참조','기구별 연결·설치','시트·정심·팝업·트랩 별도'],
    ['고정 모루유리','1면 · 실측 제작','기본 표시가 350,000원','설치 포함 범위 재확인','블랙 프레임·높이 옵션 별도'],
    ['천장·전기·환기','등 5EA / 팬 1EA 계획','등·팬·배선·천장재','배선·천장·덕트 연결','증설·장거리 덕트 별도'],
    ['간접등·배수구','길이 실측 / 유가 1EA','스트립 27,000원부터·유가','방습 접속·배수 연결','SMPS·프로파일·부속 별도'],
    ['마감·시험·청소','1실','실리콘·소모품','누수·배수 시험 및 청소','줄눈 노무와 중복 금지']
  ];
  const subtotal = data.priced.reduce((sum,[,qty,price])=>sum+qty*price,0);
  document.body.insertAdjacentHTML('beforeend',`<dialog id="bath5-modal" class="bath3-modal" aria-labelledby="bath5-title">
    <div class="bath3-bar"><span>ROOM PICK <i>/</i> CONCEPT 5</span><button type="button" class="bath3-close" aria-label="컨셉5 상세 닫기" autofocus>닫기 ×</button></div>
    <div class="bath3-layout"><section class="bath3-visual" aria-label="컨셉5 시안과 참고 사진">
      <div class="bath3-mainphoto"><img id="bath5-photo" src="${data.scene}" alt="테라코타 블루 욕실 전체 AI 시안"></div>
      <div class="bath3-caption" aria-live="polite"><strong id="bath5-photo-title">전체 시안</strong><span id="bath5-credit">${photos[0][2]}</span></div>
      <div class="bath3-thumbs">${photos.map(([src,label],i)=>`<button type="button" data-bath5-photo="${i}" aria-pressed="${i===0}" aria-label="${label} 크게 보기"><img src="${src}" alt="" loading="lazy"><span>${label}</span></button>`).join('')}</div>
    </section><div class="bath3-info">
      <header class="bath3-heading"><p class="bath3-kicker">TERRACOTTA & BLUE</p><h2 id="bath5-title">테라코타 블루</h2><p>차분한 블루와 따뜻한 테라코타, 세로 타일과 모루유리의 리듬.</p><div class="bath3-tags"><span>4가지 타일</span><span>고정 모루유리</span><span>제품 16항목</span><span>실측 전 계획</span></div></header>
      <nav class="bath3-nav" aria-label="컨셉5 상세 정보">${tabs.map(([id,label],i)=>`<button type="button" data-bath5-panel="${id}" aria-controls="bath5-${id}" aria-pressed="${i===0}">${label}</button>`).join('')}</nav>
      <section id="bath5-board" class="bath3-panel"><h3>이미지보드</h3><p>전체 시안 · 평면 · 입면 · 재료 · 제품 · 디테일 · 조명 계획을 한 장에 정리했습니다.</p>
        <figure class="bath3-design-board">${zoom(data.board,'컨셉5 테라코타 블루 전용 이미지보드 · 실측 전 계획')}</figure>
        <p class="bath3-source">AI 생성 보드입니다. 평면의 출입문 위치·치수는 현장 확정도가 아니며 실제 제품 형상과 규격은 ‘제품·규격’ 사진 및 제조사 도면을 기준으로 확인합니다. 보드의 트렌치 표현과 달리 구매 후보 유가는 150각 타일삽입형입니다.</p>
        <dl class="bath3-design-list"><div><dt>배치와 동선</dt><dd>왼쪽 세면대, 오른쪽 양변기, 뒤쪽 샤워 공간을 유지합니다. 모루유리 고정면 옆의 열린 통로와 서랍 개방 공간을 함께 확보합니다.</dd></div><div><dt>재료와 비례</dt><dd>블루·테라코타 60×246 세로 타일, 밝은 시에나 600×1200 벽, 라보나 600×600 바닥을 후보로 정리했습니다. 타일 두께·줄눈·모서리·로트는 샘플 검토 대상입니다.</dd></div><div><dt>가구와 조명</dt><dd>테라코타 하부장과 낮은 화이트 상부장은 맞춤 제작 계획입니다. 원형 매입등, 타원 거울 간접등, 천장과 상부장 하부 간접등을 나누어 구성합니다.</dd></div></dl>
        <button type="button" class="bath3-cta" data-bath5-go="products">제품 사진·규격·구매처 확인하기</button>
      </section>
      <section id="bath5-checks" class="bath3-panel" hidden><h3>욕실 체크리스트</h3><p>사용자 PPT의 관련 발췌 이미지 9장을 직접 확인하고 컨셉5에 맞춰 정리한 18개 항목입니다. 자료의 가격·성능 주장을 그대로 시공 보증으로 사용하지 않습니다.</p><div class="bath3-check-tools"><output id="bath5-progress" aria-live="polite"></output><button type="button" id="bath5-reset">체크 초기화</button></div><p class="bath3-source">체크 상태는 이 브라우저에 저장됩니다. 시공 승인 또는 서버 제출이 아닙니다.</p>
        ${data.checks.map(([title,file,source,note,...items],i)=>`<article class="bath3-check-item"><h4>${String(i+1).padStart(2,'0')} ${esc(title)}</h4>${zoom(`img/bathroom-checklist/concept3/${file}.png`,source,'bath3-check-photo')}<p class="bath3-source">${esc(source)}</p><p>${esc(note)}</p><fieldset><legend class="bath3-sr-only">${esc(title)}</legend>${items.map((t,j)=>`<label><input type="checkbox" data-bath5-check="${i}-${j}"><span>${esc(t)}</span></label>`).join('')}</fieldset></article>`).join('')}
      </section>
      <section id="bath5-products" class="bath3-panel" hidden><h3>제품·규격 · 16항목</h3><p class="bath3-notice">확인일 ${data.checked}. AI 시안을 구현하기 위한 선정 후보입니다. 사진 속 모델을 식별한 목록은 아닙니다. 실물 제품 사진과 맞춤 제작 계획을 구분했으며, 판매 표시가의 재고·옵션·설치비는 발주 전에 확인합니다.</p>
        ${data.products.map(p=>`<article class="bath3-product">${zoom(p.image,p.name+(p.custom?' · AI 시안의 제작 계획, 실물 제품 사진 아님':' · 제품 사진'),'bath3-product-photo')}<div><p class="bath3-kicker">${esc(p.zone)}</p><h4>${esc(p.name)}</h4><p class="bath3-spec">${esc(p.size)}</p><strong class="bath3-price">${esc(p.price)}</strong>${p.custom?'<p class="bath3-source">맞춤 제작 계획 · 업체의 제작 가능 여부 미확정</p>':''}</div><div class="bath3-product-copy"><p>${esc(p.note)}</p><div class="bath3-links">${p.links.map(([label,url])=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`).join('')}</div></div></article>`).join('')}
        <h4>설치 부속·마감재 발주 항목</h4><p>세면 팝업·트랩·급수호스, 양변기 시트·정심·앵글밸브, 유리 고정 철물, LED 전원장치·프로파일, 방수재·접착제·줄눈재·실리콘·천장재는 별도 발주 확인 항목입니다. 배관·바탕 조건 확인 후 호환 모델을 확정합니다.</p>
      </section>
      <section id="bath5-estimate" class="bath3-panel" hidden><h3>가견적</h3><p>전체 철거부터 방수·타일·가구·위생기구·조명·환기·마감까지, 재료비와 노무비를 분리한 발주 검토입니다.</p>
        <div class="bath3-total"><span>공개 표시가를 확인한 제품 8항목 · 계획 수량 적용</span><strong>${money(subtotal)}</strong><span>제품비 부분합계 · 전체 공사비 아님 / 배송·옵션·설치 제외</span></div>
        <div class="bath3-catalog-scroll"><table class="bath3-cost bath5-price-table"><caption>2026.11.10 표시가 기준 / 원 · 판매가의 VAT 표기를 결제 시 확인하며 임의로 10%를 더하지 않습니다.</caption><thead><tr><th scope="col">제품</th><th scope="col">수량</th><th scope="col">단가</th><th scope="col">재료 금액</th></tr></thead><tbody>${data.priced.map(([name,qty,price,note])=>`<tr><th scope="row">${esc(name)}<small>${esc(note)}</small></th><td>${qty}</td><td>${money(price)}</td><td>${money(qty*price)}</td></tr>`).join('')}</tbody><tfoot><tr><th colspan="3">제품비 부분합계</th><td>${money(subtotal)}</td></tr></tfoot></table></div>
        <h4>공종별 재료비·노무비 산정표</h4><div class="bath3-catalog-scroll"><table class="bath3-cost bath5-scope-table"><caption>공급 주체: 업체 공급 가정. 고객 직접 구매 시 재료비를 중복 청구하지 않습니다. 미확인 비용은 0원이 아닙니다.</caption><thead><tr><th scope="col">공종·수량</th><th scope="col">재료비 기준</th><th scope="col">노무비 기준</th><th scope="col">별도 확인</th></tr></thead><tbody>${costs.map(([title,qty,mat,labor,note])=>`<tr><th scope="row">${esc(title)}<small>${esc(qty)}</small></th><td>${esc(mat)}</td><td>${esc(labor)}</td><td>${esc(note)}</td></tr>`).join('')}</tbody></table></div>
        <div class="bath3-notice"><strong>전체 공사 총액: 실측·제작 견적 후 산정</strong><p>수입 타일, 맞춤 가구, 유리 옵션과 노무 견적이 아직 없습니다. 임의의 확정가로 작은 범위를 만들지 않았습니다. 유리 기본 350,000원과 LED 27,000원은 옵션·길이·설치 범위가 달라 위 부분합계에서 제외했습니다.</p></div>
        <details open><summary>물량·견적을 확정하는 기준</summary><p>벽은 색상별 순면적을 나누고 재단 손실을 적용한 뒤 BOX 단위로 올립니다. 시에나 = ceil(발주면적 ÷ 1.44), 라보나 = ceil(발주면적 ÷ 1.08). 블루·코토는 국내 공급 BOX 사양을 확인합니다. 하부장·상부장 각각 1EA, 유리 1면, 등 5EA, 팬·유가 각 1EA는 계획 수량입니다.</p><p>제공 PPT의 타일 노무 예시는 4인일 × 30만원 = 120만원이지만 현장·시점이 다른 참고 산식입니다. 현재 공사 노무비나 확정 합계에 포함하지 않았습니다. PPT별 철거 범위가 다른 금액도 단순 합산하지 않습니다.</p></details>
        <details><summary>포함·별도·세금·계약 조건</summary><p>검토 범위: 보양, 철거, 반출, 배관 점검, 방수, 바탕, 4종 타일, 가구, 위생기구, 유리, 전기·환기, 실리콘, 시험, 청소. 별도: 공용관·구조 변경, 문/문틀, 증설, 장거리 덕트, 숨은 누수, 특수 양중, 관리사무소 비용.</p><p>재료비 + 노무비 + 운반·폐기 경비 + 현장관리비를 구분해 공급가액을 정리하고 VAT 포함 여부를 통일합니다. 예비비·선택 옵션은 기본공사비와 분리합니다. 공사 기간, 납기, 견적 유효기간, 결제 일정, A/S는 현장 견적 후 서면 확정합니다.</p></details>
      </section>
    </div></div></dialog>
    <dialog id="bath5-viewer" class="bath3-reference-viewer" aria-label="컨셉5 참고 이미지 확대"><button type="button" autofocus>닫기 ×</button><img alt=""><p></p></dialog>`);
  const modal=document.getElementById('bath5-modal'), viewer=document.getElementById('bath5-viewer');
  if (window.roompickBath5Estimate) modal.querySelector('#bath5-estimate').innerHTML = window.roompickBath5Estimate.html;
  const trigger=document.createElement('button');
  trigger.type='button';trigger.className='concept-pair';trigger.textContent='시안 · 제품 · 가견적 보기 ↗';
  trigger.setAttribute('aria-haspopup','dialog');trigger.setAttribute('aria-controls',modal.id);
  card.lastElementChild.append(trigger);card.classList.add('bath10-clickable');
  let previousFocus,overflow;
  const showPanel=id=>{
    modal.querySelectorAll('.bath3-panel').forEach(p=>{p.hidden=p.id!==`bath5-${id}`;});
    modal.querySelectorAll('[data-bath5-panel]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.bath5Panel===id)));
    modal.querySelector('.bath3-info').scrollTop=0;
  };
  card.addEventListener('click',()=>{if(modal.open)return;previousFocus=document.activeElement;overflow=document.body.style.overflow;document.body.style.overflow='hidden';showPanel('board');modal.showModal();});
  modal.querySelector('.bath3-close').addEventListener('click',()=>modal.close());
  modal.addEventListener('close',()=>{if(viewer.open)viewer.close();document.body.style.overflow=overflow;(previousFocus instanceof HTMLElement&&previousFocus!==document.body?previousFocus:trigger).focus({preventScroll:true});});
  const backdropClose=dialog=>{
    const outside=e=>{const r=dialog.getBoundingClientRect();return e.target===dialog&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom);};
    let down=false;dialog.addEventListener('pointerdown',e=>{down=outside(e);});dialog.addEventListener('click',e=>{if(down&&outside(e))dialog.close();down=false;});
  };
  backdropClose(modal);backdropClose(viewer);
  viewer.querySelector('button').addEventListener('click',()=>viewer.close());
  modal.querySelectorAll('[data-bath5-zoom]').forEach(b=>b.addEventListener('click',()=>{const img=viewer.querySelector('img');img.src=b.dataset.bath5Zoom;img.alt=b.dataset.caption;viewer.querySelector('p').textContent=b.dataset.caption;viewer.showModal();}));
  modal.querySelectorAll('[data-bath5-panel],[data-bath5-go]').forEach(b=>b.addEventListener('click',()=>showPanel(b.dataset.bath5Panel||b.dataset.bath5Go)));
  modal.querySelectorAll('[data-bath5-photo]').forEach(b=>b.addEventListener('click',()=>{
    const index=Number(b.dataset.bath5Photo),[src,label,note]=photos[index],img=modal.querySelector('#bath5-photo');img.src=src;img.alt=label;
    modal.querySelector('#bath5-photo-title').textContent=label;modal.querySelector('#bath5-credit').textContent=note;
    modal.querySelectorAll('[data-bath5-photo]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.bath5Photo)===index)));
    if(matchMedia('(max-width:800px)').matches)modal.querySelector('.bath3-visual').scrollIntoView({block:'start'});
  }));
  const key='roompick-bath5-checks-v2',boxes=[...modal.querySelectorAll('[data-bath5-check]')];
  let saved={};try{const value=JSON.parse(localStorage.getItem(key)||'{}');if(value&&typeof value==='object')saved=value;}catch{}
  const progress=()=>{modal.querySelector('#bath5-progress').textContent=`${boxes.filter(b=>b.checked).length} / ${boxes.length} 확인`;};
  boxes.forEach(box=>{box.checked=saved[box.dataset.bath5Check]===true;box.addEventListener('change',()=>{saved[box.dataset.bath5Check]=box.checked;try{localStorage.setItem(key,JSON.stringify(saved));}catch{}progress();});});
  modal.querySelector('#bath5-reset').addEventListener('click',()=>{saved={};boxes.forEach(b=>{b.checked=false;});try{localStorage.removeItem(key);}catch{}progress();});progress();
})();
