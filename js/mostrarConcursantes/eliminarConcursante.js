async function eliminarConcursante(correoConcursante, indiceBoton) {
  try {
    const response = await fetch("../app/models/eliminar_concursante.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: correoConcursante }),
    });

    const data = await response.text();

    if (response.ok) {
        eliminarActualizarIndiceElementos(indiceBoton)
    } else {
      filtrarRespuesta(data);
      mostrarPopup(respuestaServidor.error, "error");
    }
  } catch (error) {
    mostrarPopup(error.message, "error");
  }
}

on("click", ".btnEliminar", function () {
  let indiceBoton = this.getAttribute("numbtn");
  let correoConcursante = this.getAttribute("ideliminar");

  eliminarConcursante(correoConcursante, indiceBoton);
});
