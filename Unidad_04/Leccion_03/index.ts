
type Color = 'negro' | 'rojo' | 'azul' | 'amarillo';

class Vehiculo {

    private _marca: string | undefined;
    private _color: Color | undefined;
    private _numeroRuedas: number | undefined;

    //Modificadores de marca
    get marca(): string | undefined {
        return this._marca;
    }
    set marca(valor: string | undefined) {
        this._marca = valor;
    }

    //Modificadores de color
    get color(): Color | undefined {
        return this._color;
    }
    set color(valor: Color | undefined) {
        this._color = valor;
    }

    //Modificadores de numeroRuedas
    get numeroRuedas(): number | undefined {
        return this._numeroRuedas;
    }
    set numeroRuedas(valor: number | undefined) {
        this._numeroRuedas = valor;
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

const miVehiculo = new Vehiculo();
miVehiculo.marca = 'Nissan';
miVehiculo.color = 'negro';
miVehiculo.numeroRuedas = 4;

miVehiculo.marca = 'Toyota';
