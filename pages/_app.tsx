import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  //if production no console
    if (process.env.NODE_ENV === 'production') {
      console.log = () => {}
      console.error = () => {}
      console.warn = () => {}
    }
  return <Component {...pageProps} />
}

export default MyApp
