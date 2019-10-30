document.getElementById('uniQue').innerHTML = "Hi There!"

function myFunction(){
	var input = document.getElementById('talkHere').value;
	console.log(input);
	document.getElementById('aquiEstoy').innerHTML = input;
	
}

var array = ['Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve'];

for (let i = 0 ; i < array.length; i++) {
	console.log(array[i]);

}


let work = {
	name: "Daniel Flores",
	location:"San Francisco",
	since:"1991",
}
console.log(work.name);
console.log(work.location);
console.log(work.since);
console.log(work);

document.getElementById('jobTitle').innerHTML = work.name;
document.getElementById('city').innerHTML = work.location;
document.getElementById('year').innerHTML = work.since;


var carro = ['Toyota', 'Camry', 2009]
console.log(carro);

for (let i = 0 ; i < carro.length; i++){
	console.log(carro.length[i]);
}

document.body.style.color = "red";
