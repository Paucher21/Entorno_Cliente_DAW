
const Calendario = {

    elemento: null,
    

    init: function() {
        this.elemento = document.getElementById('mini-calendario');
        this.actualizar();
    },
    
    
    actualizar: function() {
        const fecha = new Date();
        const opciones = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        
        const diaSemana = fecha.toLocaleDateString('es-ES', { weekday: 'long' });
        const dia = fecha.getDate();
        const mes = fecha.toLocaleDateString('es-ES', { month: 'long' });
        
       
        const diaSemanaFormateado = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
        const mesFormateado = mes.charAt(0).toUpperCase() + mes.slice(1);
        
        this.elemento.innerHTML = `
            <div class="dia-semana">${diaSemanaFormateado}</div>
            <div class="dia-numero">${dia}</div>
            <div class="mes">${mesFormateado}</div>
        `;
    }
};


document.addEventListener('DOMContentLoaded', function() {
    Calendario.init();
});