let seleccion=document.getElementById('sele');

function cambiarColores(){
let seleccion=document.getElementById('sele').value;
let color1=document.getElementById('plata').value;
let color2=document.getElementById('azul').value;
let color3=document.getElementById('bordo').value;
let color4=document.getElementById('gris').value;
let imagen=document.getElementById('ima');

if(seleccion===color1){
imagen.src='img/plata.webp';
}
else if(seleccion===color2){
imagen.src='img/azul.webp';
}
else if(seleccion===color3){
imagen.src='img/bordo.webp';
}
else if(seleccion===color4){
imagen.src='img/gris.webp';
}
else{
imagen.src='img/verde.webp';
}
}
seleccion.addEventListener('change',cambiarColores);