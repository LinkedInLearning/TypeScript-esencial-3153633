
//Definición de tipos

type Perro = 'perro';
type Gato = 'gato';
type PezBeta = 'pez beta';
type Hamster = 'hamster';

type Mascota = Perro | Gato | PezBeta | Hamster;
let mascota: Mascota = 'perro';
mascota = 'pájaro';

type ListaNombreAnimales = Array<string>;
const nombres: ListaNombreAnimales = ['Laika', 'Smoky', 'Bobby', 'Beethoven', 'Lassie', 'Marley'];

type UnionStringNumber = string | number;
let valor: UnionStringNumber = 10;
