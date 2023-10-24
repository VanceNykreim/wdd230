const date = new Date();

document.querySelector("#year").textContent = date.getFullYear();

document.querySelector("#lastmodified").textContent = document.lastModified;



// for hamburger menu
var checkbox = document.getElementById("hamburger");
    var nav = document.getElementById("hamnav");

    // Add an event listener to the checkbox
    checkbox.addEventListener("change", function() {
      // Toggle the active class on the nav element
      nav.classList.toggle("active");
    });