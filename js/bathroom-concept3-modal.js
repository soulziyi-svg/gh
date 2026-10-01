(() => {
  if (new URLSearchParams(location.search).get('space') !== 'bathroom') return;
  const card = document.getElementById('bathroom-14'), data = window.roompickBath3;
  if (!card || !data || document.getElementById('bath3-modal')) return;
  const {products, checks, image: conceptImage} = data;
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
          <div class="bath3-heading"><p class="bath3-kicker">SIENA & GLASS BLOCK</p><h2 id="bath3-title">시에나 유리블록</h2><p>선반 없이 정돈한 벽면과 젠다이, 빛이 통하는 샤워 파티션.</p><div class="bath3-tags"><span>시에나 600×1200 세로</span><span>라보나 600각</span><span>실제 제품 10항목</span></div></div>
          <nav class="bath3-nav" aria-label="상세 정보 선택">${[['board','이미지보드'],['design','욕실 체크리스트'],['products','제품·규격'],['estimate','가견적']].map(([id,t],i)=>`<button type="button" data-bath3-panel="${id}" aria-controls="bath3-${id}" aria-pressed="${i===0}">${t}</button>`).join('')}</nav>
          <section id="bath3-board" class="bath3-panel"><h3>이미지보드</h3>
            <figure class="bath3-design-board"><a href="img/bathroom-concepts/bathroom-14-design-board-v5.png" target="_blank" rel="noopener" aria-label="컨셉3 이미지보드 원본 확대"><img src="img/bathroom-concepts/bathroom-14-design-board-v5.png" alt="컨셉3 이미지보드: 평면도와 정면 입면, 낮은 타일 젠다이, 일자 유가와 원형 매입등 디테일. AI 개념 이미지이며 유가·등기구 모델은 미정입니다."></a></figure>
          </section>
          <section id="bath3-design" class="bath3-panel" hidden><h3>욕실 체크리스트</h3>
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
          <section id="bath3-estimate" class="bath3-panel" hidden>
            <p class="bath3-kicker">PRELIMINARY BUDGET · 2026.10.01</p><h3>가견적</h3>
            <div class="bath3-notice"><strong>재료비·노무비 분리 검토본 · 총액 산정 보류</strong><p>기존 180–260만원 타일 공종은 공급단가와 시공 노무 근거 없이 묶인 예산 범위였습니다. 이를 임의로 좁힌 숫자로 바꾸지 않고 아래처럼 분리했습니다. 이번 검토로 실제 가격 편차가 좁혀진 것은 아니며, 미확인 칸은 0원이 아닙니다.</p></div>
            <p>욕실 2.0×2.2m(4.4㎡), 높이 2.3m, 벽17㎡는 기존 가정이며 실측값이 아닙니다. 이미지보드 기준 왼쪽 세면대·중앙 변기·오른쪽 샤워 배치를 검토합니다. 전체 철거·재방수·타일·젠다이·유리블록·기구 설치를 대상으로 합니다.</p>
            <div class="bath3-catalog-scroll"><table class="bath3-cost"><caption>단위 원 · 재료 구매비와 노무비 분리 · 업체 공급 가정 / 미확인 항목 합산 제외</caption><thead><tr><th>공종·수량</th><th>재료비 / 산식</th><th>노무비</th><th>포함 범위·근거</th></tr></thead><tbody><tr><th scope="row">보양·철거<small>욕실 1실</small></th><td>보양 소모품 견적 필요</td><td>철거 인원·작업일 견적 필요</td><td>폐기물 반출·차량비는 경비 별도</td></tr>
<tr><th scope="row">급배수<small>기본 연결 1식</small></th><td>관·부속 견적 필요</td><td>기본 연결 견적 필요</td><td>위치 이설은 추가공사로 분리</td></tr>
<tr><th scope="row">방수·바탕·물매<small>현장 면적 산출</small></th><td>방수재·몰탈 견적 필요</td><td>바탕/방수 시공 견적 필요</td><td>타일 접착·줄눈과 중복 제외</td></tr>
<tr><th scope="row">벽 타일 시에나 E470<small>15BOX 가정</small></th><td>BOX 공급단가 × 15</td><td>타일 시공 행에 합산</td><td>(벽17+젠다이1)㎡ ×1.15÷1.44, 올림</td></tr>
<tr><th scope="row">바닥 라보나 E650-1<small>5BOX 가정</small></th><td>BOX 공급단가 × 5</td><td>타일 시공 행에 합산</td><td>4.4㎡×1.10÷1.08, 올림</td></tr>
<tr><th scope="row">젠다이 바탕·타일 부자재<small>길이·깊이 실측</small></th><td>조적·접착제·줄눈 견적 필요</td><td>조적 노무 견적 필요</td><td>마감 타일은 위 15BOX에 포함</td></tr>
<tr><th scope="row">타일 재단·붙임·줄눈<small>벽17㎡+바닥4.4㎡ 가정</small></th><td>위 재료 행에 포함</td><td>㎡단가 또는 인원×일수 견적 필요</td><td>대형 벽 타일 재단·모서리 포함 조건</td></tr>
<tr><th scope="row">S-1320 하부장<small>1EA · 벽걸이 옵션</small></th><td>제조사 견적 필요</td><td>가구 고정·타공 견적 필요</td><td>볼·수전 포함 여부 확인 후 중복 차감</td></tr>
<tr><th scope="row">DL-722 세면볼<small>1EA</small></th><td>110,000원 · 표시가 재확인</td><td>도기 설치 견적 필요</td><td>팝업·트랩 포함 여부 확인</td></tr>
<tr><th scope="row">코인1275 N 세면수전<small>1EA</small></th><td>판매 견적 필요</td><td>수전 설치 견적 필요</td><td>제품 변경 없이 같은 모델로 조회</td></tr>
<tr><th scope="row">CC-738 양변기<small>1EA</small></th><td>279,000원 · 9/29 기록, 재확인 필요</td><td>도기 설치 견적 필요</td><td>10/1 판매처 조회 실패, 현행 확정가 아님</td></tr>
<tr><th scope="row">원형 LED 거울<small>Ø700 1EA</small></th><td>옵션 견적 필요</td><td>고정 노무 견적 필요</td><td>95,000원 시작가를 Ø700 가격으로 사용 안 함</td></tr>
<tr><th scope="row">TF-B5210.BN 샤워<small>1SET</small></th><td>823,000원 · 9/29 기록, 재확인 필요</td><td>샤워 설치 견적 필요</td><td>10/1 판매처 조회 실패, 현행 확정가 아님</td></tr>
<tr><th scope="row">유리블록·보강<small>출입구 전까지 · 수량 실측</small></th><td>블록 단가×수량+보강재</td><td>조적·끝단 마감 견적 필요</td><td>기존 47개는 가정이며 현 배치 확정 수량 아님</td></tr>
<tr><th scope="row">일자 유가<small>1EA 가정 · 길이 미정</small></th><td>모델 선정 후 견적</td><td>배수 연결 노무 견적 필요</td><td>방수 접합 노무와 중복 확인</td></tr>
<tr><th scope="row">천장·매입등<small>천장4.4㎡·등3EA 가정</small></th><td>천장재·등기구·배선 견적</td><td>천장·전기 노무 견적</td><td>등기구 모델 미정</td></tr>
<tr><th scope="row">휴젠뜨2 FHD-P150S1<small>1EA</small></th><td>396,000원 · 표시가 재확인</td><td>설치 옵션 견적 필요</td><td>배송2,500원 별도, 덕트·전원 현장 확인</td></tr>
<tr><th scope="row">마감·검수·청소<small>욕실 1실</small></th><td>소모품 견적 필요</td><td>작동 점검·청소 견적</td><td>실리콘을 타일 부자재와 중복 계상 금지</td></tr></tbody></table></div>
            <h4>10월 1일 다시 확인한 제품 표시가</h4>
            <p><a href="https://mall.dobidos.com/goods/goods_view.php?goodsNo=1000002331" target="_blank" rel="noopener noreferrer">도비도스몰 세면볼 110,000원</a> + <a href="https://www.enex.co.kr/goods/goods_view.php?goodsNo=1000001578" target="_blank" rel="noopener noreferrer">에넥스몰 휴젠뜨2 396,000원</a> = <strong>두 제품 표시가 소계 506,000원</strong>. 휴젠뜨 배송 2,500원을 더하면 508,500원입니다. 전체 공사비나 전체 재료비가 아니며 설치비는 포함하지 않았습니다. 옵션·배송 지역·세금 조건은 발주 시 확인합니다.</p>
            <p><a href="https://www.hiddenbath.co.kr/productDetail/1788" target="_blank" rel="noopener noreferrer">히든바스 공식 S-1320</a>은 규격·벽걸이 옵션을 확인했으나 공개 판매단가는 확인하지 못했습니다. 시에나·라보나의 해당 품번 공급가와 타일 노무비도 확보하지 못했습니다. 기존 샤워·변기 기록가는 현행 가격으로 재확인되지 않아 검증된 소계에 넣지 않았습니다.</p>
            <h4>금액을 좁히기 위해 확정할 항목</h4>
            <ol><li>실측 후 벽·바닥·젠다이 면적과 타일 BOX 수량 확정.</li><li>영림 해당 품번 BOX 공급가, 하부장 옵션 포함가, 유리블록 수량·보강 견적 확보.</li><li>같은 공사 범위로 시공 업체의 재료·노무·경비 분리 견적 비교. ‘대형 타일 재단·젠다이·줄눈’ 포함 여부 통일.</li><li>급배수 이설 필요 여부와 관 길이, 철거 후 바탕 손상은 기본공사와 분리.</li></ol>
            <h4>합계·부가세 처리</h4><p>전체 재료비 + 노무비 + 운반·폐기 경비 + 현장관리비 = 공급가액으로 정리하고 VAT를 별도 계산합니다. 현재는 세전 단가와 노무비가 미확인이라 총액을 산정하지 않습니다. 소비자 표시가에 VAT를 다시 더하지 않도록 세금 포함 여부를 먼저 정규화합니다. 기존 896.5–1292.5만원은 근거 보완 전 총액으로 사용하지 않습니다.</p>
            <details><summary>별도공사·거래 조건</summary><p>문·문틀, 공용관·구조 변경, 전기 증설, 장거리 덕트, 특수 양중, 관리사무소 비용, 숨은 누수와 바탕 보수는 별도입니다. 공기 7–10작업일+제품 납기는 기존 계획 가정이며 확정 일정이 아닙니다. 결제 조건·A/S·견적 유효기간은 계약 업체가 확정합니다. 예비비는 공사비 확정 후 별도 편성합니다.</p></details>
          </section>
        </div>
      </div>
    </dialog>`);
  const modal=document.getElementById('bath3-modal'), button=document.createElement('button');
  button.type='button';button.className='concept-pair';button.textContent='시안 · 제품 · 가견적 보기 ↗';button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-controls',modal.id);
  card.lastElementChild.append(button);card.classList.add('bath10-clickable');
  let overflow='',lastFocus=null;
  const showPanel=id=>{modal.querySelectorAll('.bath3-panel').forEach(p=>{p.hidden=p.id!==`bath3-${id}`;});modal.querySelectorAll('[data-bath3-panel]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.bath3Panel===id)));modal.querySelector('.bath3-info').scrollTop=0;};
  card.addEventListener('click',()=>{if(modal.open)return;lastFocus=document.activeElement;overflow=document.body.style.overflow;document.body.style.overflow='hidden';modal.showModal();showPanel('board');});
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
