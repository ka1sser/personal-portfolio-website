document.addEventListener('DOMContentLoaded', () => {
  // --- hero elements ---
  const hero = document.getElementById("hero");
  const h2 = hero.querySelector("h2");
  const h1s = hero.querySelectorAll("h1");
  const a = hero.querySelector("a");
  const nav = document.querySelector("nav");

  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          h2.classList.remove("fade-in-h2");
          h1s.forEach((h1) => h1.classList.remove("fade-in-h1"));
          a.classList.remove("fade-in-a");
          nav.classList.remove("fade-in-nav");
          blue_line_1.classList.remove("blue-line-1-animation");

          // ----- hero section-----
          setTimeout(() => {
            h2.classList.add("fade-in-h2");
          }, 0);

          setTimeout(() => {
            h1s.forEach((h1) => h1.classList.add("fade-in-h1"));
          }, 1000);

          setTimeout(() => {
            a.classList.add("fade-in-a");
            nav.classList.add("fade-in-nav");
          }, 2000);
        } else {
          h2.classList.remove("fade-in-h2");
          h1s.forEach((h1) => h1.classList.remove("fade-in-h1"));
          a.classList.remove("fade-in-a");
          nav.classList.remove("fade-in-nav");
        }
      });
    },
    { threshold: 0.5 }
  );

  heroObserver.observe(hero);

  // --- about elements ---
  const about = document.getElementById("about");
  const blue_line_1 = about.querySelector("#blue-line-1");
  const blue_line_2 = about.querySelector("#blue-line-2");
  const about_h1 = about.querySelector("h1");
  const about_p = about.querySelector("p");

  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
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
    },
    { threshold: 0.5 }
  );

  aboutObserver.observe(about);

  // --- skills elements ---
  const skills = document.getElementById("skills");
  const skills_language = skills.querySelector("#language");
  const skills_tools = skills.querySelector("#tools");
  const yellow_line = skills.querySelector("#yellow-line");
  const skills_container_1 = skills.querySelector("#skills-container-1");
  const skills_container_2 = skills.querySelector("#skills-container-2");
  const skills_container_3 = skills.querySelector("#skills-container-3");
  const skills_container_4 = skills.querySelector("#skills-container-4");
  const skills_container_5 = skills.querySelector("#skills-container-5");

  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skills_language.classList.remove("fadeIn-skills-language");
          skills_tools.classList.remove("fadeIn-skills-tools");
          yellow_line.classList.remove("fadeIn-yellow-line");
          skills_container_1.classList.remove("fadeIn-skills");
          skills_container_2.classList.remove("fadeIn-skills");
          skills_container_3.classList.remove("fadeIn-skills");
          skills_container_4.classList.remove("fadeIn-skills");
          skills_container_5.classList.remove("fadeIn-skills");

          setTimeout(() => {
            yellow_line.classList.add("fadeIn-yellow-line");
          }, 250);

          setTimeout(() => {
            skills_language.classList.add("fadeIn-skills-language");
            skills_container_1.classList.add("fadeIn-skills");
            skills_container_2.classList.add("fadeIn-skills");
            skills_container_3.classList.add("fadeIn-skills");
          }, 1000);

          setTimeout(() => {
            skills_tools.classList.add("fadeIn-skills-tools");
            skills_container_4.classList.add("fadeIn-skills");
            skills_container_5.classList.add("fadeIn-skills");
          }, 1500);
        } else {
          skills_language.classList.remove("fadeIn-skills-language");
          skills_tools.classList.remove("fadeIn-skills-tools");
          yellow_line.classList.remove("fadeIn-yellow-line");
          skills_container_1.classList.remove("fadeIn-skills");
          skills_container_2.classList.remove("fadeIn-skills");
          skills_container_3.classList.remove("fadeIn-skills");
          skills_container_4.classList.remove("fadeIn-skills");
          skills_container_5.classList.remove("fadeIn-skills");
        }
      });
    },
    { threshold: 0.35 }
  );

  skillsObserver.observe(skills);

  // --- works elements ---
  const works = document.getElementById("works");
  const proj_1 = works.querySelector("#proj-1");
  const proj_2 = works.querySelector("#proj-2");

  const proj_1_observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          proj_1.classList.remove("fadeIn-project");

          setTimeout(() => {
            proj_1.classList.add("fadeIn-project");
          }, 500);
        } else {
          proj_1.classList.remove("fadeIn-project");
        }
      });
    },
    { threshold: 0.35 }
  );

  proj_1_observer.observe(proj_1);

  const proj_2_observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          proj_2.classList.remove("fadeIn-project");

          setTimeout(() => {
            proj_2.classList.add("fadeIn-project");
          }, 500);
        } else {
          proj_2.classList.remove("fadeIn-project");
        }
      });
    },
    { threshold: 0.35 }
  );

  proj_2_observer.observe(proj_2);

  // ----- services -----

  const services = document.getElementById("services");
  const services_h1 = services.querySelector("h1");
  const services_li = services.querySelectorAll("li");

  const servicesObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          services_h1.classList.remove("fadeIn-services");

          setTimeout(() => {
            services_h1.classList.add("fadeIn-services");
          }, 500);

          setTimeout(() => {
            services_li.forEach((li, i) => {
              li.style.animationDelay = `${0.25 * i}s`;
              li.classList.add("fadeIn-services");
            });
          }, 800);
        } else {
          services_h1.classList.remove("fadeIn-services");
          services_li.forEach((li) => {
            li.classList.remove("fadeIn-services");
          });
        }
      });
    },
    { threshold: 0.35 }
  );

  servicesObserver.observe(services);

  // ----- contact -----

  const contact = document.getElementById("contact");
  const contact_container = contact.querySelector("#contact-container");
  const contact_socials = contact.querySelector("#socials-container");

  const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contact_container.classList.remove("fadeIn-contact");

          setTimeout(() => {
            contact_container.classList.add("fadeIn-contact");
          }, 100);

        } else {
          contact_container.classList.remove("fadeIn-contact");
        }
      });
    },
    { threshold: 0.35 }
  );

  contactObserver.observe(contact_container);

  const socialsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contact_socials.classList.remove("fadeIn-contact");

          setTimeout(() => {
            contact_socials.classList.add("fadeIn-contact");
          }, 1500);
        } else {
          contact_socials.classList.remove("fadeIn-contact");
        }
      });
    },
    { threshold: 0.35 }
  );

  socialsObserver.observe(contact_socials);
});

