import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import '../styles/globals.css';

const JASWebsite = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default JASWebsite;
