
// ---------- Header scroll effect ----------
var lastScrollTop = 0;

window.addEventListener("scroll", function() {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var header = document.querySelector("header nav");
  
  if (scrollTop > lastScrollTop) {
    // Scrolling down, hide the header
    header.style.transform = "translateY(-100%)";
    header.style.transition = "transform 1.5s ease-in-out";
  } else {
    // Scrolling up, show the header
    header.style.transform = "translateY(0)";
    header.style.transition = "transform 1s ease-in-out";
  }

  lastScrollTop = scrollTop;
});


// ---------- Questions Services ----------
var dialog = document.querySelector("#dialog");

var services = document.querySelector("#services");
var webdev = services.querySelector("#webdev");
var webdesign = services.querySelector("#webdesign");
var webhosting = services.querySelector("#webhosting");
var email = services.querySelector("#email");
var database = services.querySelector("#database");
var maintenance = services.querySelector("#maintenance");

var webdevDiv = webdev.querySelector(".whole");
var webdesignDiv = webdesign.querySelector("div");
var webhostingDiv = webhosting.querySelector("div");
var emailDiv = email.querySelector("div");
var databaseDiv = database.querySelector("div");
var maintenanceDiv = maintenance.querySelector("div");

var webdevH2 = webdevDiv.querySelector("div h2");
var webdesignH2 = webdesignDiv.querySelector("h2");
var webhostingH2 = webhostingDiv.querySelector("h2");
var emailH2 = emailDiv.querySelector("h2");
var databaseH2 = databaseDiv.querySelector("h2");
var maintenanceH2 = maintenanceDiv.querySelector("h2");

var webdevButton = webdevDiv.querySelector("div button");
var webdesignButton = webdesignDiv.querySelector("a");
var webhostingButton = webhostingDiv.querySelector("a");
var emailButton = emailDiv.querySelector("a");
var databaseButton = databaseDiv.querySelector("a");
var maintenanceButton = maintenanceDiv.querySelector("a");

var submitButton = dialog.querySelector("input[type='submit']");

// ----- Dialog -----
webdevButton.addEventListener("click", function() {
  dialog.classList.add("open");

  setTimeout(function() {
    dialog.showModal();
    dialog.style.display = "block";
  }, 10);
});

submitButton.addEventListener("submit", function() {
  dialog.close();
});


// ----- Web Development -----
webdevDiv.addEventListener("mouseover", function() {
  webdevH2.style.transition = "1s";
  webdevButton.style.transition = "0.5s";
  webdevH2.classList.remove("slide-down");
  webdevH2.classList.add("slide-up");
  webdevH2.style.transform = "translateY(-50%)";
  webdevButton.classList.remove("fade-out");
  webdevButton.classList.add("fade-in");
  webdevButton.style.display = "block";
});

webdevDiv.addEventListener("mouseout", function() {
  webdevH2.style.transition = "1s";
  webdevButton.style.transition = "1s";webdevButton.style.transitionDelay = "0.2s";
  webdevDiv.style.transitionDelay = "0.2s";
  webdevButton.classList.remove("fade-in");
  webdevButton.classList.add("fade-out");
  webdevH2.classList.remove("slide-up");
  webdevH2.classList.add("slide-down");
  webdevH2.style.transform = "translateY(0%)";
  
  
  webdevButton.style.display = "none";
});