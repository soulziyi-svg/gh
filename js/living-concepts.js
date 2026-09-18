(() => {
  const params = new URLSearchParams(window.location.search);
  const requestedSpace = params.get('space') || window.location.hash.slice(1) || 'living';
  if (requestedSpace !== 'living') return;

  const concepts = [
    [1, 'living-01-long-datum-v7.png', '39평 베이윈도형 · 긴 수평선', '베란다 벽과 TV벽의 코너에 양옆 간접조명을 넣은 우드 선반을 배치했습니다. 창가 쪽 직사각형 에어컨과 화이트 실링팬으로 천정을 정돈했습니다.'],
    [2, 'living-02-gallery-ldk-v7.png', '42평 확장형 · 갤러리 LDK', '화이트 TV벽과 하부 석재 라인, 유리 진열 니치로 입면을 정리했습니다. 소파와 테이블을 비우고 주방 노출을 줄인 TV벽 중심 구도에 화이트 실링팬을 더했습니다.'],
    [4, 'living-04-platform-v7.png', '34평 판상형 · 절제된 재팬디', '창가 평상을 같은 높이로 왼쪽 벽까지 이어 방석을 놓았습니다. 소파·TV협탁·펜던트·테이블·러그를 비우고 우드 실링팬과 창가 쪽 슬림 에어컨으로 정리했습니다.'],
    [5, 'living-05-soft-classic-v7.png', '39평 4베이 · 소프트 클래식', '몰딩과 아치는 유지하고 두 싱글 체어·러그·테이블을 덜어냈습니다. 소파를 창가 쪽으로 옮겨 살짝 틀고 기존 조명을 켜 따뜻하게 연출했습니다.'],
    [6, 'living-06-soft-industrial-v6.png', '36평 세로형 · 소프트 인더스트리얼', '기존 구조 보와 콘크리트 질감을 살리고 리브드 유리 서재문과 블랙 프레임으로 기능적인 산업적 인상을 냈습니다.'],
    [8, 'living-08-korean-calm-v7.png', '41평 현관 연결형 · 코리안 컨템포러리', '짙은 우드 마루와 한지 질감의 벽, 목재 선을 활용한 천정으로 한국적인 분위기를 강조했습니다. 거실 중심으로 시야를 옮기고 커튼 앞 식물과 창가 쪽 슬림 에어컨을 배치했습니다.'],
    [10, 'living-10-nordic-v2.png', '북유럽 패밀리 LDK', 'STYLE CASE 01의 아이보리 소파와 오크 가구, 그린 주방을 연결했습니다. 반높이 가벽 없이 거실·식당의 시야와 이동 동선을 열어 가족이 함께 머무는 공용부로 구성했습니다.'],
    [11, 'living-11-library-lounge-v2.png', '35평 판상형 · 라이브러리 라운지', '오른쪽 책장 중앙에 쿠션 소파 자리를 통합하고 기존 소파·테이블·러그·싱글 의자를 없앴습니다. 창가 쪽 슬림 에어컨과 켜진 조명으로 여유로운 독서 공간을 연출했습니다.'],
    [12, 'living-12-social-dining-v1.png', '38평 거실·식당형 · 소셜 다이닝', '창가 원형 식탁과 낮은 오픈 선반으로 식사와 휴식 영역을 느슨하게 나누면서 채광과 동선은 열어 두었습니다.'],
  ];

  document.querySelector('.hero > p').textContent = 'ROOM PICK · 9 CONCEPTS';
  document.getElementById('title').textContent = '거실 인테리어 컨셉 시안 9가지';
  document.getElementById('intro').textContent = '선별한 거실 디자인 9안을 비교합니다. 기존 컨셉 번호를 유지했으며, AI 디자인 시안은 카드에 비율 왜곡 없이 채워 표시합니다.';
  document.title = '거실 인테리어 컨셉 시안 9가지 | ROOM PICK';
  document.getElementById('conceptGrid').innerHTML = concepts.map(([id, file, name, description]) => `
    <article id="living-${String(id).padStart(2, '0')}">
      <figure class="living-shot"><img src="img/living-concepts/${file}" alt="${name} 거실 인테리어 컨셉 시안" loading="lazy"></figure>
      <div><small>CONCEPT ${String(id).padStart(2, '0')}</small><h2>${name}</h2><p>${description}</p></div>
    </article>
  `).join('');
})();
