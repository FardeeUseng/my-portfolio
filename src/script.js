const sections = [
  "profile", "about-me", "education", "activity",
  "language", "medium", "experience", "skill", "contact-me"
];

const navigationContaner = document.getElementById("navigation");

sections.forEach(section => {
  const link = document.createElement("a")
  link.href = `#${section}`
  link.className = "font-medium hover:text-blue-700";
  link.textContent = section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ");

  navigationContaner.appendChild(link)
})