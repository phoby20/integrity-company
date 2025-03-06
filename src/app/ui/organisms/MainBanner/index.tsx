import styles from '@/src/app/ui/organisms/MainBanner/page.module.scss'
import Image from "next/image";
import homeBackground from "@/public/imgs/home/home-background.jpg";

export default function MainBanner() {
  return (
    <div className={styles.container}>
      <Image src={homeBackground} alt="Home Background" />
      <div className={styles.banner_title}>
        <h1>MainBanners</h1>
      </div>
    </div>
  )
}