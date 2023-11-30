// Hamburger menu functionality
const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

hamburgerMenu.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Last modified date in the footer
const lastModified = document.querySelector('.last-modified');
const lastModifiedDate = document.lastModified;

lastModified.textContent = `Last Modified: ${lastModifiedDate}`;