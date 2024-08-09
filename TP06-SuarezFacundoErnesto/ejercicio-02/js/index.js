
let boton = document.getElementById('generar');
boton.addEventListener('click', generarAlerta);


function generarAlerta() {
    let nombre = document.getElementById('name').value;
    let dni = document.getElementById('dni').value;

    var output = document.getElementById('output');
    output.innerHTML = `
    <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">  CERTIFICADO DE ALUMNO REGULAR</h4>
        <p>La Facultad de Ciencias Exactas y Tecnología de la Universidad Nacional de Tucuman certifica a ${nombre} con DNI ${dni} se encuentra actualmente regular en la carrera Ingenieria en Informatica.</p>
        <hr>
    </div>
    `;
}


