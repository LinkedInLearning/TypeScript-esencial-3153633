
interface BB {
    c?: number
}

interface AA {
    a: string;
    b?: BB;
}

const objeto: AA = {
    a: 'prueba'
}


function assert(condicion: unknown, mensaje: string): asserts condicion {
  if (!condicion) throw new Error(mensaje);
}

assert(objeto.b, 'B no existe');
const c = objeto.b.c;

function assertString(condicion: unknown, mensaje: string): asserts condicion{
    if(typeof condicion !== 'string') throw new Error(mensaje);
}

assertString(objeto.a, 'A no es string');
