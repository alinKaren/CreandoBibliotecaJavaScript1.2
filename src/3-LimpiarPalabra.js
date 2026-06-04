// 1. IMPORTACIÓN DE MÓDULOS
// Importamos el módulo de "File System" de Node.js. 
// permite a tu código leer o escribir archivos en tu computadora.
const fs = require('fs');

// 2. CAPTURA DE ARGUMENTOS DESDE LA TERMINAL
// process.argv es un arreglo (lista) que contiene todo lo que escribiste en la terminal para ejecutar el programa.
const contenidoArchivo = process.argv;

// 3. OBTENCIÓN DE LA RUTAss ss
const argumentos = contenidoArchivo[2]; 

// 4. LECTURA DEL ARCHIVO
fs.readFile(argumentos, 'utf-8', (err, Archivo) => {
  
    if (err) {
        console.log("¡Ups! No pude leer el archivo", err);
        return;
    }
    dividirParrafos(Archivo);
});


// 5. SEPARACIÓN POR PÁRRAFOS
function dividirParrafos(texto) {
 
    const parrafos = texto.split('\n');  
    const listaPalabrasParrafos = parrafos.map((parrafo) => {
        return verificarCantidadPalabras(parrafo);
    });
    console.log(listaPalabrasParrafos);
}

//6 LIMPIEZA DE CARACTERES
// Esta función toma una palabra y le quita puntos, comas y signos especiales.
// .replace utiliza una "Expresión Regular" (/[^a-zA-ZáéíóúÁÉÍÓÚñÑ]/g)
    // Esto significa: "Busca todo lo que NO sea una letra y bórralo".
function LimpiarPalabra (palabra){
    return palabraLimpia = palabra.replace(/[.;(),./\#$%&/[]=?¡*[]/g,'');
}


// 5. LÓGICA DE CONTEO DE PALABRAS
function verificarCantidadPalabras(texto) {
    // Convertimos todo a minúsculas para no diferenciar entre "Hola" y "hola".
    // Luego dividimos el párrafo en palabras individuales usando el espacio en blanco.
    const listaPalabras = texto.toLowerCase().split(' '); 
    
    // Creamos un objeto vacío donde guardaremos nuestras "etiquetas" de palabras y su conteo.
    const objResultado = {};

    // Recorremos cada palabra de la lista.
          
    listaPalabras.forEach(palabra => {
     const palabraLimpia = LimpiarPalabra(palabra);
     // Solo contamos la palabra si después de limpiarla no quedó vacía
        if (palabra.length >= 3){

        objResultado[palabraLimpia] = (objResultado[palabraLimpia] || 0) + 1;   
        }
    });
    return objResultado; 
}