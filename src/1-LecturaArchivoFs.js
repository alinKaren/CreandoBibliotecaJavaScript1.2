// Importamos 'fs' (File System). Es la herramienta que le da "manos" a Node.js 
// para que pueda abrir, leer y tocar archivos en tu computadora.

const fs =require('fs');
/* //imprime 
La ruta de Node.
La ruta de tu index.js.
La ruta del archivo de texto. */

const contenidoArchivo = process.argv;
//const nombreArchivo = process.argv;
// Aquí: agregamos el [2] para pasarle solo "archivos/texto.txt"
//solo puedo abrir un archivo a la vez".
const argumentos = contenidoArchivo[2]; 

fs.readFile(argumentos,'utf-8', (err, texto) => {
    //  si el nombre está mal escrito envia el mensaje 
    if (err) {
        console.log("¡Ups! No pude leer el archivo", err);
        return;
}
//Una vez que Node encuentre el archivo, imprimirá el contenido
console.log(`Contenido: ${textro}`);
});

console.log(argumentos);//argumentos es simplemente una cadena de texto (string) con la ruta.
//Ejecución: node src/LecturaArchivo.js archivos/texto-web.txt

//console.log(contenidoArchivo[2]); 

/* console.log("Motor:", contenidoArchivo[0]);
console.log("Archivo:", contenidoArchivo[1]);
console.log("Argumento:", contenidoArchivo[2]);  */

