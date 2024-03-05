const baseURL = "https://yourgithubusername.github.io/wdd230/";
const linksURL = "https://yourgithubusername.github.io/wdd230/data/links.json";

async function getLinks() {
 const response = await fetch(linksURL);
 const data = await response.json();
 displayLinks(data.lessons);
}

function displayLinks(weeks) {
 const linksContainer = document.getElementById('dynamic-links');
 weeks.forEach(week => {
    const weekDiv = document.createElement('div');
    weekDiv.innerHTML = `<h3>Week ${week.lesson}</h3>`;
    week.links.forEach(link => {
      const linkElement = document.createElement('a');
      linkElement.href = baseURL + link.url;
      linkElement.textContent = link.title;
      weekDiv.appendChild(linkElement);
    });
    linksContainer.appendChild(weekDiv);
 });
}

getLinks();
