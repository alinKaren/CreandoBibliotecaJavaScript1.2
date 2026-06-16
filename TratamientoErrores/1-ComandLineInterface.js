 /* Inicia el programa desde aquí.
 * FORMA ACTUAL: ES Modules (import/export) - LECTURA DE ARCHIVOS*/

// 1. IMPORTACIÓN CON MÓDULOS ES (ES Modules)
// En la forma moderna usamos 'import', mientras que 'require' pertenece al estándar antiguo (CommonJS).

// Se anexan las importaciones necesarias:
// 1° 'fs' es el módulo nativo de Node.js para interactuar con el sistema de archivos (File System).
// 2° Trae la función 'gestionarError' desde su respectiva ruta.
// 3° Trae la función 'contarPalabras' desde su respectiva ruta.

import fs  from 'fs';
import gestionarError from './errores/gestionErrores.js';
import contarPalabras from './2-SeparandoFunciones.js';

// 2. CAPTURA DE ARGUMENTOS DESDE LA TERMINAL
// process.argv devuelve un array con las rutas de ejecución y los argumentos enviados.
const contenidoArchivo = process.argv;
// contenidoArchivo[2] es el argumento que pasamos con el nombre/ruta del archivo.
const nombreArchivoTexto = contenidoArchivo[2]; 
 /* fs.readFile es una función asíncrona que recibe:
 * - argumentos: La ruta del archivo de texto plano que vamos a leer.
 * - 'utf-8': Codificación universal que permite leer correctamente acentos, ñ y caracteres especiales. */
const carpetaResultado = contenidoArchivo[3];


fs.readFile(nombreArchivoTexto, 'utf-8', (error, texto) => {  
    try {
        if (error) 
            throw error; 
        
        const listaPalabras = contarPalabras(texto);
        crearYGuardarResultado(listaPalabras,carpetaResultado);
    }catch (error){
        console.log(gestionarError(error));
    }
});
       

async function crearYGuardarResultado(resultado,rutaArchivo) {
    const nombreArchivoResultado = `${rutaArchivo}/resultados.txt`;
    const resultadoEnTexto = JSON.stringify(resultado, null, 2);
    try{
       await fs.promises.writeFile(nombreArchivoResultado, resultadoEnTexto);
        console.log("Archivo de resultado creado con éxito");
    }catch(error) {
        throw error;
    }
}

//para ejecutar: npm init -y   Crea: el archivo.json    
// Para ejecutar el script: node TratamientoErrores/1-ComandLineInterface.js archivos/texto-web.txt ./resultados/