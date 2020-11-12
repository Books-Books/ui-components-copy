import styled from 'styled-components'

export const InputActionStyled = styled.input((props) => {
  return {
    display: 'none'
  }
})

export const LabelStyled = styled.label((props) => {
  const theme = props.theme
  return {
    display: 'flex',
    alignItems: 'center',
    flexDirection: `${props.reverse ? 'row-reverse' : 'row'}`,
    gap: '8px',
    backgroundColor: theme.bgColor,
    width: theme.buttonDefault.minWidth,
    height: theme.buttonDefault.minHeight,
    padding: theme.buttonDefault.padding,
    boxShadow: theme.shadowColor,
    color: theme.colorText,
    fontFamily: 'inherit',
    fontWeight: 'normal',
    margin: theme.buttonDefault.margin,
    border: 'none',
    borderRadius: theme.buttonDefault.borderRadius,
    transition: 'background 0.5s ease',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: theme.hoverBgColor,
      color: theme.hoverTextColor
    }
  }
})

export const SpanStyled = styled.span((props) => {
  return {}
})

export const TextFileName = styled.p((props) => {
  const theme = props.theme
  const bgColor = props.bgColor
  return {
    textAlign: 'center',
    padding: '.5rem',
    backgroundColor: bgColor !== '' ? bgColor : theme.hoverBgColor,
    boxShadow: theme.shadowColor
  }
})
