

const arreglo: string[] = ['a', 'b', 'c'];
const arregloTipoUnion: (string|number)[] = ['a', 1, 'b', 2];

const tupla: [string, number, boolean, number] = ['a', 10, true, 20];

// Ejemplo de uso:

interface PruebaInterface {
    a: string,
    b: number,
}

const promesa1 = Promise.resolve<boolean>(true);
const promesa2 = Promise.resolve<PruebaInterface>({a: 'valor de a', b: 20});

Promise.all([promesa1, promesa2])
.then(([valorRetornoPromesa1, valorRetornoPromesa2]: [boolean, PruebaInterface])=>{
   console.log(valorRetornoPromesa1, valorRetornoPromesa2);
});
