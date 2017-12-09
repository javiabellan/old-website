
// Array de capas
var capas = [];

// Example
var layers = [
	{
		"type": "placeholder",
		"shape": [784],
		"name": "Entrada"
	},
	{
		"type": "reshape",
		"shape": [28, 28, 1],
		"name": "Entrada restructurada"
	},
	{
		"type": "conv2d",
		"shape": [28, 28, 32],
		"filter": [5, 5],
		"padding": "SAME",
		"name": "Convolucion"
	},
	{
		"type": "max_pool",
		"shape": [14, 14, 32],
		"name": "Reduce"
	},
	{
		"type": "reshape",
		"shape": [14*14*32],
		"name": "Aplanar"
	},
	{
		"type": "densa",
		"shape": [200],
		"name": "Densa"
	},
	{
		"type": "densa",
		"shape": [10],
		"name": "Salida"
	}
];



function nuevaCapa()
{
	var capa = {};


}



function densa(entrada, salida)
{

}


function convolucional()
{

}





///////////////////////////////// AÑADIR NUEVA CAPA CON DIÁLOGO

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("add-layer");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




///////////////////////////////// AÑADIR NUEVA CAPA

// https://www.w3schools.com/howto/howto_css_modals.asp

document.getElementById("add-layer").onclick = function ()
{	
	var numCapa = capas.length + 1;
	console.log("Nueva capa numero: " + numCapa);

    // Crear nueva capa
	var capa = document.createElement('div');
	capa.className = 'layer white-layer'; //layer.id = 'capaX';
	capa.style.transform = "rotateX(45deg) rotateZ(45deg) translateZ(" + numCapa*50 + "px)";

	capa.onclick = function () {
		//alert("Capa " + numCapa);
		window.getComputedStyle(capa).transform; // necesario par animar
		capa.className += 'layerActivate';
	}

	capa.onclick = "infoCapa(this)"

	// Añadir al array
	capas.push(capa);

	// Añadir al HTML
	document.getElementById('layers').appendChild(capa);
	window.getComputedStyle(capa).opacity; // necesario par animar
	window.getComputedStyle(capa).transform; // necesario par animar
	capa.className += ' in';
};




///////////////////////////////// CLICK EN UNA CAPA


function infoCapa(element){
   element.style.display = 'none';
}

/*
var capas = document.getElementsByClassName("layer");

var infoCapa = function(capa) {
	console.log("Informacion de la capa");

	//capa.toggleClass("layerActivate");    
	capa.classList.toggle("layerActivate");

    //var attribute = this.getAttribute("data-myattribute");
    //alert(attribute);
    //alert("Informacion de la capa");

};

for (var i=0; i<capas.length; i++) {
    //capas[i].addEventListener('click', infoCapa(capas[i]), false);
    capas[i].onclick = function() { alert('blah'); };
}
*/