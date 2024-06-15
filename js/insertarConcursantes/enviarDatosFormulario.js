async function enviarDatos() {
  try {
    const datos = {
      email: emailInput.value,
      nombre: nombreInput.value,
      apellidos: apellidosInput.value,
      fechaNacimiento: fechaNacimientoInput.value,
      telefono: telefonoInput.value,
      colorPreferido: convertirHexRGB(colorPreferidoInput.value),
      numero: numeroInput.value,
    };

    const response = await fetch("./app/models/inscripcion.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    const data = await response.text();

    if (response.ok) {
      mostrarPopup("Concursante insertado con éxito", "exito");
    } else {
      filtrarRespuesta(data);
      mostrarPopup(respuestaServidor.error, "error");
    }
  } catch (error) {
    mostrarPopup(error.message, "error");
  }
}

/* Subsection
-------------------------------------------------- */

document.getElementById("reiniciarForm").addEventListener("click", () => {
  window.location.reload();
});
/* End of Subsection
-------------------------------------------------- */
