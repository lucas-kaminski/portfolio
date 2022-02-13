import { ThemeContextProvider } from '../context/theme'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
