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

const horrizontalScroll = (activeElement, activeLink) => {

    if (activeElement < 15) {
        var div = document.getElementById('navbar');
        document.getElementById('navbar2').scrollLeft = 0
    } else {
        var div = document.getElementById('navbar2');
        document.getElementById('navbar').scrollLeft = 0
    }
    if (activeLink != null && div != null) {
        div.scrollTo({top:0, left: activeLink.offsetLeft, behavior: 'smooth'})
        console.log(activeLink.offsetLeft - window.innerWidth)
    }
}


var scrollStop = function (callback) {

	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return;

	// Setup scrolling variable
	var isScrolling;

	// Listen for scroll events
	window.addEventListener('scroll', function (event) {

		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {

			// Run the callback
			callback();

		}, 30);

	}, false);

};

scrollStop(function () {
    activeElement = getMinIdElement()
    horrizontalScroll(activeElement, previousElement)
});