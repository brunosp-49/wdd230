if (!localStorage.getItem('pageVisits')) {
    localStorage.setItem('pageVisits', 0);
  }
  
  let pageVisits = parseInt(localStorage.getItem('pageVisits'));
  pageVisits++;
  localStorage.setItem('pageVisits', pageVisits);
  
  document.getElementById('pageVisitsCounter').textContent = pageVisits;
  