function t3e6_circulo() {
    const radio = parseFloat(prompt("Introduce el radio:"));
    
    const diametro = 2 * radio;
    const perimetro = 2 * Math.PI * radio;
    const areaCirculo = Math.PI * Math.pow(radio, 2);
    const areaEsfera = 4 * Math.PI * Math.pow(radio, 2);
    const volumenEsfera = (4/3) * Math.PI * Math.pow(radio, 3);
    
    alert(`Radio: ${radio} cm
    Diámetro: ${diametro} cm
    Perímetro: ${perimetro.toFixed(2)} cm
    Área del círculo: ${areaCirculo.toFixed(2)} cm²
    Área de la esfera: ${areaEsfera.toFixed(2)} cm²
    Volumen de la esfera: ${volumenEsfera.toFixed(2)} cm³`);
}