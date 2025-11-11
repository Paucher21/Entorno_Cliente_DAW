function t3e5_math() {
    const opcion = parseInt(prompt("Elige opción:\n1. Potencia\n2. Raíz\n3. Redondeo\n4. Trigonometría"));
    
    switch(opcion) {
        case 1:
            const base = parseFloat(prompt("Introduce la base:"));
            const exponente = parseFloat(prompt("Introduce el exponente:"));
            alert(`La potencia de ${base} elevado a ${exponente} es: ${Math.pow(base, exponente)}`);
            break;
        case 2:
            const numero = parseFloat(prompt("Introduce un número (no negativo):"));
            if (numero >= 0) {
                alert(`La raíz de ${numero} es: ${Math.sqrt(numero)}`);
            } else {
                alert("El número no puede ser negativo");
            }
            break;
        case 3:
            const decimal = parseFloat(prompt("Introduce un número decimal:"));
            alert(`Redondeo al entero más próximo: ${Math.round(decimal)}`);
            alert(`Redondeo al alza: ${Math.ceil(decimal)}`);
            alert(`Redondeo a la baja: ${Math.floor(decimal)}`);
            break;
        case 4:
            const angulo = parseFloat(prompt("Introduce un ángulo (0-360):"));
            if (angulo >= 0 && angulo <= 360) {
                const radianes = angulo * Math.PI / 180;
                alert(`Seno: ${Math.sin(radianes).toFixed(4)}`);
                alert(`Coseno: ${Math.cos(radianes).toFixed(4)}`);
                alert(`Tangente: ${Math.tan(radianes).toFixed(4)}`);
            } else {
                alert("El ángulo debe estar entre 0 y 360 grados");
            }
            break;
        default:
            alert("Opción no válida");
    }
}