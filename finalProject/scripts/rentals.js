document.addEventListener("DOMContentLoaded", function () {
    const rentalsTable = document.getElementById("rentals-table");
  
    fetch("https://brunosp-49.github.io/wdd230/finalProject/data/rentals.json")
      .then((response) => response.json())
      .then((data) => {
        let html = "<table>";
        html +=
          "<tr><th>Type</th><th>Max Persons</th><th>Half Day</th><th>Full Day</th></tr>";
        data.rentals.forEach((rental) => {
          html += `<tr>
                              <td>${rental.type}</td>
                              <td>${rental.maxPersons}</td>
                              <td>${rental.halfDay}</td>
                              <td>${rental.fullDay}</td>
                           </tr>`;
        });
        html += "</table>";
        rentalsTable.innerHTML = html;
      })
      .catch((error) => console.error("Error fetching rentals data:", error));
  });