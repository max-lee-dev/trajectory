// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ 
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
    global: `'Coiny', sans-serif`,
  },
  // colors: {
  //   custom: {
  //     2: "#360503ff",
  //   },
  // },

  config,
  styles: {
    global: {
      body: {
        // bg: theme.config.initialColorMode === 'dark' ? 'black' : 'white',
        // color: theme.config.initialColorMode === 'dark' ? 'white' : 'black',
      },
    },
  },
})


export default theme