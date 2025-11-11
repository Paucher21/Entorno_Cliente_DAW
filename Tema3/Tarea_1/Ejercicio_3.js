function t3e3_formatofechas() {
    const opcion = parseInt(prompt("Elige formato:\n1. 17/02/2016\n2. Miércoles, 17 de febrero de 2016.\n3. Wednesday, February 17, 2016."));
    const fecha = new Date();
    
    let resultado = "";
    switch(opcion) {
        case 1:
            resultado = fecha.toLocaleDateString('es-ES');
            break;
        case 2:
            resultado = fecha.toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            break;
        case 3:
            resultado = fecha.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            break;
        default:
            resultado = "Opción no válida";
    }
    alert(resultado);
}
