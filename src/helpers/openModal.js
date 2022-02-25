export const openModal = function (id) {
  const modal = document.getElementById(id)
  modal.removeAttribute(hidden)
  modal.focus()
}
