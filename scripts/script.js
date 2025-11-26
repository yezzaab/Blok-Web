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