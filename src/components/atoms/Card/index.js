import PropTypes from 'prop-types'
import React from 'react'
import { Button } from '../Button/index'
import css from './Card.module.css'

function Card({ width, image, content, supportingText, buttons }) {
  return (
    <div className={css['c-card']} style={{ width: width }}>
      {image.state ? (
        <figure className={css['c-card-image']}>
          <img src={image.url} alt={image.alt} />
        </figure>
      ) : (
        <></>
      )}
      <div className={css['c-card-container']}>
        <div className={`"c-card-container-title"`}>
          <h3>{content.title}</h3>
          <p className={css['u-text']}>{content.text}</p>
        </div>
        <div>
          <p className={css['u-text']}>{supportingText}</p>
        </div>
        {buttons.state ? (
          <div className={`"c-card-container-buttons"`}>
            <Button label={buttons.first.label} styled={buttons.first.theme} />
            <Button
              label={buttons.secundary.label}
              styled={buttons.secundary.theme}
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
  width: PropTypes.string,
  image: PropTypes.object,
  content: PropTypes.object,
  supportingText: PropTypes.string,
  buttons: PropTypes.object
}

Card.defaultProps = {
  width: '300px',
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
