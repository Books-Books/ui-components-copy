const closeModal = function (id) {
  const modal = document.getElementById(`modal${id}`)
  const buttonModal = document.getElementById(`openModal${id}`)
  const modalOverlay = document.getElementById(`modalOverlay${id}`)

  // Agrega el atributo de hidden al modal y enfoca el botón que abre dicho modal
  modal.hidden = true
  buttonModal.focus()

  // Oculta el modal
  modal.classList.remove(css['modal--active'])
  modalOverlay.classList.remove(css['overlay--active'])

  // Regresa el scroll al cuerpo del sitio
  document.body.classList.remove(css['has-modal'])
}

// Hacer que se pueda salir del modal presionando la tecla Esc
function closeModalOnEsc(e, id) {
  if ((e.keyCode || e.which) === 27) {
    closeModal(id)
  }
}

document.body.addEventListener('keydown', function (e) {
  closeModalOnEsc(e, id)
})
