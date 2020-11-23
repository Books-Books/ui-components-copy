import React, { useState } from 'react'
import PropTypes from 'prop-types'
import css from './Dropable.module.css'
import { DropableItem } from '../../atoms'

export const Dropable = ({ content, width, backgroundColor, color }) => {
  const [getStateList, setStateList] = useState(null)
  const style = {
    backgroundColor: backgroundColor,
    color: color
  }
  function addAndRemoveClass(element, addClass) {
    if (addClass) {
      element.classList.add(css.block)
    } else {
      element.classList.remove(css.block)
    }
  }
  function classInElement(element) {
    element.classList.forEach((item) => {
      if (item === css.block) {
        addAndRemoveClass(element, false)
      } else {
        addAndRemoveClass(element, true)
      }
    })
  }
  function stateList(element) {
    if (getStateList) {
      if (getStateList === element) {
        classInElement(element)
      } else {
        addAndRemoveClass(getStateList, false)
        addAndRemoveClass(element, true)
        setStateList(element)
      }
    } else {
      addAndRemoveClass(element, true)
      setStateList(element)
    }
  }
  function handleToggleBody(element) {
    const $bodyElement = document.querySelector(`#${element}`)
    stateList($bodyElement)
  }
  return (
    <ul className={css['c-collapsible']} style={{ width: width }}>
      {content.map((item, index) => (
        <li
          className={css['c-collapsible-container']}
          key={index}
          style={style}
        >
          <DropableItem
            item={item}
            index={index}
            onClick={() => handleToggleBody(`body${index}`)}
          />
        </li>
      ))}
    </ul>
  )
}

Dropable.propTypes = {
  content: PropTypes.array,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string
}

Dropable.defaultProps = {
  content: [
    {
      title: 'Location',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, tenetur pariatur a exercitationem ab cumque est necessitatibus fuga tempore ipsum vitae dolores impedit quae!',
      dataIcon: 'close'
    }
  ]
}
