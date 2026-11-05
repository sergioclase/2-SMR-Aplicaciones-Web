var contenido = document.getElementsByClassName("contenedor");
var nuevoP = document.createElement("p");
var texto = document.createTextNode("Hola soy el alumno Sergio de la Torre");
nuevoP.appendChild(texto); 

contenido.appendChild(nuevoP);