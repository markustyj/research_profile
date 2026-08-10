document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js");

  if (window.lucide) {
    window.lucide.createIcons();
  }

  document.querySelector("#year").textContent = new Date().getFullYear();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    const bounds = element.getBoundingClientRect();
    if (bounds.top >= window.innerHeight || bounds.bottom <= 0) {
      element.classList.add("pending");
      observer.observe(element);
    }
  });
});