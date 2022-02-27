
let fechaNacimiento: string | Date;

let pruebaTresTipos: string | number | boolean;
pruebaTresTipos = 'Soy un string';
pruebaTresTipos = 123;
//Error de tipo:
pruebaTresTipos = Array<string>;


// En parámetros de funciones:

function calcularPromedio(valores: number | number[], total?: number): number | never {

    if(typeof valores === 'number' && total){
        return valores / total;
    }

    if(Array.isArray(valores) && valores.length > 0){
        return valores.reduce((acumulador, valorActual)=> acumulador + valorActual, 0) / valores.length;
    }

   throw Error('Paramétros no son válidos');
}

calcularPromedio([10,34,56,78]);
calcularPromedio(156, 21);
calcularPromedio(0, 3);
calcularPromedio([]);
