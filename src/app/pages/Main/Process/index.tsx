'use client';
import styles from '@/src/app/pages/Main/Process/index.module.scss';
import Image from "next/image";
import inquiry from "@/public/imgs/home/inquiry.png";
import meeting from '@/public/imgs/home/meeting.png'
import proposal from '@/public/imgs/home/proposal.png'
import production from '@/public/imgs/home/production.png'
import delivery from '@/public/imgs/home/delivery.png'

export default function Process() {
  const imageWidth = 500;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Process</p>
        <div className={styles.process_desc}>
          <p>制作の流れをご紹介します</p>
        </div>
      </div>
      
      <div className={styles.process_wrap}>
        <div className={styles.process_list}>
          <div className={styles.process_item}>
            <Image src={inquiry} alt="inquiry" width={imageWidth} />
            <div className={styles.process_item_title}>1. お問い合わせ</div>
            <div className={styles.process_item_desc}>
              <p>お問い合わせフォームから制作依頼またはお問い合わせください</p>
              <p>後日こちらからメールにてオンライン上のご相談のためのご連絡をします</p>
            </div>
          </div>
          <div className={styles.process_item}>
            <Image src={meeting} alt="meeting" width={imageWidth} />
            <div className={styles.process_item_title}>2. お打ち合わせ</div>
            <div className={styles.process_item_desc}>
              <p>サイト制作のお打ち合わせを行います</p>
              <p>見積もり作成のため、お客様の詳しい要望をヒアリングします</p>
            </div>
          </div>
          <div className={styles.process_item}>
            <Image src={proposal} alt="proposal" width={imageWidth} />
            <div className={styles.process_item_title}>3. 提案/契約</div>
            <div className={styles.process_item_desc}>
              <p>こちらからお送りします見積もりをもって契約を行います</p>
            </div>
          </div>
          <div className={styles.process_item}>
            <Image src={production} alt="production" width={imageWidth} />
            <div className={styles.process_item_title}>4. 制作</div>
            <div className={styles.process_item_desc}>
              <p>仕様に沿って制作を行います</p>
              <p>なお、制作の過程には複数回打ち合わせを行う場合があります</p>
            </div>
          </div>
          <div className={styles.process_item}>
            <Image src={delivery} alt="delivery" width={imageWidth} />
            <div className={styles.process_item_title}>5. 納品</div>
            <div className={styles.process_item_desc}>
              <p>制作した結果物を納品します</p>
              <p>納品の方法は打ち合わせの際にご相談ください</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}