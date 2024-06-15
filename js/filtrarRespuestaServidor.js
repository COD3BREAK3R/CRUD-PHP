let respuestaServidor;

filtrarRespuesta = (res) => {
  let jsonMatch = res.match(/{(.|n)*}/);

  if (jsonMatch) {
    respuestaString = jsonMatch[0];
    respuestaServidor = JSON.parse(respuestaString);
  }
};

function filtrarRespuestaArrays(respuesta) {
  const jsonStartIndex = respuesta.indexOf("[");
  const jsonEndIndex = respuesta.lastIndexOf("]");
  const datosJSON = respuesta.substring(jsonStartIndex, jsonEndIndex + 1);

  try {
    const datos = JSON.parse(datosJSON);
    respuestaServidor = datos;
  } catch (error) {
    throw new Error("Error al analizar la respuesta en JSON");
  }
}
