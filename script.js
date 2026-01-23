document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    threshold: 0.1
  }


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Target visible:', entry.target);
        entry.target.classList.add('seen');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    observer.observe(section);
  });
})
