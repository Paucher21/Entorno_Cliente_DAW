// =============================================
// EJERCICIO: t4e1_funciones
// =============================================


function calcularIMC() {
    const peso = parseFloat(prompt("Introduce tu peso en kg:"));
    const altura = parseFloat(prompt("Introduce tu altura en cm:")) / 100; // Convertir a metros

    const imc = peso / (altura * altura);
    let clasificacion;

    if (imc < 16.00) {
        clasificacion = "Infrapeso (delgadez severa)";
    } else if (imc < 17.00) {
        clasificacion = "Infrapeso (delgadez moderada)";
    } else if (imc < 18.50) {
        clasificacion = "Infrapeso (delgadez aceptable)";
    } else if (imc < 25.00) {
        clasificacion = "Peso normal";
    } else if (imc < 30.00) {
        clasificacion = "Sobrepeso";
    } else if (imc < 35.00) {
        clasificacion = "Obeso (Tipo I)";
    } else if (imc < 40.00) {
        clasificacion = "Obeso (Tipo II)";
    } else {
        clasificacion = "Obeso (Tipo III)";
    }

    return `Tu IMC es: ${imc.toFixed(2)} - ${clasificacion}`;
}


function calcularFCM() {
    const edad = parseInt(prompt("Introduce tu edad:"));
    const sexo = prompt("Introduce tu sexo (masculino/femenino):").toLowerCase();

    const fcm = sexo === 'masculino' ? 220 - edad : 226 - edad;
    
    return `
        Frecuencia Cardiaca Máxima: ${fcm} bpm
        Zona de recuperación: ${Math.round(fcm * 0.6)} - ${Math.round(fcm * 0.7)} bpm
        Zona aeróbica: ${Math.round(fcm * 0.7)} - ${Math.round(fcm * 0.8)} bpm
        Zona anaeróbica: ${Math.round(fcm * 0.8)} - ${Math.round(fcm * 0.9)} bpm
        Línea roja: ${Math.round(fcm * 0.9)} - ${fcm} bpm
    `;
}


function determinarCategoria() {
    const anioNacimiento = parseInt(prompt("Introduce tu año de nacimiento:"));
    const categorias = ["Micros", "Prebenjamín", "Benjamín", "Alevín", "Infantil", "Cadete", "Juvenil", "Junior", "Sub-23", "Senior", "Veterano"];

    const edad = new Date().getFullYear() - anioNacimiento;
    let categoriaIndex;

    if (edad < 6) {
        categoriaIndex = 0;
    } else if (edad < 8) {
        categoriaIndex = 1;
    } else if (edad < 10) {
        categoriaIndex = 2;
    } else if (edad < 12) {
        categoriaIndex = 3;
    } else if (edad < 14) {
        categoriaIndex = 4;
    } else if (edad < 16) {
        categoriaIndex = 5;
    } else if (edad < 18) {
        categoriaIndex = 6;
    } else if (edad < 20) {
        categoriaIndex = 7;
    } else if (edad < 23) {
        categoriaIndex = 8;
    } else if (edad < 34) {
        categoriaIndex = 9;
    } else {
        categoriaIndex = 10;
    }

    return `Te corresponde la categoría: ${categorias[categoriaIndex]}`;
}


function generarHorarios() {
    let tablaHTML = `
        <h3>Horario de Mañana</h3>
        <table border="1" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <thead>
                <tr>
                    <th>Hora</th>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miércoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                </tr>
            </thead>
            <tbody>
    `;

    
    for (let hora = 9; hora < 15; hora += 2) {
        const formattedHour = `${hora}:00 - ${hora + 2}:00`;
        tablaHTML += `<tr><th>${formattedHour}</th><td></td><td></td><td></td><td></td><td></td></tr>`;
    }

    tablaHTML += `
            </tbody>
        </table>

        <h3>Horario de Tarde</h3>
        <table border="1" style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th>Hora</th>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miércoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                    <th>Sábado</th>
                    <th>Domingo</th>
                </tr>
            </thead>
            <tbody>
    `;

    
    for (let hora = 16; hora <= 21; hora++) {
        const formattedHour = `${hora}:00 - ${hora + 1}:00`;
        tablaHTML += `<tr><th>${formattedHour}</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
    }

    tablaHTML += `
            </tbody>
        </table>
    `;

    return tablaHTML;
}