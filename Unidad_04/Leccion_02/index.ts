
// Propiedades públicas y privadas en clases.

type Color = 'negro' | 'rojo' | 'azul' | 'amarillo';

class Vehiculo {

    _marca: string;
    _color: Color;
    _numeroRuedas: number;

    constructor(marca: string, color: Color, numeroRuedas: number) {
        this._marca = marca;
        this._color = color;
        this._numeroRuedas = numeroRuedas;
    }

    descripcionVehiculo(): string {
        return `El vehículo es de marca ${this._marca} y es de color ${this._color}`;
    }

    moverse(): string {
        return `El vehículo se mueve a una velocidad de ${this.obtenerVelocidad()}`;
    }

    private obtenerVelocidad(): string {
        return '100 km/h';
    }

}

const miVehiculo = new Vehiculo('Nissan', 'negro', 4);
