const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.addEventListener("DOMContentLoaded", function() {
    var navbarIcon = document.getElementById("navbarIcon");
    var navbarLinks = document.getElementById("navbarLinks");
  
    navbarIcon.addEventListener("click", function() {
      navbarLinks.classList.toggle("show");
    });
  });
  