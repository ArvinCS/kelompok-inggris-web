import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
// import React, { useEffect, useRef } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const videoRef = useRef();

  return (
    <main className={styles.main}>
      <div className={styles.title_section}>
        <video
          autoPlay
          loop
          muted
          className={styles.overlay}
        >
          <source src='/video.mp4' type='video/mp4'/>
        </video>
        <fade className={styles.centered} duration='10000'>
          <p className={styles.titletext}>Kelompok Inggris</p>
          <p className={styles.subtitletext}>Consists of not just anyone, but extraordinary people</p>
        </fade>
      </div>
    </main>
  )
}
