
// 				*****STACKOVERFLOW****
// let picturesArray = ['imgs/plantOne.jpg', 'imgs/plantTwo.jpg', 'imgs/plantThree.jpg', 'imgs/plantFour.jpg', 'imgs/greyMaxima.jpg', 'imgs/redToyota.jpg', 'imgs/hondaCivic.jpg']
// var index = 0;


// function buildImage(){
// 	// variable to create an img element
// 	var img = document.createElement('img');
// 	img.src = picturesArray[index];
// 	document.getElementById('content').appendChild(img);
// 	img.width = '300';
// 	img.height = '300';
// }

// function myChange(){
	
// 	var img = document.getElementById('content').getElementsByTagName('img')[0]
// 	index++;
// 	index = index % picturesArray.length; //this if for when its the last image to return to the 1st image
// 	img.src = picturesArray[index];
// }


//				*****CODIFYACADEMY******

let picturesArrayTwo = [
{
	path:'imgs/plantOne.jpg',
	desc:"This is an office plant"
},
{
	path:'imgs/plantTwo.jpg',
	desc:"This is a plant in an office"
},
{
	path:'imgs/plantThree.jpg',
	desc:"These are two plants in a living room"
},
{
	path:'imgs/plantFour.jpg',
	desc:"This is a desert plants"
},
{
	path:'imgs/greyMaxima.jpg',
	desc:"This is a Grey Maxima"
},
{
	path:'imgs/hondaCivic.jpg',
	desc:"This is a green honda civic"
},
{
	path:'imgs/redToyota.jpg',
	desc:"This red Toyota Camry"
},

]
 let image = document.getElementById("pictures");
 let contador = 0;

 function changeHere(){
 	// increases by one everytime the function is ran
 	contador++;
 	if(contador>= picturesArrayTwo.length) {
 		contador = 0;
 	}
 	// console.log(contador);
 	// accesses GEBId. to change image from picturesArrayTwo and dynamicaly changes the images src and alt attribute 
 	image.src = picturesArrayTwo[contador].path;
 	image.alt = picturesArrayTwo[contador].desc; 
 }
