const clickBait = document.querySelector('.mob-nav');
const burgerMenu = document.querySelector('.burgermenu');

burgerMenu.addEventListener('click', () => {
  clickBait.classList.toggle('show');
  clickBait.classList.toggle('hide');
});










window.addEventListener('scroll', function() {
  const nav = document.querySelector('.header-container');
  if (window.scrollY > 0) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }
});