import React from 'react'
import { CardsStyled } from './style'

export function Card({ url, alt, title, subTitle }) {
  return (
    <CardsStyled>
      <figure>
        <img src={url} alt={alt} />
      </figure>
      <div>
        <div>
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </div>
      </div>
    </CardsStyled>
  )
}