
// for hamburger menu
document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');

  burgerMenu.addEventListener('click', function () {
      navLinks.classList.toggle('show');
  });
});

// Last modified date in the footer
const lastModified = document.querySelector('.last-modified');
const lastModifiedDate = document.lastModified;

lastModified.textContent = `Last Modified: ${lastModifiedDate}`;