function t3e7_number() {
    const numero = parseInt(prompt("Introduce un número entero:"));
    
    const exponencial = numero.toExponential();
    const conDecimales = numero.toFixed(4);
    const binario = numero.toString(2);
    const octal = numero.toString(8);
    const hexadecimal = numero.toString(16);
    
    alert(`Exponencial: ${exponencial}
    4 decimales: ${conDecimales}
    Binario: ${binario}
    Octal: ${octal}
    Hexadecimal: ${hexadecimal}`);
}