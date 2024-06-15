function rgbToHex(rgb) {
  const { r, g, b } = JSON.parse(rgb);
  const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
  return `#${hex}`;
}

/*========================================================
=   MARK:Mostrar Formulario Editar Datos Concursantes    =
=======================================================*/

editarDatosConcursante = (btnClickeado, datos) => {
  let identificadorConcursante = btnClickeado.getAttribute("idEditar");
  let numBtn = btnClickeado.getAttribute("numBtn");

  const resultado = datos.filter(
    (concursante) => concursante.Email === identificadorConcursante
  );

  let cuerpoAcordeonEditar = document.getElementById(
    `${identificadorConcursante}`
  );

  let datoConcursante = resultado[0];
  let colorConvertidoHEX = rgbToHex(datoConcursante.ColorPreferido);

  /* Subsection
  -------------------------------------------------- */

  const htmlEditarConcursante = `
    <div class="container p-sm-5 p-3">
      <h2 class="text-center mb-5">Editando Datos del Concursante: ${datoConcursante.Nombre}</h2>

      <!-- Inicio del Formulario -->
      <form id="formulario">
        
        <!-- Correo Electronico -->
        <div class="form-group mb-4">
          <label for="email"><b>Correo Electrónico</b></label>
          <input
            type="email"
            class="form-control emailInput"
            value="${datoConcursante.Email}"
            id=${numBtn}
            readonly
          />
        </div>
        <!-- Fin Correo Electronico -->

        <!-- Nombre -->
        <div class="form-group mb-4">
          <label for="nombre"><b>Nombre</b></label>
          <input
            type="text"
            class="form-control nombreInput"
            maxlength="20"
            value="${datoConcursante.Nombre}"
            id=${numBtn}
          />
        </div>
        <!-- Fin Nombre -->

        <!-- Apellidos -->
        <div class="form-group mb-4">
          <label for="apellidos"><b>Apellidos</b></label>
          <input
            type="text"
            class="form-control apellidosInput"
            maxlength="30"
            value="${datoConcursante.Apellidos}"
            id=${numBtn}


          />
        </div>
        <!-- Fin Apellidos -->

        <!-- Fecha Nacimiento -->
        <div class="form-group mb-4">
          <label for="fechaNacimiento"><b>Fecha de Nacimiento</b></label>
          <input
            type="date"
            class="form-control fechaInput"
            value="${datoConcursante.FechaNacimiento}"
            id=${numBtn}

          />
        </div>
        <!-- Fin Fecha Nacimiento -->

        <!-- Telefono -->
        <div class="form-group mb-4">
          <label for="telefono"><b>Teléfono</b></label>
          <input
            type="tel"
            class="form-control telefonoInput"
            pattern="[0-9]{9}"
            value="${datoConcursante.Telefono}"
            id=${numBtn}
            readonly

          />
          <small class="form-text text-muted"
            >Introduce un teléfono de 9 dígitos.</small
          >
        </div>
        <!-- Fin Telefono -->

        <!-- Color Preferido -->
        <div class="form-group mb-4">
          <label for="colorPreferido"><b>Color Preferido</b></label>
          <input
            type="color"
            class="form-control form-control-personalizado colorInput"
            value="${colorConvertidoHEX}"
            id=${numBtn}

          />
        </div>
        <!-- Fin Color Preferido -->

        <!-- Numero de Concursante -->
        <div class="form-group mb-4">
          <label for="numero"><b>Número de Concursante</b></label>
          <input
            type="number"
            class="form-control numeroInput"
            name="numero"
            min="0"
            max="999"
            placeholder="Número entre 0 y 999"
            value="${datoConcursante.Numero}"
            id=${numBtn}


          />
        </div>
        <!-- Fin Numero de Concursante -->

        <!-- Botones del Formulario -->
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btnActualizarDatos btn btn-primary btn-lg me-md-2 mb-2 mb-md-0"
            numbtn="${numBtn}"
          >
            Actualizar Datos
          </button>
        </div>
        <!-- Fin Botones del Formulario -->
      </form>
      <!-- Fin del Formulario -->
    </div>
  `;

  cuerpoAcordeonEditar.innerHTML = htmlEditarConcursante;
};

on("click", ".btnEditar", function () {
  editarDatosConcursante(this, respuestaServidor);
});

/*=============================================
=                MARK:Validaciones           =
=============================================*/

validarCamposActualizar = (indice) => {
  let inputsNombre = document.querySelector(`.nombreInput[id="${indice}"]`);
  let inputsApellidos = document.querySelector(`.apellidosInput[id="${indice}"]`);
  let inputsFecha = document.querySelector(`.fechaInput[id="${indice}"]`);
  let inputsNumero = document.querySelector(`.numeroInput[id="${indice}"]`);

  let todasLasValidacionesPasaron = true;

  if (!validarNombreApellidos(inputsNombre, "nombre")) {
    todasLasValidacionesPasaron = false;
  }

  if (!validarNombreApellidos(inputsApellidos, "apellidos")) {
    todasLasValidacionesPasaron = false;
  }

  if (!validarFechaNacimiento(inputsFecha)) {
    todasLasValidacionesPasaron = false;
  }

  if (!validarNumeroConcursante(inputsNumero)) {
    todasLasValidacionesPasaron = false;
  }

  return todasLasValidacionesPasaron;
};

/*=============================================
=             MARK:Eventos Inputs             =
=============================================*/

on("click", ".btnActualizarDatos", function () {
  let indiceBoton = this.getAttribute("numbtn");

  if (validarCamposActualizar(indiceBoton)) {
    cargarDatosConcursante(indiceBoton);
    this.innerHTML='Actualizando Datos...'
  }
});

on("blur", ".nombreInput", function () {
  validarNombreApellidos(this, "nombre");
});

on("blur", ".apellidosInput", function () {
  validarNombreApellidos(this, "apellido");
});

on("blur", ".fechaInput", function () {
  validarFechaNacimiento(this);
});

on("blur", ".numeroInput", function () {
  validarNumeroConcursante(this);
});

/*============  End of Eventos Inputs  =============*/

// on("click", ".btnEliminar", function () {
//     eliminarDatosConcursante(this);
// });
