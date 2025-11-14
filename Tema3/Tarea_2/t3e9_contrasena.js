
const ValidadorContrasena = {
   
    elementos: {
        contrasena: null,
        resultado: null,
        requisitos: {}
    },
    

    init: function() {
        this.elementos.contrasena = document.getElementById('contrasena');
        this.elementos.resultado = document.getElementById('resultado');
        
        
        this.elementos.requisitos.longitud = document.getElementById('req-longitud');
        this.elementos.requisitos.mayuscula = document.getElementById('req-mayuscula');
        this.elementos.requisitos.minuscula = document.getElementById('req-minuscula');
        this.elementos.requisitos.numero = document.getElementById('req-numero');
        this.elementos.requisitos.especial = document.getElementById('req-especial');
        
       
        this.elementos.contrasena.addEventListener('input', () => {
            this.validarEnTiempoReal();
        });
    },
    
    
    validarEnTiempoReal: function() {
        const contrasena = this.elementos.contrasena.value;
        this.actualizarRequisitos(contrasena);
    },
    

    validar: function() {
        const contrasena = this.elementos.contrasena.value;
        
        
        const longitudValida = this.validarLongitud(contrasena);
        const mayusculaValida = this.validarMayuscula(contrasena);
        const minusculaValida = this.validarMinuscula(contrasena);
        const numeroValido = this.validarNumero(contrasena);
        const especialValido = this.validarCaracterEspecial(contrasena);
        

        this.actualizarRequisitos(contrasena);
 
        const esSegura = longitudValida && mayusculaValida && minusculaValida && numeroValido && especialValido;
        
  
        this.mostrarResultado(esSegura, contrasena);
        
        return esSegura;
    },
    
    
    validarLongitud: function(contrasena) {
        return contrasena.length >= 8 && contrasena.length <= 16;
    },
    
    
    validarMayuscula: function(contrasena) {
        return /[A-Z]/.test(contrasena);
    },
    
   
    validarMinuscula: function(contrasena) {
        return /[a-z]/.test(contrasena);
    },
    
   
    validarNumero: function(contrasena) {
        return /[0-9]/.test(contrasena);
    },
    
 
    validarCaracterEspecial: function(contrasena) {
        return /[-_@#$%&]/.test(contrasena);
    },
    
  
    actualizarRequisitos: function(contrasena) {
    
        if (this.validarLongitud(contrasena)) {
            this.elementos.requisitos.longitud.className = 'requisito cumplido';
            this.elementos.requisitos.longitud.querySelector('.icono').textContent = '✅';
        } else {
            this.elementos.requisitos.longitud.className = 'requisito incumplido';
            this.elementos.requisitos.longitud.querySelector('.icono').textContent = '❌';
        }
        
      
        if (this.validarMayuscula(contrasena)) {
            this.elementos.requisitos.mayuscula.className = 'requisito cumplido';
            this.elementos.requisitos.mayuscula.querySelector('.icono').textContent = '✅';
        } else {
            this.elementos.requisitos.mayuscula.className = 'requisito incumplido';
            this.elementos.requisitos.mayuscula.querySelector('.icono').textContent = '❌';
        }
        
       
        if (this.validarMinuscula(contrasena)) {
            this.elementos.requisitos.minuscula.className = 'requisito cumplido';
            this.elementos.requisitos.minuscula.querySelector('.icono').textContent = '✅';
        } else {
            this.elementos.requisitos.minuscula.className = 'requisito incumplido';
            this.elementos.requisitos.minuscula.querySelector('.icono').textContent = '❌';
        }
        
      
        if (this.validarNumero(contrasena)) {
            this.elementos.requisitos.numero.className = 'requisito cumplido';
            this.elementos.requisitos.numero.querySelector('.icono').textContent = '✅';
        } else {
            this.elementos.requisitos.numero.className = 'requisito incumplido';
            this.elementos.requisitos.numero.querySelector('.icono').textContent = '❌';
        }
    
     
        if (this.validarCaracterEspecial(contrasena)) {
            this.elementos.requisitos.especial.className = 'requisito cumplido';
            this.elementos.requisitos.especial.querySelector('.icono').textContent = '✅';
        } else {
            this.elementos.requisitos.especial.className = 'requisito incumplido';
            this.elementos.requisitos.especial.querySelector('.icono').textContent = '❌';
        }
    },
    
    mostrarResultado: function(esSegura, contrasena) {
        if (contrasena === '') {
            this.elementos.resultado.innerHTML = '<p>Introduce una contraseña para validar su seguridad.</p>';
            this.elementos.resultado.className = 'resultado';
            return;
        }
        
        if (esSegura) {
            this.elementos.resultado.innerHTML = `
                <h3>✅ Contraseña Segura</h3>
                <p>Tu contraseña cumple con todos los requisitos de seguridad. Es una contraseña fuerte y recomendada.</p>
            `;
            this.elementos.resultado.className = 'resultado segura';
        } else {
            this.elementos.resultado.innerHTML = `
                <h3>❌ Contraseña No Segura</h3>
                <p>Tu contraseña no cumple con todos los requisitos de seguridad. Por favor, revisa los requisitos indicados más abajo.</p>
            `;
            this.elementos.resultado.className = 'resultado insegura';
        }
    }
};


function validarContrasena() {
    ValidadorContrasena.validar();
}


document.addEventListener('DOMContentLoaded', function() {
    ValidadorContrasena.init();
});