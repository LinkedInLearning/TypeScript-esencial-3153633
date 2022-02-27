const mensaje = "Hola TypeScript";
console.log(mensaje);

// Lista de opciones para configurar tsconfig.json
// https://www.typescriptlang.org/tsconfig

/*

//noImplicitAny
function parametroAny(parametro): void{
  console.log(`${parametro} tiene un tipo 'any' implícito!`)
}

//strictNullChecks
interface MiInterface1{
  valor?: MiInterface2;
}

interface MiInterface2{
  bar: string;
}

const instanciaInt: MiInterface1 = {
  valor: {
    bar: 'prueba',
  }
}

instanciaInt.valor.bar;

//strictFunctionTypes

type TipoFuncion = {
  func(param: string): void;
};

function llamarCallback(callback: TipoFuncion): void{
  callback.func('hola mundo!');
}

function callbackBoolean(valor: boolean): void {
  console.log(valor);
}

llamarCallback({ func: callbackBoolean });

//noUnusedLocals & noUnusedParameters

function funcionNoUsada(param: string) {
  let noUnusedLocals;
}

//noImplicitReturns
function pruebaSinRetorno(param: boolean): string {
  if (param) {
    return 'es true';
  }
}

//noFallthroughCasesInSwitch
let num = 3;

switch (num) {
  case 1:
    console.log(1);
  case 2:
    console.log(2);
    break;
}

*/