/*=============================================
=        MARK:Cargar Datos Concursantes       =
=============================================*/

async function recibirDatos() {
  try {
    const response = await fetch("../app/models/obtener_concursantes.php");
    const data = await response.text();

    if (response.ok) {
      filtrarRespuestaArrays(data);
      mostrarDatosRespuesta(respuestaServidor);
    } else {
      filtrarRespuesta(data);
      mostrarPopup(respuestaServidor.error, "error");
    }
  } catch (error) {
    mostrarPopup(error.message, "error");
  }
}

recibirDatos();

/*=============================================
=        MARK:Mostrar Datos Servidor          =
=============================================*/

mostrarDatosRespuesta = (datos) => {
  const contenedorListaConcursantes = document.querySelector("main");

  for (let i = 0; i < datos.length; i++) {
    const concursante = datos[i];
    const colorPreferido = JSON.parse(concursante.ColorPreferido);

    // Formatear el color en formato "rgb(r, g, b)"
    const colorRGB = `rgb(${colorPreferido.r}, ${colorPreferido.g}, ${colorPreferido.b})`;

    // const fechaFormateada = convertirFecha(concursante.FechaNacimiento);
    const fechaFormateada = convertirFecha(concursante.FechaNacimiento);

    /*=============================================
    =             MARK:HTML Acordeón             =
    =============================================*/

    const htmlAcordeon = `
      <div class="accordion my-4" id="accordion${i + 1}">
        <!-- Item Acordeon -->
        <div class="accordion-item">
          <!-- Encabezado Item Acordeon -->
          <h2 class="accordion-header" id="heading1">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse${i + 1}"
              aria-expanded="false"
              aria-controls="collapse${i + 1}"
            >
              Concursante ${concursante.Nombre}
            </button>
          </h2>
          <!-- Fin Encabezado Item Acordeon -->

          <!-- Encabezado Cuerpo Acordeon -->
          <div
            id="collapse${i + 1}"
            class="accordion-collapse collapse"
            aria-labelledby="heading${i + 1}"
            data-bs-parent="#accordion${i + 1}"
          >
            <!-- Cuerpo Acordeon -->
            <div class="accordion-body" id="${concursante.Email}">
              <!-- Fila Datos -->
              <div class="row">
                <div class="col-md-6 col-12 d-sm-flex my-2">
                  <strong>Email:</strong>
                  <div class="px-sm-2 texto-largo">${concursante.Email}</div>
                </div>

                <div class="col-md-6 col-12 d-sm-flex my-2">
                  <strong>Nombre:</strong>
                  <div class="px-sm-2 texto-largo">${concursante.Nombre}</div>
                </div>
              </div>
              <!-- Fin Fila Datos -->

              <!-- Fila Datos -->
              <div class="row">
                <div class="col-md-6 col-12 d-sm-flex my-2">
                  <strong>Apellidos:</strong>
                  <div class="px-sm-2 texto-largo">
                    ${concursante.Apellidos}
                  </div>
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
                  <div class="px-2">${concursante.Telefono}</div>
                </div>
                <div class="col-md-6 d-flex align-items-center my-2">
                  <strong>Color Preferido:</strong>
                  <span
                    style="background-color: ${colorRGB}; width: 20px; height: 20px; display: inline-block; margin-left: 2%"
                  ></span>
                </div>
              </div>
              <!-- Fin Fila Datos -->

              <!-- Fila Datos -->
              <div class="row">
                <div class="col-md-6 d-flex my-2">
                  <strong>Número:</strong>
                  <div class="px-2">${concursante.Numero}</div>
                </div>

                <div class="col-md-6 d-flex justify-content-between my-2 contenedorBtnAcciones">
                  <button
                    class="btnEditar btn btn-primary flex-fill me-2"
                    idEditar="${concursante.Email}"
                    numBtn="${i}"
                  >
                    Editar
                  </button>
                  <button
                    class="btnEliminar btn btn-danger flex-fill"
                    idEliminar="${concursante.Email}"
                    numBtn="${i}"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
              <!-- Fin Fila Datos -->
            </div>
            <!-- Fin Cuerpo Acordeon -->
          </div>
          <!-- Fin Encabezado Cuerpo Acordeon -->
        </div>
        <!-- Fin Item Acordeon -->
      </div>
    `;

    /*============  End of HTML Acordeón  =============*/

    contenedorListaConcursantes.insertAdjacentHTML("beforeend", htmlAcordeon);
  }
};
