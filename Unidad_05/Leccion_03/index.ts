
//Describe las propiedades de un objeto:

interface IConGenerico<T, R> {
    id: T;
    valor: R;
}

const primerValor: IConGenerico<number, boolean> = { id: 10, valor: true };

// Describe el tipo de un índice:

interface ITipoIndex<T> {
    [id: string]: T;
}

const segundoValor: ITipoIndex<number> = {
    'a': 10,
    'b': 20,
    'c': 30
};
