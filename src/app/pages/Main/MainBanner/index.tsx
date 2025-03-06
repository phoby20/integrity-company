'use client';
import styles from '@/src/app/pages/Main/MainBanner/index.module.scss'
import Image from "next/image";
import homeBackground from "@/public/imgs/home/home-background.jpg";
import Button from '@/src/app/ui/atoms/Button';

export default function MainBanner() {
  const handleClick = () => {
    window.scrollTo(document.body.scrollWidth, document.body.scrollHeight);
  }
  return (
    <div className={styles.container}>
      <Image src={homeBackground} alt="Home Background" style={{ width: '100%', height: 'auto' }}/>
      <div className={styles.banner_title}>
        <h1>独自のサイトを制作するなら</h1>
        <h1>Integrity</h1>
        <div className={styles.request_button}>
          <Button buttonName="今依頼する" onClick={handleClick} type='tertiary' />
        </div>
      </div>
    </div>
  )
}