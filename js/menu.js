const menu = document.querySelector('#sandwich');
const crossElement = document.querySelector('#bar img');
const mobileMenu = document.querySelector('#mobile-menu');
// const menuItems= document.querySelector("options");

const displayMenu = () => {
  menu.addEventListener('click', () => {
    document.querySelector('#mobile-menu').classList.remove('hidden');
  });
};
const hideMenu = () => {
  crossElement.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
};
const menuItemsClicked = () => {
  const anchors = document.querySelectorAll('.options li a');
  anchors.forEach((anchor) => {
    anchor.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
};
hideMenu();
displayMenu();
menuItemsClicked();
