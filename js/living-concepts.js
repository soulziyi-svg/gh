(() => {
  const params = new URLSearchParams(window.location.search);
  const requestedSpace = params.get('space') || window.location.hash.slice(1) || 'living';
  if (requestedSpace !== 'living') return;

  const concepts = [
    ['living-08-long-datum-v4.png', '39평 베이윈도형 · 긴 수평선', '창가 벤치와 TV 수납 높이를 맞추고 작은 석재 니치와 부분 살창으로 긴 벽의 리듬을 만들었습니다.'],
    ['living-10-gallery-ldk-v4.png', '42평 확장형 · 갤러리 LDK', '긴 화이트 면과 낮은 석재 선반, 월넛 주방을 하나의 시선축으로 연결한 선택 시안입니다.'],
    ['living-03-glass-block-storage-v4.png', '32평 비확장형 · 빛과 수납', '발코니 구조를 유지하면서 유리블록으로 빛을 들이고 TV장과 벽면 수납의 선을 정돈했습니다.'],
    ['living-04-restrained-japandi-v5.png', '34평 판상형 · 절제된 재팬디', '깊은 창가를 오크 수납 벤치로 활용하고 패브릭과 종이 조명으로 차분한 휴식 영역을 만들었습니다.'],
    ['living-05-soft-classic-v6.png', '39평 4베이 · 소프트 클래식', '절제된 벽 몰딩과 아치, 블루 체어와 브라스 조명을 균형 있게 배치해 밝고 현실적인 클래식 거실을 구성했습니다.'],
    ['living-06-soft-industrial-v6.png', '36평 세로형 · 소프트 인더스트리얼', '기존 구조 보와 콘크리트 질감을 살리고 리브드 유리 서재문과 블랙 프레임으로 기능적인 산업적 인상을 냈습니다.'],
    ['living-07-daylight-biophilic-v6.png', '37평 베이윈도형 · 데이라이트 바이오필릭', '확장부를 관리 가능한 플랜트 베이로 구획하고 코르크 벽과 그린 소파로 자연의 밀도를 조절했습니다.'],
    ['living-08-korean-calm-v6.png', '41평 현관 연결형 · 코리안 컨템포러리', '한지 스크린과 낮은 원목 좌대, 종이 펜던트를 사용해 현대 아파트 안에 한국적인 여백과 깊이를 만들었습니다.'],
    ['living-09-color-modern-v6.png', '33평 가족형 · 컬러 모던', '네이비 수납·책상과 테라코타 TV장, 오커 체어를 기능별 면에 배치해 선명하지만 정돈된 가족 거실을 만들었습니다.'],
    ['living-10-zoned-dining-v5.png', '38평 식당 연결형 · 웜 컨템포러리', '소파 뒤 반높이 수납으로 거실과 식당을 나누고 작은 유리 장식장으로 깊이를 더했습니다.'],
    ['living-11-library-lounge-v1.png', '35평 판상형 · 라이브러리 라운지', '얕은 오크 책장과 독서 니치를 한쪽 벽에 집중하고 TV 영역과 통로를 분리해 조용한 독서 거실을 구성했습니다.'],
    ['living-12-social-dining-v1.png', '38평 거실·식당형 · 소셜 다이닝', '창가 원형 식탁과 낮은 오픈 선반으로 식사와 휴식 영역을 느슨하게 나누면서 채광과 동선은 열어 두었습니다.'],
    ['living-13-hidden-storage-v1.png', '32평 맞벌이형 · 히든 스토리지', '한쪽 벽에 깊이가 현실적인 수납장을 모으고 목재 오픈 니치만 남겨 작은 거실의 생활 물품을 정돈했습니다.'],
    ['living-14-music-corner-v1.png', '40평 취미형 · 리스닝 코너', '월넛 오디오 콘솔과 흡음 살창을 짧은 벽에만 배치해 TV 시청과 음악 감상이 충돌하지 않도록 계획했습니다.'],
    ['living-15-flex-work-v1.png', '34평 재택형 · 플렉스 워크월', '슬라이딩 포켓 패널 안에 책상과 상부 수납을 넣어 업무 시간 이후에는 일반 거실 입면으로 정리되도록 했습니다.'],
    ['living-16-evening-lounge-v1.png', '36평 야간형 · 이브닝 라운지', '웜그레이 미장 벽과 낮은 모듈 소파, 제한된 간접조명으로 낮과 저녁의 분위기가 자연스럽게 전환됩니다.'],
    ['living-17-pet-friendly-v1.png', '33평 반려묘형 · 리빙 투게더', '창가 낮은 수납을 반려묘의 휴식대로 겸용하고 책장 옆 이동 발판을 숨겨 사람 중심의 거실 인상을 유지했습니다.'],
    ['living-18-window-platform-v1.png', '39평 확장형 · 창가 평상', '확장부 일부에만 낮은 수납 평상을 두어 차와 독서를 즐기면서도 기존 소파와 주 통로를 온전히 확보했습니다.'],
    ['living-19-curated-art-v1.png', '42평 식당 연결형 · 큐레이티드 아트월', '긴 미장 벽에 작품과 벤치를 절제해 배치하고 고정 스크린으로 식당의 경계만 가볍게 만들었습니다.'],
    ['living-20-compact-family-v1.png', '31평 가족형 · 컴팩트 패밀리존', '소파 뒤에 작은 학습 책상과 닫힌 수납을 집중해 장난감 노출을 줄이고 거실 중앙을 넓게 비웠습니다.']
  ];

  document.querySelector('.hero > p').textContent = 'ROOM PICK · 20 CONCEPTS';
  document.getElementById('title').textContent = '거실 인테리어 컨셉 시안 20가지';
  document.getElementById('intro').textContent = '확인하신 현실성 범위 안에서 공간의 역할과 동선, 수납, 재료 전략이 서로 다른 거실 디자인 20안을 비교합니다.';
  document.title = '거실 인테리어 컨셉 시안 20가지 | ROOM PICK';
  document.getElementById('conceptGrid').innerHTML = concepts.map(([file, name, description], index) => `
    <article>
      <figure class="living-shot"><img src="img/living-concepts/${file}" alt="${name} 거실 인테리어 컨셉 시안" loading="lazy"></figure>
      <div><small>CONCEPT ${String(index + 1).padStart(2, '0')}</small><h2>${name}</h2><p>${description}</p></div>
    </article>
  `).join('');
})();
