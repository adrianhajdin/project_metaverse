import Head from 'next/head';
import { createTheme, NextUIProvider } from '@nextui-org/react';

import '../styles/globals.css';

const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#B89F1B',
    },
  },
});

const MyApp = ({ Component, pageProps }) => (

  <>
    <Head>
      <title>PsyDTrader</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  </>
);

export default MyApp;
