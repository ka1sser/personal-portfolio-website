document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');
  const h2 = hero.querySelector('h2');
  const h1s = hero.querySelectorAll('h1');
  const span = hero.querySelector('span');
  const nav = document.querySelector('nav');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        h2.classList.remove('fade-in-h2');
        h1s.forEach(h1 => h1.classList.remove('fade-in-h1'));
        span.classList.remove("fade-in-span");
        nav.classList.remove('fade-in-nav');

        setTimeout(() => {
          h2.classList.add('fade-in-h2');
        }, 0);

        setTimeout(() => {
          h1s.forEach(h1 => h1.classList.add('fade-in-h1'));
        }, 1500);

        setTimeout(() => {
          span.classList.add("fade-in-span");
          nav.classList.add('fade-in-nav');
        }, 3000);
      } else {

        h2.classList.remove('fade-in-h2');
        h1s.forEach(h1 => h1.classList.remove('fade-in-h1'));
        span.classList.remove('fade-in-span');
        nav.classList.remove('fade-in-nav');
      }
    });
  }, { threshold: 0.5 });

  observer.observe(hero);
});
