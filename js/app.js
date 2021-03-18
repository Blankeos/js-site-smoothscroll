const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav_menu");
const navLogo = document.querySelector("#navbar_logo");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  console.log("ran this");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = $(".highlight");
  const homeMenu = $("#home-page");
  const aboutMenu = $("#about-page");
  const servicesMenu = $("#services-page");
  let scrollPos = window.scrollY;

  //adds 'highlight' class to the menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.addClass("highlight");
    aboutMenu.removeClass("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.addClass("highlight");
    homeMenu.removeClass("highlight");
    servicesMenu.removeClass("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    aboutMenu.removeClass("highlight");
    homeMenu.removeClass("highlight");
    servicesMenu.addClass("highlight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.removeClass(".highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);
$(document).ready(() => {
  highlightMenu();
});
