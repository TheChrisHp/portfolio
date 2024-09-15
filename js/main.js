let change = document.getElementById("dark");
let bg = document.querySelector(".bg-landing");

let nav = document.querySelector(".navbg");

console.log(change);

let estado = false;

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  if (scroll > 100 && estado === true) {
    nav.className = "navbgonlight";
  } else if (scroll > 100) {
    nav.className = "navbgon";
  } else {
    nav.className = "navbg";
  }
});

change.addEventListener("click", (e) => {
  e.preventDefault();
  estado = !estado;
  if (estado === true) {
    change.className = `fa-solid fa-circle fa-sl`;
    change.style.color = "yellow";
    //cambio de color en la página
    bg.className = "bg-landing2";
    document.documentElement.style.setProperty("--color-blanco", "#000000");
    document.documentElement.style.setProperty("--color-negro", "#FFFFFF");
  } else {
    change.className = `fa-solid fa-moon fa-sl`;
    change.style.color = "white";
    //cambio de color en la página
    bg.className = "bg-landing";
    document.documentElement.style.setProperty("--color-blanco", "#FFFFFF");
    document.documentElement.style.setProperty("--color-negro", "#171717");
  }
});
