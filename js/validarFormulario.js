/*=============================================
=               MARK:Funciones                =
=============================================*/

validarEmail = (input) => {
  const patron = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$');

  const email = input.value.trim();

  if (!patron.test(email)) {
    mostrarError(input, "Por favor, ingresa un email válido.");
    return false;
  } else {
    ocultarError(input);
    return true;
  }
};

/* Subsection
-------------------------------------------------- */
validarNombreApellidos = (input, tipo) => {
  const patron = /^[a-zA-Z\sñáéíóúÁÉÍÓÚ]+$/;
  const texto = input.value.trim();

  // return nombre.length >= 3 && patron.test(nombre);

  if (!patron.test(texto) || texto.length < 3) {
    if (tipo === "nombre") {
      mostrarError(
        input,
        "Por favor, ingresa un nombre válido (mínimo 3 caracteres y solo letras)."
      );
    } else {
      mostrarError(
        input,
        "Por favor, ingresa un apellido válido (mínimo 3 caracteres y solo letras)."
      );
    }

    return false;
  } else {
    ocultarError(input);

    return true;
  }
};

/* Subsection
-------------------------------------------------- */

validarFechaNacimiento = (input) => {
  const fechaNacimiento = new Date(input.value);

  const fechaActual = new Date();
  const edadMinima = 18;

  const diffTime = Math.abs(fechaActual - fechaNacimiento);
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));

  let mayorEdad = diffYears >= edadMinima;

  if (fechaNacimiento.value === "") {
    mostrarError(input, "Este campo es obligatorio");
    return false;
  }

  if (!mayorEdad) {
    mostrarError(input, "Debes ser mayor de edad para participar");

    return false;
  } else {
    ocultarError(input);

    return true;
  }
};

/* Subsection
-------------------------------------------------- */
validarTelefono = (input) => {
  const telefono = input.value.trim();
  const patron = /^[0-9]{1,9}$/;

  if (telefono.value === "") {
    mostrarError(input, "Este campo es obligatorio");
    return false;
  }

  if (!patron.test(telefono) || telefono.length < 7) {
    input.classList.add("is-invalid");
    mostrarError(input, "El número de teléfono no es válido");

    if (telefono.length > 9 && Number(telefono)) {
      mostrarError(input, "El número de teléfono debe tener máximo 9 dígitos");
    }
    return false;
  } else {
    ocultarError(input);
    return true;
  }
};

/* Subsection
-------------------------------------------------- */
validarNumeroConcursante = (input) => {
  const numero = parseInt(input.value);

  if (!input.checkValidity() || numero < 0 || numero > 999 || isNaN(numero)) {
    mostrarError(input, "Introduce un número entre 0 y 999");
    return false;
  } else {
    ocultarError(input);
    return true;
  }
};

/* Subsection
-------------------------------------------------- */

validarCampos = () => {
  let todasLasValidacionesPasaron = true;

  if (!validarEmail(emailInput)) {
    todasLasValidacionesPasaron = false;
  }

  if (!validarNombreApellidos(nombreInput, "nombre")) {
    todasLasValidacionesPasaron = false;
  }

  if (!validarNombreApellidos(apellidosInput, "apellidos")) {
    todasLasValidacionesPasaron = false;
  }

  if (!validarFechaNacimiento(fechaNacimientoInput)) {
    todasLasValidacionesPasaron = false;
  }

  if (!validarTelefono(telefonoInput)) {
    todasLasValidacionesPasaron = false;
  }

  if (!validarNumeroConcursante(numeroInput)) {
    todasLasValidacionesPasaron = false;
  }

  return todasLasValidacionesPasaron;
};
