// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

import '../styles/globals.scss';
import Page from '../components/Page.jsx';

//Import redux provider and store
import { Provider } from 'react-redux';
import { store, wrapper } from './../store';
import { createWrapper } from 'next-redux-wrapper';

// function MyApp({ Component, pageProps }) {
//   return (
//     // <Provider store={store}>
//     <NextUIProvider>
//       <Page>
//         <Component {...pageProps} />
//       </Page>
//     </NextUIProvider>
//     // </Provider>
//   );
// }

// export default wrapper.withRedux(MyApp);

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default MyApp;

// import { wrapper } from './../store';
// import Page from '../components/Page.jsx';

// const App = ({ Component, pageProps }) => {
//   return (
//     <Page>
//       <Component {...pageProps} />
//     </Page>
//   );
// };

// export default wrapper.withRedux(App);
