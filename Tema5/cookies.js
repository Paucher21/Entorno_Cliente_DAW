
/**
 * Establece una cookie
 * @param {string} nombre - Nombre de la cookie
 * @param {string} valor - Valor de la cookie
 * @param {number} diasExpiracion - Días hasta que expire (opcional)
 */
function setCookie(nombre, valor, diasExpiracion = 7) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000));
    const expiracion = "expires=" + fecha.toUTCString();
    document.cookie = `${nombre}=${valor}; ${expiracion}; path=/`;
}

/**
 * Obtiene el valor de una cookie
 * @param {string} nombre - Nombre de la cookie
 * @returns {string|null} - Valor de la cookie o null si no existe
 */
function getCookie(nombre) {
    const nombreEQ = nombre + "=";
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nombreEQ) === 0) {
            return cookie.substring(nombreEQ.length, cookie.length);
        }
    }
    return null;
}

/**
 * Elimina una cookie
 * @param {string} nombre - Nombre de la cookie a eliminar
 */
function deleteCookie(nombre) {
    // Para eliminar una cookie, establecemos su fecha de expiración en el pasado
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

/**
 * Verifica si una cookie existe
 * @param {string} nombre - Nombre de la cookie
 * @returns {boolean} - true si la cookie existe
 */
function cookieExists(nombre) {
    return getCookie(nombre) !== null;
}

/**
 * Obtiene todas las cookies como un objeto
 * @returns {Object} - Objeto con todas las cookies
 */
function getAllCookies() {
    const cookies = document.cookie.split(';');
    const cookieObj = {};
    
    cookies.forEach(cookie => {
        const [nombre, valor] = cookie.trim().split('=');
        if (nombre && valor) {
            cookieObj[nombre] = valor;
        }
    });
    
    return cookieObj;
}

/**
 * Limpia todas las cookies del dominio actual
 */
function clearAllCookies() {
    const cookies = getAllCookies();
    Object.keys(cookies).forEach(cookieName => {
        deleteCookie(cookieName);
    });
}

/**
 * Establece una cookie con opciones avanzadas
 * @param {string} nombre - Nombre de la cookie
 * @param {string} valor - Valor de la cookie
 * @param {Object} opciones - Opciones adicionales
 * @param {number} opciones.diasExpiracion - Días hasta que expire
 * @param {string} opciones.path - Ruta de la cookie
 * @param {string} opciones.domain - Dominio de la cookie
 * @param {boolean} opciones.secure - Si es segura (HTTPS)
 * @param {string} opciones.sameSite - Política SameSite
 */
function setCookieAdvanced(nombre, valor, opciones = {}) {
    let cookieString = `${nombre}=${valor}`;
    
    if (opciones.diasExpiracion) {
        const fecha = new Date();
        fecha.setTime(fecha.getTime() + (opciones.diasExpiracion * 24 * 60 * 60 * 1000));
        cookieString += `; expires=${fecha.toUTCString()}`;
    }
    
    if (opciones.path) {
        cookieString += `; path=${opciones.path}`;
    }
    
    if (opciones.domain) {
        cookieString += `; domain=${opciones.domain}`;
    }
    
    if (opciones.secure) {
        cookieString += '; secure';
    }
    
    if (opciones.sameSite) {
        cookieString += `; samesite=${opciones.sameSite}`;
    }
    
    document.cookie = cookieString;
}

/**
 * Ejemplo de uso de las funciones de cookies
 * Esta función muestra un ejemplo práctico en la consola
 */
function ejemploUsoCookies() {
    console.log("=== Ejemplo de uso de cookies.js ===");
    
    // Establecer una cookie
    setCookie("usuario", "JuanPerez", 30);
    console.log("Cookie 'usuario' establecida");
    
    // Obtener una cookie
    const usuario = getCookie("usuario");
    console.log("Valor de cookie 'usuario':", usuario);
    
    // Verificar si existe
    const existe = cookieExists("usuario");
    console.log("¿Existe cookie 'usuario'?:", existe);
    
    // Obtener todas las cookies
    const todasCookies = getAllCookies();
    console.log("Todas las cookies:", todasCookies);
    
    // Eliminar una cookie
    deleteCookie("usuario");
    console.log("Cookie 'usuario' eliminada");
    
    // Verificar que fue eliminada
    const usuarioDespues = getCookie("usuario");
    console.log("Valor después de eliminar:", usuarioDespues);
    
    console.log("=== Fin del ejemplo ===");
}

// Si este archivo se carga directamente en un navegador, mostrar ejemplo
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        console.log("cookies.js cargado correctamente");
        console.log("Funciones disponibles: setCookie, getCookie, deleteCookie, cookieExists, getAllCookies, clearAllCookies, setCookieAdvanced");
    });
}

// Exportar funciones para usar en módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setCookie,
        getCookie,
        deleteCookie,
        cookieExists,
        getAllCookies,
        clearAllCookies,
        setCookieAdvanced,
        ejemploUsoCookies
    };
}