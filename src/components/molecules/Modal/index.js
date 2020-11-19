import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Button } from '../../atoms/Button/index'
import { Icon } from '../../atoms/icon/index'
import css from './Modal.module.css'

function Modal({ children, dataButton, title, text }) {
  const [getModal, setModal] = useState(false)
  function stateModal(elementModal, elementOverlay) {
    if (getModal) {
      elementModal.classList.remove(css['modal--active'])
      elementOverlay.classList.remove(css['overlay--active'])
      setModal(false)
    } else {
      elementModal.classList.add(css['modal--active'])
      elementOverlay.classList.add(css['overlay--active'])
      setModal(true)
    }
  }
  function handleModal() {
    const $modal = document.querySelector('#modal')
    const $overlay = document.querySelector('#overlay')
    stateModal($modal, $overlay)
  }
  return children ? (
    <>
      <div className={css['c-modal-overlay']} id='overlay' />
      <div className={css['c-modal']} id='modal'>
        <Icon
          nameIcon='close'
          onClick={handleModal}
          style={{ cursor: 'pointer' }}
        />
        {children}
      </div>
      <Button
        label={dataButton.label}
        styled={dataButton.styled}
        onClick={handleModal}
      />
    </>
  ) : (
    <div>
      <div className={css['c-modal-overlay']} id='overlay' />
      <div className={css['c-modal']} id='modal'>
        <Icon
          nameIcon='close'
          onClick={handleModal}
          style={{ cursor: 'pointer' }}
        />
        <div>
          <h3> {title} </h3>
          <p> {text} </p>
        </div>
      </div>
      <Button
        label={dataButton.label}
        styled={dataButton.styled}
        onClick={handleModal}
      />
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.element,
  dataButton: PropTypes.object
}

Modal.defaultProps = {
  dataButton: {
    label: 'modal',
    stylde: 'primary'
  },
  title: 'Titulo',
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, tenetur pariatur a exercitationem ab cumque est necessitatibus fuga tempore ipsum vitae dolores impedit quae!'
}

export default Modal
