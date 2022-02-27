
const arreglo = new Array<string>();
arreglo.push('hola!');

function mostrarEnConsolaString(mensaje: string): string {
    console.log('%c' + mensaje, 'background: #222; color: #bada55');
    return mensaje;
}

mostrarEnConsolaString('Hola TypeScript!');

////// Con Genéricos:

function mostrarEnConsolaGenerico<T>(valor: T): T {
    console.log('%c' + valor, 'background: #222; color: #bada55');
    return valor;
}

const valorDevueltoArray = mostrarEnConsolaGenerico(['a', 'b', 'c']);

const valorDevueltoNumero = mostrarEnConsolaGenerico(10);

const valorDevueltoBoolean = mostrarEnConsolaGenerico(true);

mostrarEnConsolaGenerico<'blanco'>('blanco');

