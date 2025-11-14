
const AvisoLegal = {
    
    abrir: function() {
        const ancho = 600;
        const alto = 500;
        const izquierda = (screen.width - ancho) / 2;
        const arriba = (screen.height - alto) / 2;
        
        const ventana = window.open('', 'avisoLegal', 
            `width=${ancho},height=${alto},left=${izquierda},top=${arriba},scrollbars=no,menubar=no,status=no,titlebar=no,toolbar=no,resizable=no`
        );
        
        const contenido = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Aviso Legal - Asociación Deportiva Castro Urdiales</title>
                <style>
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        line-height: 1.6;
                        margin: 0;
                        padding: 20px;
                        background-color: #f5f5f5;
                        color: #333;
                    }
                    .contenedor {
                        max-width: 100%;
                        background: white;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    }
                    h1 {
                        color: #2c3e50;
                        border-bottom: 2px solid #3498db;
                        padding-bottom: 10px;
                        margin-top: 0;
                    }
                    h2 {
                        color: #2c3e50;
                        margin-top: 20px;
                    }
                    p {
                        margin-bottom: 15px;
                    }
                    .botones {
                        text-align: center;
                        margin-top: 20px;
                    }
                    button {
                        background-color: #3498db;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 1rem;
                        margin: 0 10px;
                    }
                    button:hover {
                        background-color: #2980b9;
                    }
                    button.cerrar {
                        background-color: #e74c3c;
                    }
                    button.cerrar:hover {
                        background-color: #c0392b;
                    }
                </style>
            </head>
            <body>
                <div class="contenedor">
                    <h1>Aviso Legal</h1>
                    
                    <h2>1. Datos Identificativos</h2>
                    <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa que el titular de este sitio web es:</p>
                    <p><strong>Asociación Deportiva Castro Urdiales</strong><br>
                    CIF: G12345678<br>
                    Domicilio social: Calle Deportiva, 23 - 39700 Castro Urdiales (Cantabria)<br>
                    Teléfono: 942 123 456<br>
                    Email: info@adcastrourdiales.es</p>
                    
                    <h2>2. Propiedad Intelectual e Industrial</h2>
                    <p>Todos los contenidos de este sitio web, incluyendo textos, imágenes, logotipos, diseños, software y cualquier otro material, son propiedad de la Asociación Deportiva Castro Urdiales o de terceros que han autorizado su uso, y están protegidos por las leyes de propiedad intelectual e industrial.</p>
                    
                    <h2>3. Condiciones de Uso</h2>
                    <p>El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de las presentes condiciones de uso.</p>
                    <p>El usuario se compromete a utilizar el sitio web de conformidad con la ley, las presentes condiciones, la moral y las buenas costumbres.</p>
                    
                    <h2>4. Protección de Datos</h2>
                    <p>De acuerdo con lo establecido en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, le informamos que los datos personales facilitados serán incorporados a un fichero bajo la responsabilidad de la Asociación Deportiva Castro Urdiales, con la finalidad de gestionar su solicitud y mantenerle informado sobre nuestras actividades.</p>
                    
                    <h2>5. Limitación de Responsabilidad</h2>
                    <p>La Asociación Deportiva Castro Urdiales no se hace responsable de los daños y perjuicios que puedan derivarse de interferencias, omisiones, interrupciones, virus telefónicos o desconexiones en el funcionamiento operativo de este sistema electrónico.</p>
                    
                    <h2>6. Legislación Aplicable y Jurisdicción</h2>
                    <p>Para la resolución de todas las controversias o cuestiones relacionadas con este sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, sometiéndose expresamente las partes a los Juzgados y Tribunales de Castro Urdiales.</p>
                    
                    <div class="botones">
                        <button onclick="window.print()">Imprimir</button>
                        <button class="cerrar" onclick="window.close()">Cerrar</button>
                    </div>
                </div>
            </body>
            </html>
        `;
        
        ventana.document.write(contenido);
        ventana.document.close();
    },
    

    init: function() {
        document.getElementById('aviso-legal').addEventListener('click', function(e) {
            e.preventDefault();
            AvisoLegal.abrir();
        });
    }
};


document.addEventListener('DOMContentLoaded', function() {
    AvisoLegal.init();
});