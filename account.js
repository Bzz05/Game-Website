document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
  
    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      });
  
      document.querySelectorAll(".nav-link").forEach(n => {
        n.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        });
      });
    }

    function validateForm(){
        var username = document.getElementById("username").value;
        var country = document.getElementById("country").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var terms = document.getElementById("terms").checked;
        var usernameError = document.getElementById("username-error");
        var countryError = document.getElementById("country-error");
        var emailError = document.getElementById("email-error");
        var passwordError = document.getElementById("password-error");
        var termsError = document.getElementById("terms-error");
        usernameError.textContent = "";
        countryError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        termsError.textContent = "";
        if(username === ""){
          usernameError.textContent = "Please enter a username.";
          return false;
        }
        if(country === ""){
          countryError.textContent = "Please choose a country.";
          return false;
        }
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(email)){
          emailError.textContent = "Please enter a valid email address.";
          return false;
        }
        if(password === ""){
          passwordError.textContent = "Please enter a password.";
          return false;
        }
        if(!terms){
          termsError.textContent = "Please agree to the terms and conditions.";
          return false;
        }
        return true; 
    }
});