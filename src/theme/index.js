import { buttonDefault } from './components/button'
import { Input } from './components/input'

const shareStyles = {
  buttonDefault,
  Input
}

export const GlobalThemes = {
  primary: {
    bgColor: 'var(--primaryColor)',
    shadowColor: '0px 0px 5px var(--primaryDarkColor)',
    colorText: 'var(--primaryTextColor)',
    hoverBgColor: 'var(--primaryLightColor)',
    hoverTextColor: 'var(--primaryDarkColor)',
    ...shareStyles
  },
  secondary: {
    bgColor: 'var(--secondaryColor)',
    shadowColor: '0px 0px 5px var(--secondaryDarkColor)',
    colorText: 'var(--secondaryTextColor)',
    hoverBgColor: 'var(--secondaryLightColor)',
    hoverTextColor: 'var(--secondaryDarkColor)',
    ...shareStyles
  }
}
