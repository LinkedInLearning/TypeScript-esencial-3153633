
function lanzarError(mensajeError: string): never { 
    throw new Error(mensajeError); 
} 

function saludar(mensaje: string): void{
    console.log(mensaje);
}

let saludo = saludar("Hola!");

let error = lanzarError("Un error sucedió");