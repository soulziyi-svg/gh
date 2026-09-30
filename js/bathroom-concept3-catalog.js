(() => {
  const modal = document.getElementById('bath3-modal');
  if (!modal) return;
  // Historical catalog facts, not current product recommendations or image substitutions.
  const tiles = [
    ['라보나 1200','YBTILE-E650','600×1200','2장 · 1.44㎡','이탈리아'],
    ['라보나 600','YBTILE-E650-1','600×600','3장 · 1.08㎡','이탈리아'],
    ['컨셉도브','YBTILE-E660','600×1200','2장 · 1.44㎡','이탈리아'],
    ['시에나 토스카노','YBTILE-E500','600×1200','2장 · 1.44㎡','스페인'],
    ['시에나','YBTILE-E470','600×1200','2장 · 1.44㎡','이탈리아'],
    ['스텔라 테라조','YBTILE-E560','600×1200','2장 · 1.44㎡','스페인'],
    ['너트 화이트 / 베이지','YBTILE-E520 / E521','600×600','4장 · 1.44㎡','스페인']
  ];
  const nav = modal.querySelector('.bath3-nav');
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.bath3Panel = 'catalog';
  button.setAttribute('aria-controls','bath3-catalog');
  button.setAttribute('aria-pressed','false');
  button.textContent = '영림 타일 자료';
  nav.insertBefore(button, nav.lastElementChild);
  modal.querySelector('.bath3-info').insertAdjacentHTML('beforeend', `
    <section id="bath3-catalog" class="bath3-panel" hidden>
      <p class="bath3-kicker">YOUNGLIM · CATALOG REFERENCE</p>
      <h3>사진으로 살펴보는 영림 타일</h3>
      <p>사용자 제공 영림 카다로그의 욕실·타일 지면을 대조했습니다. 아래는 카다로그 수록 사양이며 현재 판매·재고를 확인한 구매 목록은 아닙니다.</p>
      <div class="bath3-notice"><strong>현재 적용 후보와 비교 자료를 구분합니다</strong><p>컨셉3은 벽·젠다이 시에나 E470, 바닥 라보나 600 E650-1을 참고한 AI 시안으로 변경했습니다. 기존 아이솔·HS 테라조는 제외했습니다. 나머지는 비교 후보이며 가견적에 추가 합산하지 않습니다. 최신 공급·가격과 바닥 적합성은 발주 전 확인 대상입니다.</p></div>
      <div class="bath3-catalog-scroll"><table class="bath3-catalog-table"><caption>카다로그 인쇄 82–87쪽 · 규격 mm / 포장 1BOX 기준</caption><thead><tr><th scope="col">제품 / 품번</th><th scope="col">규격</th><th scope="col">포장</th><th scope="col">표기 원산지</th></tr></thead><tbody>${tiles.map(([name,code,size,pack,origin])=>`<tr><th scope="row">${name}<small>${code}</small></th><td>${size}</td><td>${pack}</td><td>${origin}</td></tr>`).join('')}</tbody></table></div>
      <h4>색·결·접합을 보는 기준</h4>
      <dl class="bath3-design-list">
        <div><dt>라보나 · 같은 계열, 다른 규격</dt><dd>밝은 석재 무늬와 1200·600 규격 구성을 비교할 수 있습니다. 벽과 바닥을 연결하려면 실물 샘플의 색차·두께·줄눈 위치를 확인합니다. 같은 이름이라도 박스 면적은 다릅니다.</dd></div>
        <div><dt>시에나와 시에나 토스카노는 별도 제품</dt><dd>품번과 원산지가 다릅니다. 지면상 토스카노는 보다 따뜻하고 방향성이 두드러지는 결로 보이지만 이는 이미지 관찰입니다. 실물의 결 방향·반복 패턴·조명 아래 색을 비교한 뒤 선택합니다.</dd></div>
        <div><dt>스텔라 테라조 · 포인트 범위 검토</dt><dd>카다로그 연출은 세면 벽과 상판의 무늬를 연결합니다. 컨셉3의 HS 테라조와 동일 제품은 아닙니다. 변경을 검토한다면 입자 크기·무늬 밀도와 세면대 주변 절단선을 함께 확인합니다.</dd></div>
        <div><dt>너트 · 차분한 바탕 대안</dt><dd>화이트·베이지 두 색을 수납장·상판 샘플과 나란히 비교하는 용도로 봅니다. 사진의 외관만으로 마감 종류나 미끄럼 성능을 확정하지 않습니다.</dd></div>
      </dl>
      <h4>발주와 시공 전에 확인할 것</h4>
      <ul><li>정확한 품번, 현재 판매 여부·가격, 두께·마감·벽/바닥 사용 구역</li><li>젖은 맨발 조건의 미끄럼 시험 자료, 배수 경사와 절단 계획</li><li>권장 줄눈 폭·접착 시방·모서리 마감, 같은 생산 로트의 색차</li><li>박스 단위·배송·VAT·시공비·반품 조건을 분리한 견적</li></ul>
      <div class="bath3-notice"><strong>600각이라도 박스 면적은 다릅니다</strong><p>계산 예시: 바닥 4.4㎡에 손실 여유 10%를 가정하면 4.84㎡입니다. 라보나 600은 1.08㎡/BOX이므로 5BOX, 너트는 1.44㎡/BOX이므로 4BOX입니다. 실제 발주량은 배치·절단·보수용 여분으로 다시 산정하며 구매 확정 수량이 아닙니다.</p></div>
      <details><summary>출처·확인 범위·미확인 정보</summary><p>사용자 제공 「영림 카다로그.pdf」 총 87 PDF 페이지 중 욕실 도입 PDF 42페이지와 타일 PDF 43–45페이지(인쇄 80–87쪽)를 직접 열어 확인했습니다. 품번·규격·박스 구성·원산지는 이 지면의 표기입니다. 현재 유통 사양은 달라질 수 있습니다.</p><p>현재 판매가·재고, 두께·흡수율·미끄럼 시험 결과는 이 지면에서 확인되지 않았습니다. 연출 사진 속 수전·도기·환기 제품 모델도 식별되지 않아 임의로 영림 제품이라고 등록하지 않았습니다. 원본 PDF와 지면 이미지는 공개 다운로드로 올리지 않았습니다.</p></details>
    </section>`);
  // Source crops from PDF 43–45; never label catalog alternatives as installed products.
  const scenes = [
    ['scene-ravona','라보나 · 벽과 바닥의 연결',43,'벽의 세로 결, 바닥의 흐름과 투명 파티션을 함께 봅니다. 넓은 연출 공간의 욕조·가림벽을 컨셉3에 그대로 추가하는 제안은 아닙니다.'],
    ['scene-dove','컨셉도브 · 큰 면과 빛',43,'큰 거울과 세면대, 차분한 벽의 관계를 비교합니다. 사진 속 수전·도기는 모델이 확인되지 않았습니다.'],
    ['scene-denia','데니아 화이트 · 규격과 줄눈',44,'벽과 바닥의 스톤감을 연결한 사례입니다. 610 계열은 다른 600 계열과 줄눈 계획을 별도로 잡아야 합니다.'],
    ['scene-toscano','시에나 토스카노 · 결의 방향',44,'세로 층리와 짙은 바닥 대비를 봅니다. 강한 무늬의 범위와 조명에 따른 명암을 비교합니다.'],
    ['scene-siena','시에나 · 부드러운 층리',44,'밝은 무늬가 벽과 바닥으로 이어집니다. 토스카노와 다른 품번·원산지의 제품입니다.'],
    ['scene-terrazzo','스텔라 테라조 · 포인트의 밀도',45,'세면 벽과 상판의 입자 무늬를 연결한 사례입니다. 컨셉3의 HS 테라조와 동일 제품이 아닙니다.'],
    ['scene-nut','너트 화이트 · 수평선 정리',45,'젠다이 상단과 줄눈, 수전의 위치 관계를 봅니다. 정확한 높이와 시공 상세는 사진만으로 확정하지 않습니다.']
  ];
  const samples = [
    ['E650','라보나 1200','600×1200','2장 · 1.44㎡','이탈리아',43],
    ['E650-1','라보나 600','600×600','3장 · 1.08㎡','이탈리아',43],
    ['E660','컨셉도브','600×1200','2장 · 1.44㎡','이탈리아',43],
    ['E480','데니아 화이트 1220','610×1220','2장 · 1.49㎡','이탈리아',44],
    ['E480-1','데니아 화이트 610','610×610','4장 · 1.49㎡','이탈리아',44],
    ['E490','데니아 그레이 1220','610×1220','2장 · 1.49㎡','이탈리아',44],
    ['E490-1','데니아 그레이 610','610×610','4장 · 1.49㎡','이탈리아',44],
    ['E500','시에나 토스카노','600×1200','2장 · 1.44㎡','스페인',44],
    ['E470','시에나','600×1200','2장 · 1.44㎡','이탈리아',44],
    ['E560','스텔라 테라조','600×1200','2장 · 1.44㎡','스페인',45],
    ['E190','블루사보이 비앙코 600','600×600','3장 · 1.08㎡','이탈리아',45],
    ['E570','단테 스톤','600×1200','2장 · 1.44㎡','스페인',45],
    ['E520','너트 화이트','600×600','4장 · 1.44㎡','스페인',45],
    ['E521','너트 베이지','600×600','4장 · 1.44㎡','스페인',45],
    ['E510','스노우 비앙코','600×600','4장 · 1.44㎡','스페인',45],
    ['E550','아틱 화이트','600×600','3장 · 1.08㎡','스페인',45]
  ];
  const photo = (file,title,page) => `<button type="button" class="bath3-reference-photo" data-reference-photo="${file}" data-reference-title="${title}" data-reference-page="${page}" aria-label="${title} 확대"><img src="img/younglim-reference/${file}.jpg" alt="영림 카다로그 ${title}" loading="lazy" decoding="async"><span>이미지 확대 ↗</span></button>`;
  const panel = modal.querySelector('#bath3-catalog');
  panel.querySelector('.bath3-catalog-scroll').insertAdjacentHTML('beforebegin', `
    <p class="bath3-source">2024.09.12 발행 · 영림 아펠 카다로그 · 공간 연출 7장 + 규격별 샘플 16장. 원본 지면에서 발췌한 이미지이며 AI 생성 이미지가 아닙니다.</p>
    <h4>01 · 공간에서 보는 재료</h4>
    <div class="bath3-reference-scenes">${scenes.map(([file,title,page,note])=>`<article>${photo(file,title,page)}<h5>${title}</h5><p>${note}</p><small>출처: 영림 카다로그 연출 이미지 · PDF ${page}쪽</small></article>`).join('')}</div>
    <h4>02 · 타일 이미지와 규격</h4>
    <p class="bath3-source">실제 크기를 비교하는 축척 도면이 아닙니다. 인쇄·화면색은 실물과 다를 수 있으며 미끄럼 성능·최신 가격·재고는 별도 확인이 필요합니다.</p>
    <div class="bath3-reference-tiles">${samples.map(([code,name,size,pack,origin,page])=>`<article>${photo(code,name,page)}<h5>${name}</h5><small>YBTILE-${code}</small><strong>${size} mm</strong><p>${pack} / BOX<br>${origin}</p><small>출처: 영림 · PDF ${page}쪽</small></article>`).join('')}</div>
    <h4>03 · 규격 비교와 시공 체크</h4>`);
  panel.querySelector('tbody').innerHTML = samples.map(([code,name,size,pack,origin])=>`<tr><th scope="row">${name}<small>YBTILE-${code}</small></th><td>${size}</td><td>${pack}</td><td>${origin}</td></tr>`).join('');
  panel.querySelector('details p:last-child').textContent = '현재 가격·재고, 두께·흡수율·미끄럼 성능은 미확인입니다. 연출 사진 속 수전·도기·환기 제품 모델도 확인되지 않았습니다. 이미지는 영림 카다로그 PDF 43–45쪽 발췌이며 설명은 ROOM PICK의 시각적 해석입니다. 원본 PDF 전체는 공개 다운로드로 제공하지 않습니다.';
  const viewer = document.createElement('dialog');
  viewer.className = 'bath3-reference-viewer';
  viewer.setAttribute('aria-label','영림 참고 이미지 확대');
  viewer.innerHTML = '<button type="button" autofocus>닫기 ×</button><img alt=""><p></p>';
  document.body.append(viewer);
  viewer.querySelector('button').addEventListener('click',()=>viewer.close());
  viewer.addEventListener('click',event=>{if(event.target===viewer) viewer.close();});
  panel.addEventListener('click',event=>{
    const target = event.target.closest('[data-reference-photo]');
    if(!target) return;
    viewer.querySelector('img').src = `img/younglim-reference/${target.dataset.referencePhoto}.jpg`;
    viewer.querySelector('img').alt = target.dataset.referenceTitle;
    viewer.querySelector('p').textContent = `${target.dataset.referenceTitle} · 영림 아펠 카다로그(2024) PDF ${target.dataset.referencePage}쪽 발췌`;
    viewer.showModal();
  });
  button.addEventListener('click', () => {
    modal.querySelectorAll('.bath3-panel').forEach(panel => { panel.hidden = panel.id !== 'bath3-catalog'; });
    nav.querySelectorAll('[data-bath3-panel]').forEach(tab => tab.setAttribute('aria-pressed', String(tab === button)));
    modal.querySelector('.bath3-info').scrollTop = 0;
  });
})();
