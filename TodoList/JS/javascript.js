// 	// Creates new element in memory
// var newDiv = document.createElement("div");
// 	// Give div element class name of the following
// 	newDiv.className = "container text-white bg-dark"
// 	// Adding style - height of:
// 	newDiv.style.minHeight = "500px";
// 	// append to document body.
// 	document.body.appendChild(newDiv);

	// create secondary div
// var newDiv2 = document.createElement('div');
	// give style class of:
// 	newDiv2.className = "jumbotron bg-info";
	// append this second div to the first div
// 	newDiv.appendChild(newDiv2)



// 	// Created new h1 element
// var newH1 = document.createElement("h1");
// 	// add some text to h1
// 	newH1.textContent = "I WAS HERE MADE FROM JS";
// 	// add classes from BootStrap to give it style
// 	newH1.className = "text-uppercase display-4"
// 	// append to element (in this case var newDiv) so it can be displayed in proper part of HTML
// 	newDiv2.appendChild(newH1);

	// using function create elements and render them in html
function createStuff() {
		// create div element
	var newDiv = document.createElement("div");
		// create h1 element
	var newH1 = document.createElement("h1");
		// create img element
	var newImg = document.createElement("img");


	// add h1 element to div
	newDiv.appendChild(newH1);
	// add img element to div
	newDiv.appendChild(newImg);
		// add text to image
	newH1.innerText = "This Is an image"
	// display image:
	newImg.src = "imgs/plantOne.jpg"
	// alt attribute will display as h1
	newImg.alt = newH1.innerText;
	// add div to body tag
	document.body.appendChild(newDiv);
}