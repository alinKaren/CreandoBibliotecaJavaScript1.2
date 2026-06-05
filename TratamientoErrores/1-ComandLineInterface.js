/*
 * Inicia el programa desde aquí.
 * FORMA ACTUAL: ES Modules (import/export) - LECTURA DE ARCHIVOS
 */

// 1. IMPORTACIÓN CON MÓDULOS ES (ES Modules)
// En la forma moderna usamos 'import', mientras que 'require' pertenece al estándar antiguo (CommonJS).

// Se anexan las importaciones necesarias:
// 1° 'fs' es el módulo nativo de Node.js para interactuar con el sistema de archivos (File System).
// 2° Trae la función 'gestionarError' desde su respectiva ruta.
// 3° Trae la función 'contarPalabras' desde su respectiva ruta.

import fs  from 'fs';
import gestionarError from './errores/gestionErrores.js';
import contarPalabras from './1-SeparandoFunciones.js';

// 2. CAPTURA DE ARGUMENTOS DESDE LA TERMINAL
// process.argv devuelve un array con las rutas de ejecución y los argumentos enviados.
const contenidoArchivo = process.argv;
// contenidoArchivo[2] es el argumento que pasamos con el nombre/ruta del archivo.
// Ejemplo de comando completo: node TratamientoErrores/2-ComandLineInterface.js archivos/texto-web.txt
const argumentos = contenidoArchivo[2]; 
/* 3. LECTURA CON CALLBACK (La "forma vieja" por excelencia)
 * fs.readFile es una función asíncrona que recibe:
 * - argumentos: La ruta del archivo de texto plano que vamos a leer.
 * - 'utf-8': Codificación universal que permite leer correctamente acentos, ñ y caracteres especiales.
 * - (error, texto) => { ... }: Callback que maneja el error o el contenido del texto resultante.*/
fs.readFile(argumentos, 'utf-8', (error, texto) => {
    
    // 4. MANEJO DE ERRORES CON TRY/CATCH 
    try {
        if (error) {
            // "Lanzamos" el error manualmente para que caiga en el bloque 'catch'.
            throw error; 
        }

        // Si el archivo es leido con  con éxito, pasamos a la función contarPalabras(texto)
        //Separando Funciones.js 
        contarPalabras(texto);

// Si algo falló (archivo no encontrado, u otro),lo procesa el archivo gestionErrores.js 
// y regresa el error correspondiente de acuerdo con la función gestionarError
    } catch (error) {
        console.log(gestionarError(error));
    }
});

//para ejecutar: npm init -y   Crea: el archivo.json    
// Para ejecutar el script: node TratamientoErrores/2-ComandLineInterface.js archivos/texto-web.txt 