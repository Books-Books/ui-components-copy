import styled from 'styled-components'

export const InputCont = styled.div((props) => {
  const theme = props.theme
  return {
    height: '56px',
    borderRadius: theme.Input.brField,
    display: 'inline-flex',
    position: 'relative',
    boxSizing: 'border-box',
    overflow: 'hidden',
    willChange: 'opacity,transform,color',
    borderBottom: `1px solid ${theme.Input.colorBrBottom}`,
    backgroundColor: theme.Input.bgfield,
    margin: '10px',
    '&.active': {
      backgroundColor: theme.Input.bgfieldFocus,
      label: {
        transform: 'translateY(-106%) scale(0.75)',
        color: theme.bgColor
      },
      "input[type='text']": {
        borderBottom: `2px solid ${theme.bgColor}`
      }
    }
  }
})

export const InputStyled = styled.input((props) => {
  const theme = props.theme
  return {
    fontFamily: 'inherit',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '0.009375em',
    textDecoration: 'inherit',
    textTransform: 'inherit',
    alignSelf: 'flex-end',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    padding: '20px 16px 6px',
    transition: 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    border: 'none',
    borderBottom: `1px solid ${theme.Input.colorBrBottom}`,
    borderRadius: 0,
    opacity: '0.4',
    background: 'none',
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
    appearance: 'none',
    ':hover': {
      borderBottomColor: theme.bgColor
    },
    ':focus': {
      outline: 'none',
      opacity: 1
    }
  }
})

export const LabelStyle = styled.label((props) => {
  return {
    fontFamily: 'inherit',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
    color: 'rgba(0,0,0,.6)',
    fontSize: '1rem',
    lineHeight: '1.75rem',
    fontWeight: 400,
    letterSpacing: '0.009375em',
    textDecoration: 'inherit',
    textTransform: 'inherit',
    position: 'absolute',
    transformOrigin: 'left top',
    transition:
      'transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    cursor: 'text',
    overflow: 'hidden',
    willChange: 'transform',

    left: '16px',
    right: 'initial',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none'
  }
})
