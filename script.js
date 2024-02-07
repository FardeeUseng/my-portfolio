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

// const activitySections = [
//   {
//     title: "title1",
//     text: "text1",
//     image: "../assets/profile2.jpg"
//   },
//   {
//     title: "title2",
//     text: "text2",
//     image: "../assets/profile2.jpg"
//   },
//   {
//     title: "title3",
//     text: "text3",
//     image: "../assets/profile2.jpg"
//   },
// ]

// const activityContainer = document.getElementById("activity")

// activityContainer.forEach(activity => {

// })