
//////////// Guardia typeof:

function calcularDiasDiferencia(fechaEntrada: Date | string, fechaSalida: Date | string): number {

    //conversión de fechas en caso que sean strings:
    const fechaInicio = typeof fechaEntrada === 'string' ? new Date(fechaEntrada) : fechaEntrada;
    const fechaFin = typeof fechaSalida === 'string' ? new Date(fechaSalida) : fechaSalida;

    const diferenciaTiempo = fechaFin.getTime() - fechaInicio.getTime();

    return diferenciaTiempo / (1000 * 3600 * 24);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface ProductoFresco {
    fechaExpiracion: Date;
}

class Fruta implements ProductoFresco {

    private _tipoFruta: string;
    private _fechaExpiracion: Date;

    get tipoFruta(): string {
        return this._tipoFruta;
    }

    get fechaExpiracion(): Date {
        return this._fechaExpiracion;
    }

    constructor(fechaExpiracion: Date, tipoFruta: string) {
        this._fechaExpiracion = fechaExpiracion;
        this._tipoFruta = tipoFruta;
    }
}

class Embutido implements ProductoFresco {

    private _marca: string;
    private _fechaExpiracion: Date;

    get marca(): string {
        return this._marca;
    }

    get fechaExpiracion(): Date {
        return this._fechaExpiracion;
    }

    constructor(fechaExpiracion: Date, marca: string) {
        this._fechaExpiracion = fechaExpiracion;
        this._marca = marca;
    }
}

const mango = new Fruta(new Date('2021-02-10'), 'mango');
const jamon = new Embutido(new Date('2021-02-10'), 'Salazar');

// Guardas personalizadas: arg is Tipo:
function esFruta(producto: any): producto is Fruta {
    return producto instanceof Fruta;
}

function agregarCarrito(productosFrescos: ProductoFresco[]): void {

    const embutidos = new Array<Embutido>();
    const frutas = new Array<Fruta>();

    for (let i = 0; i < productosFrescos.length; i++) {

        // Guardia instanceof:
        if (productosFrescos[i] instanceof Embutido) {
            embutidos.push(productosFrescos[i] as Embutido);
        }

        // Guardia personalizadas: arg is Tipo:
        if (esFruta(productosFrescos[i])) {
            frutas.push(productosFrescos[i] as Fruta);
        }
    }
}

agregarCarrito([mango, jamon]);

function imprimirMarca(productosFrescos: ProductoFresco[]): void {
    for (let i = 0; i < productosFrescos.length; i++) {

        //Guardia in:
        if ('marca' in productosFrescos[i]) {
            console.log(`Producto marca ${(productosFrescos[i] as Embutido).marca}`);
        }
    }
}

imprimirMarca([mango, jamon]);
