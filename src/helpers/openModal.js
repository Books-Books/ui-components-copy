export const openModal = function (id) {
  const modal = document.getElementById(id)
  modal.setAttribute(hidden, false)
  modal.focus()
}
