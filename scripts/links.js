function displayLinks(weeks) {
    const activitiesContainer = document.getElementById('dynamic-learning-activities');
    weeks.forEach(week => {
       const weekDiv = document.createElement('div');
       weekDiv.innerHTML = `<h3>Week ${week.lesson}</h3>`;
       week.links.forEach(link => {
         const linkElement = document.createElement('a');
         linkElement.href = baseURL + link.url;
         linkElement.textContent = link.title;
         weekDiv.appendChild(linkElement);
       });
       activitiesContainer.appendChild(weekDiv);
    });
   }
   