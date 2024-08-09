//BUSCANDO INFORMACION EN INTERNET ENCONTRE QUE DEBO AGREGAR DOMContentLoaded PARA PODER HACER FUNCIONAR TODO EN UN MISMO ARCHIVO JS

document.addEventListener('DOMContentLoaded', function() {
    // Ejercicio 1 - Tanque

    let btnTanque = document.getElementById('tanque');
    if (btnTanque) {
        let cm3Ocupados = 0;
        let cantidadViajes = 0;

        btnTanque.addEventListener('click', function () {
            while (cm3Ocupados < 5000) {
                const cm3Viaje = parseFloat(prompt("Ingresa la cantidad de cm³ ocupados en el último viaje:"));
                cm3Ocupados += cm3Viaje;
                cantidadViajes++;
            }

            alert("¡Tanque en reserva! Dirígete a una estación de servicio.");
            alert(`Cantidad de viajes realizados: ${cantidadViajes}`);
        });
    }

    // Ejercicio 2 - Máquina expendedora de bebidas
    let btnIncio = document.getElementById('venta');
    if (btnIncio) {
        btnIncio.addEventListener('click', function () {
            let totalRecaudado = 0;
            const precioProductos = {
                "Gaseosa": 1250,
                "Agua mineral": 700,
                "Energizante": 1500
            };
            const stockProductos = {
                "Gaseosa": 40,
                "Agua mineral": 35,
                "Energizante": 20
            };
            const recaudacionProductos = {
                "Gaseosa": 0,
                "Agua mineral": 0,
                "Energizante": 0
            };

            while (totalRecaudado < 50000) {
                const dineroIngresado = prompt("Ingresa el dinero que deseas ingresar:");
                if (dineroIngresado === null) break; 
                const dinero = parseFloat(dineroIngresado);
                if (isNaN(dinero)) {
                    alert("Por favor, ingresa un número válido.");
                    continue;
                }

                const productoSeleccionado = prompt("Ingresa el nombre del producto que deseas comprar: Gaseosa, Agua mineral, Energizante");
                if (productoSeleccionado === null) break; 

                if (precioProductos[productoSeleccionado] === undefined) {
                    alert("Producto no válido. Inténtalo de nuevo.");
                    continue;
                }

                if (dinero < precioProductos[productoSeleccionado]) {
                    alert("Dinero insuficiente. Operación cancelada.");
                    continue;
                }

                if (stockProductos[productoSeleccionado] <= 0) {
                    alert("No hay stock del producto seleccionado. Operación cancelada.");
                    continue;
                }

                stockProductos[productoSeleccionado]--;
                recaudacionProductos[productoSeleccionado] += precioProductos[productoSeleccionado];
                totalRecaudado += precioProductos[productoSeleccionado];
                const vuelto = dinero - precioProductos[productoSeleccionado];
                alert(`Compra exitosa de ${productoSeleccionado}. Tu vuelto es $${vuelto}.`);
            }

            alert(`La máquina ha recaudado un total de $${totalRecaudado}.`);
            alert(`Stock final:
                Gaseosas: ${stockProductos["Gaseosa"]} unidades
                Agua mineral: ${stockProductos["Agua mineral"]} unidades
                Energizantes: ${stockProductos["Energizante"]} unidades`);

            alert(`Recaudación por producto:
                Gaseosas: $${recaudacionProductos["Gaseosa"]}
                Agua mineral: $${recaudacionProductos["Agua mineral"]}
                Energizantes: $${recaudacionProductos["Energizante"]}`);
        });
    }

    // Ejercicio 3 - Contar Vocales
    let btnVocal = document.getElementById('vocales');
    if (btnVocal) {
        btnVocal.addEventListener('click', function() {
            const text = document.getElementById('textInput').value;
            let vocales = {
                a: 0,
                e: 0,
                i: 0,
                o: 0,
                u: 0
            };

            for (let char of text.toLowerCase()) {
                if (vocales.hasOwnProperty(char)) {
                    vocales[char]++;
                }
            }

            alert(`
                A: ${vocales.a}
                E: ${vocales.e}
                I: ${vocales.i}
                O: ${vocales.o}
                U: ${vocales.u}
            `);
        });
    }
});
