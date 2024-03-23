document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const desktopNav = document.getElementById("desktopNav");
  
    mobileMenuButton.addEventListener("click", function () {
      if (desktopNav.style.display === "none") {
        desktopNav.style.display = "block";
      } else {
        desktopNav.style.display = "none";
      }
    });
  });

  window.onload = function () {
    var lastModifiedDate = new Date(document.lastModified);
  
    var formattedDate =
      lastModifiedDate.toLocaleDateString() +
      " " +
      lastModifiedDate.toLocaleTimeString();
  
    var lastModifiedElement = document.getElementById("lastModifiedDate");
  
    if (lastModifiedElement) {
      lastModifiedElement.textContent = formattedDate;
    } else {
      console.error('Element with id "lastModified" not found.');
    }
  };