// JS احترافي لتجربة مستخدم مبهرة
// نسخ الكود بضغطة زر
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
// تفعيل زر النسخ بعد تحميل الصفحة
window.addEventListener('DOMContentLoaded', addCopyButtons);
// سكرول ناعم عند التنقل
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// وضع ليلي/نهاري (اختياري)
const toggleThemeBtn = document.createElement('button');
toggleThemeBtn.textContent = 'تغيير المظهر';
toggleThemeBtn.className = 'copy-btn';
toggleThemeBtn.style.position = 'fixed';
toggleThemeBtn.style.left = '24px';
toggleThemeBtn.style.bottom = '24px';
toggleThemeBtn.style.zIndex = '999';
toggleThemeBtn.onclick = () => {
  document.body.classList.toggle('light-mode');
  toggleThemeBtn.textContent = document.body.classList.contains('light-mode') ? 'الوضع الليلي' : 'الوضع النهاري';
};
document.body.appendChild(toggleThemeBtn);

// إضافة إشعار صغير عند النسخ
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

// الوضع الداكن التلقائي بحسب إعدادات النظام
function autoDarkMode() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // موقعنا مظلم في الأساس — لا نحتاج لتعديل عند الوضع الداكن
    // ولكن لو أردنا تطبيق نمط فاتح تلقائيًا عند تفعيل الإعداد:
    // document.body.classList.remove('light-mode');
  }
}
window.addEventListener('DOMContentLoaded', autoDarkMode);




