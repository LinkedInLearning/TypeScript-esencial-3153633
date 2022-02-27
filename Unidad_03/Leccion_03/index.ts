
interface Huesped {
    idHuesped: string,
    nombre: string,
    apellido: string,
    correo: string,
    direccion?: string,
    telefono?: string
}

type Piso = 'primer piso' | 'segundo piso';

interface Cuarto {
    id: number,
    tipo: 'individual' | 'doble' | 'triple',
    piso: Piso,
    precioNoche: number
}

interface Reservacion {
    idReservacion: string,
    huesped: Huesped,
    fechaEntrada: Date,
    fechaSalida: Date,
    cuarto: Cuarto,
    nochesReservadas?: number
}

////////

const datosHuesped: Huesped = {
    idHuesped: '01',
    nombre: 'Dennis',
    apellido: 'Lizano',
    correo: 'dennis@c.com',
    direccion: 'calle 3, avenida 8',
    telefono: '8885698'
}

const reservacion: Reservacion = {
    idReservacion: 'r01',
    huesped: datosHuesped,
    fechaEntrada: new Date('2021/10/02'),
    fechaSalida: new Date('2021/10/05'),
    cuarto: {
        id: 10,
        tipo: 'individual',
        piso: 'primer piso',
        precioNoche: 80
    },
    nochesReservadas: 3
}
