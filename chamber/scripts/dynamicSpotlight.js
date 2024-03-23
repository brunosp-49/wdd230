document.addEventListener("DOMContentLoaded", function () {
  fetch("https://brunosp-49.github.io/wdd230/chamber/data/members.json")
    .then((response) => response.json())
    .then((data) => {
      const filteredMembers = data.filter(
        (member) =>
          member.membershipLevel === "Gold" ||
          member.membershipLevel === "Silver"
      );
      const selectedMembers = getRandomMembers(filteredMembers, 3); // Adjust the number as needed
      displaySpotlights(selectedMembers);
    })
    .catch((error) => console.error("Error fetching directory data:", error));
});

function getRandomMembers(members, count) {
  const shuffledMembers = members.sort(() => 0.5 - Math.random());
  return shuffledMembers.slice(0, count);
}

function displaySpotlights(members) {
  const spotlightContainer = document.querySelector(".company-spotlights");
  spotlightContainer.innerHTML = ""; // Clear existing content

  members.forEach((member) => {
    const spotlightCard = document.createElement("div");
    spotlightCard.className = "spotlight-card";
    spotlightCard.innerHTML = `
         <img src="${member.image}" alt="${member.name} Logo" class="company-logo">
         <div class="company-info">
           <h3 class="company-name">${member.name}</h3>
           <p class="company-description">${member.otherInfo}</p>
           <a href="${member.website}"  target="_blank" class="cta-button">Visit Website</a>
         </div>
       `;
    spotlightContainer.appendChild(spotlightCard);
  });
}
