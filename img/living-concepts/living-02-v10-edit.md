# 컨셉 02 — 사용자 참고사진 4장 구조 재검토

도구: 내장 image_gen. 실제 시공사진이 아닌 AI 편집 시안.
편집 대상: living-02-gallery-ldk-v9.png. 결과: living-02-gallery-ldk-v10.png.
참고: 사용자가 제공한 2026-09-05 031150 / 030625 / 030714 / 030808 스크린샷. 이미지에 표기된 제작자 ONTERIOR PROJECT. 외부 URL 및 재사용 허락은 별도 확인하지 않았으며 원본 사진을 사이트에 게시하지 않음.

## 사진에서 관찰한 구성
- 정면: 화이트 TV 면 아래에 후퇴한 석재 띠, 낮은 화이트 받침. 두꺼운 석재 상자 아님.
- 사선: 받침 왼쪽 끝은 부드러운 모서리이며 바닥에 닿음. 하부 발광 띠 없음.
- 유리 진열 니치 옆 세로 경계와 창가 개구부 상부가 이어짐. 천정 간접조명은 얇은 선으로 표현됨.
- 소파·테이블·사람은 참고 대상에서 제외. 이전 사용자 요구인 빈 거실과 3구 조명 유지.

## 실제 사용 프롬프트
Use case: precise-object-edit. Image 1 is current ROOM PICK concept 02 EDIT TARGET. Images 2-5 are four architectural DETAIL REFERENCES of the same real room by ONTERIOR PROJECT, not edit targets. Redesign only TV lower ledge and window/glass-block ceiling junction of image 1 by accurately interpreting references, not by just making the existing bulky box bigger.
Reference analysis to implement:
A. White TV panel is a broad plain slab with a slightly softened left vertical corner. Beneath it a shallow RECESSED narrow beige-grey stone back strip, and underneath a long LOW WHITE matte solid plinth/ledge with a softly rounded left end. Plinth is floor-supported, subtly projecting, NOT thick beige stone, NOT furniture cabinet, NOT a floating luminous strip. NO under-plinth LEDs or floor glow. Match reference image 3/5 profile, delicate low proportions.
B. To right of TV panel is narrow floor-to-ceiling recessed stone-backed glass display niche. Immediately right of niche a clean slender white vertical jamb separates the niche from recessed glass-block panel. Window bay ceiling has ONE straight shallow opening header running from this jamb across the windows, not multiple stacked boxes. Slim warm indirect light is CONCEALED at the upper recessed lip of that opening, continuing cleanly from the jamb. Replace the enormous protruding right ceiling beam in image 1 with the subtle shallow header in reference photos 3-5. The jamb and header meet cleanly at a right angle, aligned above the left edge of glass blocks. No awkward chunky cap above niche, no double steps, no giant glowing overhead band, no broken intersection. Keep glass block panel recessed BEHIND the jamb in the window bay.
Preserve image1 frontal camera, room proportions, open floor with NO sofa or table, white ceiling fan, existing black track with three-cell light modules, left hallway/cabinet, TV position, floor, daylight. Do not import person or furniture from references. Photorealistic natural architectural photo, precise buildable straight geometry. Reference credits stay in source documentation; do not reproduce reference screenshots, overlays or logos in new scene. Single edited image only.
