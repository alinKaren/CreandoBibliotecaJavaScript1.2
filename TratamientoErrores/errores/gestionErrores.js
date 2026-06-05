
//Exporta por defecto la funcion gestionarError para que lo pueda usar el archivo principal: 2-ComandLineInterface 
//porque se usa la forma moderna: ES Modules (import/export).-LECTURA DE ARCHIVOS

export default function gestionarError (error){
   // Gestión de incidentes: El catch atrapa el error lanzado  o cualquier fallo inesperado.

   // si, Error es igual a ENOENT significa "Error NO ENTry" (No se encontró el archivo) envia mensaje 
        if (error.code ==='ENOENT'){
   return `No se encontró el archivo solicitado:  ${error.path}`;

   //si es otro error entonces error.message: Es la descripción humana del problema. Es puramente el texto que explica qué falló (por ejemplo: "palabraLimpia is not defined" o "File not found").
        }else{
         return error.message ?? 'Error desconocido';
}}
