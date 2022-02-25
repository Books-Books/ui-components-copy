export const openModal = function (id) {
  const modal = document.getElementById(`modal${id}`)
  modal.hidden = false
  modal.focus()
}
