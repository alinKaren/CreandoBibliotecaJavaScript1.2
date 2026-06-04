/**
 * FORMA ANTIGUA: COMMONJS & CALLBACKS
 * Este código usa el estándar original de Node.js antes de que existieran los ES Modules (import/export).
 */

// 1. IMPORTACIÓN CON 'require' (Sintaxis CommonJS)
// Es la forma tradicional. En la forma moderna usaríamos: import fs from 'fs';
const fs = require('fs'); 
const manejador = require('./errores/gestionErrores.js');
const contarPalabras = require('./1-SeparandoFunciones.js');

// 2. CAPTURA DE ARGUMENTOS DESDE LA TERMINAL
// process.argv devuelve un array con las rutas de ejecución y los argumentos.
const contenidoArchivo = process.argv;
const argumentos = contenidoArchivo[2]; 
/**
 * 3. LECTURA CON CALLBACK (La "forma vieja" por excelencia)
 * fs.readFile es una función asíncrona que pide una "función de retroalimentación" (callback).
 * El problema: Si tuviéramos que leer 5 archivos seguidos, terminaríamos con un
 * código muy difícil de leer (el famoso "Callback Hell").
 */
fs.readFile(argumentos, 'utf-8', (error, texto) => {
    
    // 4. MANEJO DE ERRORES CON TRY/CATCH DENTRO DEL CALLBACK
    // Nota: En esta forma, el error llega como el primer parámetro de la función.
    try {
        if (error) {
            // "Lanzamos" el error manualmente para que caiga en el bloque 'catch'.
            throw error; 
        }
        
        // 5. RESPONSABILIDAD ÚNICA
        // Una vez que el archivo se leyó con éxito, pasamos el contenido a otra función.
        contarPalabras(texto);

    } catch (error) {
        // Si algo falló (archivo no encontrado, sin permisos), se procesa aquí.
        console.log(manejador(error));
    }
});

//para ejecutar: npm init -y   Crea: el archivo.json    
// node TratamientoErrores/2-ComandLineInterface.js archivos/texto-web.txt 