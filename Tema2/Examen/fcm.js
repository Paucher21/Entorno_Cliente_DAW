function calcularFCM(event) {
    event.preventDefault(); 

    const edad = parseInt(document.getElementById("edadFCM").value);
    const sexo = document.getElementById("sexo").value;

    const fcm = sexo === 'masculino' ? 220 - edad : 226 - edad;
    
    document.getElementById("resultadoFCM").innerHTML = `
        <strong>Frecuencia Cardiaca Máxima: ${fcm} bpm </strong<br>
        Zona de recuperación: ${Math.round(fcm * 0.6)} - ${Math.round(fcm * 0.7)} bpm<br>
        Zona aeróbica: ${Math.round(fcm * 0.7)} - ${Math.round(fcm * 0.8)} bpm<br>
        Zona anaeróbica: ${Math.round(fcm * 0.8)} - ${Math.round(fcm * 0.9)} bpm<br>
        Línea roja: ${Math.round(fcm * 0.9)} - ${fcm} bpm
    `;
}
