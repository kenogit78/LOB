// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

import '../styles/globals.scss';
import Page from '../components/Page.jsx';

//Import redux provider and store
import { Provider } from 'react-redux';
import { store, wrapper } from './../store';
import { createWrapper } from 'next-redux-wrapper';

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <NextUIProvider>
        {/* <Page> */}
        <Component {...props.pageProps} />
        {/* </Page> */}
      </NextUIProvider>
    </Provider>
  );
};

export default MyApp;
