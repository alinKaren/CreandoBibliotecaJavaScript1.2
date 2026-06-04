function contarPalabras(texto) {
   const parrafos =  extraerParrafos(texto);
    const listaPalabrasParrafos = parrafos.flatMap((parrafo) => {
        if (!parrafo)
            return [];
     return verificarCantidadPalabras(parrafo);
    })
    console.log(listaPalabrasParrafos);
}

function extraerParrafos(texto){
    if (!texto)
        {
            throw new Error ("Se intento procesar un texto no definido", { cause: 'Texto no definido'});
        }
    
    // Separamos el texto cada vez que hay un salto de línea.
    return texto.toLowerCase().split('\n'); 
}

function LimpiarPalabra (palabra){
    return palabraLimpia = palabra.replace(/[.;(),./\#$%&/[]=?¡*[]/g,'');
}

function verificarCantidadPalabras(texto) {
    const listaPalabras = texto.split(' '); 
    const objResultado = {};
          
    listaPalabras.forEach(palabra => {
     const palabraLimpia = LimpiarPalabra(palabra);
        if (palabra.length >= 3){
        objResultado[palabraLimpia] = (objResultado[palabraLimpia] || 0) + 1;   
        }
    });
    return objResultado; 
}

module.exports = contarPalabras;