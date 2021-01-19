import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="application-name"
            content="YouTube thumbnail downloader"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="YouTube thumbnail downloader"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#ce0000" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#ce0000" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          {/* Default seo */}
          <meta charSet="utf-8" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@itsuraj_offical" />
          <meta name="twitter:creator" content="@itsuraj_offical" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:site_name"
            content="ytthumbnaildownloader.itsuraj.com"
          />
          <meta
            property="og:url"
            content="https://ytthumbnaildownloader.itsuraj.com"
          />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
        </Head>
        <body className={"bg-gray-100"}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
