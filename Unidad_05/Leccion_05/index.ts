
//Definición de clase e interface genérica:

interface IProcesado<C, D> {
    elemento: C,
    procesar: () => D
}

interface IProcesador<A, B> {
    elementos: Array<IProcesado<A, B>>,
    agregar: (elemento: IProcesado<A, B>) => void,
    remover: (index: number) => IProcesado<A, B>,
    procesar: (index: number) => B
}

abstract class Procesador<T, R> implements IProcesador<T, R>{

    elementos: IProcesado<T, R>[] = [];

    agregar(elemento: IProcesado<T, R>): void {
        this.elementos.push(elemento);
    }

    remover(index: number): IProcesado<T, R> {
        return this.elementos[index];
    }

    procesar(index: number): R {
        return this.elementos[index].procesar();
    }
}

// Definición de clase e interface con tipos fijos:

// Primer tipo con tipos:

type Fruta = 'fresa' | 'mango' | 'banano' | 'piña' | 'sandía' | 'kiwi';
type Batido = 'batido-fresa' | 'batido-mango' | 'batido-banano' | 'batido-piña' | 'batido-sandía' | 'batido-kiwi';

class PuestoBatidos extends Procesador<Fruta, Batido>{ }

const puestoBatidos = new PuestoBatidos();
puestoBatidos.agregar({
    elemento: 'fresa',
    procesar: () => 'batido-fresa'
});

// Segundo ejemplo con una interfaz como tipo fijo:

interface Perro {
    nombre: string,
    raza: string
}

class PeluqueriaPerros extends Procesador<Perro, Perro>{ }

const bolaDeNieve = {
    nombre: 'Bola de Nieve',
    raza: 'Poodle'
}

const peluqueriaPerros = new PeluqueriaPerros();
peluqueriaPerros.agregar({
    elemento: bolaDeNieve,
    procesar: () => bolaDeNieve
});
