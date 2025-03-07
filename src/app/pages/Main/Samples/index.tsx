'use client';
import styles from '@/src/app/pages/Main/Samples/index.module.scss';
import Image from 'next/image';
import sample1 from '@/public/imgs/home/01.png';
import heartter from '@/public/imgs/home/heartter.png';
import donorJudgment from '@/public/imgs/home/donor_judgment.png';
import Link from 'next/link';
import Button from '@/src/app/ui/atoms/Button';

export default function Samples() {
  const handleClickDetail = () => {
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Template</p>
        <div className={styles.desc}>
          <p>制作を依頼したいテンプレートを選んで問い合わせてください</p>
        </div>
      </div>

      <div className={styles.template_wrap}>
        <Link href="/sample/01" className={styles.template_item} target="_blank">
          <Image src={sample1} alt="sample1" />
          <div className={styles.overlay}></div>
          <p className={styles.template_name}>01. 紹介サイト</p>
          <Button buttonName='詳細を見る' onClick={handleClickDetail} type='tertiary' />
        </Link>
        <Link href="https://www.heartter.com/" className={styles.template_item} target="_blank">
          <Image src={heartter} alt="sample2" />
          <div className={styles.overlay}></div>
          <p className={styles.template_name}>02. SNS</p>
          <Button buttonName='詳細を見る' onClick={handleClickDetail} type='tertiary' />
        </Link>
        <Link href="https://www.jmdp.or.jp/donor_judgment/" className={styles.template_item} target="_blank">
          <Image src={donorJudgment} alt="sample3" />
          <div className={styles.overlay}></div>
          <p className={styles.template_name}>03. 検索システム</p>
          <Button buttonName='詳細を見る' onClick={handleClickDetail} type='tertiary' />
        </Link>
      </div>
    </div>
  )
}