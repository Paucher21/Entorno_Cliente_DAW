function t3e8_nombreapellidos() {
    const nombreCompleto = prompt("Introduce tu nombre y apellidos:");
    
    // Tamaño sin espacios
    const tamañoSinEspacios = nombreCompleto.replace(/\s/g, '').length;
    
    // Mayúsculas y minúsculas
    const minusculas = nombreCompleto.toLowerCase();
    const mayusculas = nombreCompleto.toUpperCase();
    
    // Dividir en partes
    const partes = nombreCompleto.split(' ');
    const nombre = partes[0] || '';
    const apellido1 = partes[1] || '';
    const apellido2 = partes[2] || '';
    
    // Propuestas de usuario
    const usuario1 = (nombre.charAt(0) + apellido1 + apellido2.charAt(0)).toLowerCase();
    const usuario2 = (nombre.substring(0, 3) + apellido1.substring(0, 3) + apellido2.substring(0, 3)).toLowerCase();
    
    alert(`Tamaño sin espacios: ${tamañoSinEspacios}
    Minúsculas: ${minusculas}
    Mayúsculas: ${mayusculas}
    Nombre: ${nombre}
    Apellido 1: ${apellido1}
    Apellido 2: ${apellido2}
    Usuario 1: ${usuario1}
    Usuario 2: ${usuario2}`);
}