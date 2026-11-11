
var nuevoP = document.createElement("p");
var texto = document.createTextNode("Hola soy el alumno Sergio de la Torre");
nuevoP.appendChild(texto); 

var contenido = document.getElementsByClassName("contenedor")[0];
contenido.appendChild(nuevoP);