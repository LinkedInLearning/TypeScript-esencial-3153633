
// Tipo numérico:
enum Piso {
    Primero = 1,
    Segundo,
    Tercero,
}

// Tipo string:
enum TipoCuarto {
    Individual = "individual",
    Doble = "doble",
    Triple = "triple"
}

let piso: Piso = Piso.Primero;

interface Cuarto {
    id: number,
    tipo: TipoCuarto,
    piso: Piso,
    precioNoche: number
}

const cuarto: Cuarto = {
    id: 10,
    tipo: TipoCuarto.Individual,
    piso: Piso.Segundo,
    precioNoche: 80
}
