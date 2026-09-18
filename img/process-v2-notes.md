# PROCESS 단계별 AI 연출 이미지
도구: 내장 image_gen. 공통 정사각형 구도, 따뜻한 뉴트럴 색조, 핵심 사물이 잘리지 않는 구성.
주거공간: photo → sample → reference → compare → final.
상업공간: photo → reference → sample → compare → final (기존 단계 순서 유지).
CSS object-fit: contain, 정사각형 표시로 이미지 파일 전체를 표시.
저장: img/start-step-{photo,sample,reference,compare,final}-v2.png

## 생성 프롬프트
공통: Photorealistic-natural interior design process thumbnail. Square composition, warm off-white background, soft daylight, restrained beige oak palette, main objects inside frame, no people, no logos, no readable typography.
photo: A smartphone on a small tripod displaying a camera view of a neutral empty interior, with laser measuring device and neatly opened measuring tape on a table. Clearly communicates photographing and measuring a space. No hands or people.
sample: One tablet displaying a single photorealistic interior design proposal, next to one tidy estimate sheet with simple rows of grey bars (no readable numbers) and a pencil. Clearly communicates first sample design and preliminary estimate, not multiple concepts.
reference: Interior moodboard on a desk: three small architectural reference photo prints, wood and stone swatches, cream and sage color cards neatly arranged. Clearly communicates agreeing on desired design direction and materials.
compare: Three separate interior concept presentation boards standing side by side on a desk, each showing the same room in a distinct style: light oak minimal, warm walnut, ivory contemporary. Small neutral estimate sheets below, clearly a comparison of design alternatives.
final: A finished open interior proposal binder centered on a desk: one page shows a polished room rendering, the other a clean floor plan with material swatches aligned beside it. A pen rests neatly below. Clearly communicates final approved design and execution proposal.

## 거실 추가
CONCEPT 10: 기존 img/recommended/case02-living.png 그대로 재사용.
CONCEPT 11: 기존 img/recommended/case03-rooms.png의 좌상단 거실 장면을 기존 STYLE CASE 03과 동일한 CSS 배경 방식으로 표시. 다른 공간을 새 거실처럼 생성하거나 대체하지 않음.
