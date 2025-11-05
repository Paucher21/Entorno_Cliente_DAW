function calcularIMC(event) {
    event.preventDefault(); 

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value) / 100; // Convertir a metros

    const imc = peso / (altura * altura);
    let clasificacion;

    if (imc < 16.00) {
        clasificacion = "<strong>Infrapeso (delgadez severa)</strong>";
    } else if (imc < 17.00) {
        clasificacion = "<strong>Infrapeso (delgadez moderada)</strong>";
    } else if (imc < 18.50) {
        clasificacion = "<strong>Infrapeso (delgadez aceptable)</strong>";
    } else if (imc < 25.00) {
        clasificacion = "<strong>Peso normal</strong>";
    } else if (imc < 30.00) {
        clasificacion = "<strong>Sobrepeso</strong>";
    } else if (imc < 35.00) {
        clasificacion = "<strong>Obeso (Tipo I)</strong>";
    } else if (imc < 40.00) {
        clasificacion = "<strong>Obeso (Tipo II)</strong>";
    } else {
        clasificacion = "<strong>Obeso (Tipo III)</strong>";
    }

    document.getElementById("resultadoIMC").innerHTML = `Tu IMC es: ${imc.toFixed(2)} - ${clasificacion}`;
}
