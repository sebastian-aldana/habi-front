import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "_store_";

const GlobalStyles = () => (
  <style global jsx>
    {`
      body {
        margin: 0;
      }
    `}
  </style>
);

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Habi</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
          <GlobalStyles />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
