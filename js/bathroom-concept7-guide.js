(() => {
  'use strict';
  if (new URLSearchParams(location.search).get('space') !== 'bathroom') return;
  const card = document.getElementById('bathroom-26');
  if (!card || document.getElementById('bath7-modal')) return;
  const esc = v => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const shop = (label,url) => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`;
  const dim = n => 'https://dimhouse.co.kr/product/detail.html?product_no='+n;
  const products = [
    ['바닥','고강타일 · 티알 테라조 아이보리KB','600 × 600 mm · 4장 / 1.44㎡','41,000원 / 박스 · 비교용',
      '밝은 테라조 계열 후보. 현재 품절 및 부산·경남·울산 전용 표기가 있어 구매 확정 품목에서 제외했습니다. 사진과 칩 크기·분포가 동일한 제품은 아닙니다. 5㎡ × 1.1 ÷ 1.44 → 4박스 가정 시 표시가 164,000원. 바닥 적합성·미끄럼 성능·입고·배송·VAT 확인 후 채택합니다.',
      [['제품·판매 상태','https://gogangtilestore.com/product/티알-테라조-아이보리kb/5363/']]],
    ['벽·젠다이','까르고타일 · 이터널 베이지 612','600 × 1,200 × 10 mm · 2장 / 1.44㎡','57,000원 / 박스 · VAT 포함',
      '베이지 석재 느낌을 구현할 대체 후보. 젠다이 전면은 300 × 600mm로 재단 제안하며 시안 격자와 실제 규격은 다릅니다. 타일 면적 16㎡ × 1.15 ÷ 1.44 → 13박스, 741,000원 예시. 공식 목록 표시가 확인, 상세페이지 접근 실패로 샘플·재고·가공비를 발주 전 확인해야 합니다.',
      [['공식 제품 목록','https://www.cargotile.com/'],['제품 상세','https://cargotile.com/product/detail.html?product_no=1378']]],
    ['세면 수전','FONTANA · TF-L4017H BG','에르사 · 브러쉬드골드 · 원홀 탑볼용','293,000원 / 세트',
      '하라디자인 표시가. 탑볼 뒤에 설치하는 골드 계열 후보입니다. 토수 높이·돌출·타공·폽업 포함 여부는 승인도 확인 필요. 이미지 속 수전과 동일 모델로 식별된 것은 아닙니다. 설치·운송·세금 조건 별도 확인.',
      [['제품·가격','https://hara365.com/product/폰타나에르사-tf-l4017h-bg-브러쉬드골드-원홀-세면대-탑볼수전/715/']]],
    ['샤워 수전','FONTANA · TF-B5717B BG','에르사 · 브러쉬골드 · 매립 레인샤워','732,000원 / 세트 · 배송 4,000원',
      '누오보 상세페이지 표시가. 정면 벽 매립 샤워용 후보로, 매립 몸체·레인헤드·핸드샤워 구성과 재고를 주문 전 확인합니다. 구매/품절 문구가 혼재해 즉시 구매 가능 여부는 미확정입니다. 매립 깊이·점검 방법·수압 검토가 필요하며 이미지와 부품 형상은 다를 수 있습니다.',
      [['제품·구성 확인','https://m.e-nuovo.co.kr/product/detail.html?product_no=4724']]],
    ['세면대','딤하우스 · 78204R 화이트 탑볼','화이트 도기 · 치수 승인 후 상판 타공','45,000원 / 개',
      '공개 상세페이지 표시가를 확인한 기성 대안입니다. 원본의 얕은 타원 볼과 동일 규격·형상으로 확정하지 않았습니다. 실측 도면과 실물 사진 승인 전 주문 보류. 수전·폽업·트랩·상판 및 설치 포함 여부는 별도 확인.',
      [['제품 사진·가격',dim(1381)]]],
    ['세면대장','라운드 오크 톤 플로팅장 · 주문제작','W800 × D480 × H450mm 제안','상판·장 제작 및 설치 예산 90–140만원',
      '시안처럼 둥근 양 끝과 2단 서랍을 유지하는 조건의 계획 배정액(VAT 별도), 업체 견적 미수령입니다. 볼·수전 별도. 욕실용 내수 기재·단면 방수·벽체 보강을 지정합니다. 기성 비교품 ES600-2004는 600 × 475 × 485mm, 364,500원이나 폭·형상·구성이 달라 기본안에 중복 계산하지 않습니다.',
      [['기성 대안 ES600-2004',dim(1397)]]],
    ['변기','대림바스 · CC-764','투피스형 · 배수 치수는 공식 도면 확인','164,000원 / 세트 · 배송 25,000원',
      'Bath N More 표시가, 제목에 부속 포함 표기. 마켓올데이는 190,000원 + 배송 25,000원으로 비교했습니다. 부속·시트 옵션을 동일 조건으로 확인해야 하며 최저가 보장은 아닙니다. 시안의 도기와 완전히 같은 외형이 아닌 바닥 설치형 대안입니다. 설치 별도.',
      [['공식 제품','https://www.daelimbath.com/product/product_view?idx=70'],['Bath N More','https://bathnmore.co.kr/product/detail.html?product_no=339'],['마켓올데이 비교','https://marketallday.co.kr/product/detail.html?product_no=2090']]],
    ['거울','딤하우스 · 사각 R 간접조명거울','600 × 800 mm','150,000원 / 개',
      '둥근 사각형의 기성 대안입니다. 시안의 골드 테두리 일반 거울과 달리 간접조명형이며 동일 프레임 사양은 아닙니다. 골드 프레임 유지 시 주문제작 추가 견적 필요. 방습·전원부·고정·설치 조건 확인 후 결정합니다.',
      [['제품·맞춤 상담',dim(1409)]]],
    ['파티션·배수·기타','모루유리 고정 파티션 / 선형 유가 / 벽등','파티션 약 W900 × H2200 / 유가 약 L800mm 제안','제품·두께·고정 방식 미확정',
      '치수는 사진 실측이 아닌 설계 가정입니다. 안전유리 구성·고정 검토 후 제작합니다. 유가는 정면 샤워 벽 하단에 배치하고 트랩·청소 점검·경사를 확인합니다. 블랙 벽등·원형 다운라이트·일반 환풍기 및 필수 부속은 아래 계획 예산에 포함, 화병 등 연출 소품은 제외합니다.',
      []]
  ];
  // Planning allowances in KRW 10,000, excluding VAT; not supplier quotations.
  const costs = [
    ['보양·철거·폐기물 반출',60,90],
    ['급배수 조정·매립 수전 배관',70,110],
    ['재방수·바탕·바닥 경사',60,90],
    ['타일·젠다이·상부 질감 마감',170,230],
    ['도기·수전·맞춤장·거울 구매 및 설치',150,210],
    ['모루유리·선형 유가·고정 설치',60,90],
    ['천장·벽등·전기·일반 환기',50,75],
    ['실리콘·준공 점검·청소',25,40]
  ];
  const direct=[1,2].map(i=>costs.reduce((s,r)=>s+r[i],0));
  const supply=direct.map((n,i)=>n+[30,50][i]);
  const total=supply.map(n=>n*1.1);
  const range = a=>a.map(n=>n.toLocaleString('ko-KR',{maximumFractionDigits:1})).join('–');
  const views=[
    ['bathroom-26-portrait-v2.png','정면 전체 뷰',1024,1536],
    ['bathroom-26-view-left.png','좌측 전체 뷰',1536,1024],
    ['bathroom-26-view-right.png','우측 전체 뷰',1536,1024]
  ];
  const src = name=>'img/bathroom-concepts/'+name;
  card.querySelector('div').insertAdjacentHTML('beforeend','<button type="button" class="concept-pair" aria-haspopup="dialog" aria-controls="bath7-modal">전체 뷰·제품·간단 가견적 보기 ↗</button>');
  document.getElementById('conceptGrid').insertAdjacentHTML('afterend',`
    <dialog id="bath7-modal" class="bath10-modal" aria-labelledby="bath7-heading">
      <div class="bath10-modal-bar"><span>CONCEPT 7 · VIEWS &amp; ESTIMATE</span><button type="button" class="bath10-close" autofocus aria-label="컨셉 7 팝업 닫기">닫기 ×</button></div>
      <section class="bath10-guide">
        <div class="bath10-heading"><h2 id="bath7-heading">내추럴 베이지 · 모루 샤워</h2><p>정면과 좌·우측 전체 뷰, 실제 상품 후보와 간단 공사 가견적</p></div>
        <section class="bath10-gallery" aria-label="컨셉 7 이미지 선택">
          <h3 id="bath7-view-title" aria-live="polite">정면 전체 뷰</h3>
          <img class="bath10-preview" src="${src(views[0][0])}" width="1024" height="1536" alt="컨셉 7 정면 전체 AI 시안">
          <div class="bath10-thumbnails">${views.map(([file,label,w,h],i)=>`<button type="button" data-bath7-view="${i}" aria-pressed="${i===0}"><img src="${src(file)}" width="${w}" height="${h}" alt="" loading="lazy"><span>${label}</span></button>`).join('')}</div>
          <p class="bath10-gallery-disclaimer">동일 시안을 참고해 생성한 AI 이미지입니다. 좌·우측 뷰의 보이지 않던 부분과 비례는 추정이며 실제 제품 사진이나 정확한 3D 실측 복원은 아닙니다.</p>
        </section>
        <div class="bath10-notice"><strong>견적 적용 후보 ≠ 이미지에 실제 사용된 제품</strong><p>생성 이미지에서 제조사·모델을 특정할 수 없습니다. 아래는 실제 판매 상품을 조사한 구현 후보와 주문제작 사양입니다. 이미지를 해당 제품으로 다시 생성한 것은 아닙니다. 확인일 2026.09.25 · 재고·옵션·배송·VAT·현장 적합성은 주문 전 재확인합니다.</p></div>
        <section class="bath10-budget" aria-labelledby="bath7-budget-title">
          <p class="bath10-eyebrow">RP-B07-20260925 · 실측 전 가견적</p>
          <h2 id="bath7-budget-title">철거부터 마감까지 · 간단 견적</h2>
          <p class="bath10-total">약 ${range(total)}만원</p>
          <p>VAT 포함 · 예비비 별도 · 제품비와 제작·설치비 포함 계획 예산</p>
          <p>가정: 욕실 2.0 × 2.5m = 5㎡, 높이 2.3m, 기존 철거 후 재방수. 전체 벽 약 19㎡ 중 타일 16㎡·건식 상부 질감 마감 3㎡. 일반 반출 조건, 공용관·구조 변경 없음. 현장 지역·실측·누수 상태 미확인입니다.</p>
          <div class="bath10-table-wrap" tabindex="0" role="region" aria-label="간단 가견적 표"><table><caption>단위 만원 / 각 공종 1식 / 재료·노무 합산 계획액, VAT 별도</caption><thead><tr><th scope="col">공종·포함 범위</th><th scope="col">예상 범위</th></tr></thead><tbody>${costs.map(([name,lo,hi])=>`<tr><th scope="row">${name}</th><td>${range([lo,hi])}</td></tr>`).join('')}</tbody><tfoot><tr><th>직접공사비</th><td>${range(direct)}</td></tr><tr><th>현장관리·일반경비</th><td>30–50</td></tr><tr><th>공급가액</th><td>${range(supply)}</td></tr><tr><th>VAT 10%</th><td>${range(supply.map(n=>n*.1))}</td></tr><tr><th>예상 총액</th><td>${range(total)}만원</td></tr></tfoot></table></div>
          <p>상품 표시가를 합산한 확정 견적이 아닌 <strong>선정 후보·맞춤장·미확정 마감까지 고려한 계획 배정액</strong>입니다. 아래 상품 가격을 총액에 다시 더하지 않습니다. 표시가의 세금 조건과 업체 공급가액은 계약 전 통일합니다.</p>
          <p>별도 예비비 약 10%(${range(total.map(n=>Math.round(n*.1)))}만원). 문·문틀, 공용배관, 구조·전기 증설, 특수 양중, 숨은 누수 복구, 휴젠트 등 복합 환기기는 제외. 예상 7–10작업일+제작 납기, 양생은 시방 우선. 결제·A/S·유효기간은 업체 견적 수령 후 계약으로 확정합니다.</p>
        </section>
        <h2>견적 적용 제품 후보</h2>
        <div class="bath10-products">${products.map(([zone,name,size,price,note,links])=>`<section class="bath10-product"><p class="bath10-eyebrow">${esc(zone)}</p><h3>${esc(name)}</h3><p class="bath10-size">${esc(size)}</p><p class="bath10-price">${esc(price)}</p><p>${esc(note)}</p><div class="bath10-links">${links.map(([l,u])=>shop(l,u)).join('')}</div></section>`).join('')}</div>
        <details class="bath10-details"><summary>확인 범위·발주 전 체크</summary><p>고강타일·까르고타일·하라디자인·누오보·딤하우스·대림바스·Bath N More·마켓올데이 공개 페이지를 비교했습니다. 상품에 따라 품절·지역 제한·상세 접근 실패가 있어 이를 별도 표시했습니다. 판매자 견적을 받은 것은 아닙니다.</p><p>바닥은 젖은 맨발 사용 적합성과 배수 경사, 젠다이는 줄눈·끝 절단·상판 물흐름, 매립 수전은 몸체 구성과 점검성, 목재 느낌 장은 내수 사양을 승인해야 합니다. 상부 질감 마감은 샤워 직접 습윤부에 적용하지 않습니다. 새 외부 상품 사진을 무단 복사하지 않고 판매처의 원본 사진 링크를 제공합니다.</p></details>
      </section>
    </dialog>`);
  const modal=document.getElementById('bath7-modal');
  const opener=card.querySelector('.concept-pair');
  let overflow='';
  card.classList.add('bath10-clickable');
  card.addEventListener('click',()=>{if(modal.open)return;overflow=document.body.style.overflow;document.body.style.overflow='hidden';modal.showModal();modal.scrollTop=0;});
  modal.querySelector('.bath10-close').addEventListener('click',()=>modal.close());
  modal.addEventListener('close',()=>{document.body.style.overflow=overflow;opener.focus({preventScroll:true});});
  const outside=e=>{const r=modal.getBoundingClientRect();return e.target===modal&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom);};
  let pressedOutside=false;
  modal.addEventListener('pointerdown',e=>{pressedOutside=outside(e);});
  modal.addEventListener('click',e=>{if(pressedOutside&&outside(e))modal.close();pressedOutside=false;});
  modal.querySelectorAll('[data-bath7-view]').forEach(button=>button.addEventListener('click',()=>{
    const [file,label,w,h]=views[Number(button.dataset.bath7View)];
    const preview=modal.querySelector('.bath10-preview');
    preview.src=src(file);preview.alt='컨셉 7 '+label+' · AI 시안';preview.width=w;preview.height=h;
    modal.querySelector('#bath7-view-title').textContent=label;
    modal.querySelectorAll('[data-bath7-view]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  }));
})();

