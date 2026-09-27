(() => {
  if ((new URLSearchParams(location.search).get('space') || location.hash.slice(1)) !== 'bathroom') return;
  const card = document.getElementById('bathroom-14');
  if (!card || document.getElementById('bath3-modal')) return;
  const base = 'img/bathroom-products/concept3/';
  const conceptImage = 'img/bathroom-concepts/bathroom-14-portrait-v6.png';
  const dim = id => `https://dimhouse.co.kr/product/detail.html?product_no=${id}`;
  const products = [
    {zone:'01 · 상부 벽', name:'LAUCHE · LC 아이솔 베이지 9.8T', image:'isol-beige-600x1200.jpg',
      size:'600 × 1200mm · 두께 9.8mm · 2장 / 1.44㎡ / BOX', price:'61,000원 / BOX · 공식 권장소비자가',
      note:'공식 600×1200 제품 사진을 생성 도구에 직접 입력했습니다. 무광 포세린의 밝은 베이지 석재 결과 세로 방향 줄눈을 반영한 AI 시안으로, 실물 색·무늬·정확한 치수의 재현을 보증하지 않습니다. 가격은 VAT 포함 공식 권장가이며 실제 구매가는 판매처 확인이 필요합니다.',
      check:'상부 벽 약 10㎡ × 여유 15% → 8BOX(16장), 권장가 기준 자재 488,000원 예시. 배송·절단·시공 별도. 가로 600×세로 1200 배치 계획이며 모서리 절단·바탕 평활도·대형 타일 시공비·재고는 실측 후 확인합니다.',
      links:[['공식 600×1200 사양·가격·문의','https://www.myhwashin.com/front/product/product_view_detail?brand_cd=60&product_cd=91501']], credit:'사진: LAUCHE / 화신세라믹 · 600×1200 제품'},
    {zone:'02 · 바닥 / 하부 벽', name:'HS 테라조 그레이', image:'terrazzo.jpg',
      size:'600 × 600mm · 무광 포세린', price:'표시가 24,000원 · 판매 단위 확인 필요',
      note:'판매처 제품 사진을 생성 도구에 직접 입력해 바닥·하부 벽에 적용했습니다. 이전 시안의 작은 베이지 입자에서 회색 바탕·큰 회백색 입자로 수정했습니다. 600각과 밝은 회색 줄눈을 계획하되 절단·배수 경사는 현장 설계가 필요합니다.',
      check:'최소 주문 3개 표기. 박스 면적·VAT·배송비·젖은 맨발 바닥 적합성은 미확인으로 발주 보류. 바닥 4.4㎡+하부 벽 7㎡, 여유 포함 약 13.1㎡ 계획. 단위 미확정이라 표시가를 곱해 총액으로 제시하지 않습니다.',
      links:[['제품·구매 문의','https://isceramic.kr/product/detail.html?product_no=21545']],credit:'사진: 화신세라믹 / 이즈세라믹 상품 페이지'},
    {zone:'03 · 세면대 / 하부장', name:'히든바스 · S-1320 심플 하부장', image:'hidden-s1320.webp',
      size:'공식 기본 규격 W630 × D460 × H700mm · 벽걸이 변경 가능', price:'가격 문의 · 벽걸이 옵션 견적 미확인',
      note:'사용자가 선택한 대리석타입 서랍식 제품입니다. 공식 대표 사진의 그레이지 2단 서랍·화이트 상판·원형 탑볼을 생성 입력으로 사용했습니다. 기존 시안의 벽걸이 배치를 유지했으며 AI 표현은 정확한 제품 도면이나 실물 색상의 보증이 아닙니다.',
      check:'기본 규격을 벽걸이 변경 후 치수로 확정하지 않습니다. 색상 코드, 탑볼·상판·수전·팝업·트랩 포함 구성, 변경 높이·벽 보강·배수 간섭, 설치·운반·VAT 및 최종 금액은 제조사 또는 판매처 견적서로 확인합니다. 기존 ES600-1001 가격은 적용하지 않습니다.',
      links:[['공식 제품·옵션·문의','https://www.hiddenbath.co.kr/productDetail/1788']],credit:'사진: 히든바스 · S-1320 공식 대표 사진'},
    {zone:'04 · 세면 수전', name:'LAUCHE · 코인 1275 니켈무광', image:'tap-lauche-1275n.png',
      size:'탑볼용 · 높이 288.6mm · 중심거리 165mm · 1홀 대붙이', price:'판매가·설치비 문의 · 기존 FONTANA 가격 적용 안 함',
      note:'「2026 욕실 인테리어 견적 가이드」15장의 라우체 브랜드 추천과 「후회 없는 욕실 리모델링」4장의 무광 니켈·재질 확인 기준을 바탕으로 선정했습니다. 코인 1275라는 모델명은 PPT에 없으며 공식 제품 페이지에서 별도로 확인한 교체 후보입니다.',
      check:'공식 안내: 황동, 싱글레버, 냉온수형, 토수각 20°, KS·KC 인증 표기. S-1320 탑볼과 토수 위치·높이·타공·벽 간섭은 발주 전 확인합니다. 현재 전체 AI 시안은 이전 FONTANA 수전 상태이며 이번에는 제품 목록만 교체했습니다.',
      links:[['공식 제품·사진·도면','https://lauche.co.kr/shop/item.php?ca_id=1010&it_id=1684285675&page=1']],credit:'사진: LAUCHE · 코인 1275 니켈무광 / PPT 추천 브랜드에서 별도 선정'},
    {zone:'05 · 샤워 수전', name:'FONTANA · TF-B5210.BN', image:'shower.jpg',
      size:'상부 암 400mm · 도면 하부 구간 840mm + 조절부 최소 350mm', price:'686,000원 / SET',
      note:'브러쉬드 니켈 2WAY 레인샤워 제품 사진을 직접 입력했습니다. 원형 헤드·핸드샤워·직사각 믹서 형태를 시안에 반영했습니다. 표기 구간 치수는 바닥 기준 설치 높이가 아닙니다.',
      check:'도면 급수 간격 조절 110–220mm. 천장·유리문 간섭, 수압, 헤드·호스 포함 구성 확인. 설치·배송·VAT 조건 재확인.',
      links:[['제품·도면·구매',dim(1351)]],credit:'사진: FONTANA / 딤하우스'},
    {zone:'06 · 양변기', name:'대림바스 · CC-738 아르노 라운드', image:'toilet-cc738.jpg',
      size:'W410 × D700 × H700mm', price:'279,000원 · 도기 기준 옵션형',
      note:'공식 분류는 투피스·림리스·탱크밀결형입니다. 공식 제품 사진을 직접 입력해 둥근 물탱크·측면 레버·치마형 하부 외관을 반영했습니다. 원피스가 아니며 AI 이미지의 세부 형상은 실물과 차이가 있을 수 있습니다.',
      check:'판매처 해당 상품은 시트·설치 부속 옵션 구매형입니다. 배송·설치·세금·배수 중심거리 확인. 부속을 포함한 다른 구성과 가격만 직접 비교하지 않습니다.',
      links:[['공식 치수','https://www.daelimbath.com/product/product_view?idx=1126'],['구매 · 바스앤모어','https://bathnmore.co.kr/product/detail.html?product_no=13697']],credit:'사진: 대림바스'},
    {zone:'07 · 원형 거울', name:'딤하우스 · 원형 LED 간접 조명거울', image:'mirror.webp',
      size:'Ø500 / Ø600 / Ø700mm 선택 · Ø700 계획', price:'95,000원부터 · Ø700 옵션가 별도 확인',
      note:'제품 사진을 직접 입력해 기존 무조명 거울을 원형 LED 간접조명 거울로 수정했습니다. 원형 비례와 하단 터치 표시를 참고했습니다. 사진 속 다른 가구·소품은 적용하지 않았습니다.',
      check:'표시 시작가를 Ø700 확정가로 사용하지 않습니다. 설치 벽 보강·전원·습윤 환경 적합성·배송·VAT 조건 확인.',
      links:[['규격·옵션·구매',dim(12)]],credit:'사진: 딤하우스 · 제품 연출 사진'},
    {zone:'08 · 천장 환기', name:'힘펠 · 휴젠뜨2 FHD-P150S1', image:'huezent2.jpg',
      size:'천장 매립형 · 타공·설치 깊이·덕트·전원 현장 확인', price:'현재 판매가·설치 포함 견적 재확인 필요',
      note:'PPT 「후회 없는 욕실 리모델링」3장에서 휴젠트를 복합 환풍기 후보로 확인했습니다. PPT는 세부 모델을 지정하지 않아 기존 휴젠뜨2를 유지합니다. 같은 자료의 대안은 JV21M과 제로크 프라임입니다. 제로크 프라임을 온풍·드라이 대체품으로 안내하지 않습니다. 힘펠몰 제품 사진을 직접 입력해 흰 사각 패널·타원 그릴·원형 토출구 외형을 반영했습니다. 기존 일반 환풍기 대신 변기 위에서 공용 공간 중앙 쪽 천장으로 이동한 설치 검토안입니다.',
      check:'확인 가능한 힘펠몰 dev 페이지의 466,000원은 운영 판매가로 확정하지 않았습니다. 본체·설치·덕트·전기 작업 포함 견적을 별도로 받아야 합니다. 천장 깊이와 설치 가능 위치는 제조사 설명서 및 전문 설치자 확인이 필요합니다.',
      links:[['제조사·설치 문의','https://www.himpel.co.kr/'],['확인한 제품 자료','https://dev.himpelmall.com/mall/product/product_view.php?ps_ctid=16010000&ps_goid=213']],credit:'사진: 힘펠몰 · 휴젠뜨2 제품 자료'}
  ];
  const costs = [
    ['철거·보양·폐기물 반출',60,80], ['급배수 조정·배관',60,90],
    ['방수·바탕·샤워 바닥 경사',65,90], ['타일·젠다이·접착·줄눈·시공',150,210],
    ['도기·장수전·S-1320·LED 거울·설치',140,190], ['샤워 유리·하드웨어·유가',50,80],
    ['천장·조명·휴젠뜨2·기본 전기/덕트 설치',80,120], ['마감·점검·청소',20,30]
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
          <div class="bath3-heading"><p class="bath3-kicker">TERRAZZO & ROUND</p><h2 id="bath3-title">테라조 라운드</h2><p>잔잔한 베이지 위에, 테라조의 리듬을 더하다.</p><div class="bath3-tags"><span>600×1200 세로 시공</span><span>테라조</span><span>S-1320 서랍 수납</span></div></div>
          <nav class="bath3-nav" aria-label="상세 정보 선택">${[['design','욕실 체크리스트'],['products','제품·설비 8항목'],['estimate','수정 가견적']].map(([id,t],i)=>`<button type="button" data-bath3-panel="${id}" aria-controls="bath3-${id}" aria-pressed="${i===0}">${t}</button>`).join('')}</nav>
          <section id="bath3-design" class="bath3-panel">
            <h3>욕실 체크리스트</h3>
            <p>사용자 제공 PPT의 관련 슬라이드를 요약했습니다. 자료의 예시 치수·금액을 확정 시공 기준이나 현재 판매가로 사용하지 않습니다.</p>
            <dl class="bath3-design-list">
              <div><dt>01 · 환기 제품과 위치</dt><dd>휴젠트는 복합 기능용, JV21M은 기본 환기용, 제로크 프라임은 환기 대안으로 비교합니다. 드라이 기능을 쓸 경우 세면대 앞 사용 위치를 고려하고 천장 깊이·덕트·전원·점검 공간을 확인합니다. 컨셉3은 휴젠뜨2를 유지하며 모델별 기능은 설명서로 확인합니다.</dd></div>
              <div><dt>02 · 세면 수전과 탑볼 호환</dt><dd>PPT 추천 브랜드 라우체에서 코인 1275 니켈무광을 별도 선정했습니다. 볼 뒤 정면 중앙을 기준으로 물줄기가 볼 안에 들어오는지, 손 씻는 공간과 레버·벽 간섭을 확인합니다. 재질·인증·A/S도 함께 확인합니다.</dd></div>
              <div><dt>03 · 세면대·젠다이 높이</dt><dd>상판과 볼 상단 높이를 구분하고 사용자 키에 맞춥니다. 젠다이·거울·수납장과 수전의 간섭을 검토합니다. PPT의 높이 도식은 예시이므로 그대로 시공 치수로 확정하지 않습니다.</dd></div>
              <div><dt>04 · 타일 규격과 배수</dt><dd>컨셉3의 상부 600×1200 세로 배치, 바닥 600×600 계획을 전개도에서 확인합니다. 큰 타일의 외관보다 배수구 방향·절단선·바닥 물매·미끄럼 성능을 먼저 점검합니다.</dd></div>
              <div><dt>05 · 샤워 공간 단차</dt><dd>PPT의 15mm 단차는 검토 예시입니다. 단차만으로 물넘침을 막는다고 보장하지 않으며 배수량·경사·파티션·방수 접합을 함께 확인합니다.</dd></div>
              <div><dt>06 · 줄눈과 마감색</dt><dd>시멘트·폴리우레아·에폭시·P30 등 자료 속 후보를 용도와 청소 조건에 따라 비교합니다. 타일과 줄눈·실리콘 색을 샘플로 맞추고 제품별 시방을 확인합니다. 줄눈은 바탕 방수를 대신하지 않습니다.</dd></div>
              <div><dt>07 · 수납과 조명</dt><dd>장 문을 열 때 머리·거울·수전에 닿지 않는지 확인합니다. 거울 앞 얼굴 그림자, 수납장 내 습기, 전원과 점검 동선을 함께 검토합니다.</dd></div>
              <div><dt>08 · 견적의 포함 범위</dt><dd>자료의 부분 견적을 완성 공사 총액으로 보지 않습니다. 철거·폐기물·배관·방수·자재·시공·운반·VAT·별도공사와 A/S 범위를 같은 조건으로 비교합니다.</dd></div>
            </dl>
            <details><summary>PPT 출처와 이번 확인 범위</summary><p>「2026 욕실 인테리어 견적 가이드」9·15장 / 「600건 시공 전문가의 10가지 꿀팁」3·4·5·8장 / 「호갱되지 않고 셀프 계산하는 법」12·27장 / 「후회 없는 욕실 리모델링_ 전문가 가이드」3·4·8·10장. 해당 슬라이드 이미지를 직접 열어 확인했으며 모든 PPT 전체를 재검토한 것은 아닙니다.</p></details>
            <div class="bath3-notice">전체 시안 이미지는 기존 이미지입니다. 새 라우체 수전은 아래 제품 목록에 반영했으며 시안 이미지에는 아직 재생성하지 않았습니다. 제품 사진과 전체 시안을 구분해 확인해주세요.</div>
            <button type="button" class="bath3-cta" data-bath3-go="products">추천 제품 확인하기 →</button>
          </section>
          <section id="bath3-products" class="bath3-panel" hidden><h3>시안에 참고한 제품·설비</h3><p class="bath3-muted">2026.09.27 수정 · PPT 추천 브랜드 라우체 수전 후보 · 전체 시안은 교체 전 이미지 · 가격·호환성은 발주 전 확인</p>
            ${products.map((p,i)=>`<section class="bath3-product"><button class="bath3-product-photo" type="button" data-bath3-photo="${i+1}" aria-label="${p.name} 사진 확대"><img src="${base+p.image}" alt="${p.name} 판매처 제품 사진" loading="lazy"><span>사진 크게 보기 ＋</span></button><div><p class="bath3-kicker">${p.zone}</p><h4>${p.name}</h4><p class="bath3-spec">${p.size}</p><strong class="bath3-price">${p.price}</strong></div><div class="bath3-product-copy"><p>${p.note}</p><details><summary>발주 전 확인·시안과의 차이</summary><p>${p.check}</p></details><div class="bath3-links">${p.links.map(link).join('')}</div><small>${p.credit}</small></div></section>`).join('')}
            <div class="bath3-notice"><strong>발주 전 남은 확인</strong><p>샤워부스는 실측 제작입니다. 세면 수전은 PPT 추천 브랜드의 라우체 코인 1275 니켈무광으로 목록을 변경했습니다. 세면볼 단품·유가·다운라이트 모델과 수전/상판 호환성은 미확인입니다. S-1320 벽걸이 변경 규격·포함 구성, 휴젠뜨 천장 매립 조건, 타일의 젖은 바닥 적합성을 확인한 후 발주합니다.</p></div>
          </section>
          <section id="bath3-estimate" class="bath3-panel" hidden><p class="bath3-kicker">PRELIMINARY BUDGET · RP-B03-20260925</p><h3>철거부터 마감까지</h3><div class="bath3-total"><span>실측 전 계획 예산 · VAT 포함</span><strong>${range(total)}<small>만원</small></strong></div>
            <div class="bath3-notice"><strong>수정 범위를 포함한 가견적 · 업체 견적 아님</strong><p>S-1320·탑볼·장수전·LED 거울과 휴젠뜨2를 위한 예산 여유를 공종별로 배정했습니다. 확정 판매가를 합산한 금액이 아니며 하부장 구성·라우체 코인 1275·환기 설치 견적 수령 후 재산정해야 합니다. 수전 변경 전 계획 배정액을 유지한 것이며 새 제품 확정 견적이 아닙니다. 해당 비용을 아래 합계에 다시 더하지 않습니다.</p></div>
            <p>욕실 2.0 × 2.2m = 4.4㎡, 높이 2.3m, 벽 약 17㎡ 가정. 전체 철거 후 재방수, 일반 반출, 공용배관·구조 변경 없음. 사진에서 측정한 치수가 아닙니다.</p>
            <table class="bath3-cost"><caption>단위: 만원 · 각 1식 · 재료+노무 합산 배정액 / VAT 별도</caption><thead><tr><th>공종 / 포함 범위</th><th>예상 범위</th></tr></thead><tbody>${costs.map(([name,lo,hi])=>`<tr><th scope="row">${name}</th><td>${lo}–${hi}</td></tr>`).join('')}</tbody><tfoot><tr><th>직접공사비</th><td>${range(direct)}</td></tr><tr><th>현장관리·일반경비</th><td>30–45</td></tr><tr><th>공급가액</th><td>${range(supply)}</td></tr><tr><th>VAT 10%</th><td>${range(supply.map(n=>n*.1))}</td></tr><tr><th>총 계획 예산</th><td>${range(total)}</td></tr></tfoot></table>
            <div class="bath3-notice">업체가 제출한 확정 견적이나 시장 평균이 아닌 <strong>공사 범위별 계획 배정액</strong>입니다. 제품 후보 비용은 공종 예산에 포함한 계획이므로 상품가를 다시 더하지 않습니다. 상부 타일 변경 후 8BOX 권장가는 488,000원입니다. 위 공종 배정액은 기존 계획 범위를 유지한 것이며 600×1200 대형 타일의 절단·시공비와 실제 판매가 확인 후 재산정합니다.</div>
            <details open><summary>포함·제외·일정</summary><p>포함 계획: 위 8개 공종, S-1320 벽걸이 구성·탑볼·장수전·LED 거울·휴젠뜨2와 기본 설치, 세면·변기·샤워 구역 원형 매입등 각 1개(총 3개). 중앙 환기 위치 변경에 필요한 덕트·전원 작업은 현장 확인 후 견적에 반영합니다. 별도: 문·문틀, 공용배관, 구조·전기 증설, 장거리 덕트 이설, 특수 양중·관리사무소 비용, 숨은 누수·바탕 손상 추가 복구. 소품은 계획하지 않습니다.</p><p>예비비 약 10% 별도. 약 7–10작업일+제작 납기 가정. 양생은 시방 우선입니다. 업체 일괄 공급 가정이며 고객 지급 자재는 중복 차감합니다. 현장 주소·반출·천장 조건 미확인, 유효기간·결제·A/S는 업체 견적과 계약에서 확정합니다.</p></details>
            <details><summary>자료 확인·생성 입력 범위</summary><p>1차 생성에 기존 시안·아이솔 베이지·HS 테라조 그레이·S-1320·휴젠뜨2 사진을 입력하고, 2차 생성에 1차 결과·FONTANA TF-B5210.BN·대림 CC-738·원형 LED 거울 사진을 입력했습니다. 입력 한도 때문에 두 번으로 나눴습니다. 이후 기존 시안과 600×1200 아이솔 베이지 공식 사진을 직접 입력해 상부 타일 세로 시공, 수전 정면 중앙 배치, 휴젠뜨 중앙 이동, 변기 위 원형등 추가를 재생성했습니다. 이전 S-1320 사진 속 미확인 수전 대신 TF-L4017H.BN 제품 사진을 직접 입력해 최신 시안의 수전을 교체했습니다.</p><p>욕실 참고 폴더 2곳에서 각 1장과 타일 자료 원본 1장을 다시 열어 서랍·세면볼 중심, 설비 간섭, 바탕과 포인트 관계를 대조했습니다. 이 보조 자료는 이번 생성에 직접 입력하지 않았으며 전체 PPT·영상 재검토도 아닙니다. 결과에서 소품 제거·서랍장·환기 외형·샤워 조명 1개를 확인했습니다. 정확한 치수·성능·실물 일치는 보증하지 않습니다.</p></details>
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
