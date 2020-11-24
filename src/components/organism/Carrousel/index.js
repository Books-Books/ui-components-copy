import React, { createRef, useState } from 'react'
import { Icon } from '../../atoms'
import css from './Carrousel.module.css'

export const Carrousel = ({ children: childrenProp }) => {
  const [Value, SetValue] = useState(0)
  const refCont = createRef()
  let childIndex = 0
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
    } else {
      getValue++
      if (getValue >= contChild.length - 1) {
        getValue = contChild.length - 1
      }
      SetValue(getValue)
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
      className={[css.carrousel, css.slide].join(' ')}
      data-ride='carousel'
    >
      <div ref={refCont} className={css.carrouselInner}>
        {children}
      </div>
      <button
        className={css.carrouselControlPrev}
        data-slide='prev'
        onClick={handleClick}
      >
        <Icon nameIcon='keyboard_arrow_left' />
      </button>
      <button
        className={css.carrouselControlNext}
        data-slide='next'
        onClick={handleClick}
      >
        <Icon nameIcon='keyboard_arrow_right' />
      </button>
    </div>
  )
}
