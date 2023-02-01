'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import './globals.css'
import styles from './layout.module.css'

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if(e.matches){
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

function onExpand(e) {
  console.log(e);
  const navbar = document.getElementById('navbar');
  const menu = document.getElementById('menu');

  if(navbar.style.maxHeight == "100vh"){
    navbar.style.maxHeight = "5vh";
    // navbar.style.flexDirection = "row";
    // menu.style.flexDirection = "row";
    // menu.style.float = "right";
    // menu.style.display = "none";
  } else {
    navbar.style.maxHeight = "100vh";
    // navbar.style.flexDirection = 'column';
    // navbar.style.flexWrap = 'wrap';
    // flex-direction: column;
    // flex-wrap: wrap;
  }
}

export const BarMenu = ({content}) => {
  const isOverflowing = useMediaQuery(625);
  return (
    <>
      <div id="menu" style={{
        'display': isOverflowing ? 'flex' : 'inline-flex',
        'flexDirection': isOverflowing ? 'column' : 'row',
        'flexWrap': isOverflowing ? 'wrap' : 'nowrap',
        'float': 'right',
        'alignItems': 'center',
        'height': '100%',
        'marginLeft': isOverflowing ? 0 : 'auto',
      }}>
        {content}
      </div>
    </>
  );
}

export default function RootLayout({ children }) {
  const isOverflowing = useMediaQuery(625);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div style={{'position': 'relative'}}>
          {children}
          <div id="navbar" className={styles.navbar} style={{
            'display': 'flex',
            'flexDirection': isOverflowing ? 'column' : 'row',
          }}>
            <div style={{
              'display': isOverflowing ? 'flex' : 'inline-flex',
              'float': 'left',
              'padding': '0px 10px',
              'justifyContent': 'center',
            }}>
              <h1 style={{
                'fontFamily': 'ClashDisplay-Semibold',
                'font-size': '20px',
                'height': '5vh',
                'display': 'flex',
                'alignItems': 'center',
              }}>Kelompok Inggris</h1>
              {isOverflowing ? <a href="javascript:void(0);" onClick={onExpand} style={{
                'height': '5vh',
                'alignItems': 'center', 
                'display': 'flex',
                'position': 'absolute',
                'padding': '0px 10px',
                'right': '0%',
              }}>
                <i class="fa fa-bars" style={{
                  'alignItems': 'center'
                }}></i>
              </a> : null}
            </div>
            <BarMenu content={
              <>
              <h1 className={styles.buttonbar}>
                <span className={styles.underline}>
                  About Us
                </span>
              </h1>
              <h1 className={styles.buttonbar}>
                <span className={styles.underline}>
                  Member List
                </span>
              </h1>
              <h1 className={styles.buttonbar}>
                <span className={styles.underline}>
                  Memories
                </span>
              </h1>
              </>
            }/>
          </div>
        </div>
      </body>
    </html>
  )
}
