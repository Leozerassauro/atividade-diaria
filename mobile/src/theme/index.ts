import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  colors: {
    green: {
      700: '#008943',
      500: '#00E36E',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6',
    },
    white: '#FFFFFF',
    red: {
      500: '#F75A68',
    },
    yellow: {
      500: '#F7F15A',
    },
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
    text: 'Roboto_300Light',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },
})
