// Importamos 'fs', la herramienta nativa para manipular archivos en tu PC.
const fs = require('fs');
const contenidoArchivo = process.argv;
const argumentos = contenidoArchivo[2]; 


fs.readFile(argumentos, 'utf-8', (err, Archivo) => {
  // Importamos 'fs', la herramienta nativa para manipular archivos en tu PC.
    if (err) {
        console.log("¡Ups! No pude leer el archivo", err);
        return;
    }// Si todo va bien, pasamos a procesar los párrafos.
    dividirParrafos(Archivo);
});


function dividirParrafos(texto) {
    // Separamos el texto cada vez que hay un salto de línea.
    const parrafos = texto.split('\n');  
    const listaPalabrasParrafos = parrafos.flatMap((parrafo) => {
        if (!parrafo)
            return [];
     return verificarCantidadPalabras(parrafo);
    })
    console.log(listaPalabrasParrafos);
}


function LimpiarPalabra (palabra){
    return palabraLimpia = palabra.replace(/[.;(),./\#$%&/[]=?¡*[]/g,'');
}



function verificarCantidadPalabras(texto) {

    const listaPalabras = texto.toLowerCase().split(' '); 
    const objResultado = {};
          
    listaPalabras.forEach(palabra => {
     const palabraLimpia = LimpiarPalabra(palabra);
        if (palabra.length >= 3){
        objResultado[palabraLimpia] = (objResultado[palabraLimpia] || 0) + 1;   
        }
    });
    return objResultado; 
}