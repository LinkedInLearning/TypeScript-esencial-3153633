interface DD {
    d: string
}

interface BB {
    c?: DD
}

interface AA {
    a: string;
    b?: BB;
}

const prueba: AA = {
    a: 'prueba'
}

//Encadenamiento opcional:
// Operador '?' retornará undefined si una propiedad opcional no está definida
function existeD(valor: AA): boolean {
    return valor.b?.c?.d ? true : false;
}

// Aserciones no-null: Se activa si la opción strictNullChecks esta activa en el compilador
// El operador ! asegura al compilador que las propiedades opcionales existen
// Es un poco riesgoso usar este operador ya que las propiedades pueden no estar definidas en el objeto
function largoD(valor: AA): number {
    return valor.b!.c!.d.length;
}

// Para evitar usar ! o ? se puede validar la existencia de los objetos opcionales al inicio de la función
function largoDAsertado(valor: AA): number | null {
    if (valor.b && valor.b.c) {
        return valor.b.c.d.length;
    }
    return null;
}
