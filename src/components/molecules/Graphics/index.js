import PropTypes from 'prop-types'
import React from 'react'
import { Chart } from 'react-google-charts'

function Graphics({ width, height, chartType, data, options, props }) {
  return (
    <Chart
      width={width}
      height={height}
      chartType={chartType}
      loader={<div>Cargando...</div>}
      data={data}
      options={options}
      {...props}
      legendToggle
    />
  )
}

export { Graphics }
Graphics.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  chartType: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired
}
