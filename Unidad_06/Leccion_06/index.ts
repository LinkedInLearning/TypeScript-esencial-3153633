
interface Computadora {
    id: string;
    fabricante: string;
    modelo: string,
    procesador: string;
    memoriaRamGb: number;
    discoDuroGb: number;
    touchBar?: boolean;
}

// Readonly:

const computadora: Readonly<Computadora> = {
    id: '01',
    fabricante: 'Apple',
    modelo: 'MacBook Pro 13',
    procesador: 'Apple M1 chip',
    memoriaRamGb: 8,
    discoDuroGb: 256
};

 computadora.id = '02';
 