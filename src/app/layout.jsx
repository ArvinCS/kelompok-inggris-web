import './globals.css'
import styles from './layout.module.css'

export default function RootLayout({ children }) {
  console.log(styles.navbar);
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
          <div className={styles.navbar}>
            <h1 style={{
              'font-size': '20px',
              'height': '100%',
              'display': 'flex',
              'alignItems': 'center',
              'padding': '0px 10px',
              'display': 'inline-flex',
            }}>Kelompok Inggris</h1>
            <div style={{
              'display': 'inline-flex',
              'flexDirection': 'row',
              'float': 'right',
              'alignItems': 'center',
              'height': '100%',
            }}>
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
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
