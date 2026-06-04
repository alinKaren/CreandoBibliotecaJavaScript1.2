function gestionarError (error){
   // 3. Gestión de incidentes: El catch atrapa el error lanzado arriba o cualquier fallo inesperado.
        if (error.code ==='ENOENT'){
         // Caso A: Error específico de Node que significa "Error NO ENTry" (No se encontró el archivo).
   return `No se encontró el archivo solicitado:  ${error.path}`;
        }else{
         return error.message ?? 'Error desconocido';
}}
module.exports = gestionarError;