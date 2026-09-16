(() => {
  const space = new URLSearchParams(location.search).get('space') || location.hash.slice(1);
  if (space !== 'bathroom') return;
  const concepts = [
  {
    "name": "웜 스톤 욕조형",
    "description": "베이지 석재 느낌 타일과 일자 선반, 매립 욕조로 차분한 가족 욕실을 구성했습니다."
  },
  {
    "name": "월넛 호텔 샤워형",
    "description": "짙은 수납장과 밝은 타일을 대비시키고 샤워 구역을 유리로 나눴습니다."
  },
  {
    "name": "유리블록 채광형",
    "description": "유리블록 파티션으로 빛과 시선을 나누고 세면 영역을 밝게 정돈했습니다."
  },
  {
    "name": "재팬디 내추럴",
    "description": "오크 느낌 수납과 무광 타일, 단정한 원형 거울로 자연스러운 인상을 만들었습니다."
  },
  {
    "name": "소프트 클래식",
    "description": "아이보리 타일과 얇은 프레임 수납장, 작은 브라스 포인트로 클래식을 절제했습니다."
  },
  {
    "name": "그레이 인더스트리얼",
    "description": "콘크리트 느낌 타일과 블랙 프레임 샤워부스로 선을 강조했습니다."
  },
  {
    "name": "세이지 포인트",
    "description": "세면 벽에만 세이지 타일을 쓰고 나머지는 밝은 중성색으로 구성했습니다."
  },
  {
    "name": "코리안 캄",
    "description": "따뜻한 회백색 타일과 세로결 수납, 간결한 직사각 거울로 여백을 살렸습니다."
  },
  {
    "name": "네이비 컬러 모던",
    "description": "네이비 하부장과 밝은 테라조 바닥으로 선명하지만 정돈된 욕실을 만들었습니다."
  },
  {
    "name": "세면대 분리형",
    "description": "세면대를 입구 쪽에 두고 안쪽의 샤워·변기 공간과 구분했습니다."
  },
  {
    "name": "수납 집중형",
    "description": "거울장과 얕은 키큰 수납을 한 벽에 모아 생활용품 노출을 줄였습니다."
  },
  {
    "name": "트윈 세면형",
    "description": "두 사람이 함께 쓰는 세면대와 별도 샤워 구역을 구성했습니다."
  },
  {
    "name": "컴팩트 샤워형",
    "description": "작은 욕실에 벽걸이 세면대와 슬라이딩 샤워문을 배치했습니다."
  },
  {
    "name": "테라조 라운드",
    "description": "잔무늬 테라조와 둥근 거울을 조합하고 단정한 면 구성을 유지했습니다."
  },
  {
    "name": "샤워 벤치형",
    "description": "샤워 영역에 작은 타일 벤치를 두고 세면·변기 동선을 분리했습니다."
  },
  {
    "name": "이브닝 스파",
    "description": "짙은 그레이 타일과 거울 주변의 은은한 빛으로 차분한 분위기를 구성했습니다."
  },
  {
    "name": "이지 클린",
    "description": "벽걸이 수납과 단순한 타일 분할로 청소할 바닥 면을 확보했습니다."
  },
  {
    "name": "욕조와 샤워 일체형",
    "description": "욕조 위에 샤워 스크린을 두어 작은 공간에 두 기능을 담았습니다."
  },
  {
    "name": "브릭 타일 포인트",
    "description": "세면 벽의 가로 타일과 월넛 느낌 수납으로 리듬을 만들었습니다."
  },
  {
    "name": "북유럽 클린 샤워룸",
    "description": "STYLE CASE 01의 차분한 포세린 타일과 오크 톤 세면 수납을 적용했습니다. 타일·유리 파티션으로 샤워 공간을 나누고 작은 바닥 타일과 니켈 수전으로 관리하기 쉬운 욕실을 제안합니다.",
    "image": "bathroom-20-nordic-v2.png"
  }
];
  document.querySelector('.hero > p').textContent = 'ROOM PICK · 20 CONCEPTS';
  document.getElementById('title').textContent = '욕실 인테리어 컨셉 시안 20가지';
  document.getElementById('intro').textContent = '욕조·샤워·세면 동선과 수납, 타일·조명을 다르게 구성한 20안입니다. AI 디자인 시안이며 이미지는 늘림이나 잘라내기 없이 원본 비율로 표시합니다. 실제 적용 전 현장 치수와 배수·방수·환기 조건을 확인해야 합니다.';
  document.title = '욕실 인테리어 컨셉 시안 20가지 | ROOM PICK';
  document.getElementById('conceptGrid').innerHTML = concepts.map(({name,description,image},i) => {
    const number = String(i + 1).padStart(2,'0');
    return `<article id="bathroom-${number}">
      <figure class="bathroom-shot"><img src="img/bathroom-concepts/${image || `bathroom-${number}-v1.png`}" alt="${name} 욕실 AI 디자인 시안" loading="lazy" decoding="async" width="1536" height="1024"></figure>
      <div><small>CONCEPT ${number}</small><h2>${name}</h2><p>${description}</p></div>
    </article>`;
  }).join('');
})();
