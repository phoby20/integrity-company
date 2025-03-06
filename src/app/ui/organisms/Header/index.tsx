'use client'

import styles from '@/src/app/ui/organisms/Header/page.module.scss'
import { Boogaloo } from 'next/font/google'

const boogaloo = Boogaloo({
  weight: '400',
  subsets: ['latin'],
})

export default function Header() {
  const logoText = 'integrity'.toUpperCase()

  return (
    <header className={styles.container}>
      <div className={`${styles.logo} ${boogaloo.className}`}>{logoText}</div>
    </header>
  )
}
