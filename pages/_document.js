/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
// /pages/_document.js
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=PT+Sans:300,400,700,800"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@300;400;500;600;700;800;900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Raleway:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Join the UBA Africa Day 2023 Conversations With Leading African Leaders. Reserve Your Spot. Register for Free Online."
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/UBA-Favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/UBA-Favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/UBA-Favicon.png"
          />
          <script src="/js/google-tag-manager.js"></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-TCDDJ28HRH"
          ></script>
          <script async src="/js/gtag"></script>
        </Head>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTNWNLN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
            integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
            integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
            crossOrigin="anonymous"
          ></script>
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </body>
      </Html>
    );
  }
}
export default MyDocument;
