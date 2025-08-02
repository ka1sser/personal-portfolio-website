const pages = document.querySelectorAll(".page");

// IntersectionObserver to detect when pages enter viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
    }
    });
  },
  { threshold: 0.35 }
);

pages.forEach((page) => observer.observe(page));
