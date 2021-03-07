import { DefaultTheme } from 'styled-components'
import { createSpacing } from 'spacing-helper'

const spacing = createSpacing({ factor: 5 })

const primary: DefaultTheme = {
  colors: {
    primary: '#D33257',
    secondary: '#FFF',
    tertiary: '#2C82C9',
  },

  spaces: {
    sm: spacing(1), //5px
    md: spacing(3), //15px
    lg: spacing(6), //30px
  },

  borders: {
    sm: '2px',
    lg: '4px',
  },

  transitions: {
    regular: '0.2s ease-in',
  },

  typo: {
    primary: {
      family: 'sans-serif',
      weight: {
        normal: 300,
        bold: 800,
      },
      sizes: {
        sm: '12px',
        md: '14px',
        lg: '16px',
      },
    },
  },

  buttons: {
    primary: {
      text: '#FFF',
      bg: '#71BA51',
    },
  },
}

export { primary }
