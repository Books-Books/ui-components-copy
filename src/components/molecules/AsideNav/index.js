import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../atoms/Button/index'
import { Icon } from '../../atoms/icon/index'
import css from './AsideNav.module.css'

function AsideNav({ children, dataButton, content }) {
  const [getStateAside, setStateAside] = useState(false)
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
    const $aside = document.querySelector('#aside')
    const $overlay = document.querySelector('#overlay')
    stateAside($aside, $overlay)
  }
  return children ? (
    <>
      <div className={css['c-overlay']} id='overlay' />
      <div className={css['c-side']} id='aside'>
        <Icon
          nameIcon='close'
          onClick={handleAside}
          style={{ cursor: 'pointer' }}
        />
        {children}
      </div>
      <Button
        label={dataButton.label}
        styled={dataButton.styled}
        onClick={handleAside}
      />
    </>
  ) : (
    <>
      <div className={css['c-overlay']} id='overlay' />
      <div className={css['c-side']} id='aside'>
        <Icon
          nameIcon='close'
          onClick={handleAside}
          style={{ cursor: 'pointer' }}
        />
        <h2>{content.title}</h2>
        <ul className={css['c-side-nav']}>
          {content.list.map((item, index) => (
            <li className={css['c-side-nav-item']} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Button
        label={dataButton.label}
        styled={dataButton.styled}
        onClick={handleAside}
      />
    </>
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

export default AsideNav
