
type Color = 'negro' | 'rojo' | 'azul' | 'amarillo' | 'blanco';

interface AlgoQueSeMueve {
    nombre: string | undefined,
    moverse: () => string
}

class Animal implements AlgoQueSeMueve {

    nombre: string | undefined;

    moverse(): string {
        return 'El animal camina';
    }
}

abstract class Transporte implements AlgoQueSeMueve {

    // Definida por 'AlgoQueSeMueve'
    nombre: string | undefined;

    _marca: string;
    _color: Color;
    _numeroMotor = Transporte.generarIdentificador();

    constructor(marca: string, color: Color) {
        this._marca = marca;
        this._color = color;
    }

    descripcionVehiculo(): string {
        return `El vehículo es de marca ${this._marca} y es de color ${this._color}`;
    }

    moverse(): string {
        return `El vehículo se mueve a una velocidad de ${this.obtenerVelocidad()}`;
    }

    protected obtenerVelocidad(): string {
        return '100 km/h';
    }

    static generarIdentificador(): string {
        return Math.random().toString(36).slice(2);
    }
}

class Vehiculo extends Transporte {

    _numeroRuedas: number;

    constructor(marca: string, color: Color, numeroRuedas: number) {
        super(marca, color);
        this._numeroRuedas = numeroRuedas;
    }

}

const vehiculo = new Vehiculo('Nissan', 'azul', 4);
const perro = new Animal();

function moverlosTodos(elementos: Array<AlgoQueSeMueve>): void {
    for (const el of elementos) {
        console.log(el.moverse());
    }
}

moverlosTodos([vehiculo, perro]);
