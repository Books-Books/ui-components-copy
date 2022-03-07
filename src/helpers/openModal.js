import modalCss from '../components/molecules/Modal/Modal.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Atrapa la navegabilidad de teclado dentro del modal, haciendo que cuando se esté en el último elemento enfocable con teclado de este, pase al primero al presionar la tecla TAB. Así mismo, si se navega con Shift + Tab y se está en el primer elemento, este seleccione el último.
 * param { e, id }
 * - e: event target
 * - id: número que identificará al modal
 **/

export const createKeyboardTrap = function (e, id) {
  const modal = document.getElementById(`modal${id}`)

  // Crea un array de elementos navegables por teclado

  const focusableElements = Array.from(
    modal.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable]'
    )
  )
  const firstFocusableElement = focusableElements[0]
  const lastFocusableElement = focusableElements[focusableElements.length - 1]

  // Detecta la navegación por teclado
  function trapTabKey(e) {
    // Tecla Tab
    if (e.keyCode === 9) {
      // Y tecla Shift
      if (e.shiftKey) {
        // Si se está en el primer elemento seleccionable por teclado
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault()
          lastFocusableElement.focus()
        }
      } else {
        // Si se está en el último elemento seleccionable por teclado
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault()
          firstFocusableElement.focus()
        }
      }
    }
  }

  document.addEventListener('keydown', (e) => trapTabKey(e))
}

/**
 * Usuario: bb-frontend-7
 * Descripción: Abre el modal y enfoca el navegador en este
 * param { id }
 * - e: event target
 * - id: número que identificará al modal
 **/

export const openModal = function (id) {
  const modal = document.getElementById(`modal${id}`)
  const modalOverlay = document.getElementById(`modalOverlay${id}`)

  // Quita el atributo de hidden al modal y trae el foco de teclado a este.
  modal.hidden = false
  modal.focus()

  // Muestra el modal
  modal.classList.add(modalCss['modal--active'])
  modalOverlay.classList.add(modalCss['overlay--active'])

  // Elimina el scroll del cuerpo del sitio
  document.body.classList.add(modalCss['has-modal'])
}
