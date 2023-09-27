
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


// ---------- Sections hover ----------
var sections = document.querySelectorAll("section");

var company = document.querySelector("#company");
var companyDiv = company.querySelector("div");
var companyH1 = company.querySelector("h1");
var companyP = company.querySelector("p");
var companyButton = company.querySelector("button");

var services = document.querySelector("#services");
var servicesDiv = services.querySelector("div");
var servicesP = services.querySelector("p");
var servicesButton = services.querySelector("button");

var aboutus = document.querySelector("#aboutus");
var aboutusDiv = aboutus.querySelector("div");
var aboutusP = aboutus.querySelector("p");
var aboutusButton = aboutus.querySelector("button");

var portfolio = document.querySelector("#portfolio");
var portfolioDiv = portfolio.querySelector("div");
var portfolioP = portfolio.querySelector("p");
var portfolioButton = portfolio.querySelector("button");

var contact = document.querySelector("#contact");
var contactDiv = contact.querySelector("div");
var contactP = contact.querySelector("p");
var contactButton = contact.querySelector("button");


companyDiv.addEventListener("mouseover", function() {
  // companyH1.classList.remove("fade-in");
  // companyH1.classList.add("fade-out");
  // companyH1.style.display = "none";
  // companyH1.style.transition = "0.5s";
  companyP.style.display = "block";
  companyP.style.transition = "0.5s";
  companyP.classList.remove("fade-out");
  companyP.classList.add("fade-in");
  companyButton.style.display = "block";
  companyButton.style.transition = "0.5s";
  companyButton.classList.remove("fade-out");
  companyButton.classList.add("fade-in");
  companyP.style.overflowY = "scroll";
  companyP.style.transitionDelay = "0.5s";
  companyP.style.opacity = "1";
  // companyButton.style.transitionDelay = "1.5s";
  companyButton.style.opacity = "1";
});

company.addEventListener("mouseout", function() {
  // companyH1.classList.remove("fade-out");
  // companyH1.classList.add("fade-in");
  // companyH1.style.display = "block";
  // companyH1.style.transition = "0.5s";
  companyP.style.transition = "0.5s";
  companyP.classList.remove("fade-in");
  companyP.classList.add("fade-out");
  companyButton.style.transition = "0.5s";
  companyButton.classList.remove("fade-in");
  companyButton.classList.add("fade-out");
  companyP.style.opacity = "0";
  companyButton.style.opacity = "0";
});

servicesDiv.addEventListener("mouseover", function() {
  servicesP.style.display = "block";
  servicesP.style.transition = "0.5s";
  servicesP.classList.remove("fade-out");
  servicesP.classList.add("fade-in");
  servicesButton.style.display = "block";
  servicesButton.style.transition = "0.5s";
  servicesButton.classList.remove("fade-out");
  servicesButton.classList.add("fade-in");
  servicesP.style.overflowY = "scroll";
  servicesP.style.transitionDelay = "0.5s";
  servicesP.style.opacity = "1";
  // servicesButton.style.transitionDelay = "1.5s";
  servicesButton.style.opacity = "1";
});

services.addEventListener("mouseout", function() {
  servicesP.style.transition = "0.5s";
  servicesP.classList.remove("fade-in");
  servicesP.classList.add("fade-out");
  servicesButton.style.transition = "0.5s";
  servicesButton.classList.remove("fade-in");
  servicesButton.classList.add("fade-out");
  servicesP.style.opacity = "0";
  servicesButton.style.opacity = "0";
});

aboutusDiv.addEventListener("mouseover", function() {
  aboutusP.style.display = "block";
  aboutusP.style.transition = "0.5s";
  aboutusP.classList.remove("fade-out");
  aboutusP.classList.add("fade-in");
  aboutusButton.style.display = "block";
  aboutusButton.style.transition = "0.5s";
  aboutusButton.classList.remove("fade-out");
  aboutusButton.classList.add("fade-in");
  aboutusP.style.overflowY = "scroll";
  aboutusP.style.transitionDelay = "0.5s";
  aboutusP.style.opacity = "1";
  // aboutusButton.style.transitionDelay = "1.5s";
  aboutusButton.style.opacity = "1";
});

aboutus.addEventListener("mouseout", function() {
  aboutusP.style.transition = "0.5s";
  aboutusP.classList.remove("fade-in");
  aboutusP.classList.add("fade-out");
  aboutusButton.style.transition = "0.5s";
  aboutusButton.classList.remove("fade-in");
  aboutusButton.classList.add("fade-out");
  aboutusP.style.opacity = "0";
  aboutusButton.style.opacity = "0";
});

portfolioDiv.addEventListener("mouseover", function() {
  portfolioP.style.display = "block";
  portfolioP.style.transition = "0.5s";
  portfolioP.classList.remove("fade-out");
  portfolioP.classList.add("fade-in");
  portfolioButton.style.display = "block";
  portfolioButton.style.transition = "0.5s";
  portfolioButton.classList.remove("fade-out");
  portfolioButton.classList.add("fade-in");
  portfolioP.style.overflowY = "scroll";
  portfolioP.style.transitionDelay = "0.5s";
  portfolioP.style.opacity = "1";
  // portfolioButton.style.transitionDelay = "1.5s";
  portfolioButton.style.opacity = "1";
});

portfolio.addEventListener("mouseout", function() {
  portfolioP.style.transition = "0.5s";
  portfolioP.classList.remove("fade-in");
  portfolioP.classList.add("fade-out");
  portfolioButton.style.transition = "0.5s";
  portfolioButton.classList.remove("fade-in");
  portfolioButton.classList.add("fade-out");
  portfolioP.style.opacity = "0";
  portfolioButton.style.opacity = "0";
});

contactDiv.addEventListener("mouseover", function() {
  contactP.style.display = "block";
  contactP.style.transition = "0.5s";
  contactP.classList.remove("fade-out");
  contactP.classList.add("fade-in");
  
  contactButton.style.transition = "0.5s";
  contactButton.classList.remove("fade-out");
  contactButton.classList.add("fade-in");
  contactP.style.overflowY = "hidden";
  if (contactP.scrollHeight > contactP.clientHeight) {
    contactP.style.overflowY = "scroll"; // Show the scrollbar
  } else {
    contactP.style.overflowY = "hidden"; // Hide the scrollbar
  }
  contactP.style.transitionDelay = "0.5s";
  contactP.style.opacity = "1";
  // contactButton.style.transitionDelay = "1.5s";
  contactButton.style.opacity = "1";
  contactButton.style.display = "block";
});

contact.addEventListener("mouseout", function() {
  contactP.style.transition = "0.5s";
  contactP.classList.remove("fade-in");
  contactP.classList.add("fade-out");
  contactButton.style.transition = "0.5s";
  contactButton.classList.remove("fade-in");
  contactButton.classList.add("fade-out");
  contactP.style.opacity = "0";
  contactButton.style.opacity = "0";
});
