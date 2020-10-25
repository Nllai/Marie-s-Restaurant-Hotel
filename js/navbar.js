// Get the navbar
var navbar = document.getElementById("nav-block");
var menu = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")

  } else {
    navbar.classList.remove("sticky");
  }
}

function reloadJS() {
  // Get the navbar
  navbar = document.getElementById("nav-block");
  menu = document.getElementById("menu");

  // Get the offset position of the navbar
  sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
  }
}

window.onresize = reloadJS();