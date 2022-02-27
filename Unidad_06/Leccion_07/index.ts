
interface Computadora {
    id: string;
    fabricante: string;
    modelo: string,
    procesador: string;
    memoriaRamGb: number;
    discoDuroGb: number;
    touchBar?: boolean;
}

// Pick:
type SubComputadora = Pick<Computadora, 'id' | 'procesador' | 'memoriaRamGb' | 'discoDuroGb'>

const computadora: SubComputadora = {
    id: '01',
    procesador: 'Intel',
    memoriaRamGb: 8,
    discoDuroGb: 256
};

// Omit:

type SinFabricante = Omit<Computadora, 'fabricante'>;

const computadoraSinFabricante: SinFabricante = {
    id: '01',
    procesador: 'Intel',
    memoriaRamGb: 8,
    discoDuroGb: 256,
    modelo: '2021',
};
