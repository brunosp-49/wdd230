document.getElementById("reservation-form").addEventListener("submit", function (event) {
  const agreementCheckbox = document.getElementById("agreement-checkbox");
  if (!agreementCheckbox.checked) {
     alert("Please agree to the terms and conditions to proceed.");
     event.preventDefault();
  } else {
     alert("Success submission");
     event.preventDefault(); 
     this.reset();
  }
 });
 
 
