function generarHorarios() {
    const tbodyMañana = document.getElementById("tablaMaÑana").querySelector("tbody");
    tbodyMañana.innerHTML = ""; 

    const tbodyTarde = document.getElementById("tablaTarde").querySelector("tbody");
    tbodyTarde.innerHTML = ""; 

    
    for (let hora = 9; hora < 15; hora += 2) {
        const row = document.createElement("tr");
        const formattedHour = `${hora}:00 - ${hora + 2}:00`; 
        row.innerHTML = `<th>${formattedHour}</th><td></td><td></td><td></td><td></td><td></td>`;
        tbodyMañana.appendChild(row);
    }

    
    for (let hora = 16; hora <= 21; hora++) {
        const row = document.createElement("tr");
        const formattedHour = `${hora}:00 - ${hora + 1}:00`; 
        row.innerHTML = `<th>${formattedHour}</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td>`;
        tbodyTarde.appendChild(row);
    }
}
