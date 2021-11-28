import React from "react";
import { Head, Main, NextScript, Html } from "next/document";

const AppDocument = () => (
  <Html lang="en">
    <Head>
      <meta name="theme-color" content="#00d2ff" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <body>
      <Main />
      <NextScript />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </body>
  </Html>
);

export default AppDocument;
