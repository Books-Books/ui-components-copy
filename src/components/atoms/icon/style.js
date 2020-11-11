import styled from 'styled-components'

export const IconStyled = styled.i((props) => {
  return {
    color: props.theme.colorText,
    fontFamily: 'Material Icons',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: '15px',
    lineHeight: 1,
    letterSpacing: 'normal',
    textTransform: 'none',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
    direction: 'ltr',
    '-webkit-font-feature-settings': 'liga',
    '-webkit-font-smoothing': 'antialiased'
  }
})
