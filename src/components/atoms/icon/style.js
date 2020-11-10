import styled from 'styled-components'

export const IconStyled = styled.svg((props) => {
  const theme = props.theme
  return {
    fill: theme.colorText,
    transition: 'fill 0.5s ease',
    width: '20px',
    height: '20px'
  }
})
