document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
      const faqItem = item.parentElement;
      faqItem.classList.toggle('active');
  });
});

document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('click', () => {
      document.querySelector('.navbar-collapse').classList.remove('show');
  });
});

document.getElementById('navbarToggler').addEventListener('click', () => {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
  } else {
      navbarCollapse.classList.add('show');
  }
});