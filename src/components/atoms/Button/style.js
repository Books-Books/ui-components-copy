import styled from 'styled-components'

export const ButtonStyled = styled.button((props) => {
  const theme = props.theme
  return {
    display: 'flex',
    alignItems: 'center',
    flexDirection: `${props.reverse ? 'row-reverse' : 'row'}`,
    gap: '8px',
    backgroundColor: theme.bgColor,
    minWidth: theme.buttonDefault.minWidth,
    minHeight: theme.buttonDefault.minHeight,
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
