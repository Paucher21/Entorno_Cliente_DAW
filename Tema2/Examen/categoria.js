function calcularCategoria(event) {
    event.preventDefault(); 

    const anioNacimiento = parseInt(document.getElementById("anioNacimiento").value);
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
    }else if (edad < 23) {
        categoriaIndex = 8;
    }else if (edad < 34) {
        categoriaIndex = 9;
    }else {
        categoriaIndex = 10;
    }

    document.getElementById("resultadoCategoria").innerHTML = `
        Te corresponde la categoría: <strong>${categorias[categoriaIndex]}</strong>
    `;
}
