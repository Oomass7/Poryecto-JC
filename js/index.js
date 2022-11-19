const navMenu   = document.getElementById('navbar-menu'),
      navToggle = document.getElementById('navbar-toggle'),
      navClose  = document.getElementById('navbar-close');

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('navbar__menu--visible');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('navbar__menu--visible');
  })
}

const navLinks = document.querySelectorAll('.navbar__link');

const handleClickLink = () => {
  navMenu.classList.remove('navbar__menu--visible');
}

navLinks.forEach(link => link.addEventListener('click', handleClickLink));