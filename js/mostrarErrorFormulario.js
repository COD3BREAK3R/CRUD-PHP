mostrarError = (elemento, mensaje) => {
  let errorElement = elemento.parentNode.querySelector(".invalid-feedback");

  if (!errorElement) {
    elemento.classList.add("is-invalid");

    errorElement = document.createElement("div");
    errorElement.classList.add("invalid-feedback");
    elemento.parentNode.appendChild(errorElement);
  }
  errorElement.textContent = `${mensaje}`;
};

function ocultarError(elemento) {
  const errorElement = elemento.parentNode.querySelector(".invalid-feedback");
  if (errorElement) {
    elemento.classList.remove("is-invalid");
    errorElement.remove();
  }
}
