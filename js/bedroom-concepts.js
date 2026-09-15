(() => {
  const space = new URLSearchParams(location.search).get('space') || location.hash.slice(1);
  if (space !== 'bedroom') return;
  const concepts = [
  {
    "name": "긴 수평선 침실",
    "description": "낮은 오크 헤드보드와 창가 벤치의 높이를 맞춰 차분한 수평선을 만들었습니다."
  },
  {
    "name": "월넛 호텔형",
    "description": "월넛 헤드월과 양쪽 협탁을 통합하고 옷장은 측면에 모았습니다."
  },
  {
    "name": "빛과 수납",
    "description": "유리블록으로 드레스 코너의 빛을 나누고 닫힌 수납으로 침대 주변을 정돈했습니다."
  },
  {
    "name": "절제된 재팬디",
    "description": "낮은 원목 침대와 린넨, 작은 종이 조명으로 여백을 살렸습니다."
  },
  {
    "name": "소프트 클래식",
    "description": "얇은 몰딩과 블루 패브릭 헤드보드, 작은 브라스 조명으로 절제된 클래식을 구성했습니다."
  },
  {
    "name": "소프트 인더스트리얼",
    "description": "그레이 질감 벽과 월넛, 블랙 프레임으로 선을 정리했습니다."
  },
  {
    "name": "세이지 가든",
    "description": "세이지 벽과 밝은 오크를 조합하고 창가 식물은 소량만 배치했습니다."
  },
  {
    "name": "코리안 캄",
    "description": "한지 느낌의 슬라이딩 스크린과 낮은 원목 가구로 차분한 침실을 만들었습니다."
  },
  {
    "name": "컬러 모던",
    "description": "네이비 수납과 테라코타 헤드보드를 기능별로 나누고 바탕은 밝게 유지했습니다."
  },
  {
    "name": "드레스 분리형",
    "description": "침실 옆 드레스 영역을 가벼운 스크린으로 구분해 수면 공간을 정리했습니다."
  },
  {
    "name": "베드사이드 라이브러리",
    "description": "책장은 침대 옆 벽에 모으고 독서등과 작은 의자로 읽는 자리를 마련했습니다."
  },
  {
    "name": "트윈 밸런스",
    "description": "두 개의 싱글 침대와 공용 협탁으로 각자의 수면 자리를 확보했습니다."
  },
  {
    "name": "히든 스토리지",
    "description": "벽면 붙박이장과 서랍형 침대로 생활용품을 숨겼습니다."
  },
  {
    "name": "월넛 리딩 룸",
    "description": "짙은 원목과 패브릭 패널을 조합해 저녁 독서에 어울리는 공간을 구성했습니다."
  },
  {
    "name": "워크앤레스트",
    "description": "닫을 수 있는 책상 코너로 업무와 휴식의 경계를 만들었습니다."
  },
  {
    "name": "이브닝 라운지",
    "description": "웜그레이와 스모크 오크, 눈부심이 적은 조명으로 밤의 편안함을 강조했습니다."
  },
  {
    "name": "함께 쉬는 침실",
    "description": "낮은 반려동물 휴식 자리와 청소하기 쉬운 가구로 생활 동선을 정돈했습니다."
  },
  {
    "name": "창가 리트리트",
    "description": "창가의 낮은 벤치와 침대를 분리해 잠깐 쉬거나 책을 읽을 자리를 두었습니다."
  },
  {
    "name": "아트월 침실",
    "description": "작품 한 점과 낮은 서랍장으로 포인트를 주고 침대 주변은 간결하게 비웠습니다."
  },
  {
    "name": "컴팩트 패밀리",
    "description": "낮은 침대와 닫힌 수납을 중심으로 가족이 쉬는 공간을 구성했습니다."
  }
];
  document.querySelector('.hero > p').textContent = 'ROOM PICK · 20 CONCEPTS';
  document.getElementById('title').textContent = '침실 인테리어 컨셉 시안 20가지';
  document.getElementById('intro').textContent = '현실적인 아파트 비례 안에서 수면·수납·독서·업무 동선과 소재를 다르게 구성한 20안입니다. AI 디자인 시안이며 이미지는 늘림이나 잘라내기 없이 원본 비율로 표시합니다.';
  document.title = '침실 인테리어 컨셉 시안 20가지 | ROOM PICK';
  document.getElementById('conceptGrid').innerHTML = concepts.map(({name,description},i) => {
    const number = String(i + 1).padStart(2,'0');
    return `<article id="bedroom-${number}">
      <figure class="bedroom-shot"><img src="img/bedroom-concepts/bedroom-${number}-v1.png" alt="${name} 침실 AI 디자인 시안" loading="lazy" decoding="async" width="1536" height="1024"></figure>
      <div><small>CONCEPT ${number}</small><h2>${name}</h2><p>${description}</p></div>
    </article>`;
  }).join('');
})();

