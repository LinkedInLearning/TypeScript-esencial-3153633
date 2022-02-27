
function modificarArregloAlMismoTipo<T>(valores: T[], fnc: (valor: T) => T): T[] {
    const newArreglo = new Array<T>();
    for (const valor of valores) {
        newArreglo.push(fnc(valor));
    }
    return newArreglo;
}

const arregloNumeros = modificarArregloAlMismoTipo([1, 2, 3, 4, 5], valor => valor * 3);

const arregloString = modificarArregloAlMismoTipo(['a', 'b', 'c', 'd'], valor => valor + valor);

//const arregloString2 = modificarArregloAlMismoTipo(['a', 'b', 'c', 'd'], (valor) => valor.length);

function modificarArregloTipoDistinto<T, R>(valores: T[], fnc: (valor: T) => R): R[] {
    const newArreglo = new Array<R>();
    for (const valor of valores) {
        newArreglo.push(fnc(valor));
    }
    return newArreglo;
}

const arregloANumero = modificarArregloTipoDistinto<string, number>(['a', 'b', 'c', 'd'], valor => valor.length);
