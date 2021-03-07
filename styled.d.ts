import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      tertiary: string
    }

    spaces: {
      sm: string
      md: string
      lg: string
    }

    borders: {
      sm: string
      lg: string
    }

    transitions: {
      regular: string
    }

    typo: {
      primary: {
        family: string
        weight: {
          normal: number
          bold: number
        }
        sizes: {
          sm: string
          md: string
          lg: string
        }
      }
    }

    buttons: {
      primary: {
        text: string
        bg: string
      }
    }
  }
}
