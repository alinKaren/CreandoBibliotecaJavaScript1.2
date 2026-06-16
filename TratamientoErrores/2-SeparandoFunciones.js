
/**
 * Exporta por defecto la función contarPalabras para que pueda ser usada por el archivo principal: 2-ComandLineInterface.js
 * Se utiliza el estándar moderno: ES Modules (import/export).
 */

// 1° PARTE: Procesamiento principal de lectura  del texto
export default function contarPalabras(texto) {
   // El archivo ya fue abierto y leído en el archivo (2-ComandLineInterface.js)
   //  mediante fs.readFile.
   //  Lo que esta función recibe en el parámetro texto es simplemente una enorme cadena de texto plano 
   // (string) con todo el contenido que ya se extrajo del archivo.


   // Crea una variable llamada 'parrafos' que almacena el texto dividido en líneas.
    // Llama a la función extraerParrafos, la cual se asegura de que el texto exista y
    //  lo separa por saltos de línea.
    const parrafos = extraerParrafos(texto);
 
// Crea la variable "listaPalabrasParrafos" y recorre cada uno de los párrafos usando .flatMap().
// Este método procesa cada párrafo y, al mismo tiempo los une en un solo arreglo 
// eliminando los párrafos y líneas vacíos (gracias al return []) para dejar una lista (arreglo) limpio.
  const listaPalabrasParrafos = parrafos.flatMap((parrafo) => {
       // Si la línea está vacía, devuelve un array vacío [] para que flatMap
        // la elimine por completo del resultado final.
        if (!parrafo)
            return [];
            
        // Pero si es un párrafo con texto, aplica la función "verificarCantidadPalabras"
        // (la función que se encarga de contar las palabras).
        return verificarCantidadPalabras(parrafo);
    })

    // Imprime el arreglo (lista) final con el conteo de palabras,
    // habiendo eliminado por completo las líneas vacías del texto.
    //console.log() solo sirve para los ojos del programador.
    //return sirve para el resto de tu código. Le dice a la función: "Terminé mi trabajo, toma el resultado real y dáselo a quien me llamó para que pueda seguir trabajando con él".
    console.log(listaPalabrasParrafos);
    return listaPalabrasParrafos; 
}


// 2° PARTE: Separación del texto en líneas
function extraerParrafos(texto) {
    // Validación de seguridad: Si el contenido del texto está vacío o no está definido,
    // lanza un error para evitar que el programa falle en los siguientes pasos.
    if (!texto) {
        throw new Error("Se intentó procesar un texto no definido", { cause: 'Texto no definido' });
    }

    // Si el texto es válido, lo convierte todo a minúsculas y lo separa cada vez que encuentra 
    // un salto de línea ('\n'), transformándolo en un array de párrafos.
    return texto.toLowerCase().split('\n'); 
}

// 3° PARTE: Limpieza de caracteres especiales
function LimpiarPalabra(palabra) {
    // Toma una palabra y, utilizando una expresión regular (RegEx), elimina puntos, comas, 
    // paréntesis y otros símbolos raros, reemplazándolos por un string vacío (''). Borra el símbolo raro.
    return palabra.replace(/[.;(),./\#$%&/[]=?¡*[]/g, '');
}


// 4° PARTE: Conteo de frecuencias de palabras
function verificarCantidadPalabras(texto) {
// Corta el párrafo por sus espacios en blanco (' ') con ayuda del .split(' ')  para separar cada palabra 
// y las guardarlas en un array.
const listaPalabras = texto.split(' '); 

// Crea un objeto vacío (diccionario) para almacenar los resultados del conteo.
    const objResultado = {};
       // Recorre cada palabra obtenida del párrafo
    listaPalabras.forEach(palabra => {
     // Llama a la función LimpiarPalabra para quitarle los símbolos y guarda el resultado en 'palabraLimpia'.

     const palabraLimpia = LimpiarPalabra(palabra);
    // Filtro de longitud: Solo cuenta la palabra si tiene 3 o más caracteres.
        if (palabra.length >= 3){
    
            // Guarda la palabra limpia en el objeto. Si es la primera vez que aparece, inicializa su 
            // conteo en 0 y le suma 1. Si ya existía, toma el valor actual y le aumenta 1 más.
        objResultado[palabraLimpia] = (objResultado[palabraLimpia] || 0) + 1;   
        }
    });
    // Regresa el objeto con el conteo final de palabras de este párrafo.
    return objResultado; 
}

