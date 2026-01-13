
const resultadoFunciones = document.getElementById('resultado-funciones');
const resultadoPaises = document.getElementById('resultado-paises');
const resultadoDiscos = document.getElementById('resultado-discos');
let discos = [];

// Inicializar algunos discos de ejemplo
function inicializarDiscos() {
    if (discos.length === 0) {
        discos.push(Disco.crearConParametros("The Dark Side of the Moon", "Pink Floyd", "1973", "rock", 1));
        discos.push(Disco.crearConParametros("Thriller", "Michael Jackson", "1982", "pop", 2));
        discos.push(Disco.crearConParametros("Nevermind", "Nirvana", "1991", "rock", 3));
        discos.push(Disco.crearConParametros("Back in Black", "AC/DC", "1980", "rock", 4));
        discos.push(Disco.crearConParametros("The Joshua Tree", "U2", "1987", "rock", 5));
    }
}

// Llamar a inicializarDiscos cuando se carga la página
window.onload = inicializarDiscos;

// =============================================
// Funciones para t4e1_funciones
// =============================================

function ejecutarIMC() {
    const resultado = calcularIMC();
    resultadoFunciones.innerHTML = resultado;
}

function ejecutarFCM() {
    const resultado = calcularFCM();
    resultadoFunciones.innerHTML = resultado;
}

function ejecutarCategoria() {
    const resultado = determinarCategoria();
    resultadoFunciones.innerHTML = resultado;
}

function ejecutarHorario() {
    const resultado = generarHorarios();
    resultadoFunciones.innerHTML = resultado;
}

// =============================================
// Funciones para t4e2_arrays (con menú de una sola vez)
// =============================================

function gestionarPaises() {
    const opcion = prompt(`Gestión de Países\n\n
1. Mostrar número de países
2. Mostrar listado de países
3. Mostrar un intervalo de países
4. Añadir un país
5. Borrar un país
6. Consultar un país\n\n
Selecciona una opción:`);

    if (opcion === null) return; // El usuario canceló

    switch (opcion) {
        case "1":
            resultadoPaises.textContent = mostrarNumeroElementos(paises);
            break;
        case "2":
            const opcionListado = prompt("¿Cómo quieres mostrar el listado?\n1. Orden normal\n2. Orden inverso\n3. Orden alfabético");
            switch (opcionListado) {
                case "1":
                    resultadoPaises.textContent = mostrarElementos(paises);
                    break;
                case "2":
                    resultadoPaises.textContent = mostrarElementosInverso(paises);
                    break;
                case "3":
                    resultadoPaises.textContent = mostrarElementosOrdenados(paises);
                    break;
                default:
                    resultadoPaises.textContent = "Opción no válida";
            }
            break;
        case "3":
            const intervalo = prompt("Introduce el intervalo (formato inicio-fin):");
            if (intervalo) {
                const [inicio, fin] = intervalo.split('-').map(Number);
                resultadoPaises.textContent = mostrarElementosIntervalo(paises, inicio, fin);
            }
            break;
        case "4":
            const pais = prompt("Introduce el país a añadir:");
            if (pais) {
                const posicionAñadir = prompt("¿Dónde quieres añadirlo?\n1. Al principio\n2. Al final");
                if (posicionAñadir === "1") {
                    resultadoPaises.textContent = anadirElementoInicio(paises, pais);
                } else if (posicionAñadir === "2") {
                    resultadoPaises.textContent = anadirElementoFinal(paises, pais);
                } else {
                    resultadoPaises.textContent = "Opción no válida";
                }
            }
            break;
        case "5":
            const posicionBorrar = prompt("¿De dónde quieres borrar?\n1. Del principio\n2. Del final");
            if (posicionBorrar === "1") {
                resultadoPaises.textContent = borrarElementoInicio(paises);
            } else if (posicionBorrar === "2") {
                resultadoPaises.textContent = borrarElementoFinal(paises);
            } else {
                resultadoPaises.textContent = "Opción no válida";
            }
            break;
        case "6":
            const tipoConsulta = prompt("¿Cómo quieres consultar?\n1. Por posición\n2. Por nombre");
            if (tipoConsulta === "1") {
                const posicion = parseInt(prompt("Introduce la posición:"));
                resultadoPaises.textContent = mostrarElementoPosicion(paises, posicion);
            } else if (tipoConsulta === "2") {
                const nombre = prompt("Introduce el nombre del país:");
                resultadoPaises.textContent = mostrarPosicionElemento(paises, nombre);
            } else {
                resultadoPaises.textContent = "Opción no válida";
            }
            break;
        default:
            resultadoPaises.textContent = "Opción no válida";
    }
}

// =============================================
// Funciones para t4e4_objetos 
// =============================================

