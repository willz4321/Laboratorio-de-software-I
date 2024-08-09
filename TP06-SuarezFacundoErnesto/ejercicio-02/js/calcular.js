let calcular = document.getElementById('calcular');
calcular.addEventListener('click', calcularAlert);

function calcularAlert() {
    let monto = document.getElementById('monto').value;
    let cuotas = document.getElementById('cuotas').value;
    
    let valor = (parseFloat(monto) / parseFloat(cuotas)).toFixed(2);
    
    var output = document.getElementById('caclOutput');
  output.innerHTML = `
  <div class="alert alert-success" role="alert">
      <h3>Valor de la cuota: ${valor}</h3>
      <hr>
  </div>
  `;
}