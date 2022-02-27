

function calcularDiasDiferencia(fechaEntrada, fechaSalida){
    const diferenciaTiempo = 
    fechaSalida.getTime() - fechaEntrada.getTime();
    return  diferenciaTiempo / (1000 * 3600 * 24);
  }
  
  function crearReservacion(
    huesped, cuarto, fechaEntrada, fechaSalida){
    return {
      idReservacion: '123',
      huesped,
      fechaEntrada,
      fechaSalida,
      cuarto,
      nochesReservadas: calcularDiasDiferencia(fechaEntrada, 
        fechaSalida)
    };
  };
  
  function calcularPrecio(reservacion){
    return reservacion.nochesReservadas * reservacion.cuarto.precioNoche;
  }