(() => {
  if (new URLSearchParams(location.search).get('space') !== 'bathroom') return;
  const card = document.getElementById('bathroom-14'), data = window.roompickBath3;
  if (!card || !data || document.getElementById('bath3-modal')) return;
  const {products, checks, costs, image: conceptImage} = data;
  const range = a => a.map(n=>n.toLocaleString('ko-KR',{maximumFractionDigits:1})).join('–');
  const direct = [1,2].map(i=>costs.reduce((s,r)=>s+r[i],0));
  const supply = direct.map((n,i)=>n+[35,50][i]);
  const vat = supply.map(n=>Math.round(n*10)/100);
  const total = supply.map((n,i)=>n+vat[i]), reserve=total.map(n=>Math.round(n*10)/100);
  const photos=[{src:conceptImage,name:'전체 시안',credit:'ROOM PICK · 제품 사진 참고 AI 시안 / 실물·시공 사진 아님'},...products.map(p=>({src:p.image,name:p.name,credit:p.credit}))];
  const links=items=>items.map(([t,u])=>`<a href="${u}" target="_blank" rel="noopener noreferrer">${t} ↗</a>`).join('');
  document.body.insertAdjacentHTML('beforeend',`
    <dialog id="bath3-modal" class="bath3-modal" aria-labelledby="bath3-title">
      <div class="bath3-bar"><span>ROOM PICK <i>/</i> CONCEPT 3</span><button type="button" class="bath3-close" aria-label="컨셉 3 상세 닫기" autofocus>닫기 ×</button></div>
      <div class="bath3-layout">
        <section class="bath3-visual" aria-label="시안과 실제 제품 사진">
          <div class="bath3-mainphoto"><img src="${conceptImage}" alt="유리블록·젠다이 욕실 AI 시안" id="bath3-photo"></div>
          <div class="bath3-caption" aria-live="polite"><strong id="bath3-photo-name">전체 시안</strong><span id="bath3-credit">${photos[0].credit}</span></div>
          <div class="bath3-thumbs">${photos.map((p,i)=>`<button type="button" data-bath3-photo="${i}" aria-label="${p.name} 크게 보기" aria-pressed="${i===0}"><img src="${p.src}" alt="" loading="lazy"><span>${i===0?'전체 시안':products[i-1].zone}</span></button>`).join('')}</div>
        </section>
        <div class="bath3-info">
          <figure class="bath3-design-board"><a href="img/bathroom-concepts/bathroom-14-design-board.png" target="_blank" rel="noopener" aria-label="컨셉3 디자인 보드 원본 확대"><img src="img/bathroom-concepts/bathroom-14-design-board.png" alt="컨셉3 시에나 유리블록 욕실 디자인 보드: 전체 시안, 개념 평면과 입면, 마감재, 제품 계획, 조명과 시공 체크"></a><figcaption>컨셉3 디자인 보드 · 클릭하면 원본 확대<br>AI 설명용 이미지·개념도이며 시공도면이 아닙니다. 제품 규격은 아래 표를 기준으로 확인하세요.</figcaption></figure>
          <div class="bath3-heading"><p class="bath3-kicker">SIENA & GLASS BLOCK</p><h2 id="bath3-title">시에나 유리블록</h2><p>선반 없이 정돈한 벽면과 젠다이, 빛이 통하는 샤워 파티션.</p><div class="bath3-tags"><span>시에나 600×1200 세로</span><span>라보나 600각</span><span>실제 제품 10항목</span></div></div>
          <nav class="bath3-nav" aria-label="상세 정보 선택">${[['design','욕실 체크리스트'],['products','제품·규격'],['estimate','수정 가견적']].map(([id,t],i)=>`<button type="button" data-bath3-panel="${id}" aria-controls="bath3-${id}" aria-pressed="${i===0}">${t}</button>`).join('')}</nav>
          <section id="bath3-design" class="bath3-panel"><h3>욕실 체크리스트</h3>
            <p>사용자 제공 PPT 원본에서 관련 내용을 확인하고 이번 유리블록·젠다이 시안에 맞춰 정리했습니다. 이미지는 PPT 발췌이며 실물 시공도면이 아닙니다. 원문의 예시·단정은 아래 검토 메모와 함께 확인하세요.</p>
            <div class="bath3-check-tools"><output id="bath3-check-count" aria-live="polite">0 / ${checks.length*2} 확인</output><button type="button" id="bath3-check-reset">체크 초기화</button></div>
            <p class="bath3-source">이 브라우저에 체크 상태를 저장합니다. 체크는 사용자 검토 표시이며 현장검사·시공 승인이나 서버 전송이 아닙니다.</p>
            ${checks.map((c,i)=>`<article class="bath3-check-item"><h4>${String(i+1).padStart(2,'0')} · ${c.title}</h4><button type="button" class="bath3-check-photo" data-check-photo="${c.image}" data-check-title="${c.source}" aria-label="${c.title} PPT 이미지 확대"><img src="img/bathroom-checklist/concept3/${c.image}" alt="${c.source} 발췌 자료" loading="lazy"><span>자료 크게 보기 ＋</span></button><p class="bath3-source">출처: ${c.source}</p><p>${c.note}</p><fieldset><legend class="bath3-sr-only">${c.title} 확인 항목</legend>${c.items.map((item,j)=>`<label><input type="checkbox" data-check-id="${c.id}-${j}"><span>${item}</span></label>`).join('')}</fieldset></article>`).join('')}
            <details><summary>이번 원본 검토 범위와 제외한 주장</summary><p>욕실 폴더 PPT 8개(147장)의 파일 동일성을 확인하고 관련 13장 이미지를 직접 열었습니다. 147장 전체를 이번에 다시 정독한 것은 아닙니다. 견적 가이드 5·15장, 600건 팁 3·4·6·8장, 셀프 비용 가이드 2장, 셀프 견적 내는 법 12장, 셀프 계산하는 법 27장, 화장실 셀프 계산 24장, 후회 없는 가이드 3·4장, 타일 트렌드 15장을 검토했습니다.</p><p>‘1200 타일은 휘지 않아 바닥에 부적합’, ‘파티션이 물을 완벽히 차단’, 특정 재질·줄눈의 무조건적인 우열, 타일 R값·가격·수명 단정은 시공 기준으로 채택하지 않았습니다. 현장 배수·시험 자료·제품 시방이 우선입니다.</p></details>
          </section>
          <section id="bath3-products" class="bath3-panel" hidden><h3>최종 배치 · 제품 규격</h3><p class="bath3-muted">배치 갱신 2026.09.30 · 제품·가격 확인 기준 2026.09.29 · 가격을 오늘 재조회한 것은 아닙니다.</p>
            <p>왼쪽 변기 → 중앙 세면장·세면볼·정면 수전·거울 → 오른쪽 유리블록·샤워 순서입니다. 제품 자체 규격과 현장 설치치수는 다르며, AI 이미지에서 치수를 측정하지 않았습니다.</p>
            <div style="overflow-x:auto"><table class="bath3-cost"><caption>제품 규격·수량·설치 확인표 · mm / 수량은 실측 전 가정</caption><thead><tr><th>위치 / 제품</th><th>규격 / 수량</th></tr></thead><tbody>${data.layoutSpecs.map(([where,name,size,qty,check])=>`<tr><th scope="row">${where}<small>${name}</small></th><td>${size}<br>${qty}<small style="display:block;white-space:normal">${check}</small></td></tr>`).join('')}</tbody></table></div>
            <div class="bath3-notice">전체 이미지는 제품 사진을 참고한 AI 시안입니다. 실제 제품 사진은 아래에서 별도로 보여드립니다. 외형·비례·타일 무늬가 실물과 완전히 일치한다는 뜻은 아닙니다.</div>
            ${products.map((p,i)=>`<section class="bath3-product"><button class="bath3-product-photo" type="button" data-bath3-photo="${i+1}" aria-label="${p.name} 사진 확대"><img src="${p.image}" alt="${p.name} 참고 제품 사진" loading="lazy"><span>사진 크게 보기 ＋</span></button><div><p class="bath3-kicker">${String(i+1).padStart(2,'0')} · ${p.zone}</p><h4>${p.name}</h4><p class="bath3-spec">${p.size}</p><strong class="bath3-price">${p.price}</strong></div><div class="bath3-product-copy"><p>${p.note}</p><details><summary>발주 전 확인·시안과의 차이</summary><p>${p.check}</p></details><div class="bath3-links">${links(p.links)}</div><small>${p.credit}</small></div></section>`).join('')}
            <div class="bath3-notice"><strong>발주 보류 항목</strong><p>타일 최신 공급·젖은 바닥 적합성, S-1320/DL-722/코인1275 상판 호환, 유리블록 구조 상세와 견적을 확인해야 합니다. 유가·원형 매입등·팝업·트랩·줄눈은 아직 모델 미확정이며 임의 제품명으로 채우지 않았습니다. 기본 부속 예산은 가견적에 포함했습니다.</p></div>
          </section>
          <section id="bath3-estimate" class="bath3-panel" hidden><p class="bath3-kicker">PRELIMINARY BUDGET · RP-B03-20260930-R2</p><h3>위치 교체안 공사 가견적</h3><div class="bath3-total"><span>산정 가능한 기본공사 · VAT 포함 · 이설 추가비·예비비 별도</span><strong>${range(total)}<small>만원 + 이설비 미정</small></strong></div>
            <p>욕실 2.0×2.2m = 4.4㎡, 높이 2.3m, 벽 약 17㎡ 가정. 사진에서 측정한 값이 아닙니다. 전체 철거·재방수·젠다이·유리블록·중앙 휴젠뜨 설치를 계획했습니다.</p>
            <div class="bath3-notice"><strong>변경공사 별도: 변기·세면대 위치 교체</strong><p>변기 오수관 및 세면 급배수 이설 1식은 금액 미정입니다. 기본 급배수 조정 60–90만원을 제외한 순수 추가분만 현장 견적으로 더합니다. 배수 구배·관경·바닥 구조·공용관 연결과 거울 전원 이동을 확인해야 하며, 추가 철거·방수 복구는 기존 공종과 중복 계상하지 않습니다. 총공사비는 아래 기본공사 금액만으로 확정할 수 없습니다.</p></div>
            <div class="bath3-notice"><strong>가격이 확인된 상품과 공사 예산은 다릅니다</strong><p>아래 금액은 업체 견적이 아닌 재료+노무의 공종별 계획 배정액입니다. 타일·하부장·유리블록은 확정 단가가 없어 범위로 반영했습니다. 확인한 표시 상품가를 아래 합계에 다시 더하지 않습니다. 선반·판유리 부스·테라조는 제외했습니다.</p></div>
            <table class="bath3-cost"><caption>단위 만원 · 공종별 1식 · 재료+노무 합산 계획 / VAT 별도</caption><thead><tr><th>공종 / 수량 가정</th><th>예상 범위</th></tr></thead><tbody>${costs.map(([name,lo,hi,basis])=>`<tr><th scope="row">${name}<small>${basis}</small></th><td>${lo}–${hi}</td></tr>`).join('')}</tbody><tfoot><tr><th>직접공사비</th><td>${range(direct)}</td></tr><tr><th>현장관리·일반경비</th><td>35–50</td></tr><tr><th>공급가액</th><td>${range(supply)}</td></tr><tr><th>VAT 10%</th><td>${range(vat)}</td></tr><tr><th>총 계획 예산</th><td>${range(total)}</td></tr></tfoot></table>
            <p><strong>예비비 10% 별도: ${range(reserve)}만원</strong><br>예비비까지 확보할 예산: ${range(total.map((n,i)=>n+reserve[i]))}만원.</p>
            <details open><summary>수량 산식·중복 방지</summary><p>시에나 (17+1)㎡×1.15÷1.44 = 15BOX 올림. 라보나 4.4㎡×1.10÷1.08 = 5BOX 올림. 유리블록 4열×11단+여분3 = 47개 가정. 세면장·볼·세면수전·변기·거울·샤워·환기 각1, 원형등3. 확정 발주량이 아닙니다.</p><p>샤워 수전은 도기/세면장 공종에서 빼서 별도 1회 계상했습니다. 유리블록에는 블록·보강·시공을 포함하고 유가는 별도 행으로 나눴습니다. 하부장 패키지에 볼이 포함되면 별도 볼 비용을 차감합니다. 고객 지급 자재도 중복 차감합니다.</p></details>
            <details><summary>제외·일정·확정 절차</summary><p>별도: 문·문틀, 공용배관·구조 변경, 전기 증설, 장거리 덕트, 특수 양중, 관리사무소 비용, 철거 후 숨은 누수/바탕 손상. 소품·러그·우드 선반은 제외. 약 7–10작업일+제작 납기 가정이며 실제 양생은 제품 시방에 따릅니다.</p><p>실측·공급 견적 전이므로 유효기간 및 금액 보장 없음. 결제 조건·A/S·납기·노무와 재료 단가 분리는 현장 견적서에서 확정합니다. 수정 근거는 변경 범위, 실제 상품 표시가와 사용자 제공 PPT의 공종 분류이며 시장 평균 공사비 조사로 표시하지 않습니다.</p></details>
          </section>
        </div>
      </div>
    </dialog>`);
  const modal=document.getElementById('bath3-modal'), button=document.createElement('button');
  button.type='button';button.className='concept-pair';button.textContent='시안 · 제품 · 가견적 보기 ↗';button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-controls',modal.id);
  card.lastElementChild.append(button);card.classList.add('bath10-clickable');
  let overflow='',lastFocus=null;
  const showPanel=id=>{modal.querySelectorAll('.bath3-panel').forEach(p=>{p.hidden=p.id!==`bath3-${id}`;});modal.querySelectorAll('[data-bath3-panel]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.bath3Panel===id)));modal.querySelector('.bath3-info').scrollTop=0;};
  card.addEventListener('click',()=>{if(modal.open)return;lastFocus=document.activeElement;overflow=document.body.style.overflow;document.body.style.overflow='hidden';modal.showModal();showPanel('design');});
  modal.querySelector('.bath3-close').addEventListener('click',()=>modal.close());
  modal.addEventListener('close',()=>{document.body.style.overflow=overflow;(lastFocus instanceof HTMLElement&&lastFocus!==document.body?lastFocus:button).focus({preventScroll:true});});
  let outsideDown=false;
  const outside=e=>{const r=modal.getBoundingClientRect();return e.target===modal&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom);};
  modal.addEventListener('pointerdown',e=>{outsideDown=outside(e);});modal.addEventListener('click',e=>{if(outsideDown&&outside(e))modal.close();outsideDown=false;});
  modal.querySelectorAll('[data-bath3-panel]').forEach(b=>b.addEventListener('click',()=>showPanel(b.dataset.bath3Panel)));
  modal.querySelectorAll('[data-bath3-photo]').forEach(b=>b.addEventListener('click',()=>{const i=Number(b.dataset.bath3Photo),p=photos[i],img=modal.querySelector('#bath3-photo');img.src=p.src;img.alt=p.name+' · '+p.credit;modal.querySelector('#bath3-photo-name').textContent=p.name;modal.querySelector('#bath3-credit').textContent=p.credit;modal.querySelectorAll('.bath3-thumbs button').forEach(t=>t.setAttribute('aria-pressed',String(Number(t.dataset.bath3Photo)===i)));if(matchMedia('(max-width:800px)').matches)modal.querySelector('.bath3-visual').scrollIntoView({block:'start'});}));
  const key='roompick-bath3-checks-20260929',boxes=[...modal.querySelectorAll('[data-check-id]')];
  let saved={};try{saved=JSON.parse(localStorage.getItem(key)||'{}')||{};}catch{}
  const progress=()=>{modal.querySelector('#bath3-check-count').textContent=`${boxes.filter(b=>b.checked).length} / ${boxes.length} 확인`;};
  boxes.forEach(b=>{b.checked=saved[b.dataset.checkId]===true;b.addEventListener('change',()=>{saved[b.dataset.checkId]=b.checked;try{localStorage.setItem(key,JSON.stringify(saved));}catch{}progress();});});progress();
  modal.querySelector('#bath3-check-reset').addEventListener('click',()=>{saved={};boxes.forEach(b=>{b.checked=false;});try{localStorage.removeItem(key);}catch{}progress();});
  const viewer=document.createElement('dialog');viewer.className='bath3-reference-viewer';viewer.setAttribute('aria-label','욕실 체크리스트 PPT 확대');viewer.innerHTML='<button type="button" autofocus>닫기 ×</button><img alt=""><p></p>';document.body.append(viewer);
  viewer.querySelector('button').addEventListener('click',()=>viewer.close());viewer.addEventListener('click',e=>{if(e.target===viewer)viewer.close();});
  modal.querySelectorAll('[data-check-photo]').forEach(b=>b.addEventListener('click',()=>{viewer.querySelector('img').src=`img/bathroom-checklist/concept3/${b.dataset.checkPhoto}`;viewer.querySelector('img').alt=b.dataset.checkTitle;viewer.querySelector('p').textContent=`사용자 제공 PPT · ${b.dataset.checkTitle} · 원문 예시는 확정 시공 기준이 아닙니다.`;viewer.showModal();}));
})();
