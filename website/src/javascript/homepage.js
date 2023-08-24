
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
var companyP = company.querySelector("p");
var companyButton = company.querySelector("button");

company.addEventListener("mouseover", function() {
  companyP.style.display = "block";
  companyP.style.transition = "0.5s";
  companyButton.style.display = "block";
  companyButton.style.transition = "0.5s";
  companyP.style.overflowY = "scroll";
  // transition delay + make the appearance a fade
  companyP.style.transitionDelay = "0.5s";
  companyP.style.opacity = "1";
  companyButton.style.transitionDelay = "0.5s";
  companyButton.style.opacity = "1";

});

company.addEventListener("mouseout", function() {
  companyP.style.display = "none";
  companyP.style.transition = "0.5s";
  companyButton.style.display = "none";
  companyButton.style.transition = "0.5s";
  companyP.style.opacity = "0";
  companyButton.style.opacity = "0";
  
});
