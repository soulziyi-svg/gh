(() => {
  const space = new URLSearchParams(location.search).get('space') || location.hash.slice(1);
  if (space !== 'bathroom') return;
  const concepts = [
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
  document.querySelector('.hero > p').textContent = `ROOM PICK · ${concepts.length} CONCEPTS`;
  document.getElementById('title').textContent = `욕실 인테리어 컨셉 시안 ${concepts.length}가지`;
  document.getElementById('intro').textContent = '욕조·샤워·세면 동선과 수납, 타일·조명을 다르게 구성한 기존 9안에 새 욕실 디자인 검토안 4가지를 추가했습니다. AI 디자인 시안이며 이미지는 늘림이나 잘라내기 없이 원본 비율로 표시합니다. 실제 적용 전 현장 치수와 배수·방수·환기 조건을 확인해야 합니다.';
  document.title = `욕실 인테리어 컨셉 시안 ${concepts.length}가지 | ROOM PICK`;
  document.getElementById('conceptGrid').innerHTML = concepts.map(({id,name,description,image}) => {
    const number = String(id).padStart(2,'0');
    return `<article id="bathroom-${number}">
      <figure class="bathroom-shot"><img src="img/bathroom-concepts/${image || `bathroom-${number}-v1.png`}" alt="${name} 욕실 AI 디자인 시안" loading="lazy" decoding="async" width="1536" height="1024"></figure>
      <div><small>CONCEPT ${number}</small><h2>${name}</h2><p>${description}</p></div>
    </article>`;
  }).join('');
})();
