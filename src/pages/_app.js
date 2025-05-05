// _app.js
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
          <Head>
            <title>NewsNow – Stay Informed. Stay Ahead.</title>
          </Head>
          <Component {...pageProps} />
        </>
      );
}

export default MyApp;
