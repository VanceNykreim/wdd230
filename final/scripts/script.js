// for hamburger menu
var checkbox = document.getElementById("hamburger");
    var nav = document.getElementById("hamnav");

    // Add an event listener to the checkbox
    checkbox.addEventListener("change", function() {
      // Toggle the active class on the nav element
      nav.classList.toggle("active");
    });

// Last modified date in the footer
const lastModified = document.querySelector('.last-modified');
const lastModifiedDate = document.lastModified;

lastModified.textContent = `Last Modified: ${lastModifiedDate}`;