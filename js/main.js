function copyEmail() {
  const email = "fardee.tat@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const tooltip = document.getElementById("tooltip");
    tooltip.textContent = "Copied!";
    tooltip.classList.add("opacity-100");

    setTimeout(() => {
      tooltip.textContent = "Copy to clipboard";
      tooltip.classList.remove("opacity-100");
    }, 1500);
  });
}

// Scroll to section with offset
document.querySelectorAll("a.nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    const offset = 90;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Optional: update URL hash
    history.pushState(null, "", this.getAttribute("href"));
  });
});

// Highlight nav when section is visible
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const navLink = document.querySelector(`.nav-link[data-target="${id}"]`);

      if (entry.isIntersecting && navLink) {
        navLinks.forEach((link) =>
          link.classList.remove("bg-neutral-900", "text-white")
        );
        navLink.classList.add("bg-neutral-900", "text-white");
      }
    });
  },
  {
    threshold: 0.3,
    rootMargin: "-100px 0px -60% 0px"
  }
);

sections.forEach((section) => observer.observe(section));
