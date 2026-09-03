import fs from "node:fs/promises";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const OUT = "C:/ai_web/lecture1/인테리어사이트/outputs/사진으로-받는-사전-공간-진단서_거실.pptx";
const PREVIEW = "C:/ai_web/lecture1/인테리어사이트/outputs/pre-diagnosis-build/rendered";
const img = {
  logo: "C:/ai_web/lecture1/인테리어사이트/img/logo1.png",
  original: "Z:/STOCK/★사이트에 참고 사진 자료모음/거실/Codex 이미지 2026년 9월 2일 오전 11_12_37.png",
  natural: "C:/Users/heech/.codex/generated_images/01a0563c-62a0-79e1-86fe-17bf7d6c9692/exec-76e741b6-aafc-4f15-ae9f-20e6aa0f6682.png",
  french: "C:/Users/heech/.codex/generated_images/01a0563c-62a0-79e1-86fe-17bf7d6c9692/exec-a95f8d07-b5a1-4342-b1a8-73a2c4b45342.png",
  urban: "C:/Users/heech/.codex/generated_images/01a0563c-62a0-79e1-86fe-17bf7d6c9692/exec-6f539491-7998-4bcf-9db8-453e15d16659.png",
  classic: "C:/Users/heech/.codex/generated_images/01a0563c-62a0-79e1-86fe-17bf7d6c9692/exec-45f877e2-5fb4-4422-ac1d-c0e8adef9b4c.png",
  intense: "C:/Users/heech/.codex/generated_images/01a0563c-62a0-79e1-86fe-17bf7d6c9692/exec-eeab60af-ad29-49bc-9a69-1c8d2f0ba207.png",
  burgundy: "C:/Users/heech/.codex/generated_images/01a0563c-62a0-79e1-86fe-17bf7d6c9692/exec-35e88318-66f4-47f3-9c50-ede559934add.png",
  navyClassic: "C:/Users/heech/.codex/generated_images/01a0563c-62a0-79e1-86fe-17bf7d6c9692/exec-6143cdd1-a0b7-40f2-87d4-daceb0fde95b.png",
};

const W = 1280, H = 720;
const C = { navy:"#163A66", blue:"#2877C7", ink:"#17202A", muted:"#667085", ivory:"#F7F4EF", paper:"#FFFDFC", line:"#DED8CE", olive:"#6E7563", warm:"#B88B5A", white:"#FFFFFF", pale:"#EAF2FA" };
const FONT = "Malgun Gothic";
const p = Presentation.create({ slideSize: { width: W, height: H } });

async function bytes(path){ const b=await fs.readFile(path); return b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength); }
const blobs = Object.fromEntries(await Promise.all(Object.entries(img).map(async ([k,v])=>[k,await bytes(v)])));
function shape(slide, x,y,w,h, fill="none", line="none", radius=false){
  return slide.shapes.add({geometry:radius?"roundRect":"rect",position:{left:x,top:y,width:w,height:h},fill,line:{style:"solid",fill:line,width:line==="none"?0:1},...(radius?{borderRadius:"rounded-xl"}:{})});
}
function text(slide, value,x,y,w,h,size=20,color=C.ink,bold=false,align="left"){
  const s=slide.shapes.add({geometry:"textbox",position:{left:x,top:y,width:w,height:h},fill:"none",line:{style:"solid",fill:"none",width:0}});
  s.text=value; s.text.style={fontFamily:FONT,fontSize:size,color,bold,alignment:align,verticalAlignment:"middle"}; return s;
}
function photo(slide, blob,x,y,w,h,fit="cover",alt="인테리어 이미지"){
  return slide.images.add({blob,contentType:"image/png",alt,fit,position:{left:x,top:y,width:w,height:h}});
}
function footer(slide,n){
  photo(slide,blobs.logo,970,674,150,30,"contain","공간한쪽 로고");
  text(slide,"공간한쪽 · 사진 기반 사전 진단",64,682,420,18,11,C.muted,true);
  text(slide,String(n).padStart(2,"0"),1170,680,46,20,12,C.navy,true,"right");
}
function title(slide,eyebrow,headline,sub=""){
  text(slide,eyebrow.toUpperCase(),64,38,420,24,12,C.blue,true);
  text(slide,headline,64,70,1120,58,36,C.navy,true);
  if(sub) text(slide,sub,64,128,1080,32,17,C.muted,false);
}
function coverLogo(slide){ photo(slide,blobs.logo,1010,48,190,62,"contain","공간한쪽 로고"); }
function notes(slide, sources=[]){
  slide.speakerNotes.textFrame.setText(`[Sources]\n${sources.map(s=>`- ${s}`).join("\n")}`);
}

