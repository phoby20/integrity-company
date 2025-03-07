'use client'

import styles from '@/src/app/ui/organisms/Footer/index.module.scss'
import { Boogaloo } from 'next/font/google'

const boogaloo = Boogaloo({
  weight: '400',
  subsets: ['latin'],
})

export default function Footer() {
  const logoText = 'integrity'.toUpperCase()
  return (
    <footer className={styles.container}>
      <div className={`${styles.logo} ${boogaloo.className}`}>{logoText}</div>
      <div className={styles.description}>
        <p>〒174-0072 東京都板橋区南常盤台1-11-6 レフア南常盤台101号室</p>
        <p>
          <small className="block">© 2025 Integrity,. All Rights Reserved.</small>
        </p>
      </div>
    </footer>
  )
}