(() => {
  const space = new URLSearchParams(location.search).get('space') || location.hash.slice(1);
  if (space !== 'bathroom') return;
  let concepts = [
  {
    "name": "웜 스톤 욕조형",
    "description": "베이지 석재 느낌 타일과 일자 선반, 매립 욕조로 차분한 가족 욕실을 구성했습니다.",
    "id": 1
  },
  {
    "name": "월넛 호텔 샤워형",
    "description": "짙은 수납장과 밝은 타일을 대비시키고 샤워 구역을 유리로 나눴습니다.",
    "id": 2
  },
  {
    "name": "유리블록 채광형",
    "description": "유리블록 파티션으로 빛과 시선을 나누고 세면 영역을 밝게 정돈했습니다.",
    "id": 3
  },
  {
    "name": "세이지 포인트",
    "description": "세면 벽에만 세이지 타일을 쓰고 나머지는 밝은 중성색으로 구성했습니다.",
    "id": 7
  },
  {
    "name": "테라조 라운드",
    "description": "잔무늬 테라조와 둥근 거울을 조합하고 단정한 면 구성을 유지했습니다.",
    "id": 14
  },
  {
    "name": "이지 클린",
    "description": "벽걸이 수납과 단순한 타일 분할로 청소할 바닥 면을 확보했습니다.",
    "id": 17
  },
  {
    "name": "욕조와 샤워 일체형",
    "description": "욕조 위에 샤워 스크린을 두어 작은 공간에 두 기능을 담았습니다.",
    "id": 18
  },
  {
    "name": "브릭 타일 포인트",
    "description": "세면 벽의 가로 타일과 월넛 느낌 수납으로 리듬을 만들었습니다.",
    "id": 19
  },
  {
    "name": "북유럽 클린 샤워룸",
    "description": "STYLE CASE 01의 차분한 포세린 타일과 오크 톤 세면 수납을 적용했습니다. 타일·유리 파티션으로 샤워 공간을 나누고 작은 바닥 타일과 니켈 수전으로 관리하기 쉬운 욕실을 제안합니다.",
    "image": "bathroom-20-nordic-v2.png",
    "id": 20
  }
];
  concepts.push(
    { id: 21, name: '베이지 아키텍처', image: 'bathroom-study-01-20260919-v2.png', description: '욕실 디자인 4가지 검토안 · 베이지 타일을 벽·조적 파티션·수납으로 연결했습니다. 샤워 공간과 세면 공간을 나누고 선반과 거울 하부 조명으로 수평선을 정리했습니다.' },
    { id: 22, name: '그린 우드 배스', image: 'bathroom-study-02-20260919-v4.png', description: '욕실 디자인 4가지 검토안 · 올리브 타일 욕조 벽과 오크 톤 하부장, 오른쪽 상부장·열린 선반을 조합했습니다. 바닥은 라보나 600 제품 사진을 참고한 600×600 타일 표현입니다. AI 시안의 색상·무늬는 실물과 다를 수 있습니다.' },
    { id: 23, name: '테라코타 블루', image: 'bathroom-study-03-20260919-v4.png', description: '욕실 디자인 4가지 검토안 · 블루 세면 벽과 테라코타 샤워 벽, 트라버틴 패턴 바닥을 조합했습니다. 오른쪽 벽은 시에나 제품 연출 사진의 밝은 석재 결을 참고했습니다. 왼쪽에만 고정 모루유리 파티션을 두고 오른쪽 샤워 출입부는 열었습니다. AI 시안의 색상·무늬는 실물과 다를 수 있습니다.' },
    { id: 24, name: '우드 테라조 샤워룸', image: 'bathroom-study-04-20260919-v3.png', description: '욕실 디자인 4가지 검토안 · 우드 느낌 상부와 밝은 테라조 하부를 연결했습니다. 변기와 세면대 사이 벽을 없애고 뒤로 연속 젠다이를 구성했으며 변기 위에 욕실장을 배치했습니다. 세면대 오른쪽의 낮은 벽과 고정 유리로 샤워 영역을 구분했습니다.' }
  );
  concepts.push(...[
  {
    "id": 25,
    "name": "블루 그리드 · 레드 라인",
    "image": "bathroom-reference-1-6a253adf5d817723266782e0146d87fd.jpg",
    "reference": true,
    "description": "청회색 벽 타일의 격자와 붉은 줄눈·샤워 프레임을 연결한 대비형입니다. 왼쪽 뒤 샤워부스, 정면 세면대, 앞쪽 변기로 좁고 긴 공간을 구성합니다. 타원형 조명 거울이 직선 격자를 완화하고 블랙 수전과 수건걸이가 강조색을 정돈합니다. 바닥은 작은 사각 타일을 대각 방향으로 배치했습니다.",
    "note": "붉은 줄눈의 재료·색상 유지 성능과 프레임 방수 접합은 사진만으로 확인할 수 없습니다."
  },
  {
    "id": 26,
    "name": "내추럴 리브 · 라운드 우드",
    "image": "bathroom-reference-2-1df68ee80bde845c553659b071a13929.jpg",
    "reference": true,
    "description": "거친 베이지 상부 벽과 세로 리브 하부 벽을 수평 선반으로 구분했습니다. 둥근 모서리의 우드 세면장·거울과 오른쪽 아치 형태가 곡선 언어를 공유합니다. 왼쪽 창의 측광과 거울 위 벽등이 질감에 음영을 더하고 잔무늬 바닥이 전체 색조를 연결합니다.",
    "note": "보이는 범위는 변기·세면 공간이며 샤워 배치는 확인되지 않습니다. 상부 마감의 방수 성능과 우드 소재는 미확인입니다. 이미지 표기: STORIES / storiesconcept.com."
  },
  {
    "id": 27,
    "name": "샌드 스톤 · 히든 샤워",
    "image": "bathroom-reference-3-4e9e86a53948457770f89c2c8394a93b.jpg",
    "reference": true,
    "description": "왼쪽 긴 세면 상판·하부장과 중앙 조적형 차폐벽으로 수평선과 수직면을 대비시켰습니다. 차폐벽 뒤쪽에 샤워 구역으로 읽히는 공간을 두고, 원형 거울과 천장 간접광으로 베이지 면의 깊이를 드러냅니다. 블랙 수전과 짙은 매트가 낮은 채도의 공간에 대비를 줍니다.",
    "note": "뒤쪽 샤워 설비·배수 상세는 보이지 않습니다. 매트는 참고 사진의 소품이며 젖은 구역의 필수 요소로 추천하지 않습니다."
  },
  {
    "id": 28,
    "name": "올리브 니치 · 컴팩트 욕실",
    "image": "bathroom-reference-4-9aa7ff64bd0a9bf1b4ca1a462688d354.jpg",
    "reference": true,
    "description": "잔무늬 밝은 바탕 타일에 올리브 세로 타일을 거울·상부장 뒤로 한정했습니다. 왼쪽 샤워 공간과 세면대를 조적벽으로 구분하고, 조적벽의 두 단 니치를 수납으로 활용합니다. 변기 뒤 젠다이와 흰 상부장을 이어 작은 공간의 수납을 집중했습니다.",
    "note": "니치 방수·배수, 세면대와 변기의 사용 간격, 점검구 위치는 실측 검토가 필요합니다."
  },
  {
    "id": 29,
    "name": "세이지 리브 · 테라조 포인트",
    "image": "bathroom-reference-5-62b502291a6b616a9cb0f09cc878d33c.jpg",
    "reference": true,
    "description": "왼쪽 변기 상부 수납과 오른쪽 세면장을 세이지색 세로 리브로 연결했습니다. 세면대 뒤와 바닥의 큰 칩 테라조 패턴을 반복하고, 원형 거울과 높이가 다른 구형 펜던트로 직선 수납에 대비를 줍니다. 니치·오픈 선반의 간접조명과 오른쪽 창빛이 층을 만듭니다.",
    "note": "샤워 구역은 보이지 않습니다. 리브의 실제 소재·전기 설비의 습윤 구역 적합성은 미확인입니다. 이미지 표기: @rumahimpiannayima."
  },
  {
    "id": 30,
    "name": "민트 아치 · 브라스 우드",
    "image": "bathroom-reference-6-61dac90ecb220e8d6257f110020200fd.jpg",
    "reference": true,
    "description": "민트 세로 타일을 샤워 벽과 변기·세면대 뒤 하부 벽에 이어 공간을 묶었습니다. 유리 파티션으로 왼쪽 샤워 영역을 분리하고, 아치형 거울과 브라스 톤 수전·조명으로 따뜻한 대비를 줍니다. 우드 세면장의 열린 측면 수납과 샤워 니치가 기능을 나눕니다.",
    "note": "사진만으로 타일 규격·수전 모델·금속 마감은 확정하지 않습니다. 목재처럼 보이는 세면장의 내수 사양과 매립 수전 점검 조건을 확인해야 합니다."
  }
]);
  // Preserve original review IDs; remove only the requested cards, not source files.
  const removedIds = new Set([2, 17, 18, 20, 24, 7, 19, 21, 29]);
  const revisions = {
    1: { description: '베이지 석재 느낌 타일과 일자 선반, 매립 욕조를 유지했습니다. 소품과 바닥 러그를 없애 타일 면과 동선을 정돈했습니다.' },
    3: { description: '유리블록 파티션과 기존 배치를 유지하고 세면대·변기 뒤로 연속 젠다이를 추가했습니다. 타일과 선반의 수평선을 연결한 안입니다.', note: '젠다이 높이·깊이와 수전·거울·변기 점검 간격은 실측 후 조정합니다.' },
    14: { description: '테라조 하부 벽과 원형 거울을 유지하고 샤워부스의 돌출 바닥 턱을 없앴습니다. 샤워 바닥은 바깥 바닥보다 15mm 낮추는 계획입니다.', note: '−15mm는 요청하신 설계 의도이며 이미지가 정확한 치수나 시공 가능성을 보증하지 않습니다. 배수 경사·방수층·유리 고정 상세는 현장 검토가 필요합니다.' },
    22: { description: '올리브 욕조 벽과 오크 하부장, 오른쪽 상부장·열린 선반을 유지하면서 좌우 폭을 줄인 컴팩트 안입니다. 라보나 600 제품 사진을 참고했던 기존 바닥 표현을 유지했습니다.', note: '축소 폭은 시각적 검토안입니다. 실제 제품 크기·동선은 실측이 필요하며 AI 이미지의 타일 색·무늬는 실물과 다를 수 있습니다.' },
    23: { description: '블루 세면 벽과 테라코타 샤워 벽을 유지하며 공간의 좌우 폭을 줄였습니다. 왼쪽 고정 모루유리와 오른쪽 열린 샤워 진입부를 구성했습니다. 오른쪽 벽은 시에나 제품 사진을 참고했던 기존 표현을 유지했습니다.', note: '실제 타일 색·무늬와 설비 간격은 별도 확인이 필요합니다.' },
    26: { name: '내추럴 리브 · 모루 샤워', description: '베이지 리브와 둥근 우드 세면장의 재료 관계를 참고해 새로 구성한 AI 시안입니다. 왼쪽은 창 대신 타일 마감벽으로 연결하고 오른쪽에 모루유리 파티션과 샤워기를 배치했습니다. 오른쪽 벽까지 보이도록 시점을 확장했습니다.', note: '참고 이미지 표기: STORIES / storiesconcept.com. 원본 사진의 출처 표기는 보존하며, 이 이미지는 새로 생성한 디자인으로 실제 시공 사례가 아닙니다.' },
    27: { description: '사용자 제공 참고 이미지에서 바닥 러그를 제거한 AI 수정안입니다. 왼쪽 긴 세면 상판·중앙 차폐벽·원형 거울·천장 간접광을 유지하고 밝은 바닥 타일 면을 드러냈습니다.', note: '참고 이미지 기반 AI 수정. 뒤쪽 샤워 설비·배수 상세와 실제 제품 사양은 미확인입니다.' }
  };
  concepts = concepts.filter(({id}) => !removedIds.has(id)).map(concept => {
    if (!revisions[concept.id]) return concept;
    return { ...concept, ...revisions[concept.id], reference: false, image: `bathroom-${String(concept.id).padStart(2, '0')}-edited-20260919.png` };
  });
  // Reference 25 defines the shared 2:3 portrait frame. Keep its original intact.
  concepts = concepts.map(concept => concept.id === 25 ? concept : {
    ...concept,
    reference: false,
    image: `bathroom-${String(concept.id).padStart(2, '0')}-portrait-v1.png`,
    note: [concept.note, '기존 이미지 기반 세로 구도 AI 수정안 · 좌우 진입문과 문틀을 제외한 뷰입니다.'].filter(Boolean).join(' ')
  });
  document.querySelector('.hero > p').textContent = `ROOM PICK · ${concepts.length} CONCEPTS`;
  document.getElementById('title').textContent = `욕실 인테리어 컨셉 시안 ${concepts.length}가지`;
  document.getElementById('intro').textContent = 'AI 디자인·수정안 9개와 사용자 제공 참고 컨셉 1개를 CONCEPT 1~10으로 소개합니다. 이미지는 같은 2:3 세로 프레임으로 통일했습니다. 참고 사진은 ROOM PICK 제작·시공 사례가 아니며 AI 시안도 실제 시공 사진이 아닙니다. 실제 적용 전 실측과 배수·방수·환기 조건을 확인해야 합니다.';
  document.title = `욕실 인테리어 컨셉 시안 ${concepts.length}가지 | ROOM PICK`;
  document.getElementById('conceptGrid').innerHTML = concepts.map(({id,name,description,image,reference,note}, index) => {
    const number = String(id).padStart(2,'0');
    return `<article id="bathroom-${number}">
      <figure class="bathroom-shot"><img src="img/bathroom-concepts/${image || `bathroom-${number}-v1.png`}" alt="${name} ${reference ? '사용자 제공 참고 이미지' : '욕실 AI 디자인 시안'}" loading="lazy" decoding="async"></figure>
      <div><small>CONCEPT ${index + 1}</small><h2>${name}</h2><p>${description}</p><p class="reference-note">${reference ? '사용자 제공 참고 이미지 · 원본 비율·워터마크 유지' : 'AI 디자인 시안 · 실제 시공 사진 아님'}${note ? `<br>${note}` : ''}</p></div>
    </article>`;
  }).join('');
})();
