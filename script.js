document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js");

  if (window.lucide) {
    window.lucide.createIcons();
  }

  document.querySelector("#year").textContent = new Date().getFullYear();

  const setPreviewHeight = (details, height) => {
    details.closest(".publication-with-preview").style.setProperty(
      "--publication-preview-height",
      `${Math.floor(height)}px`,
    );
  };

  const previewObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      setPreviewHeight(entry.target, entry.contentRect.height);
    });
  });

  document.querySelectorAll(".publication-with-preview .publication-details").forEach((details) => {
    setPreviewHeight(details, details.getBoundingClientRect().height);
    previewObserver.observe(details);
  });

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