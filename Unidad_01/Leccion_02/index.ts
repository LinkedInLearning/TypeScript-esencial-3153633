interface Huesped{
  idHuesped: string,
  nombre: string,
  apellido: string,
  email: string
}

interface Cuarto{
  tipo: string,
  piso: number,
  tamano: number,
  numeroCamas: number,
  tieneTV: boolean,
  precioNoche: number
}

interface Reservacion{
  idReservacion: string,
  huesped: Huesped,
  fechaEntrada: Date,
  fechaSalida: Date,
  cuarto: Cuarto,
  nochesReservadas: number
}

function calcularDiasDiferencia(
  fechaEntrada: Date, fechaSalida: Date): number{
  const diferenciaTiempo = 
  fechaSalida.getTime() - fechaEntrada.getTime();
  return  diferenciaTiempo / (1000 * 3600 * 24);
}

function crearReservacion(
  huesped: Huesped, cuarto: Cuarto, 
  fechaEntrada: Date, fechaSalida: Date): Reservacion{
  return {
    idReservacion: '123',
    huesped,
    fechaEntrada,
    fechaSalida,
    cuarto,
    nochesReservadas: calcularDiasDiferencia(
      fechaEntrada, fechaSalida),
  };
};

function calcularPrecio(reservacion: Reservacion): number{
  return reservacion.nochesReservadas * reservacion.cuarto.precioNoche;
}