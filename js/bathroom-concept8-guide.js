(() => {
  'use strict';
  if (new URLSearchParams(location.search).get('space') !== 'bathroom') return;
  // Display number 8 has the permanent review ID 27. Do not renumber source assets.
  const card = document.getElementById('bathroom-27');
  if (!card || document.getElementById('bath8-modal')) return;

  // Reuse the existing guide presentation classes; IDs and event handlers stay scoped.
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const link = ([label, url]) => `<a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)} ↗</a>`;
  const sources = {
    floor: 'https://isceramic.kr/product/detail.html?product_no=21706',
    wall: 'https://isceramic.kr/product/detail.html?product_no=21707',
    tileOfficial: 'https://www.myhwashin.com/front/product/product_view_detail?brand_cd=40&product_cd=90081',
    tileSeries: 'https://www.lauche.co.kr/bbs/board.php?bo_table=m05_01&wr_id=107',
    faucet: 'https://dimhouse.co.kr/product/detail.html?product_no=1013',
    faucetCompare: 'https://yhbmall.co.kr/product/detail.html?cate_no=44&display_group=1&product_no=645',
    furniture: 'https://dimhouse.co.kr/product/detail.html?product_no=1400',
    toilet: 'https://www.daelimbath.com/product/product_view?idx=84',
    toiletShop: 'https://item.gmarket.co.kr/Item?goodsCode=3522163664',
    toiletCompare: 'https://www.monta.co.kr/product/detail.html?product_no=20317',
    mirror: 'https://dshousing.co.kr/goods/goods_view.php?goodsNo=1000001056'
  };
  const products = [
    {
      zone:'F01 · 바닥 타일', tone:'beige', status:'제품·규격·표시가 확인 / 습윤 바닥 적합성 확인 필요',
      name:'LAUCHE · LC 아이솔 베이지', size:'600 × 600 mm', price:'51,000원 / 박스',
      facts:'무광 포세린 · 4장 / 1.44㎡ · 공식 권장소비자가 VAT 포함 · 이즈세라믹 동일 표시가',
      text:'컨셉의 낮은 채도 베이지 바닥을 구현할 후보입니다. 실제 상품 사진은 잔잔한 입자와 가는 밝은 석재 결이 보여 시안의 균일한 면과 다릅니다. 시안 속 실제 제품으로 확인된 것은 아닙니다.',
      check:'바닥 5.2㎡ × 여유 10% ÷ 1.44㎡ → 4박스, 204,000원 예시. 배송·시공 별도. 무광이라는 이유만으로 미끄럼 안전을 보장하지 않습니다. 샤워 바닥 적용·경사·배수 위치에 따라 절단 또는 다른 규격을 검토합니다. 두께는 발주 전 도면 확인.',
      links:[['판매처·상품 사진',sources.floor],['공식 규격·가격',sources.tileOfficial]]
    },
    {
      zone:'W01 · 벽·차폐벽 타일', tone:'cream', status:'제품·규격·표시가 확인 / 실물 샘플 승인 필요',
      name:'LAUCHE · LC 아이솔 베이지 9.8T', size:'600 × 1,200 × 9.8 mm', price:'61,000원 / 박스',
      facts:'무광 포세린 · 2장 / 1.44㎡ · 이즈세라믹 표시가 · 배송·세금 조건 주문 전 재확인',
      text:'바닥과 같은 시리즈로 벽과 중앙 차폐벽을 연결하는 제안입니다. 별도 강조 타일을 억지로 추가하지 않고 면의 깊이와 간접광을 살립니다. 규격은 시공 제안이며 AI 이미지의 격자가 이 규격을 정확히 재현한다는 의미는 아닙니다.',
      check:'벽·차폐벽 약 23㎡ × 여유 15% ÷ 1.44㎡ → 19박스, 1,159,000원 예시. 개구부·차폐벽 양면·졸리컷 수량은 실측 후 재계산합니다. 판매 페이지는 최소 주문 3박스이며 품절·구매 표기가 혼재해 재고·로트 확인이 필요합니다.',
      links:[['판매처·상품 사진',sources.wall],['브랜드 시리즈 설명',sources.tileSeries]]
    },
    {
      zone:'P01 · 세면 수전', tone:'sand', status:'동일 모델 2개 판매처 비교 / 구매 후보',
      name:'라우체 · 코인 2375B', size:'블랙 무광 · 벽매립 2홀', price:'255,000원 / 세트',
      facts:'딤하우스·용현바스몰 동일 표시가 · 용현바스몰 배송 무료 표기 · 설치 별도',
      text:'곡선 토수구와 분리된 원형 조작부를 제품 사진에서 확인했습니다. 컨셉의 블랙 벽 수전을 구현할 후보이며 시안과 조작부·토수구의 세부 형태는 다를 수 있습니다.',
      check:'돌출 길이·홀 간격·매립 깊이는 승인 치수도를 받아 확정합니다. 세면볼 중심으로 물이 떨어지도록 상판·볼과 함께 배치합니다. 매립 몸체·폽업·트랩 포함 범위, 벽 마감 두께와 수리 접근 방법을 판매처·시공자에게 확인합니다.',
      links:[['딤하우스',sources.faucet],['용현바스몰 가격 비교',sources.faucetCompare]]
    },
    {
      zone:'P02 · 세면대·일체형 상판', tone:'beige', status:'주문제작 설계 제안 / 동일 기성품 미확인',
      name:'샌드 베이지 세라믹 일체형 세면대', size:'W 1,400 × D 500 mm 제안', price:'제작·설치 예산 120–180만원',
      facts:'1식 계획 예산 · VAT 별도 · 업체 견적 미수령 · 세면대장·수전 제외',
      text:'길게 이어지는 상판과 직사각형 볼을 같은 계열의 재료로 제작하는 안입니다. 이미지에서 원석·인조석·타일 중 실제 재료를 확정할 수 없어, 구매 가능한 기성 모델인 것처럼 표기하지 않습니다.',
      check:'볼 약 500 × 320 × 깊이 120mm, 상판 완성 높이 약 850mm를 우선 검토하는 제안입니다. 사용자 신장·물튐·배수 경사로 조정합니다. 1,200mm 타일 한 장으로 1,400mm 상판을 무이음 제작할 수 없으므로 큰 판재 또는 이음 위치 승인이 필요합니다. 접합 방수·폽업·트랩 점검 공간까지 제작도에 포함합니다.',
      links:[['타일·상판 가공 상담',sources.wall],['기성 언더볼형 비교',sources.furniture]]
    },
    {
      zone:'P03 · 세면대장', tone:'sand', status:'주문제작 설계 제안 / 상판과 별도 산정',
      name:'그레이지 플로팅 세면장', size:'W 1,400 × D 450 × H 400 mm 제안', price:'제작·설치 예산 75–115만원',
      facts:'1식 계획 예산 · VAT 별도 · 상판·볼·수전 제외 · 열린 수납 + 손잡이 없는 전면',
      text:'원안의 긴 수평선과 왼쪽 열린 선반을 유지합니다. 욕실용 내수 기재·마감·절단면 방수·내식 철물을 지정하고 벽체 고정 보강을 포함해 견적을 받아야 합니다. 물이 지속적으로 닿는 위치는 피합니다.',
      check:'비교한 딤하우스 [1200] 언더볼형은 W1200 × D460 × H700(170 다릿발 표기), 550,000원입니다. 짧은 폭·다릿발·언더볼 구성으로 이 플로팅 일체형 시안과 다르며, 포함 부속·옵션·설치비 확인 전 두 금액을 직접 비교하지 않습니다.',
      links:[['기성 대안·치수 확인',sources.furniture],['맞춤 제작 상담','https://dimhouse.co.kr/']]
    },
    {
      zone:'P04 · 변기', tone:'white', status:'공식 규격 확인 / 도기와 매립 시스템 분리',
      name:'대림바스 · CC-420P', size:'625 × 390 × 345 mm · 공식 표기', price:'462,000원 / 도기',
      facts:'벽걸이·벽배수형 · BathNmore / G마켓 · 배송 25,000원 별도',
      text:'바닥이 드러나는 벽걸이 변기 형태를 구현할 후보입니다. 매립 물탱크·지지 프레임·버튼·연결 부속은 도기 가격에 포함된 것으로 계산하지 않습니다. 호환 세트를 먼저 확정해야 합니다.',
      check:'설치 포함 시스템 예산은 아래 공사비에 110–155만원(VAT 별도)을 배정했습니다. 도기 가격만으로 설치할 수 없습니다. 몬스터타일의 354,640원 + 배송 20,000원은 품절 비교가이며 구매 가능 최저가가 아닙니다. 구조 보강·배수 전환 불가 시 다른 방식으로 재검토합니다.',
      links:[['대림 공식 규격',sources.toilet],['BathNmore 판매처',sources.toiletShop],['몬스터타일 · 품절 비교',sources.toiletCompare]]
    },
    {
      zone:'P05 · 거울', tone:'white', status:'주문제작 제안 + 가격 비교용 기성품',
      name:'블랙 슬림 프레임 원형 LED 거울', size:'지름 700 mm · 3000K 후광 제안', price:'제작품 견적 필요',
      facts:'1개 · 프레임·전원부·설치 포함 범위 확인 · 시안의 실제 모델 미확인',
      text:'검은 원형 테두리와 따뜻한 간접광을 유지하는 주문 사양입니다. 비교품인 유일산업 전구색 LED 원형 거울 700은 디에스대성하우징에 115,000원, 배송 20,000원으로 표시되지만 현재 구매 불가입니다. 블랙 프레임이 동일한 제품으로 확인된 것은 아닙니다.',
      check:'제작품·기본 설치에 20–35만원(VAT 별도)을 예산상 가정했습니다. 아래 거울·천장·전기 공종 안에 포함한 금액입니다. 욕실 설치 적합성, 전원부 점검, 스위치·결로·벽체 고정 조건을 확인하고 거울 중심을 세면볼 중심과 맞춥니다.',
      links:[['유일산업 700 · 구매 불가 비교',sources.mirror],['맞춤 거울 상담','https://dimhouse.co.kr/']]
    }
  ];
  // All cost rows are a quantity of one package (식). KRW 10,000, excluding VAT.
  // These are planning allowances, not quotations or asserted market averages.
  const costs = [
    ['철거·보양·폐기','기존 타일·도기·천장 철거, 기본 보양·반출',[10,15],[50,75]],
    ['급배수·바탕 보강','욕실 내부 배관 조정·가구 고정 보강; 공용관 제외',[25,40],[40,60]],
    ['차폐벽 구조','자립 차폐벽 1면 구조·고정; 타일·방수는 다음 공종',[20,35],[30,45]],
    ['방수·경사·면 정리','벽·바닥·차폐벽 접합, 배수 경사, 양생·담수 점검',[20,35],[40,60]],
    ['타일·접착·줄눈','벽 약 23㎡·바닥 5.2㎡, 절단·운반·부자재·시공',[140,175],[110,155]],
    ['일체형 세면대·상판','맞춤 제작 1식·볼·배수 부속·설치; 수전·장 제외',[100,150],[20,30]],
    ['세면대장','그레이지 1400급 맞춤 장·열린 수납·고정 설치',[60,90],[15,25]],
    ['변기·매립 시스템','도기·호환 프레임·탱크·버튼·연결·설치',[90,125],[20,30]],
    ['세면·샤워 수전','세면 수전 1세트 + 미확정 샤워 1세트·설치',[55,80],[20,30]],
    ['거울·천장·전기·환기','거울 1개, 천장·기본 조명·간접광·일반 환풍기',[50,75],[25,40]],
    ['마감·준공 점검','실리콘·누수·배수·설비 작동 확인·기본 청소',[5,10],[15,25]]
  ];
  const sum = i => costs.reduce((total, row) => total + row[2][i] + row[3][i], 0);
  const direct = [sum(0),sum(1)];
  const management = [40,60];
  const supply = direct.map((v,i) => v + management[i]);
  const vat = supply.map(v => v * 0.1);
  const total = supply.map((v,i) => v + vat[i]);
  const format = value => Number(value.toFixed(1)).toLocaleString('ko-KR');
  const range = values => values.map(format).join('–');
  const views = [
    {src:'img/bathroom-concepts/bathroom-27-portrait-v1.png', label:'전체 시안', title:'샌드 스톤 · 히든 샤워', note:'현재 CONCEPT 8의 전체 이미지입니다. 러그 없는 바닥, 긴 세면 상판과 중앙 차폐벽의 구성을 유지했습니다.'},
    {src:'img/bathroom-concepts/bathroom-27-detail-vanity.png', label:'세면대·수전 디테일', title:'수평선과 블랙 수전', note:'시점을 가까이 옮겨 상판·일체형 볼·벽 수전·세면장 접합을 표현한 AI 상세 시안입니다. 제품 실사나 치수 도면이 아니며 실제 배수구·경사·수전 위치는 제작도에서 확정합니다.'},
    {src:'img/bathroom-concepts/bathroom-27-detail-wall.png', label:'차폐벽·빛 디테일', title:'차폐벽 뒤로 흐르는 빛', note:'차폐벽 상부와 옆면, 뒤쪽 벽의 간접광을 다른 시점으로 표현했습니다. 원안에서 보이지 않는 샤워 설비 배치는 확정하지 않았습니다. 시공 단면도가 아닌 AI 상세 시안입니다.'}
  ];
  card.querySelector('div').insertAdjacentHTML('beforeend','<button type="button" class="concept-pair" aria-haspopup="dialog" aria-controls="bath8-modal">디테일 뷰·제품·공사 가견적 보기 ↗</button>');
  document.getElementById('conceptGrid').insertAdjacentHTML('afterend', `
    <dialog class="bath10-modal" id="bath8-modal" aria-labelledby="bath8-heading">
      <div class="bath10-modal-bar"><span>CONCEPT 8 · DETAIL &amp; SHOPPING</span><button type="button" class="bath10-close" aria-label="컨셉 8 팝업 닫기" autofocus>닫기 ×</button></div>
      <section class="bath10-guide" aria-labelledby="bath8-heading">
        <section class="bath10-gallery" aria-label="컨셉 8 전체 및 디테일 뷰">
          <div aria-live="polite"><h2 id="bath8-view-title">${views[0].title}</h2><p id="bath8-view-label">${views[0].label}</p></div>
          <img class="bath10-preview" src="${views[0].src}" alt="컨셉 8 전체 시안" width="1024" height="1536">
          <div class="bath10-thumbnails" aria-label="뷰 선택">${views.map((view,i) => `<button type="button" data-bath8-view="${i}" aria-pressed="${i===0}"><img src="${view.src}" alt="" width="${i ? 1536 : 1024}" height="${i ? 1024 : 1536}" loading="lazy"><span>${view.label}</span></button>`).join('')}</div>
          <p id="bath8-view-note">${views[0].note}</p>
          <p class="bath10-gallery-disclaimer">전체 1장 + 새로 생성한 디테일 2장입니다. <strong>동일 공간을 참고한 AI 표현으로, 실제 제품 사진·정확한 실측 복원·시공 도면이 아닙니다.</strong></p>
        </section>
        <div class="bath10-heading"><p class="bath10-eyebrow">CONCEPT 8 · MATERIAL &amp; SHOPPING GUIDE</p><h2 id="bath8-heading">샌드 스톤 · 히든 샤워<br>차분한 면을 만드는 제품과 공사비</h2><p>긴 세면 상판, 벽걸이 변기, 중앙 차폐벽과 간접광을 기준으로 정리했습니다.<br>바닥·벽 타일과 주요 구매 품목 7가지를 확인하세요.</p></div>
        <div class="bath10-notice"><strong>“이미지 속 실제 제품”이 아닌 구현을 위한 구매 후보입니다.</strong><p>AI 시안만으로 제조사·모델·치수를 특정할 수 없습니다. 확인된 상품 사양과 새로 제안하는 제작 치수를 구분했습니다. 2026.09.22 공개 페이지 확인 기준이며 가격·옵션·재고·배송·세금은 주문 전에 재확인합니다. 확정되지 않은 제품을 동일 모델이나 인기 제품이라고 표시하지 않습니다.</p></div>
        <nav class="bath10-nav" aria-label="컨셉 8 상세 안내"><a href="#bath8-materials">타일·구매 품목</a><a href="#bath8-comparison">판매처·대안 비교</a><a href="#bath8-budget">공사 예상 금액</a><a href="#bath8-evidence">자료 검토·반영 내역</a></nav>
        <div class="bath10-products" id="bath8-materials">${products.map(item => `<section class="bath10-product" aria-label="${escape(item.zone)}"><div class="bath10-product-top"><span class="bath10-tone bath10-tone--${item.tone}" aria-hidden="true"></span><span>${escape(item.zone)}</span></div><p class="bath10-status">${escape(item.status)}</p><h3>${escape(item.name)}</h3><p class="bath10-size">${escape(item.size)}</p><p class="bath10-price">${escape(item.price)}</p><p class="bath10-facts">${escape(item.facts)}</p><p>${escape(item.text)}</p><div class="bath10-check">${escape(item.check)}</div><div class="bath10-links">${item.links.map(link).join('')}</div></section>`).join('')}</div>
        <p class="bath10-caption">원형 색상 칩은 품목 구분용 그래픽입니다. 실물 샘플·제품 사진이 아니며, 실제 상품 사진은 각 판매처 링크에서 확인할 수 있습니다.</p>
        <details class="bath10-details" id="bath8-comparison"><summary>여러 판매처를 비교한 결과 · 채택과 제외 이유</summary><ul>
          <li><strong>같은 타일 확인:</strong> ${link(['화신세라믹 공식',sources.tileOfficial])}과 ${link(['이즈세라믹',sources.floor])}에서 LC 아이솔 베이지 600각 51,000원/박스를 확인했습니다. 공식 권장가와 판매가의 비교이며 독립적인 최저가 검증은 아닙니다. 바닥 4박스 + 벽 19박스의 자재 표시가 합계는 1,363,000원이며 운임·세금 조건·실측 물량은 별도 확인합니다.</li>
          <li><strong>다른 타일 대안:</strong> ${link(['까르고 이터널 베이지 600', 'https://cargotile.com/product/detail.html?product_no=1373'])}는 37,000원/박스, ${link(['612', 'https://cargotile.com/product/detail.html?product_no=1378'])}는 57,000원/박스입니다. 각각 1.44㎡, VAT 포함. 상품 사진의 석재 결·색을 직접 비교했으며 LC와 동일 제품이 아닙니다. 더 저렴하다는 이유만으로 같은 마감으로 대체하지 않습니다.</li>
          <li><strong>사용자 영상의 타일:</strong> 저장 캡처에서 확인한 BLT IVORY도 ${link(['나무인터내셔널의 600×1200×9.5mm 상품', 'https://namuint.com/product/blt-ivory/792/category/50/display/1/'])}과 대조했습니다. 아이보리 톤 대안이며 가격의 적용 단위·재고가 확정되지 않아 주 견적의 기준으로 사용하지 않았습니다.</li>
          <li><strong>같은 수전 비교:</strong> 딤하우스와 용현바스몰 모두 코인 2375B 255,000원 표기를 확인했습니다. 배송·구성 부속·재고를 동일 조건으로 문의한 뒤 결정합니다. 다른 모델의 할인 가격을 이 모델의 최저가로 섞지 않았습니다.</li>
          <li><strong>변기·거울:</strong> 품절 또는 구매 불가 가격은 비교 기록으로만 표시했습니다. 주문제작 세면대·장·블랙 프레임 거울의 계획 예산을 판매처가 제출한 견적으로 표시하지 않았습니다.</li>
        </ul></details>
        <details class="bath10-details"><summary>누락하기 쉬운 구매물품 · 시공 전 확인 사항</summary><ul>
          <li><strong>샤워 수전:</strong> 원안에서 보이지 않아 모델·위치를 확정하지 않았습니다. 블랙 계열 샤워 1세트를 제안하고 세면 수전과 함께 공사비에 예산을 배정했습니다. 설치 방식·수압·사용 높이를 정한 뒤 구매합니다.</li>
          <li><strong>부속:</strong> 변기 매립 탱크·프레임·버튼·점검구, 세면 폽업·트랩·앵글밸브, 바닥·샤워 배수구, 거울 전원부, 간접조명 프로파일·전원장치, 일반 환풍기, 수건·휴지걸이 등 필수 철물을 확인합니다. 연출용 러그·화병·병·수건은 구매 예산에서 제외합니다.</li>
          <li><strong>타일·줄눈:</strong> 벽·차폐벽의 줄눈 높이를 정렬하고 코너 절단 폭을 먼저 배치합니다. 톤온톤 베이지 줄눈을 제안하지만 폭·재료는 제품 시방과 치수 편차에 맞춥니다. 줄눈은 방수층을 대신하지 않습니다. 시안의 무줄눈처럼 보이는 면을 그대로 시공 지시하지 않습니다.</li>
          <li><strong>배수·차폐벽:</strong> 벽 뒤 샤워 진입 폭·사용 공간과 변기 앞 여유를 실측합니다. 차폐벽의 구조·고정·방수 접합, 샤워와 세면대 배수 경사·트랩 점검을 검토합니다. 확인되지 않은 벽을 임의로 철거하거나 구조체를 타공하는 계획은 포함하지 않았습니다.</li>
          <li><strong>조명·청소:</strong> 베이지 샘플을 주간 및 3000K 조명에서 비교합니다. 간접광이 타일 요철·단차를 강조할 수 있어 바탕 평활도가 중요합니다. 일체형 볼 모서리·배수구와 블랙 도금의 세척 방법은 제작·제품 지침에 따릅니다.</li>
        </ul></details>
        <section class="bath10-budget" id="bath8-budget" aria-labelledby="bath8-budget-title"><p class="bath10-eyebrow">RENOVATION BUDGET · RP-B08-20260922 · 실측 전 가견적</p><h2 id="bath8-budget-title">철거부터 인테리어 완성까지</h2><p class="bath10-total">약 ${range(total.map(v => Math.round(v / 10) * 10))}만원</p><p>부가세 포함 · 예비비 별도 · 제품 구매비는 아래 공사비에 포함해 고려</p><p class="bath10-budget-note">주문제작 일체형 세면대·긴 하부장·벽걸이 변기 매립 시스템·차폐벽을 유지하는 조건입니다. 일반 보급형 패키지 가격이나 업체 확정 견적이 아닙니다.</p>
          <div class="bath10-assumptions"><h3>산정 가정 — 사진으로 측정한 치수가 아닙니다</h3><p>욕실 1개, 내부 2.0 × 2.6m = 5.2㎡(약 1.57평), 높이 2.3m. 벽은 둘레 9.2m × 2.3m − 개구부 약 1.6㎡ + 차폐벽 양면·측면 약 3.4㎡ ≈ 23㎡로 가정했습니다. 수도권 일반 반입·반출, 기존 철거 후 재방수, 욕실 내부 배관 조정 조건입니다. 현장 주소·실측·누수 상태는 미확인입니다.</p></div>
          <details class="bath10-cost-details"><summary>공종별 금액 · 포함 범위와 계산 보기</summary><div class="bath10-table-wrap" role="region" aria-label="컨셉 8 공사비 표, 가로 스크롤 가능" tabindex="0"><table><caption>단위: 만원 / 각 행 수량 1식 / 자재·경비 및 노무는 계획 배정액 / VAT 별도</caption><thead><tr><th scope="col">공종·포함 범위</th><th scope="col">자재·경비</th><th scope="col">노무</th><th scope="col">합계</th></tr></thead><tbody>${costs.map(([name,scope,materials,labor]) => `<tr><th scope="row">${name}<span>${scope}</span></th><td>${range(materials)}</td><td>${range(labor)}</td><td>${range(materials.map((v,i) => v + labor[i]))}</td></tr>`).join('')}</tbody><tfoot><tr><th scope="row">직접공사비</th><td colspan="3">${range(direct)}</td></tr><tr><th scope="row">현장관리·일반경비</th><td colspan="3">${range(management)}</td></tr><tr><th scope="row">공급가액</th><td colspan="3">${range(supply)}</td></tr><tr><th scope="row">부가세 10%</th><td colspan="3">${range(vat)}</td></tr><tr><th scope="row">예상 합계</th><td colspan="3">${range(total)}만원</td></tr></tfoot></table></div><p>상단 소매 표시가와 위 공종 예산을 다시 더하지 않습니다. 온라인 자재비의 VAT 포함 여부·운임과 업체 견적의 공급가액을 계약 단계에서 통일해야 합니다. 재료·노무 구분은 실제 업체의 단가표가 아닙니다.</p></details>
          <p><strong>예비비:</strong> 예상 합계의 약 10%, ${range(total.map(v => Math.round(v * 0.1)))}만원을 별도로 확보하는 계획입니다.</p><p><strong>별도·변동:</strong> 공용관, 구조 변경, 심한 누수·부식 복구, 욕실 확장, 문·문틀, 특수 양중, 전기 증설, 복합 환기·난방기는 제외했습니다. 맞춤 판재 등급·가공, 매립 변기 설치 가능 여부에 따라 금액이 크게 바뀔 수 있습니다.</p><p><strong>일정·계약:</strong> 약 7–12작업일 + 자재·제작 납기 별도. 양생은 자재 시방을 우선합니다. 현장 실측 후 공종별 업체 견적을 받고 결제 일정·A/S·견적 유효기간을 계약서로 확정합니다.</p>
        </section>
        <details class="bath10-details" id="bath8-evidence"><summary>기존 자료를 어디까지 확인했고 어떻게 반영했나요?</summary><ul>
          <li><strong>사용자 사진:</strong> 컨셉 8 원본과 현재 세로 시안을 직접 열어 긴 왼쪽 세면장·중앙 차폐벽·원형 거울·후면 간접광을 분석했습니다. 두 장을 생성 도구에 직접 입력해 별도의 상세 뷰 2장을 생성했습니다. 현장 욕실 사진도 확인해 수납·동선·설비 간섭을 점검했지만 해당 사진은 생성 입력이 아닙니다.</li>
          <li><strong>PPT:</strong> 저장된 욕실 자료 분석 문서를 검토하고 「후회 없는 욕실 리모델링_ 전문가 가이드」 6쪽의 세면대 유형, 「욕실 인테리어, 호갱되지 않고 셀프 계산하는 법」 26쪽의 수전·세면대 관계, 「2026 욕실 타일 트렌드」 9쪽의 타일 규격 슬라이드를 직접 재확인했습니다. 볼·수전 중심 정렬, 배수 점검, 규격·줄눈·경사와 가견적 조건에 반영했습니다. 이번에 모든 PPT의 전 페이지를 다시 읽은 것은 아닙니다.</li>
          <li><strong>유튜브:</strong> 저장된 타일 영상 분석과 ${link(['타일 영상 0:55', 'https://www.youtube.com/watch?v=jEfSyVUA3dw&t=55s'])} 캡처를 직접 재확인했습니다. 밝은 저채도 바탕 타일 비교에 참고했으며 영상 전체를 이번에 재시청한 것은 아닙니다. PPT·영상 캡처는 생성 도구에 직접 입력하지 않고 제품 검토·텍스트 사양에 반영했습니다.</li>
          <li><strong>새로 확인한 사이트:</strong> 라우체·화신세라믹·이즈세라믹·까르고타일·나무인터내셔널, 딤하우스·용현바스몰, 대림바스·BathNmore·몬스터타일·디에스대성하우징의 사양·표시가·사진 또는 판매 상태를 확인했습니다. 사실 확인 범위는 위 품목별 설명과 링크에 표시했습니다.</li>
          <li><strong>비용:</strong> 기존 PPT의 공종 구분과 ${link(['얼마드나의 타일 공사비 안내', 'https://ulmadna.com/blog/tile-construction-cost'])}를 비교 참고했습니다. 일반 욕실 패키지 범위를 복사하지 않고 맞춤 세면대·차폐벽·매립 시스템을 포함해 계획 예산을 별도 산정했습니다. 업체 견적을 받은 것은 아닙니다.</li>
        </ul></details>
      </section>
    </dialog>`);
  const modal = document.getElementById('bath8-modal');
  const opener = card.querySelector('.concept-pair');
  card.classList.add('bath10-clickable');
  let savedOverflow = '';
  function openModal() {
    if (modal.open) return;
    savedOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modal.showModal();
    modal.scrollTop = 0;
  }
  card.addEventListener('click', openModal);
  modal.querySelector('.bath10-close').addEventListener('click', () => modal.close());
  modal.addEventListener('close', () => {
    document.body.style.overflow = savedOverflow;
    opener.focus({preventScroll:true});
  });
  const outside = event => {
    const rect = modal.getBoundingClientRect();
    return event.target === modal && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom);
  };
  let backdropPress = false;
  modal.addEventListener('pointerdown', event => { backdropPress = outside(event); });
  modal.addEventListener('click', event => {
    if (backdropPress && outside(event)) modal.close();
    backdropPress = false;
  });
  modal.querySelectorAll('[data-bath8-view]').forEach(button => button.addEventListener('click', () => {
    const index = Number(button.dataset.bath8View);
    const view = views[index];
    const preview = modal.querySelector('.bath10-preview');
    preview.src = view.src;
    preview.alt = `컨셉 8 · ${view.label} · AI 시안`;
    preview.width = index ? 1536 : 1024;
    preview.height = index ? 1024 : 1536;
    modal.querySelector('#bath8-view-title').textContent = view.title;
    modal.querySelector('#bath8-view-label').textContent = view.label;
    modal.querySelector('#bath8-view-note').textContent = view.note;
    modal.querySelectorAll('[data-bath8-view]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  }));
  modal.querySelectorAll('.bath10-nav a').forEach(anchor => anchor.addEventListener('click', event => {
    event.preventDefault();
    const section = modal.querySelector(anchor.getAttribute('href'));
    if (section.tagName === 'DETAILS') section.open = true;
    modal.scrollTo({top:modal.scrollTop + section.getBoundingClientRect().top - modal.getBoundingClientRect().top - 80,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  }));
})();
