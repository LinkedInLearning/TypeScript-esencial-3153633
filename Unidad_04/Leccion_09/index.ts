type Color = 'negro' | 'rojo' | 'azul' | 'amarillo' | 'blanco';

enum LiquidoVehiculo {
    Agua,
    Aceite,
    LiquidoFrenos
}

enum PiezasExterna {
    Llantas = 5,
    Pintura
}

class Vehiculo {
    _numeroRuedas: number;
    _marca: string;
    _color: Color;

    constructor(marca: string, color: Color, numeroRuedas: number) {
        this._marca = marca;
        this._color = color;
        this._numeroRuedas = numeroRuedas;
    }

    hacerMantenimiento(elemento: LiquidoVehiculo): void;
    hacerMantenimiento(elementoExterno: PiezasExterna): void;
    hacerMantenimiento(elemento: LiquidoVehiculo | PiezasExterna): void {
        if (elemento in LiquidoVehiculo) {
            console.log('Cambiando líquido del vehiculo...');
        } else {
            console.log('Cambiando una pieza del vehiculo');
        }
    }
}

const vehiculo = new Vehiculo('Nissan', 'azul', 4);
vehiculo.hacerMantenimiento(PiezasExterna.Llantas);
vehiculo.hacerMantenimiento(LiquidoVehiculo.Aceite);
