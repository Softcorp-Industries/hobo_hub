// alert("hello world");

const navMenu = document.querySelector(".navMenu");
const navList = document.querySelector(".navList");

let navMenu_open = false;

document.addEventListener('DOMContentLoaded', () => {
  navMenu.addEventListener('click', () => {
    if (!navMenu_open) {
      navMenu.classList.add("navOpen");
      navList.classList.add("navOpen");
      navMenu_open = true;
    } else {
      navMenu.classList.remove("navOpen");
      navList.classList.remove("navOpen");
      navMenu_open = false;
    }
  })
})

