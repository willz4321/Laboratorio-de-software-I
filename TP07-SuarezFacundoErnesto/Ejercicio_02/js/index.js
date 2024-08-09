// Obtén los elementos del DOM
let inputPassword = document.getElementById("inputPassword4");
let imgCerrar = document.getElementById("cerrar");
let imgAbrir = document.getElementById("abrir");

// Inicialmente, la imagen del ojo abierto debe estar oculta
imgAbrir.style.display = "none";

// Agrega el evento mousedown al botón de cerrar (ojo cerrado)
imgCerrar.addEventListener('mousedown', function() {
    // Cambia el tipo de input a texto para revelar la contraseña
    inputPassword.type = "text";
    // Cambia la imagen a ojo abierto
    imgCerrar.style.display = "none";
    imgAbrir.style.display = "block";
});

// Agrega el evento mouseup al botón de abrir (ojo abierto)
imgAbrir.addEventListener('mouseup', function() {
    // Cambia el tipo de input a password para ocultar la contraseña
    inputPassword.type = "password";
    // Cambia la imagen a ojo cerrado
    imgAbrir.style.display = "none";
    imgCerrar.style.display = "block";
});
