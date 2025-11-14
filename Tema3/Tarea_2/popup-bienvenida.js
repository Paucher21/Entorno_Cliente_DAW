
const PopupBienvenida = {

    elementos: {
        popup: null,
        overlay: null,
        botonCerrar: null
    },
    

    init: function() {
        this.elementos.popup = document.getElementById('popup-bienvenida');
        this.elementos.overlay = document.getElementById('overlay');
        this.elementos.botonCerrar = document.getElementById('cerrar-popup');
        
     
        this.elementos.botonCerrar.addEventListener('click', () => {
            this.cerrar();
        });
        
       
        setTimeout(() => {
            this.mostrar();
        }, 10000);
    },
    
  
    mostrar: function() {
        this.elementos.popup.style.display = 'block';
        this.elementos.overlay.style.display = 'block';
    },
    
    
    cerrar: function() {
        this.elementos.popup.style.display = 'none';
        this.elementos.overlay.style.display = 'none';
    }
};

document.addEventListener('DOMContentLoaded', function() {
    PopupBienvenida.init();
});