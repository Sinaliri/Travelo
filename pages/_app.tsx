import "primereact/resources/themes/lara-light-indigo/theme.css";         
import "primereact/resources/primereact.min.css";
import "/node_modules/primeflex/primeflex.css"

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
