const navlinks = document.getElementById("nav-links");
const hamburgerBtn = document.getElementById("btn--hamburger");
const dropShadow = document.getElementById("drop-shadow");

hamburgerBtn.addEventListener("click", () => {
  if (hamburgerBtn.innerText === "menu") {
    showNavbar();
  } else {
    hideNavbar();
  }
});

dropShadow.addEventListener("click", () => {
  hideNavbar();
});

navlinks.childNodes.forEach((node) => {
  node.addEventListener("click", () => {
    hideNavbar();
  });
});

function hideNavbar() {
  hamburgerBtn.innerText = "menu";
  navlinks.classList.toggle("hidden");
  dropShadow.classList.toggle("hidden");
}

function showNavbar() {
  hamburgerBtn.innerText = "close";
  navlinks.classList.toggle("hidden");
  dropShadow.classList.toggle("hidden");
}
