document.addEventListener("DOMContentLoaded", function() {
  let lastVisit = localStorage.getItem("lastVisit");
  let now = Date.now();
  let daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 *  60 *  60 *  24));

  let visitMessage;
  if (lastVisit) {
    if (daysSinceLastVisit <  1) {
      visitMessage = "Back so soon! Awesome!";
    } else {
      visitMessage = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit ===  1 ? "day" : "days"} ago.`;
    }
  } else {
    visitMessage = "Welcome! Let us know if you have any questions.";
  }

  document.getElementById("visitMessage").textContent = visitMessage;

  localStorage.setItem("lastVisit", now);
});