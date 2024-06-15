/*=============================================
=       MARK:Cargar Datos Concursante         =
=============================================*/

cargarDatosConcursante = (indice) => {
  /* Obtener Datos de los Input
    -------------------------------------------------- */
  let inputsEmail = document.querySelector(`.emailInput[id="${indice}"]`);
  let inputsNombre = document.querySelector(`.nombreInput[id="${indice}"]`);
  let inputsApellidos = document.querySelector(
    `.apellidosInput[id="${indice}"]`
  );
  let inputsFecha = document.querySelector(`.fechaInput[id="${indice}"]`);
  let inputsTelefono = document.querySelector(`.telefonoInput[id="${indice}"]`);
  let inputsColor = document.querySelector(`.colorInput[id="${indice}"]`);
  let inputsNumero = document.querySelector(`.numeroInput[id="${indice}"]`);

  const datosActualizar = {
    email: inputsEmail.value,
    nombre: inputsNombre.value,
    apellidos: inputsApellidos.value,
    fechaNacimiento: inputsFecha.value,
    telefono: inputsTelefono.value,
    colorPreferido: convertirHexRGB(inputsColor.value),
    numero: inputsNumero.value,
  };

  const datosDOM = {
    email: inputsEmail.value,
    nombre: inputsNombre.value,
    apellidos: inputsApellidos.value,
    fecha: inputsFecha.value,
    telefono: inputsTelefono.value,
    color: inputsColor.value,
    numero: inputsNumero.value,
  };
  actualizarDatos(datosActualizar).then(() => {
    actualizarDomEditado(datosDOM, indice);
  });
};

/*=============================================
=         MARK:Actualizar Datos               =
=============================================*/

async function actualizarDatos(datos) {
  try {
    const response = await fetch(
      "../app/models/actualizar_datos_concursante.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      }
    );

    const data = await response.text();

    if (response.ok) {
      mostrarPopup("Datos actualizados con éxito", "exito");
    } else {
      filtrarRespuesta(data);
      mostrarPopup(respuestaServidor.error, "error");
    }
  } catch (error) {
    mostrarPopup(error.message, "error");
  }
}

/*=============================================
=         MARK:Actualizar Datos DOM           =
=============================================*/
actualizarDomEditado = (datosDOM, indice) => {
  let fechaFormateada = convertirFecha(datosDOM.fecha);
  let cuerpoAcordeon = document.getElementById(`${datosDOM.email}`);

  const h2 = document.querySelectorAll("h2")[indice];
  const boton = h2.querySelector(".accordion-button");
  boton.innerHTML = `Concursante ${datosDOM.nombre}`;

  /* Subsection
  -------------------------------------------------- */

  const filaDatos = `
    <!-- Fila Datos -->
    <div class="row">
      <div class="col-md-6 col-12 d-sm-flex my-2">
        <strong>Email:</strong>
        <div class="px-sm-2 texto-largo">${datosDOM.email}</div>
      </div>

      <div class="col-md-6 col-12 d-sm-flex my-2">
        <strong>Nombre:</strong>
        <div class="px-sm-2 texto-largo">${datosDOM.nombre}</div>
      </div>
    </div>
    <!-- Fin Fila Datos -->

    <!-- Fila Datos -->
    <div class="row">
      <div class="col-md-6 col-12 d-sm-flex my-2">
        <strong>Apellidos:</strong>
        <div class="px-sm-2 texto-largo">${datosDOM.apellidos}</div>
      </div>

      <div class="col-md-6 col-12 d-sm-flex my-2">
        <strong>Fecha Nacimiento</strong>
        <div class="px-sm-2 texto-largo">${fechaFormateada}</div>
      </div>
    </div>
    <!-- Fin Fila Datos -->

    <!-- Fila Datos -->
    <div class="row">
      <div class="col-md-6 d-flex my-2">
        <strong>Teléfono:</strong>
        <div class="px-2">${datosDOM.telefono}</div>
      </div>
      <div class="col-md-6 d-flex align-items-center my-2">
        <strong>Color Preferido:</strong>
        <span
          style="background-color: ${datosDOM.color}; width: 20px; height: 20px; display: inline-block; margin-left: 2%"
        ></span>
      </div>
    </div>
    <!-- Fin Fila Datos -->

    <!-- Fila Datos -->
    <div class="row">
      <div class="col-md-6 d-flex my-2">
        <strong>Número:</strong>
        <div class="px-2">${datosDOM.numero}</div>
      </div>

      <div class="contenedorBtnAcciones col-md-6 d-flex justify-content-between my-2">
        <button
          class="btnEditar btn btn-primary flex-fill me-2"
          idEditar="${datosDOM.email}"
          numBtn="${indice}"
        >
          Editar
        </button>

        <button
          class="btnEliminar btn btn-danger flex-fill"
          idEliminar="${datosDOM.email}"
          numBtn="${indice}"
        >
          Eliminar
        </button>
      </div>
    </div>
    <!-- Fin Fila Datos -->
  `;

  cuerpoAcordeon.innerHTML = filaDatos;
  actualizarDatosArray(datosDOM);
};

/* Subsection
-------------------------------------------------- */

actualizarDatosArray = (datosDOM) => {
  let emailBuscado = datosDOM.email;

  /* Subsection
  -------------------------------------------------- */

  function hexRGBEstiloJSON(hex) {
    // Remover el caracter '#' del código hexadecimal
    hex = hex.replace("#", "");

    // Obtener los valores de los componentes RGB
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Retornar el formato en JSON
    return `{"r":${r},"g":${g},"b":${b}}`;
  }

  /* Subsection
  -------------------------------------------------- */

  // Los nuevos datos a establecer
  let nuevosDatos = {
    Nombre: datosDOM.nombre,
    Apellidos: datosDOM.apellidos,
    FechaNacimiento: datosDOM.fecha,
    ColorPreferido: hexRGBEstiloJSON(datosDOM.color),
    Numero: datosDOM.numero,
  };

  // Recorrer el array y actualizar los datos del objeto con el email buscado
  respuestaServidor.forEach(function (objeto) {
    if (objeto.Email === emailBuscado) {
      Object.assign(objeto, nuevosDatos);
    }
  });
};
