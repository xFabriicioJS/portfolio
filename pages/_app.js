import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme';

import '@fontsource/poppins'



function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={theme}>  
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
