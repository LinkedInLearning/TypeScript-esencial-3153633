
// Clases en TypeScript.

type Color = 'negro' | 'rojo' | 'azul' | 'amarillo';

class Vehiculo {

    _marca: string;
    _color: Color;

    constructor(marca: string, color: Color) {
        this._marca = marca;
        this._color = color;
    }

    descripcionVehiculo(): string {
        return `El vehículo es de marca ${this._marca} y es de color ${this._color}`;
    }

}

const miVehiculo = new Vehiculo('Nissan', 'negro');
miVehiculo.descripcionVehiculo();
