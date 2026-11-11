function anochecer(){
    document.body.style.backgroundColor = "#22222274";
    document.body.style.color = "white";
}

function dia(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#22222274";
}

function agregar(){
    var entrada = document.getElementById("cajaTexto").value;
    var lista = document.getElementById("lista");
    var nuevoli = document.createElement("li");
    var texto = document.createTextNode(entrada); 
    nuevoli.appendChild(texto);
    lista.appendChild(nuevoli);

    var entrada = document.getElementById("cajaTexto").value="";
}