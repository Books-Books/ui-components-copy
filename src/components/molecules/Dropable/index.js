import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { AccordionItem } from '../../atoms'
import css from './Dropable.module.css'

export const Accordion = ({ content, width, backgroundColor, color }) => {
  const [getStateList, setStateList] = useState(null)
  const [getStateIcon, setStateIcon] = useState('')
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
        setStateIcon('expand_less')
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
    setStateIcon(element)
    stateList($bodyElement)
  }
  return (
    <ul
      className={`${css['c-collapsible']} ui-collapsible`}
      style={{ width: width }}
    >
      {content.map((item, index) => (
        <li
          className={`${css['c-collapsible-container']} ui-collapsible-container`}
          key={index}
          style={style}
        >
          <AccordionItem
            item={item}
            index={index}
            stateIcon={
              getStateIcon === `body${index}` ? 'expand_less' : 'expand_more'
            }
            onClick={() => handleToggleBody(`body${index}`)}
            addClass='prb'
          />
        </li>
      ))}
    </ul>
  )
}

Accordion.propTypes = {
  content: PropTypes.array,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string
}

Accordion.defaultProps = {
  content: [
    {
      title: 'Location',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, tenetur pariatur a exercitationem ab cumque est necessitatibus fuga tempore ipsum vitae dolores impedit quae!',
      dataIcon: 'close'
    }
  ]
}
