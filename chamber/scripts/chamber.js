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


//for weather widget
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

// for dark mode
function darkModeFunction(){
  var darkBox = document.getElementById("darkButton");

  // If the checkbox is checked, change the display
  if (darkBox.checked == true){
    //activate darkMode.css file
  } else {
    //deactivate darkMode.css file
  }
}
