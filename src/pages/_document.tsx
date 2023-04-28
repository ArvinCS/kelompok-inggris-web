import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Kelompok Inggris</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content='Kelompok Inggris'/>
        <meta property="og:site_name" content='Kelompok Inggris'/>
        <meta property="og:description" content='Consists of not just anyone, but extraordinary people'/>
        <meta property="og:url" content="kelompok-inggris-web.vercel.app"/>
        <meta
          property="og:image"
          content="https://kelompok-inggris-web.vercel.app/images/KPI_LOGO-03.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
