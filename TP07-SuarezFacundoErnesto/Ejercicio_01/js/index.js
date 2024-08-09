

let btn = document.getElementById("oscuro");
btn.addEventListener('change', modoOScuro);


function modoOScuro() {
   
    if(btn.checked) {
        document.getElementById('cuerpo').setAttribute('data-bs-theme', 'dark');
    } else {
        document.getElementById('cuerpo').removeAttribute('data-bs-theme');
    }
}