// 1 Cover
{
  const s=p.slides.add(); photo(s,blobs.original,0,0,W,H,"cover","진단 대상 거실 원본 사진");
  shape(s,0,0,W,H,"#0F2438B8");
  text(s,"PRE-DESIGN DIAGNOSIS",72,70,520,28,14,"#BBD7F2",true);
  text(s,"사진으로 받는\n사전 공간 진단",72,118,610,138,52,C.white,true);
  text(s,"거실 · 디자인 계약 전 검토용",74,278,520,32,21,"#E8EEF4",false);
  shape(s,72,594,500,1,"#BBD7F2");
  text(s,"현장 사진 1장을 바탕으로 가능성과 선택 기준을 먼저 정리했습니다.",72,612,700,34,17,C.white,false);
  text(s,"2026. 09. 02",1080,650,130,22,12,C.white,true,"right");
  coverLogo(s);
  notes(s,[img.original+" (사용자 제공)"]);
}

// 2 What we see
{
  const s=p.slides.add(); s.background.fill=C.paper; title(s,"01 · PHOTO READING","사진에서 먼저 보이는 것은 ‘구조’보다 마감의 불균형입니다.");
  photo(s,blobs.original,64,164,730,455,"cover","거실 현장 사진");
  shape(s,824,166,392,454,C.ivory,C.line,true);
  text(s,"사진으로 확인",850,190,320,28,22,C.navy,true);
  text(s,"• 창 중심의 단순한 직사각형 공간\n• 천장형 에어컨과 중앙등 병존\n• 우측 패널월·벽등·인터폰 집중\n• 밝은 바닥과 어두운 벽의 대비\n• 좌측 벽은 비어 있어 확장 여지",850,230,320,178,18,C.ink,false);
  text(s,"현장 확인 필요",850,430,320,28,22,C.blue,true);
  text(s,"벽·천장 치수, 패널 철거 후 바탕, 전기 배선, 커튼 설치 폭, 걸레받이 상태",850,470,315,108,17,C.ink,false);
  footer(s,2); notes(s,[img.original+" (사용자 제공)"]);
}

// 3 Finish decisions
{
  const s=p.slides.add(); s.background.fill=C.ivory; title(s,"02 · FINISH DECISIONS","3페이지에서 먼저 정할 것: 벽을 남길지, 무엇으로 마감할지");
  const cards=[
    ["벽면 유지","철거비·분진·폐기물 감소","기존 가로줄과 패널 두께가 남음","바탕과 접착 상태가 양호할 때"],
    ["벽면 철거","몰딩·도장·도배 선택 폭 확대","철거 후 석고·퍼티 보수비가 변수","들뜸·손상 또는 완전한 분위기 전환 시"],
    ["도장 마감","이음이 적고 색 표현이 정교함","바탕 평활도에 민감·보수 흔적 가능","몰딩과 포인트 컬러를 살릴 때"],
    ["도배 마감","작은 면 결함을 감추고 공기가 짧음","이음·오염·습도 관리 필요","예산과 유지보수를 우선할 때"],
  ];
  cards.forEach((a,i)=>{const x=64+(i%2)*580, y=162+Math.floor(i/2)*205; shape(s,x,y,548,178,C.paper,C.line,true); text(s,a[0],x+24,y+18,180,30,22,C.navy,true); text(s,"장점",x+24,y+62,54,24,14,C.blue,true); text(s,a[1],x+82,y+58,430,30,16,C.ink,false); text(s,"주의",x+24,y+99,54,24,14,"#B85C4A",true); text(s,a[2],x+82,y+95,430,30,16,C.ink,false); text(s,"추천",x+24,y+136,54,24,14,C.olive,true); text(s,a[3],x+82,y+132,430,30,16,C.ink,false);});
  shape(s,64,590,1128,54,C.navy,"none",true); text(s,"공간한쪽 제안  |  사진만으로 철거를 확정하지 않고, 현장 타진·들뜸·바탕 상태 확인 후 결정합니다.",86,601,1080,32,17,C.white,true);
  footer(s,3); notes(s,["본 슬라이드의 판단은 사용자 제공 사진에 대한 시각적 추정이며 현장 실측 전 확정사항이 아닙니다."]);
}

