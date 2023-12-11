let url = new URL(window.location);
let params  = url.searchParams;

document.addEventListener('DOMContentLoaded', function () {
    let submitCounter = parseInt(localStorage.getItem('submitCounter')) || 0;
  
    // Display the counter value on the page (optional)
    document.getElementById('submitCounterDisplay').textContent = submitCounter;

    let currentDate = new Date();
      let formattedDate = currentDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
      let formattedTime = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
      let dateTimeString = `${formattedDate} ${formattedTime}`;
      document.getElementById('currentDateTime').textContent = dateTimeString;
  });


document.querySelector('#yourname').textContent = params.get("firstName");
document.querySelector('#youremail').textContent = params.get("email");
document.querySelector('#yourphone').textContent = params.get("phone");
document.querySelector('#fruit1').textContent = params.get("fruit1");
document.querySelector('#fruit2').textContent = params.get("fruit2");
document.querySelector('#fruit3').textContent = params.get("fruit3");
document.querySelector('#special').textContent = params.get("special");