(() => {
  const space = new URLSearchParams(location.search).get('space') || location.hash.slice(1);
  if (space !== 'kitchen') return;
  const concepts = [
  {
    "name": "긴 수평선 주방",
    "description": "창가의 낮은 벤치와 긴 조리대의 수평선을 맞추고, 밝은 오크와 화이트로 거실의 여백을 이어갑니다."
  },
  {
    "name": "월넛 갤러리 LDK",
    "description": "월넛 수납벽과 부분 우드 천장으로 주방 영역을 정리하고, 밝은 대면 조리대로 화이트 거실과 연결합니다."
  },
  {
    "name": "빛을 빌리는 수납 주방",
    "description": "병렬 수납과 작업대를 배치하고 유리블록으로 빛을 들여, 작은 주방에서도 채광과 닫힌 수납을 함께 확보합니다."
  },
  {
    "name": "절제된 재팬디",
    "description": "오크 하부장과 밝은 상판, 짧은 반도형 조리대로 조리와 식사를 나눕니다. 종이 조명은 식탁에만 사용합니다."
  },
  {
    "name": "소프트 클래식",
    "description": "얇은 프레임 도어와 크림색 마감, 작은 브라스 손잡이를 적용하고 블루 식탁 의자로 거실의 클래식 분위기를 잇습니다."
  },
  {
    "name": "소프트 인더스트리얼",
    "description": "월넛과 스테인리스 작업면, 리브드 유리문을 조합해 조리·세탁 공간의 경계를 기능적으로 정돈합니다."
  },
  {
    "name": "데이라이트 가든",
    "description": "세이지 하부장과 오크 수납을 중심으로, 창가의 소량 식물과 세척하기 쉬운 타일을 더한 밝은 주방입니다."
  },
  {
    "name": "코리안 티 키친",
    "description": "원목과 아이보리 수납, 한지 느낌의 스크린과 차 도구를 두는 낮은 장으로 한국적인 여백을 이어갑니다."
  },
  {
    "name": "컬러 모던",
    "description": "네이비 키큰장과 테라코타 포인트를 기능별로 배치하고, 밝은 바닥과 벽으로 컬러 거실과 균형을 맞춥니다."
  },
  {
    "name": "웜 다이닝 연결형",
    "description": "ㄱ자 조리대와 원목 식탁, 얕은 사이드보드로 조리와 식사의 동선을 구분하는 웜 컨템퍼러리 주방입니다."
  },
  {
    "name": "레시피 라이브러리",
    "description": "조리대 바깥의 마른 영역에 레시피 책과 커피 코너를 모아, 책장이 있는 거실과 자연스럽게 이어집니다."
  },
  {
    "name": "소셜 다이닝",
    "description": "원형 식탁과 준비용 작업대로 함께 요리하고 대화할 수 있는 구성을 만들고 통행 공간을 열어둡니다."
  },
  {
    "name": "히든 팬트리",
    "description": "키큰장과 팬트리, 가전 수납을 한 벽에 집중하고 필요한 작업면만 드러내는 정돈된 주방입니다."
  },
  {
    "name": "월넛 리스닝 바",
    "description": "월넛 수납과 짙은 작업면, 작은 브렉퍼스트 바를 조합해 거실의 오디오 가구와 소재를 맞춥니다."
  },
  {
    "name": "워크앤쿡",
    "description": "조리대와 별도로 문을 닫을 수 있는 작은 작업 코너를 두어 재택 업무와 주방 생활이 겹치지 않게 합니다."
  },
  {
    "name": "이브닝 라운지 키친",
    "description": "웜그레이와 스모크 오크에 작업등을 집중해 저녁에도 조리면이 또렷하고 편안한 주방을 구성합니다."
  },
  {
    "name": "리빙 투게더",
    "description": "청소하기 쉬운 닫힌 하부장과 바닥을 사용하고, 조리 구역 바깥에 반려동물 용품 자리를 마련합니다."
  },
  {
    "name": "북유럽 그린 오픈 키친",
    "description": "STYLE CASE 01의 그린 하부장과 질감 있는 아이보리 타일, 오크 아일랜드를 적용했습니다. 상부장을 덜어내고 냉장고·세척·조리 사이의 작업 통로를 확보했습니다.",
    "image": "kitchen-18-nordic-v2.png",
    "livingPair": "10"
  },
  {
    "name": "아트월 다이닝",
    "description": "조리면은 간결하게 정리하고 식탁 옆 마른 벽면에 작품과 사이드보드를 배치해 갤러리 거실과 이어갑니다."
  },
  {
    "name": "컴팩트 패밀리",
    "description": "조리대 바깥의 낮은 테이블에 가족 활동 자리를 두고, 작은 주방에서도 수납과 조리 동선을 확보합니다."
  }
];
  document.querySelector('.hero > p').textContent = 'ROOM PICK · 20 CONCEPTS';
  document.getElementById('title').textContent = '주방 인테리어 컨셉 시안 20가지';
  document.getElementById('intro').textContent = '거실 디자인과 소재·분위기를 연결하고, 조리 동선과 수납 방식은 각각 다르게 계획했습니다. 이미지는 AI 디자인 시안이며 원본 비율로 표시합니다.';
  document.title = '주방 인테리어 컨셉 시안 20가지 | ROOM PICK';
  document.getElementById('conceptGrid').innerHTML = concepts.map(({name,description,image,livingPair},i) => {
    const number = String(i + 1).padStart(2,'0');
    const pair = livingPair || number;
    const pairLink = ['01','02','04','05','06','08','10','11','12'].includes(pair)
      ? `<a class="concept-pair" href="space-concepts.html?space=living#living-${pair}">어울리는 거실 ${pair}안 →</a>`
      : '';
    return `<article id="kitchen-${number}">
      <figure class="kitchen-shot"><img src="img/kitchen-concepts/${image || `kitchen-${number}-v1.png`}" alt="${name} 주방 AI 디자인 시안" loading="lazy" decoding="async" width="1536" height="1024"></figure>
      <div><small>CONCEPT ${number}</small><h2>${name}</h2><p>${description}</p>${pairLink}</div>
    </article>`;
  }).join('');
})();
