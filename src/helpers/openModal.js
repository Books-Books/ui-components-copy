export const openModal = function (id) {
  const modal = document.getElementById(`modal${id}`)
  const modalFocus = modal.querySelector('.modal-start')
  const modalOverlay = document.getElementById(`modalOverlay${id}`)

  // Quita el atributo de hidden al modal y enfoca el div invisible dentro del modal que puede enfocarse con teclado.
  modal.hidden = false
  modalFocus.focus()

  // Muestra el modal
  modal.classList.add(modalCss['modal--active'])
  modalOverlay.classList.add(modalCss['overlay--active'])

  // Elimina el scroll del cuerpo del sitio
  document.body.classList.add(modalCss['has-modal'])
}
