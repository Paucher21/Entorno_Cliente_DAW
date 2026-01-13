// =============================================
// EJERCICIO: t4e2_arrays
// =============================================


let paises = ["España", "Italia", "Alemania", "Portugal", "Reino Unido", "Canadá", "México", "Brasil", "Argentina", "Chile"];


function mostrarNumeroElementos(array) {
    return `Número de elementos: ${array.length}`;
}

function mostrarElementos(array) {
    return `Elementos: ${array.join(', ')}`;
}

function mostrarElementosInverso(array) {
    return `Elementos en orden inverso: ${array.slice().reverse().join(', ')}`;
}

function mostrarElementosOrdenados(array) {
    return `Elementos ordenados: ${array.slice().sort().join(', ')}`;
}

function anadirElementoInicio(array, elemento) {
    array.unshift(elemento);
    return `Elemento '${elemento}' añadido al principio`;
}

function anadirElementoFinal(array, elemento) {
    array.push(elemento);
    return `Elemento '${elemento}' añadido al final`;
}

function borrarElementoInicio(array) {
    const elemento = array.shift();
    return `Elemento '${elemento}' borrado del principio`;
}

function borrarElementoFinal(array) {
    const elemento = array.pop();
    return `Elemento '${elemento}' borrado del final`;
}

function mostrarElementoPosicion(array, posicion) {
    if (posicion >= 0 && posicion < array.length) {
        return `Elemento en posición ${posicion}: ${array[posicion]}`;
    } else {
        return "Posición no válida";
    }
}

function mostrarPosicionElemento(array, elemento) {
    const posicion = array.indexOf(elemento);
    if (posicion !== -1) {
        return `Posición de '${elemento}': ${posicion}`;
    } else {
        return `'${elemento}' no encontrado en el array`;
    }
}

function mostrarElementosIntervalo(array, inicio, fin) {
    if (inicio >= 0 && fin < array.length && inicio <= fin) {
        const elementos = array.slice(inicio, fin + 1);
        return `Elementos del intervalo [${inicio}-${fin}]: ${elementos.join(', ')}`;
    } else {
        return "Intervalo no válido";
    }
}