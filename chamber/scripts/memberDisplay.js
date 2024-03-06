document.addEventListener("DOMContentLoaded", function () {
  const memberContainer = document.getElementById("memberContainer");
  const toggleViewButton = document.getElementById("toggleViewButton");
  let isGridView = true;

  fetch("data/members.json")
    .then((response) => response.json())
    .then((data) => {
      displayMembers(data);
      toggleViewButton.addEventListener("click", () => toggleView());
    })
    .catch((error) => console.error("Error loading members:", error));

  function displayMembers(members) {
    memberContainer.innerHTML = "";
    members.forEach((member) => {
      const memberElement = document.createElement("div");
      memberElement.classList.add("member-card", "member-list-item");
      memberElement.innerHTML = `
         <img src="${member.image}" alt="${member.name} logo">
         <h3>${member.name}</h3>
         <p>${member.address}</p>
           <p>${member.phone}</p>
           <p>Membership Level: ${member.membershipLevel}</p>
           <p>${member.otherInfo}</p>
           <p><a href="${member.website}">${member.website}</a></p>
         `;
      memberContainer.appendChild(memberElement);
    });
    toggleView();
  }

  function toggleView() {
    if (isGridView) {
      memberContainer.classList.remove("member-grid");
      memberContainer.classList.add("member-list");
    //   document.querySelectorAll(".member-card").forEach((card) => {
    //     card.style.display = "grid";
    //   });
    } else {
      memberContainer.classList.remove("member-list");
      memberContainer.classList.add("member-grid");
    //   document.querySelectorAll(".member-card").forEach((card) => {
    //     card.style.display = "flex";
    //   });
    }
    isGridView = !isGridView;
  }
});