function gestionarDiscos() {
    inicializarDiscos();
    
    const opcion = prompt(`Gestión de Discos\n\n
        1. Mostrar número de discos
        2. Mostrar listado de discos
        3. Mostrar un intervalo de discos
        4. Añadir un disco
        5. Borrar un disco
        6. Consultar un disco\n\n
        Selecciona una opción:`);

    if (opcion === null) return; // El usuario canceló

    switch (opcion) {
        case "1":
            resultadoDiscos.textContent = `Número de discos: ${discos.length}`;
            break;
        case "2":
            const opcionListado = prompt("¿Cómo quieres mostrar el listado?\n1. Orden normal\n2. Orden inverso\n3. Orden alfabético");
            switch (opcionListado) {
                case "1":
                    resultadoDiscos.textContent = mostrarDiscos(discos);
                    break;
                case "2":
                    resultadoDiscos.textContent = mostrarDiscosInverso(discos);
                    break;
                case "3":
                    resultadoDiscos.textContent = mostrarDiscosOrdenados(discos);
                    break;
                default:
                    resultadoDiscos.textContent = "Opción no válida";
            }
            break;
        case "3":
            const intervalo = prompt("Introduce el intervalo (formato inicio-fin):");
            if (intervalo) {
                const [inicio, fin] = intervalo.split('-').map(Number);
                resultadoDiscos.textContent = mostrarDiscosIntervalo(discos, inicio, fin);
            }
            break;
        case "4":
            const posicionAñadir = prompt("¿Dónde quieres añadirlo?\n1. Al principio\n2. Al final");
            if (posicionAñadir === "1") {
                resultadoDiscos.textContent = anadirDiscoInicio(discos);
            } else if (posicionAñadir === "2") {
                resultadoDiscos.textContent = anadirDiscoFinal(discos);
            } else {
                resultadoDiscos.textContent = "Opción no válida";
            }
            break;
        case "5":
            const posicionBorrar = prompt("¿De dónde quieres borrar?\n1. Del principio\n2. Del final");
            if (posicionBorrar === "1") {
                resultadoDiscos.textContent = borrarDiscoInicio(discos);
            } else if (posicionBorrar === "2") {
                resultadoDiscos.textContent = borrarDiscoFinal(discos);
            } else {
                resultadoDiscos.textContent = "Opción no válida";
            }
            break;
        case "6":
            const tipoConsulta = prompt("¿Cómo quieres consultar?\n1. Por posición\n2. Por nombre");
            if (tipoConsulta === "1") {
                const posicion = parseInt(prompt("Introduce la posición:"));
                resultadoDiscos.textContent = mostrarDiscoPosicion(discos, posicion);
            } else if (tipoConsulta === "2") {
                const nombre = prompt("Introduce el nombre del disco:");
                resultadoDiscos.textContent = mostrarPosicionDisco(discos, nombre);
            } else {
                resultadoDiscos.textContent = "Opción no válida";
            }
            break;
        default:
            resultadoDiscos.textContent = "Opción no válida";
    }
}

// =============================================
// Funciones auxiliares para discos
// =============================================

function mostrarDiscos(array) {
    if (array.length === 0) return "No hay discos en la colección";
    
    let resultado = "Listado de discos:\n";
    array.forEach((disco, index) => {
        resultado += `${index}. ${disco.nombre} - ${disco.grupo} (${disco.año})\n`;
    });
    return resultado;
}

function mostrarDiscosInverso(array) {
    if (array.length === 0) return "No hay discos en la colección";
    
    let resultado = "Listado de discos en orden inverso:\n";
    array.slice().reverse().forEach((disco, index) => {
        resultado += `${array.length - 1 - index}. ${disco.nombre} - ${disco.grupo} (${disco.año})\n`;
    });
    return resultado;
}

function mostrarDiscosOrdenados(array) {
    if (array.length === 0) return "No hay discos en la colección";
    
    let resultado = "Listado de discos ordenados alfabéticamente:\n";
    array.slice().sort((a, b) => a.nombre.localeCompare(b.nombre)).forEach((disco, index) => {
        resultado += `${index}. ${disco.nombre} - ${disco.grupo} (${disco.año})\n`;
    });
    return resultado;
}

function anadirDiscoInicio(array) {
    const nombre = prompt("Nombre del disco:");
    const grupo = prompt("Grupo o cantante:");
    const año = prompt("Año de publicación:");
    const tipo = prompt("Tipo de música (rock, pop, punk, indie):");
    const localizacion = parseInt(prompt("Número de estantería:"));
    
    const disco = Disco.crearConParametros(nombre, grupo, año, tipo, localizacion);
    array.unshift(disco);
    return `Disco '${nombre}' añadido al principio`;
}

function anadirDiscoFinal(array) {
    const nombre = prompt("Nombre del disco:");
    const grupo = prompt("Grupo o cantante:");
    const año = prompt("Año de publicación:");
    const tipo = prompt("Tipo de música (rock, pop, punk, indie):");
    const localizacion = parseInt(prompt("Número de estantería:"));
    
    const disco = Disco.crearConParametros(nombre, grupo, año, tipo, localizacion);
    array.push(disco);
    return `Disco '${nombre}' añadido al final`;
}

function borrarDiscoInicio(array) {
    if (array.length === 0) return "No hay discos para borrar";
    
    const disco = array.shift();
    return `Disco '${disco.nombre}' borrado del principio`;
}

function borrarDiscoFinal(array) {
    if (array.length === 0) return "No hay discos para borrar";
    
    const disco = array.pop();
    return `Disco '${disco.nombre}' borrado del final`;
}

function mostrarDiscoPosicion(array, posicion) {
    if (posicion >= 0 && posicion < array.length) {
        return `Disco en posición ${posicion}:\n${array[posicion].mostrarInfo()}`;
    } else {
        return "Posición no válida";
    }
}

function mostrarPosicionDisco(array, nombre) {
    const posicion = array.findIndex(disco => disco.nombre.toLowerCase() === nombre.toLowerCase());
    if (posicion !== -1) {
        return `Posición del disco '${nombre}': ${posicion}\n${array[posicion].mostrarInfo()}`;
    } else {
        return `Disco '${nombre}' no encontrado en la colección`;
    }
}

function mostrarDiscosIntervalo(array, inicio, fin) {
    if (inicio >= 0 && fin < array.length && inicio <= fin) {
        const elementos = array.slice(inicio, fin + 1);
        let resultado = `Discos del intervalo [${inicio}-${fin}]:\n`;
        elementos.forEach((disco, index) => {
            resultado += `${inicio + index}. ${disco.nombre} - ${disco.grupo} (${disco.año})\n`;
        });
        return resultado;
    } else {
        return "Intervalo no válido";
    }
}