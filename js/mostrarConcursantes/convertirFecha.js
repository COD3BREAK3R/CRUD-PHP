convertirFecha = (fecha) => {
  const fechaNacimiento = new Date(fecha);
  const dia = fechaNacimiento.getUTCDate(); // Obtener el día en base a la zona horaria UTC
  const mes = fechaNacimiento.getUTCMonth() + 1; // Obtener el mes en base a la zona horaria UTC
  const anio = fechaNacimiento.getUTCFullYear(); // Obtener el año en base a la zona horaria UTC
  const fechaFormateada = `${dia}/${mes}/${anio}`;
  return fechaFormateada;
};
