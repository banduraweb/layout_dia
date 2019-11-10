"use strict";

document.addEventListener("DOMContentLoaded", onReady);

function onReady() {
  console.log(currentWidth());
  const buttonOpen = document.getElementById("mobile__btn--open");
  const buttonClose = document.getElementById("mobile__btn--close");
  const navMenu = document.getElementsByClassName("nav__list")[0];

  window.addEventListener("resize", showHideMobBtn);

  function showHideMobBtn() {

    if (document.body.clientWidth > 1181) {
      navMenu.style.cssText = "display: flex;";
      buttonOpen.style.cssText = "display: none;";
      buttonClose.style.cssText = "display: none;";
    } else {
      navMenu.style.cssText = "display: none;";
      buttonOpen.style.cssText = "display: block;";
      buttonClose.style.cssText = "display: none;";
    }
  }

  buttonOpen.onclick = () => {
    navMenu.style.cssText = "display: flex;";
    buttonOpen.style.cssText = "display: none;";
    buttonClose.style.cssText = "display: block;";
  };
  buttonClose.onclick = () => {
    navMenu.style.cssText = "display: none;";
    buttonClose.style.cssText = "display: none;";
    buttonOpen.style.cssText = "display: flex;";
  };

}
