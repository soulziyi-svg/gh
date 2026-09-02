const comparison=document.querySelector('#beforeAfter');
if(comparison){const range=comparison.querySelector('input');const before=comparison.querySelector('.ba-before');const handle=comparison.querySelector('.ba-handle');const update=()=>{const value=range.value;before.style.right=`${100-value}%`;handle.style.left=`${value}%`};range.addEventListener('input',update);update()}
const processData={
  '01':['기존 벽지 철거','기존 벽지의 겹수와 벽 상태를 확인하며 제거합니다. 곰팡이·누수·석고 파손이 발견되면 원인을 먼저 해결합니다.'],
  '02':['벽 상태 점검','빛을 옆으로 비춰 균열·단차·들뜸·습기 자국을 확인하고 보수가 필요한 범위를 표시합니다.'],
  '03':['균열·파손 보수','갈라진 부위와 석고 파손을 보강합니다. 움직이는 균열은 마감 전에 원인과 재발 가능성을 확인해야 합니다.'],
  '04':['퍼티·면 정리','구멍과 단차를 메우고 샌딩해 면을 평평하게 만듭니다. 고급 벽지일수록 바탕의 작은 오차가 더 잘 보입니다.'],
  '05':['초배 작업','벽지와 바탕 사이에 초배지를 시공해 흡수 차이와 미세 균열이 마감면에 드러나는 것을 줄입니다.'],
  '06':['벽지 재단','패턴 반복과 벽 높이, 위아래 여유분을 계산해 재단합니다. 같은 생산 로트를 섞지 않도록 품번을 확인합니다.'],
  '07':['벽지 시공','기포와 주름을 밀어내며 수직과 패턴을 맞춥니다. 실크벽지는 이음부와 접착 범위를 특히 세심하게 관리합니다.'],
  '08':['접점 마감','콘센트·스위치·문선·창호·에어컨 주변을 정리하고 들뜸이나 과도한 풀 자국이 없는지 확인합니다.'],
  '09':['건조·최종 검수','급가열을 피하고 자연 환기하며 충분히 건조합니다. 건조 후 이음·기포·들뜸·오염을 최종 확인합니다.']
};
const detail=document.querySelector('#processDetail');
document.querySelectorAll('.interactive-process button').forEach((button,index)=>{if(index===0)button.closest('li').classList.add('is-active');button.addEventListener('click',()=>{document.querySelectorAll('.interactive-process li').forEach(item=>item.classList.remove('is-active'));button.closest('li').classList.add('is-active');const [title,copy]=processData[button.dataset.step];detail.innerHTML=`<span>STEP ${button.dataset.step}</span><h3>${title}</h3><p>${copy}</p>`})});
document.querySelectorAll('.material-pick button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.material-pick button').forEach(item=>item.classList.remove('is-active'));button.classList.add('is-active')}));