// 4 Concepts overview
{
  const s=p.slides.add(); s.background.fill=C.paper; title(s,"03 · CONCEPT OPTIONS","세 가지 강도로 비교한 뒤, 선택한 콘셉트를 여러 뷰로 발전시킵니다.");
  const cards=[
    [blobs.natural,[blobs.natural,blobs.french,blobs.urban],"A","적당한 콘셉트","웜화이트·밝은 우드 중심\n기존 바닥 활용, 필요한 부분만 변경","낮음","2 / 5"],
    [blobs.classic,[blobs.classic,blobs.french,blobs.natural],"B","앤틱 클래식","딥 올리브·월넛·클래식 몰딩\n무게감은 주되 주거성은 유지","중간","4 / 5"],
    [blobs.intense,[blobs.intense,blobs.burgundy,blobs.navyClassic],"C","고강도 콘셉트","벽·조명·천장·바닥을 함께 재구성\n명확한 세계관과 큰 공사 범위","높음","5 / 5"],
  ];
  cards.forEach((c,i)=>{const x=64+i*390; photo(s,c[0],x,160,354,206,"cover",c[3]); c[1].forEach((b,j)=>photo(s,b,x+j*118,374,112,64,"cover",`${c[3]} 분위기 썸네일 ${j+1}`)); text(s,c[2],x,454,28,24,13,C.blue,true); text(s,c[3],x+34,448,320,34,21,C.navy,true); text(s,c[4],x+34,486,320,55,14,C.muted,false); shape(s,x+34,550,310,1,C.line); text(s,`디자인 강도  ${c[5]}`,x+34,560,155,26,14,C.blue,true); text(s,`셀프 난이도  ${c[6]}`,x+190,560,160,26,14,C.ink,true);});
  text(s,"※ 대표 이미지와 썸네일은 방향 비교용입니다. 확정안은 전체·정면·좌측·우측·상세 뷰로 다시 제작합니다.",64,620,1120,24,13,C.muted,false);
  footer(s,4); notes(s,[img.natural+" (AI 생성)",img.french+" (AI 생성)",img.urban+" (AI 생성)"]);
}

// 5 Recommended first direction
{
  const s=p.slides.add(); s.background.fill=C.paper; title(s,"03 · CONCEPT GUIDE","콘셉트는 ‘예쁜 정도’가 아니라 변경 범위와 셀프 가능성까지 함께 봅니다.");
  const rows=[
    ["적당한 콘셉트","낮음","2 / 5","벽지·조명·커튼 중심. 기존 바닥과 창호를 살려 비용과 실패 가능성을 낮춤"],
    ["앤틱 클래식","중간","4 / 5","몰딩 비례·딥 컬러·황동 조명으로 분위기를 만들며 정밀 목공과 도장이 핵심"],
    ["고강도 콘셉트","높음","5 / 5","패널 철거부터 천장·벽·바닥·전기까지 연동. 셀프보다 전문 공정 분리가 안전"],
  ];
  rows.forEach((r,i)=>{const y=168+i*132; shape(s,64,y,1128,108,i===0?C.pale:(i===1?"#F4EEE5":"#EEE8E5"),"none",true); text(s,r[0],88,y+20,235,30,22,C.navy,true); text(s,"디자인 강도",354,y+16,110,22,13,C.muted,true); text(s,r[1],354,y+43,110,27,18,C.blue,true); text(s,"셀프 난이도",482,y+16,110,22,13,C.muted,true); text(s,r[2],482,y+43,110,27,18,C.ink,true); text(s,r[3],628,y+18,530,66,16,C.ink,false);});
  shape(s,64,590,1128,50,C.navy,"none",true); text(s,"권장 흐름  |  3안 비교 → 선호안 1개 선택 → 실측 → 다중 뷰 디자인 → 시공 제안서",86,600,1080,30,17,C.white,true);
  footer(s,5); notes(s,["콘셉트 강도와 셀프 난이도는 사진 기반 예비 등급이며 현장 확인 후 조정됩니다."]);
}

