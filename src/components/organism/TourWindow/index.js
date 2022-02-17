import React, { Fragment } from 'react'
import { TourHelpLayer } from '../../atoms/TourHelpLayer'
import { TourModal } from '../../atoms/TourModal'
import { TourOverlay } from '../../atoms/TourOverlay'

export const TourWindow = () => {
  const endTour = function () {
    console.log('Tour terminado')
  }

  const endTourOnEsc = function (e) {
    if ((e.keyCode || e.which) === 27) {
      console.log('Tour terminado con Esc')
    }
  }

  const backTour = function () {
    console.log('Tour anterior')
  }

  const nextTour = function () {
    console.log('Siguiente tour')
  }

  return (
    <Fragment>
      <TourOverlay endTour={endTour} endTourOnEsc={endTourOnEsc} />
      <TourHelpLayer />
      <TourModal endTour={endTour} backTour={backTour} nextTour={nextTour} />
    </Fragment>
  )
}
