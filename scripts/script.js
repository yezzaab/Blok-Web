// JavaScript Document
console.log("hi");

//https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp code om de nav bar te laten wegvagen

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navheader").style.top = "0";
  } else {
    document.getElementById("navheader").style.top = "-30em";
  }
  prevScrollpos = currentScrollPos;
}

// Code om een Hamburger menu te laten werken https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("websitenav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}




