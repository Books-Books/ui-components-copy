import React from 'react'
import './style.css'
import { Button } from '../Button/index'
import PropTypes from 'prop-types'

function Card({ image, content, supportingText, buttons }) {
  return (
    <div className={`'c-card'`}>
      {image.state ? (
        <figure className={`"c-card-image"`}>
          <img src={image.url} alt={image.alt} />
        </figure>
      ) : (
        <></>
      )}
      <div className={`"c-card-container"`}>
        <div className={`"c-card-container-title"`}>
          <h3>{content.title}</h3>
          <p>{content.text}</p>
        </div>
        <div>
          <p>{supportingText}</p>
        </div>
        {buttons.state ? (
          <div className={`"c-card-container-buttons"`}>
            <Button label={buttons.first.label} theme={buttons.first.theme} />
            <Button
              label={buttons.secundary.label}
              theme={buttons.secundary.theme}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.object,
  content: PropTypes.object,
  supportingText: PropTypes.string,
  buttons: PropTypes.object
}

Card.defaultProps = {
  image: {
    state: false
  },
  content: {
    title: 'Card Title',
    text: 'Secondary Text'
  },
  buttons: {
    state: false
  }
}

export default Card
