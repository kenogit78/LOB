// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

import '../styles/globals.css'
import Page from '../components/Page.jsx'

//Import redux provider and store
import {Provider} from 'react-redux' 
import store from './../store';

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <NextUIProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </NextUIProvider>
      </Provider>

  )
}

export default MyApp
