import React from 'react'
import { Chart } from 'react-google-charts'

function Graphics() {
  return (
    <Chart
      width={600}
      height={500}
      chartType='ColumnChart'
      loader={<div>Cargando...</div>}
      data={[
        ['City', '2010 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000]
      ]}
      options={{
        title: 'Population of Largest U.S Cities',
        chartArea: { width: '50%' },
        hAxis: {
          title: 'Total population',
          minValue: 0
        },
        vAxis: {
          title: 'City'
        }
      }}
      legendToggle
    />
  )
}

export { Graphics }
