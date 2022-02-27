
interface Huesped {
    idHuesped: string,
    nombre: string,
    apellido: string,
    correo: string,
    direccion?: string,
    telefono?: string
}

const huesped: Huesped = {
    idHuesped: '01',
    nombre: 'Karol',
    apellido: 'Salazar',
    correo: 'k@gmail.com',
    direccion: 'Calle 8, Avenida 10',
    telefono: '1234567'
}

const nombrePropiedad: keyof Huesped = 'nombre';

function retornarValor(huesped: Huesped, key: keyof Huesped){
    return huesped[key];
}

retornarValor(huesped, 'correo');
