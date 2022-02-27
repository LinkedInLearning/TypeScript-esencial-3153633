
// Ejemplo del uso de any:

let cualquierValor: any = 'un valor string';

cualquierValor = 10;

cualquierValor = true;

cualquierValor = {};

let variableString: string = cualquierValor;


// Ejemplo del uso de unknown:

let variableUnknown: unknown = 10;

variableString = variableUnknown;

let otraVariableUnknown: unknown = variableUnknown;