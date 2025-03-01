import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Zenith Astro Club"
          />
          <meta property="og:site_name" content="https://zenith-gallery.vercel.app" />
          <meta
            property="og:description"
            content="Zenith Astro Club"
          />
          <meta property="og:title" content="Zenith Astro Club" />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
