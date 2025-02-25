document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
      const faqItem = item.parentElement;
      faqItem.classList.toggle('active');
  });
});

document.getElementById('navbarToggler').addEventListener('click', () => {
  const navbarNav = document.getElementById('navbarNav');
  navbarNav.classList.toggle('show');
  document.getElementById('navbarToggler').classList.toggle('collapsed');
  document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('click', () => {
      document.getElementById('navbarNav').classList.remove('show');
      document.getElementById('navbarToggler').classList.add('collapsed');
      document.body.classList.remove('no-scroll');
  });
});