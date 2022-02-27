
type Fruta = 'fresa' | 'mango' | 'banano' | 'piña' | 'sandía' | 'kiwi';

interface IFruta {
    tipo: Fruta,
    picar: () => Fruta
}

// Con extend se indica que F debe ser un derivado del tipo IFruta
function picarFrutas<F extends IFruta>(frutas: F[]): void {
    for (const fruta of frutas) {
        fruta.picar();
    }
}

class Fresa implements IFruta {
    tipo: Fruta = 'fresa';

    picar() {
        return this.tipo;
    }
}

class Mango implements IFruta {
    tipo: Fruta = 'mango';

    picar() {
        return this.tipo;
    }
}

class prueba{}
const p = new prueba();

let fresa = new Fresa();
let mango = new Mango();

picarFrutas([fresa, mango]);

//////////////////////////////////////////////////////////////////

// Con keyof se indica que K debe el nombre de una propiedad de IFruta
function obtenerPropiedadFruta<K extends keyof IFruta>(nombrePropiedad: K, fruta: IFruta): Fruta | (() => Fruta) {
    return fruta[nombrePropiedad];
}

const tipo = obtenerPropiedadFruta('tipo', fresa);
