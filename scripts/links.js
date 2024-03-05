const baseURL = "https://brunosp-49.github.io/wdd230/";
const linksURL = "https://brunosp-49.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);
}

function displayLinks(weeks) {
  const activitiesContainer = document.getElementById(
    "dynamic-learning-activities"
  );
  weeks.forEach((week, index) => {
    const weekDiv = document.createElement("div");
    weekDiv.innerHTML = `<h4>Week ${week.lesson}:</h4>`;
    week.links.forEach((link) => {
      const linkElement = document.createElement("a");
      linkElement.href = baseURL + link.url;
      linkElement.textContent = link.title;
      weekDiv.appendChild(linkElement);
    });
    activitiesContainer.appendChild(weekDiv);
  });
}

getLinks();
