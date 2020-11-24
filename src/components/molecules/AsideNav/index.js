import PropTypes from 'prop-types'
import React, { createRef, Fragment, useState } from 'react'
import { Button } from '../../atoms/Button/index'
import { Icon } from '../../atoms/icon/index'
import css from './AsideNav.module.css'

export const AsideNav = ({ children, dataButton, content }) => {
  const [getStateAside, setStateAside] = useState(false)
  const refModal = createRef()
  const refOverlay = createRef()
  function stateAside(elementModal, elementOverlay) {
    if (getStateAside) {
      elementModal.classList.remove(css['aside--active'])
      elementOverlay.classList.remove(css['overlay--active'])
      setStateAside(false)
    } else {
      elementModal.classList.add(css['aside--active'])
      elementOverlay.classList.add(css['overlay--active'])
      setStateAside(true)
    }
  }
  function handleAside() {
    const $aside = refModal.current
    const $overlay = refOverlay.current
    stateAside($aside, $overlay)
  }
  return (
    <Fragment>
      <div ref={refOverlay} className={css['c-overlay']} id='overlay' />
      <div ref={refModal} className={css['c-side']} id='aside'>
        <Icon
          nameIcon='close'
          onClick={handleAside}
          style={{ cursor: 'pointer' }}
        />
        {children || (
          <Fragment>
            <h2>{content.title}</h2>
            <ul className={css['c-side-nav']}>
              {content.list.map((item, index) => (
                <li className={css['c-side-nav-item']} key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </Fragment>
        )}
      </div>
      <Button
        label={dataButton.label}
        styled={dataButton.styled}
        onClick={handleAside}
      />
    </Fragment>
  )
}

AsideNav.propTypes = {
  children: PropTypes.element,
  dataButton: PropTypes.object,
  content: PropTypes.object
}

AsideNav.defaultProps = {
  dataButton: {
    label: 'Side nav',
    styled: 'primary'
  },
  content: {
    title: 'Aside Nav',
    list: ['Options']
  }
}
