const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check LocalStorage for saved theme preference
const savedTheme = localStorage.getItem("theme");
console.log(savedTheme);

if (savedTheme) {
  body.classList.add(savedTheme);
}

// Toggle theme on checkbox change
themeToggle.addEventListener("change", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    localStorage.setItem("theme", "");
  } else {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});
