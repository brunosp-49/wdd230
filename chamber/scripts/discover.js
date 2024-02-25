document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  console.log({ lazyImages });

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});


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

  // Display the visit message in the new leftCard
  document.getElementById("visitMessage").textContent = visitMessage;

  // Update the last visit date in LocalStorage
  localStorage.setItem("lastVisit", now);
});