// تأثير التمرير الناعم
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ظهور العناصر تدريجيًا عند التمرير
const revealElements = document.querySelectorAll('section, .card');
const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// رسالة تأكيد عند إرسال النموذج
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('شكرًا لتواصلك معنا! سنراجع مشروعك ونتواصل قريبًا.');
  form.reset();
});
