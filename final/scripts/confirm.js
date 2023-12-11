let url = new URL(window.location);
let params  = url.searchParams;


document.querySelector('#yourname').textContent = params.get("firstName");
document.querySelector('#youremail').textContent = params.get("email");
document.querySelector('#yourphone').textContent = params.get("phone");
document.querySelector('#fruit1').textContent = params.get("fruit1");
document.querySelector('#fruit2').textContent = params.get("fruit2");
document.querySelector('#fruit3').textContent = params.get("fruit3");
document.querySelector('#special').textContent = params.get("special");