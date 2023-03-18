// const burger = document.querySelector('.hamburger');
// const menu = document.querySelector('.menu');

// console.log(burger);

// burger.addEventListener('click', () => {
//   menu.classList.toggle('menu--active');
//   burger.classList.toggle('hamburger--active');
// });

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('menu--active');
  });

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger--active');
      menu.classList.toggle('menu--active');
    });
  });
});
