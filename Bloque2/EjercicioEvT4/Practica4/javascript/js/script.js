// =========================================================
//  Práctica 3 — JavaScript
//  Nombre y apellidos:
//  Recuerda: cada bloque con un comentario escrito por ti
// =========================================================


// ===== A1. Mi tarjeta (se ejecuta al cargar la página, sin función) =====

document.getElementById("saludo").innerHTML = "Hola, me llamo Sergio De La Torre y estudio 2º SMR";         // Busco el  id "saludo" y cambio su texto por mi presentacion.

document.getElementById("tarjeta").style.color = "black";
document.getElementById("tarjeta").style.backgroundColor = "yellow";                // Cambio el color de la letra y el fondo de la tarjeta con style.
// ===== A2. Lista de la compra: function anadir() =====

function anadir() {
    var producto = document.getElementById("producto").value;

    var nuevo = document.createElement("li");
    var texto = document.createTextNode(producto);                                  // Leo el producto escrito en la caja de texto, creo un <li> con su texto
    nuevo.appendChild(texto);                                                       // y lo añado dentro de la lista con id "lista"
    document.getElementById("lista").appendChild(nuevo);
}


// ===== A3. Modo noche y modo día: function modoNoche() y function modoDia() =====

function modoNoche() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";                                                    // Cambio el fondo de toda la pagina a negro, la letra a blanca                           // y aviso de que se ha activado el modo noche.
    document.getElementById("modo").innerHTML = "Modo noche activado";                      // y aviso de que se ha activado el modo noche
}

function modoDia() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";                                                     // Cambio el fondo de toda la pagina a blanco, la letra a negra
    document.getElementById("modo").innerHTML = "Modo dia activado";                          // y aviso de que se ha activado el modo dia  
}
// ===== A4. Colores de la tarjeta: function colorTarjeta(color) =====

function colorTarjeta(color) {
    document.getElementById("tarjeta").style.backgroundColor = color;                           // Pongo el color de la tarjeta con el color que he recibido
}


// ===== A5. Botón que saluda: function saludar() =====

function saludar() {
    alert("Hola, soy Sergio De La Torre");
    document.getElementById("botonSaludo").style.backgroundColor = "orange";                    // Muestro un mensaje de saludo en una ventana y cambio el color del boton   
}