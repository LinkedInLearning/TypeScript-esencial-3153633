
// Tipos literales:

const saborHelado = 'vainilla';

type SaborHelado = 'chocolate' | 'vainilla' | 'fresa';

let sabores: SaborHelado = 'fresa';

let siempreTrue: true = true;

function crearHelado(sabor: SaborHelado | string): void {
    switch (sabor) {
        case 'chocolate':
            console.log('Haciendo helado de chocolate...');
            break;
        case 'vainilla':
            console.log('Haciendo helado de vainilla...');
            break;
        case 'fresa':
            console.log('Haciendo helado de fresa...');
            break;
        default:
            console.log('Este sabor no lo tenemos pero lo agregaremos a la lista');
    }
}
