document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('mobileToggle');
  const panel = document.getElementById('mobilePanel');

  if (toggleBtn && panel) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = !panel.hasAttribute('hidden');
      if (isOpen) {
        panel.setAttribute('hidden', '');
        toggleBtn.setAttribute('aria-expanded', 'false');
      } else {
        panel.removeAttribute('hidden');
        toggleBtn.setAttribute('aria-expanded', 'true');
      }
    });

    panel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        panel.setAttribute('hidden', '');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        panel.setAttribute('hidden', '');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const dialog = document.getElementById('authDialog');
  const form = document.getElementById('authForm');
  const title = document.getElementById('authTitle');
  const kicker = document.getElementById('authKicker');
  const submit = form?.querySelector('.auth-submit');
  const status = document.getElementById('authStatus');
  const switchBtn = document.getElementById('authSwitch');
  const switchText = document.getElementById('authSwitchText');
  const password = document.getElementById('authPassword');
  const agree = document.getElementById('authAgree');
  let authMode = 'login';

  const setAuthMode = (mode) => {
    authMode = mode;
    const signup = mode === 'signup';
    document.querySelectorAll('.signup-only').forEach((element) => { element.hidden = !signup; });
    title.textContent = signup ? '회원가입' : '로그인';
    kicker.textContent = signup ? '내 공간 계획을 안전하게 보관하세요' : '공간한쪽에 다시 오신 것을 환영합니다';
    submit.textContent = signup ? '회원가입' : '로그인';
    switchText.textContent = signup ? '이미 회원이신가요?' : '아직 회원이 아니신가요?';
    switchBtn.textContent = signup ? '로그인' : '회원가입';
    password.autocomplete = signup ? 'new-password' : 'current-password';
    agree.required = signup;
    status.textContent = '';
  };

  document.querySelectorAll('[data-auth]').forEach((button) => {
    button.addEventListener('click', () => {
      setAuthMode(button.dataset.auth);
      panel?.setAttribute('hidden', '');
      toggleBtn?.setAttribute('aria-expanded', 'false');
      dialog.showModal();
    });
  });
  dialog?.querySelector('.auth-dialog__close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  switchBtn?.addEventListener('click', () => setAuthMode(authMode === 'login' ? 'signup' : 'login'));
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    status.textContent = authMode === 'signup' ? '회원가입 화면이 준비되었습니다. 인증 서버 연결 후 실제 가입이 가능합니다.' : '로그인 화면이 준비되었습니다. 인증 서버 연결 후 실제 로그인이 가능합니다.';
  });
});
