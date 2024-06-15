eliminarActualizarIndiceElementos = (indiceBoton) => {
  let acordeonEliminar = document.querySelectorAll(".accordion-item");
  acordeonEliminar[indiceBoton].remove();

  const elementosPadre = document.querySelectorAll(".contenedorBtnAcciones");
  elementosPadre.forEach((elemento, indice) => {
    const botones = elemento.querySelectorAll("[numBtn]");
    botones.forEach((boton) => {
      boton.setAttribute("numbtn", indice);
    });
  });
};
