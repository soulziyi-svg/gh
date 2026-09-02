const state={family:'',priority:''};
const recommendations={
  'single-price':['스케치 · 로하스','작은방과 임대 공간은 기본형 실크로 예산을 조절하세요.'],
  'single-design':['베스띠 · 프리모','한 면은 질감형, 나머지는 균형형으로 구성하면 과하지 않습니다.'],
  'single-durability':['월가드 · 포티스','복도와 코너를 기능성 제품으로 선택하면 유지관리가 편합니다.'],
  'single-care':['베스띠 · 월가드','자주 닦는 위치는 관리형, 침실은 균형형으로 나눠보세요.'],
  'couple-price':['스케치 · 베스띠','공용부와 침실의 등급을 나누면 예산과 완성도를 함께 잡을 수 있습니다.'],
  'couple-design':['디아망 · 프리모 · 파사드','거실과 안방에 질감 중심 제품을 적용하는 조합입니다.'],
  'couple-durability':['월가드 · 파사드','공용부는 내구성, 안방은 디자인 제품으로 나눠 적용하세요.'],
  'couple-care':['베스띠 · 월가드','청소가 잦은 공용부의 관리성을 우선합니다.'],
  'kids-price':['베스띠 · 스케치','손상이 잦은 시기를 고려해 교체 부담이 낮은 제품을 검토하세요.'],
  'kids-design':['프리모 · 월가드','거실은 질감, 아이방과 복도는 생활 내구성을 나눠 적용합니다.'],
  'kids-durability':['포티스 · 월가드','벽을 만지고 긁는 일이 많은 공간에 기능성 제품을 우선합니다.'],
  'kids-care':['월가드 · 포티스','오염과 마찰이 잦은 아이방·복도·코너에 적합한 조합입니다.'],
  'pet-price':['월가드 + 기본형 혼합','반려동물 동선만 기능성 제품으로 지정해 전체 비용을 줄이세요.'],
  'pet-design':['파사드 + 월가드','눈에 띄는 벽은 디자인형, 하부와 복도는 기능성으로 나눕니다.'],
  'pet-durability':['포티스 · 월가드','스크래치가 잦은 벽과 코너에 가장 먼저 검토할 제품군입니다.'],
  'pet-care':['포티스 · 월가드','생활 오염과 마찰을 고려해 기능성 표면을 우선합니다.']
};
const result=document.querySelector('#finderResult');
function updateResult(){if(!state.family||!state.priority)return;const [title,copy]=recommendations[`${state.family}-${state.priority}`];result.innerHTML=`<span>STEP 03 · 추천 결과</span><h3>${title}</h3><p>${copy}<br>최종 제품은 큰 실물 샘플과 현장 바탕 상태를 확인한 후 확정합니다.</p>`}
document.querySelectorAll('[data-family]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-family]').forEach(x=>x.classList.remove('is-active'));button.classList.add('is-active');state.family=button.dataset.family;updateResult()}));
document.querySelectorAll('[data-priority]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-priority]').forEach(x=>x.classList.remove('is-active'));button.classList.add('is-active');state.priority=button.dataset.priority;updateResult()}));