// 6 Difficulty & budget
{
  const s=p.slides.add(); s.background.fill=C.paper; title(s,"04 · DIFFICULTY & BUDGET","사진 단계에서는 ‘정확한 가격’보다 선택지별 부담을 비교합니다.");
  const rows=[
    ["셀프","상","30–90만원","도장·커튼·조명 일부","패널 철거·바탕 보정은 어려움"],
    ["반셀프","중","100–250만원","자재 직접 구매＋목공·전기 외주","공정 연결과 일정 관리 필요"],
    ["업체 시공","하","220–500만원","벽면·조명·커튼 일괄","현장관리 포함 여부 확인"],
  ];
  const x=[64,210,370,560,900], widths=[130,145,175,325,310];
  shape(s,56,162,1168,54,C.navy);
  ["방식","고객 난이도","사진 기준 범위","포함 예시","확인사항"].forEach((v,i)=>text(s,v,x[i],174,widths[i],34,16,C.white,true));
  rows.forEach((r,ri)=>{const y=232+ri*106; if(ri%2===0) shape(s,56,y-8,1168,86,C.ivory); r.forEach((v,i)=>text(s,v,x[i],y,widths[i],54,i===0?19:16,i===0?C.navy:C.ink,i===0));});
  shape(s,56,558,1168,74,C.pale,"none",true);
  text(s,"금액 조건",76,568,120,28,18,C.blue,true);
  text(s,"거실 1개 공간 가정 · 실측 전 · 자재 등급/철거/폐기물/부가세/현장 여건에 따라 변동",190,566,995,34,16,C.ink,false);
  text(s,"공개 가격 자료에서는 기본 LED 교체 7만원/개소, 브랜드 기성 커튼·블라인드 35만원/개소 등의 예시가 제시됩니다.",190,598,995,28,13,C.muted,false);
  footer(s,6); notes(s,["https://mirizip.com/prices (공종별 공개 단가, 2026-09-02 확인)","https://soomgo.com/questions/2279 (블라인드 설치 평균 비용, 2026-09-02 확인)","금액 범위는 사진 기반 내부 추정치이며 계약 또는 확정 견적의 근거가 아닙니다."]);
}

// 7 Need from customer
{
  const s=p.slides.add(); s.background.fill=C.ivory; title(s,"05 · NEXT INPUT","정확한 디자인 제안서를 위해 다섯 가지만 추가로 확인합니다.");
  const steps=[
    ["01","정면·좌측·우측 사진","각 모서리와 문·콘센트 포함"],
    ["02","간단 실측","벽 길이·천장 높이·창 폭과 높이"],
    ["03","유지·철거 의사","바닥·패널월·등기구·벽등"],
    ["04","선호 이미지","좋은 이유와 싫은 이유를 한 줄씩"],
    ["05","예산과 작업 방식","셀프·반셀프·업체 중 우선순위"],
  ];
  steps.forEach((a,i)=>{const y=160+i*92; text(s,a[0],70,y,54,38,17,C.blue,true); text(s,a[1],138,y,280,38,22,C.navy,true); text(s,a[2],448,y,710,38,18,C.ink,false); shape(s,70,y+58,1090,1,C.line);});
  footer(s,7); notes(s,["요청 항목은 본 프로젝트의 다음 단계 입력값입니다."]);
}

// 8 Close / CTA
{
  const s=p.slides.add(); s.background.fill=C.navy;
  text(s,"다음 단계",68,66,220,28,14,"#A9CBE9",true);
  text(s,"디자인 계약 후,\n콘셉트마다 여러 뷰를 완성합니다.",68,108,720,108,42,C.white,true);
  const flow=["전체 뷰","정면 뷰","좌측 뷰","우측 뷰","마감 상세"];
  flow.forEach((v,i)=>{const x=68+i*224; shape(s,x,298,198,74,i===0?C.blue:"#234B76","#4F7093",true); text(s,v,x+12,315,174,34,18,C.white,true,"center");});
  text(s,"디자인 확정 후에는 시공 방법·자재·수량·셀프 난이도·상세 견적을 담은 시공 제안서로 이어집니다.",68,434,1030,66,20,"#E5EEF6",false);
  shape(s,68,544,1110,1,"#547497");
  text(s,"본 진단서는 사진 기반 사전 검토 자료이며, 실측 전 설계·시공·금액을 확정하지 않습니다.",68,574,1040,36,16,"#BBD0E3",false);
  text(s,"공간한쪽",68,646,240,30,20,C.white,true); text(s,"PRE-DESIGN DIAGNOSIS",920,650,260,22,12,"#A9CBE9",true,"right");
  notes(s,["본 자료의 사용자 제공 사진 및 AI 생성 시안은 상담 목적의 내부 제안 자료입니다."]);
}

await fs.mkdir(PREVIEW,{recursive:true});
for(const [i,s] of p.slides.items.entries()){
  const blob=await p.export({slide:s,format:"png",scale:1});
  await fs.writeFile(`${PREVIEW}/slide-${i+1}.png`,new Uint8Array(await blob.arrayBuffer()));
}
const deck=await PresentationFile.exportPptx(p); await deck.save(OUT);
console.log(OUT);
