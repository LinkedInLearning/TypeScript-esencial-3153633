

let unaVariable: undefined = undefined;

let variableNula: null = null;

interface Persona{
    nombre: string,
    apellido: undefined,
}

const eleanor: Persona = {nombre: 'Eleanor'};

function decirNombre(persona: Persona): number{
    return persona.apellido.length;
}

decirNombre(eleanor);
