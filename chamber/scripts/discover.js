document.addEventListener('DOMContentLoaded', function() {
    // Check for stored visit date
    let lastVisit = localStorage.getItem('ccsc-lastVisit');
    let today = new Date();
    let lastVisitDate = new Date(lastVisit);
    let daysSinceLastVisit = Math.floor((today - lastVisitDate) / (1000 *   60 *   60 *   24));
  
    // Update sidebar content based on visit date
    let sidebarContent = document.getElementById('ccsc-sidebarContent');
    if (!lastVisit) {
      sidebarContent.textContent = "Welcome! Let us know if you have any questions.";
    } else if (daysSinceLastVisit <   1) {
      sidebarContent.textContent = "Back so soon! Awesome!";
    } else {
      let daysText = daysSinceLastVisit ===   1 ? "day" : "days";
      sidebarContent.textContent = `You last visited ${daysSinceLastVisit} ${daysText} ago.`;
    }
  
    // Store today's date
    localStorage.setItem('ccsc-lastVisit', today.toISOString());
  
    // Lazy load images
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let img = entry.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    });
  
    document.querySelectorAll('.ccsc-image-gallery img').forEach(img => {
      img.dataset.src = img.src;
      img.src = '';
      observer.observe(img);
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const calendarDates = document.querySelector('.ccsc-dates');
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const firstDayOfMonth = new Date(year, month,  1).getDay();
    const daysInMonth = new Date(year, month +  1,  0).getDate();
  
    let date =  1;
    let dayOfWeek = firstDayOfMonth;
    while (date <= daysInMonth) {
      if (dayOfWeek ===  0) {
        // Start a new week
        const weekRow = document.createElement('div');
        weekRow.classList.add('ccsc-week');
      }
  
      const dateCell = document.createElement('div');
      dateCell.textContent = date;
      weekRow.appendChild(dateCell);
  
      dayOfWeek = (dayOfWeek +  1) %  7;
      date++;
  
      if (dayOfWeek ===  0 || date > daysInMonth) {
        // End of the week or the month
        calendarDates.appendChild(weekRow);
      }
    }
  
    // Update the month name
    document.querySelector('.ccsc-month h4').textContent = monthNames[month];
  });
  