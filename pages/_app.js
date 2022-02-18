// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

import '../styles/globals.scss'
import Page from '../components/Page.jsx'

function MyApp({ Component, pageProps }) {
  return (
      <NextUIProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </NextUIProvider>

  )
}

export default MyApp
