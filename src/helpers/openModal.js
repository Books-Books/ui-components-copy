import modalCss from '../components/molecules/Modal/Modal.module.css'

export const createKeyboardTrap = function (e, id) {
  const modal = document.getElementById(`modal${id}`)

  const focusableElements = [
    ...modal.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable]'
    )
  ]
  const firstFocusableElement = focusableElements[0]
  const lastFocusableElement = focusableElements[focusableElements.length - 1]

  // console.log(focusableElements)
  // console.log(firstFocusableElement)
  // console.log(lastFocusableElement)

  function trapTabKey(e) {
    if (e.keyCode === 9) {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault
          lastFocusableElement.focus()
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault
          firstFocusableElement.focus()
        }
      }
    }
  }

  trapTabKey(e)
}

export const openModal = function (id) {
  const modal = document.getElementById(`modal${id}`)
  const modalOverlay = document.getElementById(`modalOverlay${id}`)

  // Quita el atributo de hidden al modal y enfoca el div invisible dentro del modal que puede enfocarse con teclado.
  modal.hidden = false
  modal.focus()

  // Muestra el modal
  modal.classList.add(modalCss['modal--active'])
  modalOverlay.classList.add(modalCss['overlay--active'])

  // Elimina el scroll del cuerpo del sitio
  document.body.classList.add(modalCss['has-modal'])
}
