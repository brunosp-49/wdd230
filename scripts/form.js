document.addEventListener("DOMContentLoaded", function () {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    console.log({password: password.value, confirmPassword: confirmPassword.value})
    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match. Please try again.");
      password.value = "";
      confirmPassword.value = "";
      password.focus();
      event.preventDefault(); // Prevent form submission
    }
  });

  // Update footer with current year and last modification date
  const year = document.getElementById("year");
  const lastModified = document.getElementById("lastModified");
  year.textContent = new Date().getFullYear();
  lastModified.textContent = new Date().toLocaleDateString();
});
