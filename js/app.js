// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Progress bar fill animation — fires once when the bar enters view
const progressBar = document.querySelector('.progress-bar-wrap');
if (progressBar) {
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.getElementById('progress-fill').classList.add('animated');
        progressObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  progressObserver.observe(progressBar);
}
