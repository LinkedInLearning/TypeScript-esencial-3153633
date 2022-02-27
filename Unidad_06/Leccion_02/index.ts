

function calcularCostoReservacion(costoNoche: number, totalNoches: number, formato: boolean): number | string {
    const costo = costoNoche * totalNoches;
    return formato ? `${costo}` : costo;
}

//Aserción usando keyword 'as'
const costo = calcularCostoReservacion(90, 5, true) as number;


interface Pedido {
    id: number;
    cliente: string;
    productos: string[];
    fechaEntrega: Date;
}

interface PedidoSupermercado extends Pedido {
    supermercado: string;
}

const pedidoSupermercado: PedidoSupermercado = {
    id: 1,
    cliente: 'Paula',
    productos: ['tomates', 'pan'],
    fechaEntrega: new Date('2021-10-05'),
    supermercado: 'Tesco'
}

const pedido = pedidoSupermercado as Pedido;
function procesarPedido(pedido: Pedido){}
procesarPedido(pedido);
