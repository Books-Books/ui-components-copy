import styled from 'styled-components'

export const InputStyled = styled.input((props) => {
  return {
    position: 'absolute',
    margin: 0,
    padding: 0,
    opacity: 0,
    cursor: 'inherit'
  }
})

export const InputCont = styled.label((props) => {
  const styles = {
    fontFamuly: 'inherit',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 400,
    letterSpacing: '0.0178571429em',
    textDecoration: 'inherit',
    textTransform: 'inherit',
    color: 'rgba(0,0,0,.87)',
    display: 'inline-flex',
    alignItems: 'center',
    verticalAlign: 'middle'
  }
  return styles
})

export const CheckCont = styled.div((props) => {
  const inputMode = props.inputMode
  const styles = {
    display: 'inline-block',
    position: 'relative',
    flex: '0 0 18px',
    boxSizing: 'content-box',
    width: '30px',
    height: '18px',
    lineHeight: '0',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    verticalAlign: 'bottom',
    padding: '11px'
  }
  if (inputMode === 'radio') {
    const radioStyles = {
      padding: '10px',
      position: 'relative',
      flex: '0 0 auto',
      boxSizing: 'content-box',
      width: '20px',
      height: '20px',
      cursor: 'pointer',
      willChange: 'opacity,transform,border-color,color'
    }
    Object.assign(styles, radioStyles)
  }

  return styles
})

export const CheckLabel = styled.span((props) => {
  return {
    marginLeft: 0,
    marginRight: 'auto',
    paddingLeft: '4px',
    paddingRight: 0,
    order: 0
  }
})

export const CheckBg = styled.div((props) => {
  const inputMode = props.inputMode
  const theme = props.theme
  const styles = {
    display: 'inline-flex',
    position: 'absolute',
    top: '11px',
    left: '11px',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    width: '18px',
    height: '18px',
    border: '2px solid currentColor',
    borderRadius: '2px',
    backgroundColor: 'transparent',
    pointerEvents: 'none',
    willChange: 'background-color,border-color',
    transition:
      'background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)',
    '& > i': {
      opacity: 0,
      transition:
        ' opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1)'
    },
    [`${InputStyled}:not(:checked):not(:indeterminate)~ &`]: {
      borderColor: '#757575',
      backgroundColor: 'transparent'
    },
    [`${InputStyled}:checked~ &`]: {
      borderColor: theme.bgColor,
      backgroundColor: theme.bgColor,
      '& > i': {
        opacity: 1
      }
    }
  }
  if (inputMode === 'radio') {
    const radioStyles = {
      position: 'absolute',
      boxSizing: 'border-box',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '50%'
    }
    Object.assign(styles, radioStyles)
  }
  if (inputMode === 'toggle') {
    const radioStyles = {
      boxShadow:
        '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,.12)',
      boxSizing: 'border-box',
      width: '20px',
      height: '20px',
      border: '10px solid',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: '1',
      backgroundColor: '#6200ee',
      borderColor: '#6200ee',
      padding: 0,
      display: 'flex',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'translateX(0)',
      top: '7px',
      left: '6px',
      transition:
        'transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)',
      [`${InputStyled}[inputMode='toggle']:checked ~ &`]: {
        transform: 'translateX(20px)'
      }
    }
    Object.assign(styles, radioStyles)
  }
  return styles
})

export const CheckTrack = styled.div((props) => {
  return {
    boxSizing: 'border-box',
    width: '32px',
    height: '14px',
    border: '1px solid',
    borderRadius: '7px',
    opacity: '.54',
    backgroundColor: '#6200ee',
    borderColor: '#6200ee',
    transition:
      'opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)'
  }
})
