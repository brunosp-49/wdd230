const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

const darkModeToggle = document.getElementById('darkModeToggle');

function toggleDarkMode() {
  if (darkModeToggle.checked) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

darkModeToggle.addEventListener('change', toggleDarkMode);

toggleDarkMode();