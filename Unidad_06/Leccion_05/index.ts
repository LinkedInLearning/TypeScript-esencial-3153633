
interface Computadora {
    id: string;
    fabricante: string;
    modelo: string,
    procesador: string;
    memoriaRamGb: number;
    discoDuroGb: number;
    touchBar?: boolean;
}

// Partial:
function generarComputadora(computadora: Partial<Computadora>): Computadora {
    return {
        id: '01',
        fabricante: 'Apple',
        modelo: 'MacBook Pro 13',
        procesador: 'Apple M1 chip',
        memoriaRamGb: 8,
        discoDuroGb: 256,
        ...computadora
    };
}

const nuevaComputadora = generarComputadora({
    discoDuroGb: 512,
    memoriaRamGb: 16
});

// Required:

const conTouchBar: Required<Computadora> = generarComputadora({
   touchBar: true
});


const conTouchBarBien: Required<Computadora> = {
    ...generarComputadora({}),
    touchBar: true
};
