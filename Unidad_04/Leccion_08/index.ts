
type Color = 'negro' | 'rojo' | 'azul' | 'amarillo' | 'blanco';

abstract class Transporte {

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

interface Piloto {
    id: string,
    nombre: string;
}

class Avion extends Transporte {

    _largoAlas: number;
    _piloto: Piloto | undefined;

    constructor(marca: string, color: Color, largoAlas: number) {
        super(marca, color);
        this._largoAlas = largoAlas;
    }

    descripcionVehiculo(): string {
        return `El avión es de marca ${this._marca} y es de color ${this._color}`;
    }

    moverse(): string {
        return `El avión se mueve a una velocidad de ${this.obtenerVelocidad()}`;
    }

    agregarPiloto(nombre: string): void {
        this._piloto = {
            id: Avion.generarIdentificador(),
            nombre
        }
    }
}

const vehiculo = new Vehiculo('Nissan', 'azul', 4);
const avion = new Avion('Boeing', 'blanco', 15);

function moverlosTodos(transportes: Array<Transporte>): void {
    for (const transporte of transportes) {
        console.log(transporte.moverse());
    }
}

moverlosTodos([vehiculo, avion]);
