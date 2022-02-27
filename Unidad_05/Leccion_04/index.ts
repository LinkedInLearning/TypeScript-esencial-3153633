
//Genéricos en clases:

type Fruta = 'fresa' | 'mango' | 'banano' | 'piña';

class Frutero<T>{

    private listaFrutas: T[] = [];

    agregarFruta(fruta: T): void {
        this.listaFrutas.push(fruta);
    }

    tomarFruta(index: number): T {
        return this.listaFrutas[index];
    }
}

const frutero = new Frutero<Fruta>();

frutero.agregarFruta('fresa');
frutero.agregarFruta('piña');
