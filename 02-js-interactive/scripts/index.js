document.addEventListener('DOMContentLoaded', () => {
  // --- hero elements ---
  const hero = document.getElementById('hero');
  const h2 = hero.querySelector('h2');
  const h1s = hero.querySelectorAll('h1');
  const a = hero.querySelector('a');
  const nav = document.querySelector('nav');
  // --- about elements ---
  const about = document.getElementById('about');
  const blue_line_1 = about.querySelector("#blue-line-1");
  const blue_line_2 = about.querySelector("#blue-line-2");
  const about_h1 = about.querySelector('h1')
  const about_p = about.querySelector('p')

  const heroObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        h2.classList.remove('fade-in-h2');
        h1s.forEach(h1 => h1.classList.remove('fade-in-h1'));
        a.classList.remove("fade-in-a");
        nav.classList.remove('fade-in-nav');
        blue_line_1.classList.remove("blue-line-1-animation");

        // ----- hero section-----
        setTimeout(() => {
          h2.classList.add('fade-in-h2');
        }, 0);

        setTimeout(() => {
          h1s.forEach(h1 => h1.classList.add('fade-in-h1'));
        }, 1000);

        setTimeout(() => {
          a.classList.add("fade-in-a");
          nav.classList.add("fade-in-nav");
        }, 2000);

      } else {

        h2.classList.remove('fade-in-h2');
        h1s.forEach(h1 => h1.classList.remove('fade-in-h1'));
        a.classList.remove('fade-in-a');
        nav.classList.remove('fade-in-nav');
      }
    });
  }, { threshold: 0.5 });

  heroObserver.observe(hero);

  const aboutObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        blue_line_1.classList.remove("blue-line-1-animation");
        blue_line_2.classList.remove("blue-line-2-animation");
        about_h1.classList.remove("fade-in-about");
        about_p.classList.remove("fade-in-about");
        
        setTimeout(() => {
          blue_line_1.classList.add("blue-line-1-animation");
          blue_line_2.classList.add("blue-line-2-animation");
          about_h1.classList.add("fade-in-about");
          about_p.classList.add("fade-in-about");
        }, 250);
        
      } else {
        blue_line_1.classList.remove("blue-line-1-animation");
        blue_line_2.classList.remove("blue-line-2-animation");
        about_h1.classList.remove("fade-in-about");
        about_p.classList.remove("fade-in-about");
      }
    });
  }, { threshold: 0.35 });

  aboutObserver.observe(about);

});

