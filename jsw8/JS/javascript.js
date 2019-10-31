let picturesArray = ['imgs/plantOne.jpg', 'imgs/plantTwo.jpg', 'imgs/plantThree.jpg', 'imgs/plantFour.jpg', 'imgs/greyMaxima.jpg', 'imgs/redToyota.jpg', 'imgs/hondaCivic.jpg']
var index = 0;


function buildImage(){
	// variable to create an img element
	var img = document.createElement('img');
	img.src = picturesArray[index];
	// append image to div with id
	document.getElementById('content').appendChild(img);
	// set height and width
	img.width = '300';
	img.height = '300';
}
//	CHANGE IMAGE FUNCTION
function myChange(){
// 	
	var img = document.getElementById('content').getElementsByTagName('img')[0]
	index++;
	index = index % picturesArray.length; //this if for when its the last image to return to the 1st image
	img.src = picturesArray[index];
}
