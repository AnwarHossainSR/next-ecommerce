/* eslint-disable @next/next/no-sync-scripts */
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='description'
            content='Dev AT E-commerce website with Next.js'
          />
          <link
            href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css'
            rel='stylesheet'
          />
          <script src='https://kit.fontawesome.com/a076d05399.js'></script>
          {/* <script
            src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`}
          ></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
