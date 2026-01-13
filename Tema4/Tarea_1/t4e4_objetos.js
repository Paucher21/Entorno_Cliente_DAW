
class Disco {
    constructor(nombre = "", grupo = "", año = "", tipo = "", localizacion = 0, prestado = false) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.año = año;
        this.tipo = tipo;
        this.localizacion = localizacion;
        this.prestado = prestado;
    }
    
    
    static crearConParametros(nombre, grupo, año, tipo, localizacion) {
        return new Disco(nombre, grupo, año, tipo, localizacion, false);
    }
    
 
    cambiarLocalizacion(nuevaLocalizacion) {
        this.localizacion = nuevaLocalizacion;
    }
    
    
    cambiarPrestado(estado) {
        this.prestado = estado;
    }
    
  
    mostrarInfo() {
        return `Nombre: ${this.nombre}\nGrupo: ${this.grupo}\nAño: ${this.año}\nTipo: ${this.tipo}\nLocalización: ${this.localizacion}\nPrestado: ${this.prestado ? 'Sí' : 'No'}`;
    }
}