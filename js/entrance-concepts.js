(() => {
  const space = new URLSearchParams(location.search).get('space') || location.hash.slice(1);
  if (space !== 'entrance') return;
  const concepts = [
  {
    "name": "웜 미니멀",
    "description": "화이트 신발장과 하부 간접조명으로 좁은 현관을 밝게 정돈했습니다."
  },
  {
    "name": "월넛 호텔",
    "description": "월넛 수납장과 브론즈 톤 중문으로 깊이감을 만들었습니다."
  },
  {
    "name": "재팬디 벤치",
    "description": "오크 벤치와 세로살 중문으로 편안한 진입 공간을 구성했습니다."
  },
  {
    "name": "유리블록 채광",
    "description": "유리블록 측벽으로 실내의 빛을 들이고 시선을 나눴습니다."
  },
  {
    "name": "소프트 클래식",
    "description": "얇은 몰딩과 작은 브라스 손잡이로 클래식을 절제했습니다."
  },
  {
    "name": "그레이 인더스트리얼",
    "description": "그레이 타일과 블랙 프레임으로 단정한 선을 강조했습니다."
  },
  {
    "name": "세이지 내추럴",
    "description": "세이지 수납과 밝은 벽면을 조합해 부드러운 색감을 더했습니다."
  },
  {
    "name": "네이비 포인트",
    "description": "네이비 하부장과 밝은 상부 수납으로 색의 무게를 나눴습니다."
  },
  {
    "name": "슬림 수납형",
    "description": "얕은 수납장과 전신거울로 작은 현관의 통로를 확보했습니다."
  },
  {
    "name": "패밀리 벤치형",
    "description": "가족이 앉아 신발을 신는 벤치와 닫힌 수납을 구성했습니다."
  },
  {
    "name": "ㄱ자 수납형",
    "description": "코너를 따라 수납을 이어 가고 중앙 동선을 비웠습니다."
  },
  {
    "name": "중문 분리형",
    "description": "3연동 중문으로 현관과 실내의 경계를 명확히 했습니다."
  },
  {
    "name": "코리안 캄",
    "description": "우드 프레임과 반투명 중문으로 차분한 첫인상을 만들었습니다."
  },
  {
    "name": "테라조 라운드",
    "description": "테라조 바닥과 둥근 거울로 가벼운 리듬을 만들었습니다."
  },
  {
    "name": "갤러리 니치",
    "description": "수납장 사이 작은 니치 하나를 시선의 중심으로 두었습니다."
  },
  {
    "name": "우산 수납형",
    "description": "우산과 외출 소품의 자리를 분리해 입구를 정돈했습니다."
  },
  {
    "name": "미러 확장형",
    "description": "거울 도어와 밝은 타일로 시각적인 답답함을 줄였습니다."
  },
  {
    "name": "펫 산책 준비형",
    "description": "리드줄과 외출용품을 벤치 옆에 모아두는 구성입니다."
  },
  {
    "name": "브릭 포인트",
    "description": "테라코타 톤 바닥과 월넛 수납으로 따뜻한 인상을 만들었습니다."
  },
  {
    "name": "북유럽 그린 벤치 현관",
    "description": "STYLE CASE 01의 그린 타일과 아이보리·오크를 직사각형 현관에 적용했습니다. 벤치 니치를 품은 키큰장 하부를 띄워 따뜻한 간접조명을 넣고, 중문 없이 열린 진입 공간과 오크 톤 우드 필름 방화문으로 정리했습니다. 실제 필름 적용 가능 여부는 해당 방화문 제조사에 확인해야 합니다.",
    "image": "entrance-20-nordic-v4.png"
  }
];
  document.querySelector('.hero > p').textContent = 'ROOM PICK · 20 CONCEPTS';
  document.getElementById('title').textContent = '현관 인테리어 컨셉 시안 20가지';
  document.title = '현관 인테리어 컨셉 시안 20가지 | ROOM PICK';
  document.getElementById('intro').textContent = '수납·중문·벤치·조명과 진입 동선을 다르게 구성한 20안입니다. AI 디자인 시안이며 이미지는 늘림이나 잘라내기 없이 원본 비율로 표시합니다. 실제 적용 전 현장 치수와 문 열림, 통행 폭 및 수납 깊이를 확인해야 합니다.';
  document.getElementById('conceptGrid').innerHTML = concepts.map(({name,description,image},i) => {
    const number = String(i + 1).padStart(2,'0');
    return `<article id="entrance-${number}">
      <figure class="entrance-shot"><img src="img/entrance-concepts/${image || `entrance-${number}-v1.png`}" alt="${name} 현관 AI 디자인 시안" loading="lazy" decoding="async" width="1536" height="1024"></figure>
      <div><small>CONCEPT ${number}</small><h2>${name}</h2><p>${description}</p></div>
    </article>`;
  }).join('');
})();
