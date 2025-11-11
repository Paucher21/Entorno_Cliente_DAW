function t3e4_formatohoras() {
    const opcion = parseInt(prompt("Elige formato:\n1. 14:35:07\n2. 02:35 PM o 02:35:07 AM"));
    const hora = new Date();
    
    let resultado = "";
    switch(opcion) {
        case 1:
            resultado = hora.toTimeString().split(' ')[0];
            break;
        case 2:
            resultado = hora.toLocaleTimeString('en-US');
            break;
        default:
            resultado = "Opción no válida";
    }
    alert(resultado);
}