document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
      const faqItem = item.parentElement;
      faqItem.classList.toggle('active');
  });
});