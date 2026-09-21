(() => {
  'use strict';
  if (new URLSearchParams(location.search).get('space') !== 'bathroom') return;
  const target = document.getElementById('conceptGrid');
  if (!target || document.getElementById('concept10-shopping')) return;

  // Retail observations, proposed dimensions and allowances must remain distinct.
  // No product in this list is identified as the actual model in the AI image.
  const products = [
    {
      zone: 'F01 · 메인 바닥', tone: 'beige', type: '규격·표시가 확인 / 구매 후보',
      name: '까르고타일 · 이터널 베이지',
      size: '600 × 600 × 9T mm', price: '37,000원 / 박스',
      facts: '무광 포세린 · 4장 / 1.44㎡ · 부가세 포함 · 배송 별도',
      text: '러그를 없앤 메인 바닥의 따뜻한 베이지 면을 구현할 후보입니다. 시안 속 타일의 실제 모델은 아닙니다. 젖은 욕실 바닥에 사용할 수 있는 미끄럼 성능은 판매처 확인 후 확정합니다.',
      check: '예시 물량: 메인 바닥 3.6㎡ + 10% 여유 → 3박스, 111,000원. 샤워 바닥 제외. 절단 배치에 따라 추가될 수 있습니다.',
      links: [['제품·가격 확인', 'https://cargotile.com/product/detail.html?product_no=1373']]
    },
    {
      zone: 'W01 · 민트 포인트 벽', tone: 'mint', type: '규격·표시가 확인 / 샘플 승인 필요',
      name: '이즈세라믹 · MU MINT M',
      size: '60 × 240 mm', price: '54,000원 / 박스',
      facts: '자기질 · 68장 / 약 0.979㎡ · 최소 3박스 · 배송·세금 조건 재확인',
      text: '샤워 벽과 변기·세면대 뒤 하부 벽에 세로로 적용하는 후보입니다. 실제 제품 사진은 시안보다 청회색이 강하고 표면 얼룩감이 있습니다. 동일 색·무늬가 아니므로 실물 민트 샘플과 조명 아래 대조해야 합니다.',
      check: '예시 물량: 10㎡ + 10% 여유 → 12박스, 648,000원. 판매 페이지의 재고·품절 표기가 혼재하므로 재고와 로트 확인 전 발주하지 않습니다.',
      links: [['제품·규격 확인', 'https://isceramic.kr/product/detail.html?product_no=19437']]
    },
    {
      zone: 'W02 · 베이지 바탕 벽', tone: 'cream', type: '규격·표시가 확인 / 구매 후보',
      name: '까르고타일 · 이터널 베이지 612',
      size: '600 × 1,200 × 10T mm', price: '57,000원 / 박스',
      facts: '무광 포세린 · 2장 / 1.44㎡ · 부가세 포함 · 배송 별도',
      text: '거울 위·옆의 베이지 바탕을 타일로 구현하는 제안입니다. 시안의 매끈한 미장 느낌과 달리 석재 무늬와 줄눈이 보입니다. 민트 타일과 두께 차이가 있으면 바탕에서 면을 맞춥니다.',
      check: '예시 물량: 9.5㎡ + 10% 여유 → 8박스, 456,000원. 니치·젠다이·졸리컷 물량은 실측 후 별도 산출합니다.',
      links: [['제품·가격 확인', 'https://cargotile.com/product/detail.html?product_no=1378']]
    },
    {
      zone: 'F02 · 샤워 바닥', tone: 'sand', type: '설계 제안 / 모델 미정',
      name: '베이지 소형 포세린 모자이크',
      size: '칩 약 50 × 50 mm 제안', price: '제품 선정 후 견적',
      facts: '샤워 바닥 약 1.2㎡ 가정 · 메인 600각과 구분',
      text: '이미지에서 샤워 안쪽은 작은 격자 타일입니다. 메인 바닥과 같은 제품이라고 표시하지 않습니다. 베이지 톤과 맨발 습윤 공간 적합성을 함께 확인해 선정합니다.',
      check: '줄눈이 많다는 이유만으로 미끄럼 안전을 보증할 수 없습니다. 배수구 방향의 경사, 방수 접합, 세척성 및 제조사 바닥 적용 사양을 확인합니다.',
      links: []
    },
    {
      zone: 'P01 · 세면 수전', tone: 'brass', type: '모델·표시가 확인 / 구매 후보',
      name: 'FONTANA · TF-L5317BG',
      size: '벽매립 2홀 · 브러쉬드 골드', price: '325,000원 / 세트',
      facts: '딤하우스 표시가 · 설치 별도 · 상세 치수도 확인 필요',
      text: '제품 사진에서 곡선 토수구와 원형의 분리 조작부를 확인해 시안의 형태에 가까운 후보로 골랐습니다. 실제 도금색은 실물 샘플로 확인합니다. 매립 몸체·폽업·트랩 포함 여부를 확인합니다.',
      check: '토수구 돌출 길이·매립 깊이·홀 간격은 승인 도면으로 확정합니다. 세면볼 중심에 물이 떨어지도록 볼 위치를 먼저 정하고, 볼과 수전을 같은 높이 조정량으로 함께 올립니다.',
      links: [['제품·가격 확인', 'https://dimhouse.co.kr/product/detail.html?product_no=1293'], ['하라디자인 사양 비교', 'https://hara365.com/product/detail.html?product_no=503']]
    },
    {
      zone: 'P02 · 샤워 수전', tone: 'brass', type: '모델·표시가 확인 / 구매 후보',
      name: 'FONTANA · TF-B5217BG',
      size: '노출형 레인샤워 · BG 컬러', price: '760,000원 / 세트',
      facts: '딤하우스 표시가 · 설치·배송 조건 별도 확인',
      text: '제품 사진의 원형 레인헤드·원통형 몸체를 확인한 후보입니다. 세면 수전과 폰타나 BG 계열로 맞추되 실제 색과 광택은 샘플로 비교합니다. 시안과 핸드샤워·호스의 세부 형상은 다릅니다.',
      check: '구성 부속, 높이 조절 범위, 기존 급수 간격과 수압을 발주 전에 확인합니다. 샤워기와 유리 파티션이 간섭하지 않도록 실측합니다.',
      links: [['제품·가격 확인', 'https://dimhouse.co.kr/product/detail.html?product_no=1299']]
    },
    {
      zone: 'P03 · 세면볼', tone: 'olive', type: '판매 목록 확인 / 상세 사양 미확인',
      name: '비키타일 · 무광 그린 원형 탑볼',
      size: '제품 치수 확인 필요', price: '204,000원 / 개',
      facts: '오늘의집 비키타일 판매 목록 표시가 · 상세 도면 미확보',
      text: '우드 상판 위 그린 원형 볼을 구현할 검토 후보입니다. 판매명과 가격까지 확인했으며, 지름·높이·재질·오버플로우 유무는 확인되지 않았습니다. 이 제품 기준으로 상판을 먼저 타공하면 안 됩니다.',
      check: '설계 검토 크기: 지름 약 400mm급. 이는 해당 상품의 확정 규격이 아닙니다. 제조사 모델명·치수도·배수 부속을 받아 최종 선정합니다.',
      links: [['판매자 목록에서 확인', 'https://store.ohou.se/brands/33435']]
    },
    {
      zone: 'P04 · 세면대장 + 상판', tone: 'oak', type: '주문제작 제안 / 견적 미수령',
      name: '오크 톤 플로팅 세면장',
      size: 'W 1,000 × D 480 × H 450 mm 제안', price: '제작 견적 필요',
      facts: '양쪽 열린 수납 + 중앙 도어 · 베이지 상판 · 도기·수전 별도',
      text: '사진과 동일한 기성품 모델은 확인되지 않아 주문제작으로 구분했습니다. 내수 기재·마감·절단면 방수와 벽체 고정 보강을 지정하고, 샤워수가 직접 닿지 않도록 합니다.',
      check: '완성 바닥에서 세면볼 윗면 약 880mm를 우선 검토합니다. 사용자의 키와 실제 볼 높이에 맞춰 상판 높이를 역산합니다. AI 이미지에서 정확한 40mm 상승을 측정한 것은 아닙니다.',
      links: [['욕실가구 제작 상담처', 'https://dimhouse.co.kr/']]
    },
    {
      zone: 'P05 · 변기', tone: 'white', type: '공식 규격 확인 / 구매 후보',
      name: '대림바스 · CC-420P',
      size: '625 × 390 × 345 mm (공식 표기)', price: '462,000원 / 도기 표시가',
      facts: '벽걸이·벽배수형 · BathNmore / G마켓 · 배송 25,000원',
      text: '바닥에서 띄운 시안의 변기를 구현할 후보입니다. 매립 물탱크·지지 프레임·버튼·연결 부속과 설치비는 도기 가격에 포함된 것으로 계산하지 않습니다.',
      check: '몬스터타일은 354,640원 + 배송 20,000원이지만 품절 표기를 확인했습니다. 가격 비교 자료일 뿐 구매 가능 최저가가 아닙니다. 공식 최신 치수와 판매처 도면이 다르면 제조사 확인을 우선합니다.',
      links: [['대림바스 공식 규격', 'https://www.daelimbath.com/product/product_view?idx=84'], ['BathNmore 판매처', 'https://item.gmarket.co.kr/Item?goodsCode=3522163664'], ['몬스터타일 · 품절 비교', 'https://www.monta.co.kr/product/detail.html?product_no=20317']]
    },
    {
      zone: 'P06 · 거울', tone: 'brass', type: '주문제작 제안 + 기성품 비교',
      name: '골드 톤 아치형 간접조명 거울',
      size: 'W 600 × H 1,000 mm 제안', price: '주문제작 견적 필요',
      facts: '프레임·아치·따뜻한 후광 유지 · 욕실 사용 사양 확인',
      text: '시안의 긴 비율과 골드 테두리를 유지하려면 주문제작으로 검토합니다. 비교한 잇츠라이팅 아르코 LED는 450 × 800 × 45mm, 199,000원으로 더 작고 프레임이 없는 제품입니다. 동일 제품이 아닙니다.',
      check: '아르코는 4000K 표기여서 시안의 따뜻한 간접광과도 다릅니다. 제작 시 3000K를 제안하며 방습·전원부 위치·유지보수와 현장 설치 가능 여부를 확인합니다.',
      links: [['제작 상담처', 'https://dimhouse.co.kr/'], ['기성 대안 아르코', 'https://itslighting.kr/product/detail.html?product_no=5357']]
    }
  ];
  // Units: KRW 10,000; budget allowances, NOT supplier quotes. VAT excluded here.
  const costs = [
    ['철거·보양·폐기', '기존 타일·도기·천장 철거, 기본 보양·반출', [10, 15], [50, 75]],
    ['급배수·바탕 보강', '욕실 내부 배관 조정, 세면장 고정 바탕; 공용관 제외', [30, 50], [40, 60]],
    ['방수·면 정리', '바닥·벽 접합·니치 방수, 경사·양생·담수 점검', [20, 35], [40, 65]],
    ['타일·접착·줄눈', '벽 2종·바닥·샤워 모자이크, 기본 절단과 시공', [130, 160], [100, 140]],
    ['변기·매립 시스템', 'CC-420P급 도기, 호환 탱크·프레임·버튼 및 설치', [90, 130], [20, 30]],
    ['세면볼·수전 2종', '그린 볼, 세면 수전·레인샤워 및 배수 부속·설치', [120, 145], [20, 30]],
    ['세면장·상판', '오크 톤 주문제작, 타공·벽 고정; 도기 비용 중복 없음', [80, 120], [15, 25]],
    ['거울·천장·전기·환기', '아치 거울, 천장, 기본 조명·환풍기 교체', [55, 85], [25, 40]],
    ['유리 파티션', '고정 유리 1면·고정부품 및 설치', [20, 30], [10, 20]],
    ['마감·준공 점검', '실리콘, 배수·누수·작동 확인, 기본 청소', [5, 10], [15, 25]]
  ];
  const sum = rangeIndex => costs.reduce((total, row) => total + row[2][rangeIndex] + row[3][rangeIndex], 0);
  const direct = [sum(0), sum(1)];
  const management = [40, 60];
  const supply = direct.map((value, i) => value + management[i]);
  const vat = supply.map(value => value * 0.1);
  const total = supply.map((value, i) => value + vat[i]);
  const format = value => Number(value.toFixed(1)).toLocaleString('ko-KR');
  const range = values => `${format(values[0])}–${format(values[1])}`;
  const escape = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const link = ([label, url]) => `<a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)} ↗</a>`;
  target.insertAdjacentHTML('afterend', `
    <section class="bath10-guide" id="concept10-shopping" aria-labelledby="bath10-heading">
      <div class="bath10-heading">
        <p class="bath10-eyebrow">CONCEPT 10 · MATERIAL &amp; SHOPPING GUIDE</p>
        <h2 id="bath10-heading">민트 아치 · 브라스 우드<br>이 공간을 구현하는 구매 가이드</h2>
        <p>바닥 1종, 벽타일 2종, 샤워 바닥과 주요 설비를 나누었습니다.<br>제품명·규격을 확인한 후보와 주문제작 사양을 구분해 살펴보세요.</p>
      </div>
      <div class="bath10-notice"><strong>AI 시안 속 제품의 실제 모델은 확인되지 않았습니다.</strong>
        <p>아래는 시안을 구현하기 위한 구매 후보입니다. 이미지에 해당 실물 제품을 정확히 합성했다는 뜻이 아닙니다. 2026.09.21 공개 페이지 확인 기준이며, 가격·재고·배송비·부가세는 주문 전에 재확인해야 합니다. 온라인 표시가는 자재 가격이고 전체 공사비는 아래에 따로 제시합니다.</p>
      </div>
      <nav class="bath10-nav" aria-label="컨셉 10 상세 안내"><a href="#bath10-materials">타일·설비 목록</a><a href="#bath10-budget">공사 예상 금액</a><a href="#bath10-evidence">검토 자료·적용 근거</a></nav>
      <div class="bath10-products" id="bath10-materials">
        ${products.map(item => `<section class="bath10-product" aria-label="${escape(item.zone)}">
          <div class="bath10-product-top"><span class="bath10-tone bath10-tone--${item.tone}" aria-hidden="true"></span><span>${escape(item.zone)}</span></div>
          <p class="bath10-status">${escape(item.type)}</p><h3>${escape(item.name)}</h3>
          <p class="bath10-size">${escape(item.size)}</p><p class="bath10-price">${escape(item.price)}</p>
          <p class="bath10-facts">${escape(item.facts)}</p><p>${escape(item.text)}</p>
          <div class="bath10-check">${escape(item.check)}</div>
          <div class="bath10-links">${item.links.map(link).join('')}</div>
        </section>`).join('')}
      </div>
      <p class="bath10-caption">색상 칩은 구성 구분용 그래픽이며 실물 샘플이나 제품 사진이 아닙니다. 실제 상품 사진은 각 판매처 링크에서 확인할 수 있습니다.</p>
      <details class="bath10-details"><summary>추가 구매 항목 · 타일·높이 결정 시 확인할 점</summary>
        <ul>
          <li><strong>누락하기 쉬운 항목:</strong> 매립 탱크·프레임·버튼, 폽업·트랩·앵글밸브, 배수구, 유리 고정 철물, 거울 전원부, 조명·환풍기, 접착제·줄눈·실리콘. 러그·화병·병·수건 등 연출 소품은 제외합니다.</li>
          <li><strong>타일:</strong> 민트는 세로 배열, 베이지는 넓은 면으로 정리합니다. 줄눈은 색상 샘플로 톤을 맞추되 폭은 제품의 치수 편차와 제조사 시방에 따릅니다. 에폭시 계열도 타일 표면 오염·변색 시험 후 결정하며 줄눈이 방수를 대신하지 않습니다.</li>
          <li><strong>높이:</strong> 이번 이미지는 세면장·볼·수전을 함께 약 4cm 올리는 의도로 수정했습니다. 실제 시공치수는 아닙니다. 볼 윗면 약 880mm를 우선 검토하고 사용자 신장·볼 높이·수전 토수 위치로 최종 조정합니다.</li>
          <li><strong>기존 자료의 라보나 600:</strong> 영림 YBTILE-E650-1, 600 × 600mm, 3장 / 1.08㎡도 대안입니다. 공개 가격을 확인하지 못해 메인 구매 예시에는 표시가를 확인한 이터널 베이지를 넣었습니다. 라보나와 같은 제품으로 취급하지 않습니다. ${link(['영림 카탈로그', 'https://s3.ap-northeast-2.amazonaws.com/younglim-bucket/5388379c-4593-402b-a1a6-f84748c5786a.pdf'])}</li>
          <li><strong>세면 수전 비교:</strong> 미스틱 2127GN은 딤하우스·나오미씨엠에서 각각 320,000원을 확인했지만 사진의 몸체가 각진 형태라 주 후보에서 제외했습니다. 코인 2375G는 255,000원으로 곡선형이지만 광택이 강합니다. 무광 느낌의 TF-L5317BG를 우선 후보로 두었습니다. ${link(['미스틱 · 딤하우스', 'https://dimhouse.co.kr/product/detail.html?product_no=1018'])} / ${link(['미스틱 · 나오미씨엠', 'https://m.naomicm.co.kr/product/detail.html?product_no=20891'])} / ${link(['코인 비교', 'https://dimhouse.co.kr/product/detail.html?product_no=1012'])}</li>
        </ul>
      </details>

      <section class="bath10-budget" id="bath10-budget" aria-labelledby="bath10-budget-title">
        <p class="bath10-eyebrow">RENOVATION BUDGET · 실측 전 가견적</p>
        <h2 id="bath10-budget-title">철거부터 완성까지</h2>
        <p class="bath10-total">약 ${format(Math.round(total[0] / 10) * 10)}–${format(Math.round(total[1] / 10) * 10)}만원</p>
        <p>부가세 포함 · 아래 공종별 가정 합산 · 예비비 별도</p>
        <p class="bath10-budget-note">보급형 욕실 패키지 가격이 아니라, 벽걸이 변기 매립 시스템·골드 톤 수전·주문제작 세면장을 포함한 이 컨셉의 예산 검토안입니다. 업체가 제출한 견적이나 확정 시장 평균이 아닙니다.</p>
        <div class="bath10-assumptions"><h3>금액 산정 조건</h3><p>욕실 1개 · 내부 2.0 × 2.4m = 4.8㎡(약 1.45평) · 천장고 2.3m 가정. 사진으로 측정한 치수가 아닙니다. 벽 타일은 개구부 등을 제외해 약 19.5㎡, 메인 바닥 3.6㎡·샤워 바닥 1.2㎡로 가정했습니다. 기존 철거 후 재방수, 욕실 내부 배관 조정, 정상적인 반입·반출 조건을 전제로 합니다.</p></div>
        <details class="bath10-cost-details"><summary>공종별 금액 근거 보기</summary>
          <div class="bath10-table-wrap" role="region" aria-label="공사 가견적 표, 가로 스크롤 가능" tabindex="0"><table>
            <caption>단위: 만원 / 모든 행은 1식 가정 / 재료·노무 구분은 계획 예산, 부가세 별도</caption>
            <thead><tr><th scope="col">공종·포함 범위</th><th scope="col">자재·경비</th><th scope="col">노무</th><th scope="col">합계</th></tr></thead>
            <tbody>${costs.map(([name, scope, materials, labor]) => `<tr><th scope="row">${name}<span>${scope}</span></th><td>${range(materials)}</td><td>${range(labor)}</td><td>${range(materials.map((v, i) => v + labor[i]))}</td></tr>`).join('')}</tbody>
            <tfoot><tr><th scope="row">직접공사비</th><td colspan="3">${range(direct)}</td></tr><tr><th scope="row">현장관리·일반경비</th><td colspan="3">${range(management)}</td></tr><tr><th scope="row">공급가액</th><td colspan="3">${range(supply)}</td></tr><tr><th scope="row">부가세 10%</th><td colspan="3">${range(vat)}</td></tr><tr><th scope="row">예상 합계</th><td colspan="3">${range(total)}만원</td></tr></tfoot>
          </table></div>
          <p>상단 구매 목록의 자재비는 이 공사비 안에 고려한 항목이며 다시 더하지 않습니다. 소매 표시가를 그대로 더한 확정 견적도 아닙니다. 실제 계약 시 공급가액·세금·고객 지급 자재를 다시 정리해야 합니다.</p>
        </details>
        <p><strong>예비비 별도:</strong> 예상 합계의 약 10%, ${format(Math.round(total[0] * 0.1))}–${format(Math.round(total[1] * 0.1))}만원 정도를 추가 확보하는 계획입니다.</p>
        <p><strong>별도·변동:</strong> 공용 배관 교체, 구조체 변경, 심한 누수·부식 복구, 문·문틀 교체, 욕실 확장, 대규모 전기 증설, 특수 양중·장거리 운반은 제외합니다. 이미지에서 문이 보이지 않는 것과 현장의 문 공사 제외는 별개의 문제입니다.</p>
        <p><strong>일정:</strong> 공사 약 7–12작업일을 가정하되 방수·접착재의 지정 양생 기간을 우선합니다. 주문제작·자재 납기는 별도입니다. 계약금·중도금·잔금, A/S, 유효기간은 업체 견적과 계약서로 확정합니다.</p>
      </section>
      <details class="bath10-details" id="bath10-evidence"><summary>어떤 자료를 검토했고 어디에 반영했나요?</summary>
        <ul>
          <li><strong>사용자 참고 사진:</strong> 민트 아치·우드 세면장 원본과 현재 컨셉 10 이미지를 직접 보고 생성 도구에 두 장 모두 입력했습니다. 색·배치·유리·거울 관계를 유지하면서 러그·소품 제거와 세면장 높이만 수정했습니다.</li>
          <li><strong>PPT:</strong> 저장된 욕실 7개 자료의 분석 문서를 검토하고, 「후회 없는 욕실 리모델링」 9쪽과 「셀프 계산하는 법」 26쪽의 높이·설비 관계 슬라이드, 「2026 욕실 타일 트렌드」 15쪽의 제품 소개 이미지를 직접 재확인했습니다. 모든 PPT 전 페이지를 이번에 다시 본 것은 아닙니다. 높이 조정·제품 규격 분리·가견적 조건에 반영했으며 슬라이드를 이미지 생성 입력으로 넣지는 않았습니다.</li>
          <li><strong>유튜브:</strong> 저장된 타일 영상 분석 문서와 ${link(['타일 영상 2:20 캡처', 'https://www.youtube.com/watch?v=jEfSyVUA3dw&t=140s'])}를 재확인했습니다. 컬러 포인트 타일 선택 원리만 참고했으며 영상 제품을 이 시안의 실제 타일이라고 단정하지 않았습니다. 이번에 영상 전체를 재시청한 것은 아닙니다.</li>
          <li><strong>제품·가격:</strong> 영림·대림바스, 까르고타일·이즈세라믹, 딤하우스·나오미씨엠·몬스터타일·BathNmore·비키타일·잇츠라이팅을 확인했습니다. 같은 모델의 비교와 서로 다른 대안을 구분했으며 인기 순위나 최저가 보장을 하지 않습니다.</li>
          <li><strong>공사비:</strong> 사용자 PPT의 공종 구분과 ${link(['얼마드나의 욕실·타일 비용 안내', 'https://ulmadna.com/blog/tile-construction-cost'])}를 비교 참고했습니다. 해당 사이트의 일반 패키지 범위를 이 주문제작 컨셉의 견적으로 복사하지 않고 위 조건의 예산을 별도로 잡았습니다.</li>
        </ul>
      </details>
    </section>`);
})();
