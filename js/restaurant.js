// Get the navbar
var navbar = document.getElementById("nav-block");
var menu = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

var previousElement = document.getElementById('1');

if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();
    showActive();
};

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
  var navbar = document.getElementById("nav-block");
  var menu = document.getElementById("menu");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
  }
}

window.onresize = reloadJS;



function getMinIdElement() {
    food = document.getElementsByClassName("food-item")
    food = Array.from(food);
    list = food.map(e => Math.abs(e.offsetTop - window.pageYOffset
        - document.getElementById('nav-block').clientHeight))
    var min = Math.min(...list)
    var index = list.indexOf(min).toString();
    minElement = document.getElementById(index)
    return minElement.id
    }



// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function showActive() {
    activeElement = getMinIdElement()
    var activeLink = document.querySelectorAll(`a[href='#${activeElement}']`)[0]

    previousElement.className = previousElement.className.replace("active", "");

    activeLink.classList.add("active")
    previousElement = activeLink
    }
