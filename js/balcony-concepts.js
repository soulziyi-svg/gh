(() => {
  const space = new URLSearchParams(location.search).get('space') || location.hash.slice(1);
  if (space !== 'balcony') return;
  const concepts = [
  {
    "name": "웜 미니멀 라운지",
    "description": "밝은 타일과 작은 라운지 체어로 휴식 공간을 간결하게 구성했습니다."
  },
  {
    "name": "재팬디 티룸",
    "description": "낮은 티테이블과 벤치로 차분하게 차를 마시는 공간입니다."
  },
  {
    "name": "윈도 카페",
    "description": "얕은 창가 바와 두 개의 스툴로 전망을 즐기는 구성입니다."
  },
  {
    "name": "식물 갤러리",
    "description": "이동식 화분 선반으로 식물을 모으고 통로는 비웠습니다."
  },
  {
    "name": "화이트 세탁실",
    "description": "세탁기와 건조기를 세로로 배치해 남는 폭을 확보했습니다."
  },
  {
    "name": "폴딩 작업대",
    "description": "접이식 상판과 닫힌 수납으로 세탁 정리 공간을 만들었습니다."
  },
  {
    "name": "팬트리 수납",
    "description": "끝벽에 수납을 집중하고 창가와 동선을 열어둔 구성입니다."
  },
  {
    "name": "컴팩트 홈오피스",
    "description": "끝벽의 작은 책상으로 창가 통로를 유지했습니다."
  },
  {
    "name": "독서 벤치",
    "description": "벽 쪽 벤치와 얕은 책 선반으로 작은 독서 공간을 구성했습니다."
  },
  {
    "name": "스트레칭 룸",
    "description": "가구를 최소화해 매트 한 장을 펼칠 여유를 남겼습니다."
  },
  {
    "name": "소프트 클래식",
    "description": "작은 원형 테이블과 절제된 프레임으로 클래식 분위기를 더했습니다."
  },
  {
    "name": "그레이 인더스트리얼",
    "description": "그레이 타일과 얇은 금속 가구로 선을 정돈했습니다."
  },
  {
    "name": "세이지 가든",
    "description": "세이지 수납과 소수의 화분으로 부드러운 초록을 담았습니다."
  },
  {
    "name": "테라코타 카페",
    "description": "따뜻한 바닥색과 우드 가구로 작은 카페처럼 구성했습니다."
  },
  {
    "name": "네이비 모던",
    "description": "네이비 끝벽 수납과 밝은 타일로 대비를 만들었습니다."
  },
  {
    "name": "린넨 내추럴",
    "description": "밝은 소재와 가벼운 의자로 여유로운 휴식 공간을 만들었습니다."
  },
  {
    "name": "세탁·수납 결합",
    "description": "세탁기와 생활용품 수납을 한쪽 끝에 모았습니다."
  },
  {
    "name": "취미 작업실",
    "description": "끝벽 작업대와 소도구 수납으로 작은 취미 공간을 구성했습니다."
  },
  {
    "name": "이브닝 라운지",
    "description": "벽면 조명과 작은 의자로 저녁 휴식 분위기를 담았습니다."
  },
  {
    "name": "실용 기본형",
    "description": "기본 타일과 이동식 가구로 부담 적은 구성을 잡았습니다."
  }
];
  document.querySelector('.hero > p').textContent = 'ROOM PICK · 20 CONCEPTS';
  document.getElementById('title').textContent = '베란다 인테리어 컨셉 시안 20가지';
  document.title = '베란다 인테리어 컨셉 시안 20가지 | ROOM PICK';
  document.getElementById('intro').textContent = '휴식·세탁·수납·식물·작업 공간으로 쓰임새와 구성을 달리한 20안입니다. AI 디자인 시안이며 이미지는 늘림이나 잘라내기 없이 원본 비율로 표시합니다. 실제 적용 전 단열·결로·배수·전기와 피난 동선, 창호 개폐 및 현장 치수를 확인해야 합니다.';
  document.getElementById('conceptGrid').innerHTML = concepts.map(({name,description},i) => {
    const number = String(i + 1).padStart(2,'0');
    return `<article id="balcony-${number}">
      <figure class="balcony-shot"><img src="img/balcony-concepts/balcony-${number}-v1.png" alt="${name} 베란다 AI 디자인 시안" loading="lazy" decoding="async" width="1536" height="1024"></figure>
      <div><small>CONCEPT ${number}</small><h2>${name}</h2><p>${description}</p></div>
    </article>`;
  }).join('');
})();

