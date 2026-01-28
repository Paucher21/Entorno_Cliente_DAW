
document.addEventListener('DOMContentLoaded', () => {

    const contenedorSup = document.getElementById('controles-superiores');

    //boton generar planta
    const btnGenerar = document.createElement('button');
    btnGenerar.textContent = "Generar planta";
    btnGenerar.onclick = generarPlanta; 
    contenedorSup.appendChild(btnGenerar);

    //boton borrar fila
    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = "Borrar fila";
    btnBorrar.onclick = borrarFila;
    contenedorSup.appendChild(btnBorrar);

    const contenedorInf = document.getElementById('controles-inferiores');
    
    // boton contar filas
    const btnContar = document.createElement('button');
    btnContar.textContent = "Número de filas";
    btnContar.onclick = contarFilas;
    contenedorInf.appendChild(btnContar);
});

// funcion generar planta
function generarPlanta() {
    // Pedimos datos
    let nombre = prompt("Introduce el nombre de la planta:");
    if (nombre === null) return; //si cancela nos salimos

    let ubicacion = prompt("Introduce la ubicación:");
    let ejemplares = prompt("Introduce el número de ejemplares:");
    let flor = prompt("¿Tiene flor? (Sí/No):");

    // Referencia al cuerpo de la tabla
    const tbody = document.querySelector('#tabla-plantas tbody');

    // Creamos la fila (tr)
    const nuevaFila = document.createElement('tr');

    // Creamos las celdas (td)
    const datos = [nombre, ubicacion, ejemplares, flor];

    for (let dato of datos) {
        let celda = document.createElement('td');
        celda.textContent = dato;
        nuevaFila.appendChild(celda);
    }

    // Añadimos la fila a la tabla
    tbody.appendChild(nuevaFila);
}

// funcion Borrar última fila
function borrarFila() {
    const tbody = document.querySelector('#tabla-plantas tbody');
    
    // Verificamos si hay filas para borrar
    if (tbody.lastElementChild) {
        tbody.removeChild(tbody.lastElementChild);
    } else {
        alert("No hay filas para borrar.");
    }
}

// funcion Contar filas
function contarFilas() {
    // Obtenemos todas las etiquetas 'tr' dentro del 'tbody'
    const filas = document.querySelectorAll('#tabla-plantas tbody tr');
    alert("Número total de filas en la tabla: " + filas.length);
}