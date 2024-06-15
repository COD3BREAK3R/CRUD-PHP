/*=============================================
=                 MARK:Variables              =
=============================================*/
// Obtener referencia a los campos del formulario
const emailInput = document.getElementById("email");
const nombreInput = document.getElementById("nombre");
const apellidosInput = document.getElementById("apellidos");
const fechaNacimientoInput = document.getElementById("fechaNacimiento");
const telefonoInput = document.getElementById("telefono");
const colorPreferidoInput = document.getElementById("colorPreferido");
const numeroInput = document.getElementById("numero");

const enviarDatosButton = document.querySelector(".btn-primary");

/*=============================================
=             MARK:Validaciones               =
=============================================*/

/* Validar Email
-------------------------------------------------- */

emailInput.addEventListener("blur", () => validarEmail(emailInput));

/* Validar Nombre
-------------------------------------------------- */

nombreInput.addEventListener("blur", () =>
  validarNombreApellidos(nombreInput, "nombre")
);

/* Validar Apellidos
-------------------------------------------------- */

apellidosInput.addEventListener("blur", () =>
  validarNombreApellidos(apellidosInput, "apellidos")
);

/* Validar Fecha de Nacimiento
-------------------------------------------------- */

fechaNacimientoInput.addEventListener("blur", () =>
  validarFechaNacimiento(fechaNacimientoInput)
);

/* Validacion Teléfono
-------------------------------------------------- */

telefonoInput.addEventListener("blur", () => validarTelefono(telefonoInput));

/* Validar Número de Concursante
-------------------------------------------------- */

numeroInput.addEventListener("blur", () =>
  validarNumeroConcursante(numeroInput)
);

/*=============================================
=     MARK:Validar Campos Antes de Datos      =
=============================================*/

enviarDatosButton.addEventListener("click", function () {
    validarCampos();
  
    validarCampos() ? enviarDatos() : false;
  });
  
  /*============  End of Validar Campos Antes de Datos  =============*/