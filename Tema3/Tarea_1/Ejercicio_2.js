function t3e2_domingos() {
    const dia = parseInt(prompt("Día de cumpleaños:"));
    const mes = parseInt(prompt("Mes de cumpleaños:")) - 1;
    const añoActual = new Date().getFullYear();
    
    let resultados = "Años con cumpleaños en domingo:\n";
    for (let año = añoActual; año <= 2100; año++) {
        const fecha = new Date(año, mes, dia);
        if (fecha.getDay() === 0) {
            resultados += fecha.getFullYear() + "\n";
        }
    }
    alert(resultados);
}