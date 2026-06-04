// 1. IMPORTACIÓN DE MÓDULOS
// Importamos el módulo de "File System" de Node.js. 
// Es la herramienta que permite a tu código leer o escribir archivos en tu computadora.
const fs = require('fs');

// 2. CAPTURA DE ARGUMENTOS DESDE LA TERMINAL
// process.argv es un arreglo (lista) que contiene todo lo que escribiste en la terminal para ejecutar el programa.
const contenidoArchivo = process.argv;

// Guardamos la posición [2] porque ahí es donde Node guarda la ruta del archivo que le pasamos.
const argumentos = contenidoArchivo[2]; 

// 3. LECTURA DEL ARCHIVO
// Usamos readFile para leer el archivo de forma asíncrona. 
// Le pasamos la ruta (argumentos), el formato (utf-8) y una función que se ejecuta al terminar (callback).
fs.readFile(argumentos, 'utf-8', (err, Archivo) => {
    // Si hay un error (ej. el archivo no existe), lo mostramos y detenemos la ejecución.
    if (err) {
        console.log("¡Ups! No pude leer el archivo", err);
        return;
    }
    // Si todo sale bien, mandamos el contenido del archivo a la función de procesamiento.
    dividirParrafos(Archivo);
});


// 4. PROCESAMIENTO POR PÁRRAFOS
function dividirParrafos(texto) {
    // .split('\n') rompe el texto largo en una lista (array) cada vez que encuentra un salto de línea.
    const parrafos = texto.split('\n');  

    // .map recorre cada párrafo de la lista y le aplica la función de contar palabras.
    // Crea una nueva lista con los resultados de cada conteo.
    const listaPalabrasParrafos = parrafos.map((parrafo) => {
        return verificarCantidadPalabras(parrafo);
    });

    // Mostramos el resultado final: una lista de objetos (un objeto por cada párrafo).
    console.log(listaPalabrasParrafos);
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
        //const palabraLimpia = limpiarPalabra(palabra);
        // Lógica clave: 
        // Si la palabra ya existe en el objeto, le suma 1. 
        // Si no existe (es undefined), toma el 0 por defecto y le suma 1.
        objResultado[palabra] = (objResultado[palabra] || 0) + 1;   
    });

    // Retornamos el objeto con el conteo de este párrafo específico.
    return objResultado; 
}