function mostrarPopup(mensaje, tipo) {
  const modalElement = document.createElement("div");
  modalElement.classList.add(
    "modal",
    "fade",
    "show",
    "d-flex",
    "align-items-center",
    "justify-content-center"
  );

  const cabeceraError = `
    <h5 class="modal-title">
      <i class="bi bi-exclamation-triangle-fill text-danger me-2"></i>Error
    </h5>
  `;

  const cabeceraSucces = `
    <h5 class="modal-title">
      <i class="bi bi-check-circle-fill text-success me-2"></i>Éxito
    </h5>
  `;

  let tipoCabecera;

  if (tipo === "error") {
    tipoCabecera = cabeceraError;
  } else {
    tipoCabecera = cabeceraSucces;
  }

  modalElement.innerHTML = `
        <div class="modal-dialog w-75 text-center">
          <div class="modal-content">
            <div class="modal-header">
              ${tipoCabecera}
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>${mensaje}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
            </div>
          </div>
        </div>
      `;

  document.body.appendChild(modalElement);

  const bootstrapModal = new bootstrap.Modal(modalElement);
  bootstrapModal.show();

  modalElement.addEventListener("hidden.bs.modal", function () {
    modalElement.remove();
  });
}
