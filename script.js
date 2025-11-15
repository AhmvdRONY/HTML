function addCopyButtons() {
  document.querySelectorAll('pre code').forEach((block) => {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'نسخ الكود';
    btn.onclick = () => {
      navigator.clipboard.writeText(block.textContent);
      btn.textContent = 'تم النسخ!';
      showCopyAlert();
      setTimeout(() => btn.textContent = 'نسخ الكود', 1200);
    };
    block.parentNode.appendChild(btn);
  });
}
window.addEventListener('DOMContentLoaded', addCopyButtons);
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.body.appendChild(toggleThemeBtn);

function showCopyAlert(msg = 'تم نسخ الكود!') {
  const el = document.createElement('div');
  el.className = 'copy-alert';
  el.textContent = msg;
  Object.assign(el.style, {
    position: 'fixed',
    bottom: '30px',
    left: '24px',
    background: '#6c63ff',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: '8px',
    zIndex: 9999,
    boxShadow: '0 6px 18px rgba(0,0,0,0.16)'
  });
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1600);
}

function autoDarkMode() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  }
}
window.addEventListener('DOMContentLoaded', autoDarkMode);




