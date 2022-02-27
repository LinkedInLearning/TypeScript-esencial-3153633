
interface AA {
    a: string,
    b: number,
    c: boolean
}

interface BB extends AA {
    d: Array<string>
}

interface CC {
    x: string | number
}

interface DD extends AA, CC {
    y: number | undefined
}

const instanciaBB: BB = {
    a: 'a',
    b: 0,
    c: true,
    d: ['a', 'b']
}

const instanciaDD: DD = {
    a: 'a',
    b: 0,
    c: true,
    x: 20,
    y: undefined
}
