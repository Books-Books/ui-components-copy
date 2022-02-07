import React, { createRef, useState } from 'react'
import css from './Carrousel.module.css'

export const Carrousel = (
  { children: childrenProp },
  { roleDescription = 'Slider', type = 'Slide' }
) => {
  const [Value, SetValue] = useState(0)
  const refCont = createRef()
  const refPrev = createRef()
  const refNext = createRef()
  let childIndex = 0

  const backButton = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      aria-hidden='true'
      focusable='false'
      className='svg-icon'
    >
      <path fill='none' d='M0 0h24v24H0z'></path>
      <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path>
    </svg>
  )

  const nextButton = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      aria-hidden='true'
      focusable='false'
      className='svg-icon'
    >
      <path fill='none' d='M0 0h24v24H0z'></path>
      <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path>
    </svg>
  )

  function handleClick({ target }) {
    const dataValue = target.dataset.slide
    const contChild = [...refCont.current.children]
    let getValue = Value
    if (dataValue === 'prev') {
      getValue--
      if (getValue < 0) {
        getValue = 0
      }
      SetValue(getValue)
    } else if (dataValue === 'next') {
      getValue++
      if (getValue >= contChild.length - 1) {
        getValue = contChild.length - 1
      }
      SetValue(getValue)
    }

    if (getValue === 0) {
      refPrev.current.setAttribute('disabled', 'true')
    } else if (getValue === contChild.length - 1) {
      refNext.current.setAttribute('disabled', 'true')
    } else {
      refPrev.current.removeAttribute('disabled')
      refNext.current.removeAttribute('disabled')
    }
  }

  const children = React.Children.map(childrenProp, (child) => {
    if (!React.isValidElement(child)) {
      return null
    }
    const childValue =
      child.props.value === undefined ? childIndex : child.props.value

    childIndex += 1
    return React.cloneElement(child, {
      index: childValue,
      value: Value
    })
  })

  return (
    <div
      id='carouselExampleControls'
      className={`${css.carrousel} ${css.slide} iu-slider`}
      data-ride='carousel'
    >
      <div
        ref={refCont}
        className={`${css.carrouselInner} ui-carrusel-inner`}
        role='group'
        aria-roledescription={roleDescription}
      >
        {children}
      </div>
      <div className={`${css.carrouselButtonContainer}`}>
        <button
          className={`${css.carrouselControlPrev} ui-carrusel-control-prev`}
          data-slide='prev'
          onClick={handleClick}
          ref={refPrev}
          disabled
          aria-label='slide anterior'
        >
          {backButton}
        </button>
        <button
          className={`${css.carrouselControlNext} ui-carrusel-control-next`}
          data-slide='next'
          onClick={handleClick}
          ref={refNext}
          aria-label='slide siguiente'
        >
          {nextButton}
        </button>
      </div>
      <div className='sr-only' aria-live='polite' aria-atomic='true'>
        {type} {Value + 1} de {children.length}
      </div>
    </div>
  )
}
