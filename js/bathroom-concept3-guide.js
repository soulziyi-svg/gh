(() => {
  if ((new URLSearchParams(location.search).get('space') || location.hash.slice(1)) !== 'bathroom') return;
  const card = document.getElementById('bathroom-14');
  if (!card || document.getElementById('bath3-modal')) return;
  const base = 'img/bathroom-products/concept3/';
  const conceptImage = 'img/bathroom-concepts/bathroom-14-portrait-v1.png';
  const dim = id => `https://dimhouse.co.kr/product/detail.html?product_no=${id}`;
  const products = [
    {zone:'01 · 상부 벽', name:'LAUCHE · LC 아이솔 베이지', image:'isol.jpg',
      size:'600 × 600mm · 4장 / 1.44㎡ / BOX', price:'51,000원 / BOX',
      note:'공식 권장소비자가(VAT 포함)와 THE 타일 표시가가 동일합니다. 무광 포세린. 시안의 베이지 상부 면에 적용할 후보이며 실제 시안의 타일 모델은 아닙니다. 가는 석재 결과 색차는 실물 여러 장을 비교합니다.',
      check:'상부 벽 약 10㎡ × 여유 15% → 8BOX, 자재 408,000원 예시. 배송·절단·시공 별도. 두께·재고 확인 필요.',
      links:[['공식 사양·가격','https://www.myhwashin.com/front/product/product_view_detail?brand_cd=40&product_cd=90081'],['구매 · THE 타일','https://thetile.co.kr/product/detail.html?product_no=2708']], credit:'사진: LAUCHE / 화신세라믹'},
    {zone:'02 · 바닥 / 하부 벽', name:'HS 테라조 그레이', image:'terrazzo.jpg',
      size:'600 × 600mm · 무광 포세린', price:'표시가 24,000원 · 판매 단위 확인 필요',
      note:'이즈세라믹 판매 페이지의 실제 상품 사진입니다. 시안보다 회색 기와 큰 입자가 강한 대안입니다. 상부의 잔잔한 베이지와 대비시키되 회색 줄눈으로 하부 면을 정돈합니다.',
      check:'최소 주문 3개 표기. 박스 면적·VAT·배송비·젖은 맨발 바닥 적합성은 미확인으로 발주 보류. 바닥 4.4㎡+하부 벽 7㎡, 여유 포함 약 13.1㎡ 계획. 단위 미확정이라 표시가를 곱해 총액으로 제시하지 않습니다.',
      links:[['제품·구매 문의','https://isceramic.kr/product/detail.html?product_no=21545']],credit:'사진: 화신세라믹 / 이즈세라믹 상품 페이지'},
    {zone:'03 · 세면대 / 하부장', name:'딤하우스 · ES600-1001', image:'vanity.jpg',
      size:'W610 × D475 × H450mm', price:'370,500원부터 · 옵션 확인',
      note:'화이트 벽걸이 서랍형, 하부 조명 제품입니다. 시안의 넓은 양문형 장과는 폭·문 방식·조명이 다릅니다. 화이트 일체감과 바닥을 비우는 구조를 유지하는 기성품 대안입니다.',
      check:'세면볼·상판 포함 옵션, 팝업·트랩·수전 별도 여부를 주문서로 확인합니다. 시안과 같은 폭의 양문형은 실측 후 맞춤 제작 견적이 필요합니다. 설치·운반·VAT 조건 재확인.',
      links:[['제품·옵션·구매',dim(1401)]],credit:'사진: 딤하우스'},
    {zone:'04 · 세면 수전', name:'FONTANA · TF-L4011.BN', image:'tap.jpg',
      size:'높이 147mm · 토수 높이 92mm · 토수 거리 101mm', price:'154,000원 / EA',
      note:'브러쉬드 니켈 원홀 수전. 상판 타공 Ø30–35mm(판매처 도면). 단정한 금속색을 연결하는 후보이며 시안 속 수전과 동일 모델은 아닙니다.',
      check:'볼 깊이·타공 위치·토수점 간섭 확인. 설치·배송·VAT 조건 및 재고 재확인.',
      links:[['제품·도면·구매',dim(1331)]],credit:'사진: FONTANA / 딤하우스'},
    {zone:'05 · 샤워 수전', name:'FONTANA · TF-B5210.BN', image:'shower.jpg',
      size:'상부 암 400mm · 도면 하부 구간 840mm + 조절부 최소 350mm', price:'686,000원 / SET',
      note:'브러쉬드 니켈 2WAY 레인샤워. 노출 배관과 원형 헤드로 기존 시안의 형태를 이어갑니다. 표기 구간 치수는 바닥 기준 설치 높이가 아닙니다.',
      check:'도면 급수 간격 조절 110–220mm. 천장·유리문 간섭, 수압, 헤드·호스 포함 구성 확인. 설치·배송·VAT 조건 재확인.',
      links:[['제품·도면·구매',dim(1351)]],credit:'사진: FONTANA / 딤하우스'},
    {zone:'06 · 양변기', name:'대림바스 · CC-738 아르노 라운드', image:'toilet-cc738.jpg',
      size:'W410 × D700 × H700mm', price:'279,000원 · 도기 기준 옵션형',
      note:'공식 분류는 투피스·림리스·탱크밀결형입니다. 하부가 정리된 치마형 외관을 위한 후보입니다. 원피스로 표시하지 않으며 시안과 세부 형상이 다릅니다.',
      check:'판매처 해당 상품은 시트·설치 부속 옵션 구매형입니다. 배송·설치·세금·배수 중심거리 확인. 부속을 포함한 다른 구성과 가격만 직접 비교하지 않습니다.',
      links:[['공식 치수','https://www.daelimbath.com/product/product_view?idx=1126'],['구매 · 바스앤모어','https://bathnmore.co.kr/product/detail.html?product_no=13697']],credit:'사진: 대림바스'},
    {zone:'07 · 원형 거울', name:'딤하우스 · 원형 LED 간접 조명거울', image:'mirror.webp',
      size:'Ø500 / Ø600 / Ø700mm 선택 · Ø700 계획', price:'95,000원부터 · Ø700 옵션가 별도 확인',
      note:'원형 비례를 유지하는 기성품 후보입니다. 원본 시안의 일반 거울과 달리 LED가 있는 연출 사진입니다. 조명이 필요 없으면 무조명 원형으로 별도 제작 문의합니다.',
      check:'표시 시작가를 Ø700 확정가로 사용하지 않습니다. 설치 벽 보강·전원·습윤 환경 적합성·배송·VAT 조건 확인.',
      links:[['규격·옵션·구매',dim(12)]],credit:'사진: 딤하우스 · 제품 연출 사진'}
  ];
  const costs = [
    ['철거·보양·폐기물 반출',60,80], ['급배수 조정·배관',60,90],
    ['방수·바탕·샤워 바닥 경사',65,90], ['타일·젠다이·접착·줄눈·시공',150,210],
    ['도기·수전·세면장·거울·설치',120,160], ['샤워 유리·하드웨어·유가',50,80],
    ['천장·조명·일반 환기·전기',35,50], ['마감·점검·청소',20,30]
  ];
  const direct = [1,2].map(i => costs.reduce((s,r)=>s+r[i],0));
  const supply = direct.map((n,i)=>n+[30,45][i]);
  const total = supply.map(n=>Math.round(n*1.1*10)/10);
  const range = a => a.map(n=>n.toLocaleString('ko-KR')).join('–');
  const link = ([label,url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
  const photos = [{src:conceptImage,name:'전체 시안',credit:'ROOM PICK · AI 디자인 시안 / 실제 시공 사진 아님'},...products.map(p=>({src:base+p.image,name:p.name,credit:p.credit}))];
  document.body.insertAdjacentHTML('beforeend',`
    <dialog id="bath3-modal" class="bath3-modal" aria-labelledby="bath3-title">
      <div class="bath3-bar"><span>ROOM PICK <i>/</i> CONCEPT 3</span><button type="button" class="bath3-close" aria-label="컨셉 3 상세 닫기" autofocus>닫기 ×</button></div>
      <div class="bath3-layout">
        <section class="bath3-visual" aria-label="시안과 제품 사진">
          <div class="bath3-mainphoto"><img src="${conceptImage}" alt="테라조 라운드 욕실 전체 AI 시안" id="bath3-photo"></div>
          <div class="bath3-caption" aria-live="polite"><strong id="bath3-photo-name">전체 시안</strong><span id="bath3-credit">${photos[0].credit}</span></div>
          <div class="bath3-thumbs">${photos.map((p,i)=>`<button type="button" data-bath3-photo="${i}" aria-label="${p.name} 크게 보기" aria-pressed="${i===0}"><img src="${p.src}" alt="" loading="lazy"><span>${i===0?'전체 시안':products[i-1].zone.split(' · ')[1]}</span></button>`).join('')}</div>
        </section>
        <div class="bath3-info">
          <div class="bath3-heading"><p class="bath3-kicker">TERRAZZO & ROUND</p><h2 id="bath3-title">테라조 라운드</h2><p>잔잔한 베이지 위에, 테라조의 리듬을 더하다.</p><div class="bath3-tags"><span>베이지 스톤</span><span>테라조</span><span>화이트 수납</span></div></div>
          <nav class="bath3-nav" aria-label="상세 정보 선택">${[['design','디자인 설명'],['products','제품 7종'],['estimate','간단 견적']].map(([id,t],i)=>`<button type="button" data-bath3-panel="${id}" aria-controls="bath3-${id}" aria-pressed="${i===0}">${t}</button>`).join('')}</nav>
          <section id="bath3-design" class="bath3-panel">
            <p class="bath3-lead">큰 면은 차분하게,<br>시선이 머무는 곳은 섬세하게.</p>
            <p>베이지 상부 벽과 테라조 하부 벽을 수평으로 나눠 무늬가 과하지 않게 구성했습니다. 원형 거울은 직선 타일을 부드럽게 연결하고, 화이트 벽걸이 세면장은 바닥 면을 드러냅니다.</p>
            <dl class="bath3-design-list"><div><dt>공간 구성</dt><dd>왼쪽 세면 공간, 중앙 변기, 오른쪽 투명 유리 샤워 구역. 문 열림과 변기 앞 공간은 실측 후 확인합니다.</dd></div><div><dt>재료의 연결</dt><dd>바닥과 하부 벽의 테라조를 연결하고 상부는 낮은 대비의 베이지로 정돈합니다. 젠다이와 타일 줄눈을 함께 계획합니다.</dd></div><div><dt>빛과 형태</dt><dd>원형 거울과 원형 다운라이트, 니켈 계열 금속으로 형태와 마감의 수를 줄였습니다. 타일 샘플은 실제 조명 아래 비교합니다.</dd></div><div><dt>샤워 바닥</dt><dd>기존 검토 방향은 외부 바닥보다 15mm 낮추는 계획입니다. 이미지에서 단차를 측정할 수 없으며 방수층·물매·배수구·유리 고정 상세를 먼저 검토해야 합니다.</dd></div></dl>
            <div class="bath3-notice">이미지는 AI 시안입니다. 제품 탭은 이 디자인을 구현할 <strong>실제 판매 제품 후보</strong>이며 이미지에 해당 모델이 실제 사용되었다는 뜻은 아닙니다. 사진을 누르면 왼쪽에서 원본 비율로 비교할 수 있습니다.</div>
            <button type="button" class="bath3-cta" data-bath3-go="products">사진으로 제품 살펴보기 →</button>
            <p class="bath3-source">구성 참고: ${link(['라우체 매거진','https://www.lauche.co.kr/bbs/board.php?bo_table=m05_01&wr_id=107'])}. 매거진의 재료 설명·제품 연결 방식을 참고하고, 좌우 분할 모달은 ROOM PICK용으로 새로 구성했습니다.</p>
          </section>
          <section id="bath3-products" class="bath3-panel" hidden><h3>디자인을 구현할 제품 후보</h3><p class="bath3-muted">2026.09.25 확인 · 상품가와 시공비 구분 · 재고 보장 아님</p>
            ${products.map((p,i)=>`<section class="bath3-product"><button class="bath3-product-photo" type="button" data-bath3-photo="${i+1}" aria-label="${p.name} 사진 확대"><img src="${base+p.image}" alt="${p.name} 판매처 제품 사진" loading="lazy"><span>사진 크게 보기 ＋</span></button><div><p class="bath3-kicker">${p.zone}</p><h4>${p.name}</h4><p class="bath3-spec">${p.size}</p><strong class="bath3-price">${p.price}</strong></div><div class="bath3-product-copy"><p>${p.note}</p><details><summary>발주 전 확인·시안과의 차이</summary><p>${p.check}</p></details><div class="bath3-links">${p.links.map(link).join('')}</div><small>${p.credit}</small></div></section>`).join('')}
            <div class="bath3-notice"><strong>별도 제작·선정</strong><p>투명 샤워부스는 실측 제작, 유가·환기·다운라이트는 모델 미정입니다. 유리 두께·힌지·고정 부위, 환기 덕트와 전원 조건을 확인한 후 발주합니다. 임의의 상품 사진을 동일 제품으로 붙이지 않았습니다.</p></div>
          </section>
          <section id="bath3-estimate" class="bath3-panel" hidden><p class="bath3-kicker">PRELIMINARY BUDGET · RP-B03-20260925</p><h3>철거부터 마감까지</h3><div class="bath3-total"><span>실측 전 계획 예산 · VAT 포함</span><strong>${range(total)}<small>만원</small></strong></div>
            <p>욕실 2.0 × 2.2m = 4.4㎡, 높이 2.3m, 벽 약 17㎡ 가정. 전체 철거 후 재방수, 일반 반출, 공용배관·구조 변경 없음. 사진에서 측정한 치수가 아닙니다.</p>
            <table class="bath3-cost"><caption>단위: 만원 · 각 1식 · 재료+노무 합산 배정액 / VAT 별도</caption><thead><tr><th>공종 / 포함 범위</th><th>예상 범위</th></tr></thead><tbody>${costs.map(([name,lo,hi])=>`<tr><th scope="row">${name}</th><td>${lo}–${hi}</td></tr>`).join('')}</tbody><tfoot><tr><th>직접공사비</th><td>${range(direct)}</td></tr><tr><th>현장관리·일반경비</th><td>30–45</td></tr><tr><th>공급가액</th><td>${range(supply)}</td></tr><tr><th>VAT 10%</th><td>${range(supply.map(n=>n*.1))}</td></tr><tr><th>총 계획 예산</th><td>${range(total)}</td></tr></tfoot></table>
            <div class="bath3-notice">업체가 제출한 확정 견적이나 시장 평균이 아닌 <strong>공사 범위별 계획 배정액</strong>입니다. 제품 후보 비용은 공종 예산에 포함한 계획이므로 상품가를 다시 더하지 않습니다. 타일 판매 단위·세금·제작 및 설치비 확정 후 재산정합니다.</div>
            <details open><summary>포함·제외·일정</summary><p>포함: 위 8개 공종, 기본 부속·설치 계획. 별도: 문·문틀, 공용배관, 구조·전기 증설, 특수 양중·관리사무소 비용, 숨은 누수·바탕 손상 추가 복구, 휴젠트 등 복합 환기기, 소품.</p><p>예비비 약 10% 별도. 약 7–10작업일을 가정하되 방수·접착제 양생과 제품 납기가 우선입니다. 공급 주체는 시공업체 일괄 공급 가정이며 고객 지급 자재는 중복 차감합니다. 금액 유효기간·결제 일정·A/S 범위는 업체 견적과 계약에서 확정합니다.</p></details>
            <details><summary>자료 확인 범위</summary><p>라우체·화신세라믹·THE 타일·이즈세라믹·유로세라믹·딤하우스·대림바스·바스앤모어의 공개 상품 정보를 비교했습니다. 이즈세라믹 상세는 직접 페이지 응답으로 확인했습니다. PPT는 저장된 분석과 타일 규격 관련 원본 1장을 재확인했으며, 전체 PPT·영상 재검토를 의미하지 않습니다.</p><p>욕실 참고 이미지 2장에서는 수납·샤워 출입 간섭과 젠다이 연결을 검토했습니다. 기존 시안은 변경하거나 새로 생성하지 않았습니다. 사진 공개 사용은 사용자의 이번 허락 확인을 근거로 하며 각 제품에 출처를 표시했습니다.</p></details>
          </section>
        </div>
      </div>
    </dialog>`);
  const modal = document.getElementById('bath3-modal');
  const button = document.createElement('button');
  button.type='button'; button.className='concept-pair'; button.textContent='시안 · 제품 · 가견적 보기 ↗';
  button.setAttribute('aria-haspopup','dialog'); button.setAttribute('aria-controls',modal.id);
  card.lastElementChild.append(button); card.classList.add('bath10-clickable');
  let overflow = '', lastFocus = null;
  const showPanel = id => {
    modal.querySelectorAll('.bath3-panel').forEach(p=>{p.hidden=p.id!==`bath3-${id}`;});
    modal.querySelectorAll('[data-bath3-panel]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.bath3Panel===id)));
    modal.querySelector('.bath3-info').scrollTop=0;
  };
  card.addEventListener('click',()=>{
    if(modal.open)return;
    lastFocus=document.activeElement; overflow=document.body.style.overflow;
    document.body.style.overflow='hidden'; modal.showModal(); showPanel('design');
  });
  modal.querySelector('.bath3-close').addEventListener('click',()=>modal.close());
  modal.addEventListener('close',()=>{document.body.style.overflow=overflow;(lastFocus instanceof HTMLElement && lastFocus!==document.body ? lastFocus : button).focus({preventScroll:true});});
  let outsideDown=false;
  const outside=e=>{const r=modal.getBoundingClientRect();return e.target===modal && (e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom);};
  modal.addEventListener('pointerdown',e=>{outsideDown=outside(e);});
  modal.addEventListener('click',e=>{if(outsideDown&&outside(e))modal.close();outsideDown=false;});
  modal.querySelectorAll('[data-bath3-panel]').forEach(b=>b.addEventListener('click',()=>showPanel(b.dataset.bath3Panel)));
  modal.querySelectorAll('[data-bath3-go]').forEach(b=>b.addEventListener('click',()=>{showPanel(b.dataset.bath3Go);modal.querySelector(`[data-bath3-panel="${b.dataset.bath3Go}"]`).focus();}));
  modal.querySelectorAll('[data-bath3-photo]').forEach(b=>b.addEventListener('click',()=>{
    const i=Number(b.dataset.bath3Photo), p=photos[i];
    const img=modal.querySelector('#bath3-photo'); img.src=p.src; img.alt=p.name+' · '+p.credit;
    modal.querySelector('#bath3-photo-name').textContent=p.name; modal.querySelector('#bath3-credit').textContent=p.credit;
    modal.querySelectorAll('.bath3-thumbs button').forEach(t=>t.setAttribute('aria-pressed',String(Number(t.dataset.bath3Photo)===i)));
    if(matchMedia('(max-width: 800px)').matches) modal.querySelector('.bath3-visual').scrollIntoView({block:'start'});
  }));
})();
