import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return <>
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
    <Component {...pageProps} />
    <ToastContainer newestOnTop/>
  </>
}
