document.addEventListener('DOMContentLoaded', () => {
    crearInterfaz();
});

function crearInterfaz() {
    
    const topDiv = document.getElementById('top-controls');

    // Botón Generar
    const btnGenerar = document.createElement('button');
    btnGenerar.textContent = "Generar personaje";
    btnGenerar.onclick = generarPersonaje;
    topDiv.appendChild(btnGenerar);

    // Botón Borrar
    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = "Borrar personaje";
    btnBorrar.onclick = borrarPersonaje;
    topDiv.appendChild(btnBorrar);

    // Botones Contar
    const botDiv = document.getElementById('bottom-controls');
    const personajes = ["Sanji", "Zoro", "Nami", "Luffy"];

    personajes.forEach(nombre => {
        let btn = document.createElement('button');
        btn.textContent = "Nº " + nombre; 
        // funcion que llama a contarConcreto
        btn.onclick = () => contarConcreto(nombre);
        botDiv.appendChild(btn);
    });
}

function generarPersonaje() {
    let opcion = prompt("Elija el nombre del personaje:\n1. Sanji\n2. Zoro\n3. Nami\n4. Luffy");
    
    if (opcion === null) return; // Cancelado

    let imagenSrc = "";
    let nombrePersonaje = "";

    // Switch para elegir la imagen
    switch (opcion) {
        case "1":
            imagenSrc = "img_onepeace/sanji.jpeg";
            nombrePersonaje = "Sanji";
            break;
        case "2":
            imagenSrc = "img_onepeace/zoro.jpeg";
            nombrePersonaje = "Zoro";
            break;
        case "3":
            imagenSrc = "img_onepeace/nami.jpeg";
            nombrePersonaje = "Nami";
            break;
        case "4":
            imagenSrc = "img_onepeace/luffy.jpeg";
            nombrePersonaje = "Luffy";
            break;
        default:
            alert("Opción no válida. Escribe un número del 1 al 4.");
            return;
    }

    // Crear la imagen en el DOM
    const img = document.createElement('img');
    img.src = imagenSrc;
    img.alt = nombrePersonaje;
    img.className = "personaje-img"; //usar la clase css

    document.getElementById('contenedor-imagenes').appendChild(img);
}

function borrarPersonaje() {
    const contenedor = document.getElementById('contenedor-imagenes');
    if (contenedor.lastElementChild) {
        contenedor.removeChild(contenedor.lastElementChild);
    } else {
        alert("No hay personajes para borrar.");
    }
}

function contarConcreto(nombreBusqueda) {
    //Obtenemos todas las imágenes
    const todasLasImg = document.querySelectorAll('#contenedor-imagenes img');
    let contador = 0;
    //Recorremos las imagenes y contamos cuantas hay de las del personaje buscado
    todasLasImg.forEach(img => {
        if (img.alt === nombreBusqueda) {
            contador++;
        }
    });

    alert("Hay " + contador + " imágenes de " + nombreBusqueda);
}