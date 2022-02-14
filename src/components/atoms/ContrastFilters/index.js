import React, { Fragment } from 'react'

export const ContrastFilters = () => {
  const filterStyles = {
    position: 'fixed',
    inset: '0px',
    zIndex: '-1999999999',
    display: 'block',
    background:
      'none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)'
  }

  return (
    <Fragment>
      <div id='hc_extension_bkgnd' style={filterStyles}></div>
      <span id='hc_extension_svg_filters' hidden>
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='0'>
          <defs>
            <filter
              id='hc_extension_off'
              x='0'
              y='0'
              width='99999'
              height='99999'
            >
              <fecomponenttransfer>
                <fefuncr type='table' tableValues='0 1'></fefuncr>
                <fefuncg type='table' tableValues='0 1'></fefuncg>
                <fefuncb type='table' tableValues='0 1'></fefuncb>
              </fecomponenttransfer>
            </filter>
            <filter
              id='hc_extension_highcontrast'
              x='0'
              y='0'
              width='99999'
              height='99999'
            >
              <fecomponenttransfer>
                <fefuncr type='gamma' exponent='3.0'></fefuncr>
                <fefuncg type='gamma' exponent='3.0'></fefuncg>
                <fefuncb type='gamma' exponent='3.0'></fefuncb>
              </fecomponenttransfer>
            </filter>
            <filter
              id='hc_extension_highcontrast_back'
              x='0'
              y='0'
              width='99999'
              height='99999'
            >
              <fecomponenttransfer>
                <fefuncr type='gamma' exponent='0.33'></fefuncr>
                <fefuncg type='gamma' exponent='0.33'></fefuncg>
                <fefuncb type='gamma' exponent='0.33'></fefuncb>
              </fecomponenttransfer>
            </filter>
            <filter
              id='hc_extension_grayscale'
              x='0'
              y='0'
              width='99999'
              height='99999'
            >
              <fecolormatrix
                type='matrix'
                values='0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0'
              ></fecolormatrix>
              <fecomponenttransfer>
                <fefuncr type='gamma' exponent='3'></fefuncr>
                <fefuncg type='gamma' exponent='3'></fefuncg>
                <fefuncb type='gamma' exponent='3'></fefuncb>
              </fecomponenttransfer>
            </filter>
            <filter
              id='hc_extension_grayscale_back'
              x='0'
              y='0'
              width='99999'
              height='99999'
            >
              <fecomponenttransfer>
                <fefuncr type='gamma' exponent='0.33'></fefuncr>
                <fefuncg type='gamma' exponent='0.33'></fefuncg>
                <fefuncb type='gamma' exponent='0.33'></fefuncb>
              </fecomponenttransfer>
            </filter>
            <filter
              id='hc_extension_invert'
              x='0'
              y='0'
              width='99999'
              height='99999'
            >
              <fecomponenttransfer>
                <fefuncr
                  type='gamma'
                  amplitude='-1'
                  exponent='3'
                  offset='1'
                ></fefuncr>
                <fefuncg
                  type='gamma'
                  amplitude='-1'
                  exponent='3'
                  offset='1'
                ></fefuncg>
                <fefuncb
                  type='gamma'
                  amplitude='-1'
                  exponent='3'
                  offset='1'
                ></fefuncb>
              </fecomponenttransfer>
            </filter>
            <filter
              id='hc_extension_invert_back'
              x='0'
              y='0'
              width='99999'
              height='99999'
            >
              <fecomponenttransfer>
                <fefuncr type='table' tableValues='1 0'></fefuncr>
                <fefuncg type='table' tableValues='1 0'></fefuncg>
                <fefuncb type='table' tableValues='1 0'></fefuncb>
              </fecomponenttransfer>
              <fecomponenttransfer>
                <fefuncr type='gamma' exponent='1.7'></fefuncr>
                <fefuncg type='gamma' exponent='1.7'></fefuncg>
                <fefuncb type='gamma' exponent='1.7'></fefuncb>
              </fecomponenttransfer>
            </filter>
            <filter
              id='hc_extension_yellow_on_black'
              x='0'
              y='0'
              width='99999'
              height='99999'
            >
              <fecomponenttransfer>
                <fefuncr
                  type='gamma'
                  amplitude='-1'
                  exponent='3'
                  offset='1'
                ></fefuncr>
                <fefuncg
                  type='gamma'
                  amplitude='-1'
                  exponent='3'
                  offset='1'
                ></fefuncg>
                <fefuncb
                  type='gamma'
                  amplitude='-1'
                  exponent='3'
                  offset='1'
                ></fefuncb>
              </fecomponenttransfer>
              <fecolormatrix
                type='matrix'
                values='0.3 0.5 0.2 0 0 0.3 0.5 0.2 0 0 0 0 0 0 0 0 0 0 1 0'
              ></fecolormatrix>
            </filter>
            <filter
              id='hc_extension_yellow_on_black_back'
              x='0'
              y='0'
              width='99999'
              height='99999'
            >
              <fecomponenttransfer>
                <fefuncr type='table' tableValues='1 0'></fefuncr>
                <fefuncg type='table' tableValues='1 0'></fefuncg>
                <fefuncb type='table' tableValues='1 0'></fefuncb>
              </fecomponenttransfer>
              <fecomponenttransfer>
                <fefuncr type='gamma' exponent='0.33'></fefuncr>
                <fefuncg type='gamma' exponent='0.33'></fefuncg>
                <fefuncb type='gamma' exponent='0.33'></fefuncb>
              </fecomponenttransfer>
            </filter>
            <filter
              id='hc_extension_red_on_white'
              x='0'
              y='0'
              width='99999'
              height='99999'
              filterUnits='objectBoundingBox'
              primitiveUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <fecolormatrix
                type='matrix'
                values='                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        0 0 0 1 0'
                in='SourceGraphic'
                result='colormatrix'
              ></fecolormatrix>
              <fecomponenttransfer in='colormatrix' result='componentTransfer'>
                <fefuncr type='table' tableValues='0.97 0.52'></fefuncr>
                <fefuncg type='table' tableValues='1 0.03'></fefuncg>
                <fefuncb type='table' tableValues='0.98 0.06'></fefuncb>
                <fefunca type='table' tableValues='0 1'></fefunca>
              </fecomponenttransfer>
              <feblend
                mode='normal'
                in='componentTransfer'
                in2='SourceGraphic'
                result='blend'
              ></feblend>
            </filter>
            <filter
              id='hc_extension_red_on_white_back'
              x='0'
              y='0'
              width='99999'
              height='99999'
            >
              <fecomponenttransfer>
                <fefuncr type='table' tableValues='1 0'></fefuncr>
                <fefuncg type='table' tableValues='0 0'></fefuncg>
                <fefuncb type='table' tableValues='0 0'></fefuncb>
              </fecomponenttransfer>
              <fecomponenttransfer>
                <fefuncr
                  type='gamma'
                  amplitude='-1'
                  exponent='5'
                  offset='1'
                ></fefuncr>
                <fefuncg
                  type='gamma'
                  amplitude='-1'
                  exponent='5'
                  offset='1'
                ></fefuncg>
                <fefuncb
                  type='gamma'
                  amplitude='-1'
                  exponent='5'
                  offset='1'
                ></fefuncb>
              </fecomponenttransfer>
            </filter>
            <filter
              id='hc_extension_green_on_blue'
              x='0'
              y='0'
              width='99999'
              height='99999'
              filterUnits='objectBoundingBox'
              primitiveUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <fecolormatrix
                type='matrix'
                values='.33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0'
                in='SourceGraphic'
                result='colormatrix'
              ></fecolormatrix>
              <fecomponenttransfer in='colormatrix' result='componentTransfer'>
                <fefuncr type='table' tableValues='0.09 0'></fefuncr>
                <fefuncg type='table' tableValues='1 0.16'></fefuncg>
                <fefuncb type='table' tableValues='0 1'></fefuncb>
                <fefunca type='table' tableValues='0 1'></fefunca>
              </fecomponenttransfer>
              <feblend
                mode='normal'
                in='componentTransfer'
                in2='SourceGraphic'
                result='blend'
              ></feblend>
            </filter>
            <filter
              id='hc_extension_green_on_blue_back'
              x='0'
              y='0'
              width='99999'
              height='99999'
            >
              <fecomponenttransfer>
                <fefuncr type='table' tableValues='1 0'></fefuncr>
                <fefuncg type='table' tableValues='0 0'></fefuncg>
                <fefuncb type='table' tableValues='0 0'></fefuncb>
              </fecomponenttransfer>
              <fecomponenttransfer>
                <fefuncr
                  type='gamma'
                  amplitude='-1'
                  exponent='5'
                  offset='1'
                ></fefuncr>
                <fefuncg
                  type='gamma'
                  amplitude='-1'
                  exponent='5'
                  offset='1'
                ></fefuncg>
                <fefuncb
                  type='gamma'
                  amplitude='-1'
                  exponent='5'
                  offset='1'
                ></fefuncb>
              </fecomponenttransfer>
            </filter>
            <filter
              id='hc_extension_yellow_on_blue'
              x='0'
              y='0'
              width='99999'
              height='99999'
              filterUnits='objectBoundingBox'
              primitiveUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <fecolormatrix
                type='matrix'
                values='.33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0'
                in='SourceGraphic'
                result='colormatrix'
              ></fecolormatrix>
              <fecomponenttransfer in='colormatrix' result='componentTransfer'>
                <fefuncr type='table' tableValues='1 0'></fefuncr>
                <fefuncg type='table' tableValues='0.99 0.16'></fefuncg>
                <fefuncb type='table' tableValues='0 1'></fefuncb>
                <fefunca type='table' tableValues='0 1'></fefunca>
              </fecomponenttransfer>
              <feblend
                mode='normal'
                in='componentTransfer'
                in2='SourceGraphic'
                result='blend'
              ></feblend>
            </filter>
            <filter
              id='hc_extension_yellow_on_blue_back'
              x='0'
              y='0'
              width='99999'
              height='99999'
            >
              <fecomponenttransfer>
                <fefuncr type='table' tableValues='1 0'></fefuncr>
                <fefuncg type='table' tableValues='0 0'></fefuncg>
                <fefuncb type='table' tableValues='0 0'></fefuncb>
              </fecomponenttransfer>
              <fecomponenttransfer>
                <fefuncr
                  type='gamma'
                  amplitude='-1'
                  exponent='5'
                  offset='1'
                ></fefuncr>
                <fefuncg
                  type='gamma'
                  amplitude='-1'
                  exponent='5'
                  offset='1'
                ></fefuncg>
                <fefuncb
                  type='gamma'
                  amplitude='-1'
                  exponent='5'
                  offset='1'
                ></fefuncb>
              </fecomponenttransfer>
            </filter>
            <filter
              id='hc_extension_white_on_black'
              x='0'
              y='0'
              width='99999'
              height='99999'
              filterUnits='objectBoundingBox'
              primitiveUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <fecolormatrix
                type='matrix'
                values='.33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0'
                in='SourceGraphic'
                result='colormatrix'
              ></fecolormatrix>
              <fecomponenttransfer in='colormatrix' result='componentTransfer'>
                <fefuncr type='table' tableValues='1 0'></fefuncr>
                <fefuncg type='table' tableValues='1 0'></fefuncg>
                <fefuncb type='table' tableValues='0.98 0'></fefuncb>
                <fefunca type='table' tableValues='0 1'></fefunca>
              </fecomponenttransfer>
              <feblend
                mode='normal'
                in='componentTransfer'
                in2='SourceGraphic'
                result='blend'
              ></feblend>
            </filter>
            <filter
              id='hc_extension_white_on_black_back'
              x='0'
              y='0'
              width='99999'
              height='99999'
            >
              <fecomponenttransfer>
                <fefuncr type='table' tableValues='1 0'></fefuncr>
                <fefuncg type='table' tableValues='0 0'></fefuncg>
                <fefuncb type='table' tableValues='0 0'></fefuncb>
              </fecomponenttransfer>
              <fecomponenttransfer>
                <fefuncr
                  type='gamma'
                  amplitude='-1'
                  exponent='5'
                  offset='1'
                ></fefuncr>
                <fefuncg
                  type='gamma'
                  amplitude='-1'
                  exponent='5'
                  offset='1'
                ></fefuncg>
                <fefuncb
                  type='gamma'
                  amplitude='-1'
                  exponent='5'
                  offset='1'
                ></fefuncb>
              </fecomponenttransfer>
            </filter>
          </defs>
        </svg>
      </span>
    </Fragment>
  )
}
