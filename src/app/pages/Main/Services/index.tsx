import styles from '@/src/app/pages/Main/Services/page.module.scss';
import { FileCheck2, Cog } from 'lucide-react';

export default function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.left_wrap}>
        <div className={styles.title}>
          <p>Service</p>
        </div>
        <div className={styles.title_desc}>
          <h2>ホームページの制作依頼は事前に用意されたサンプルを選ぶだけです</h2>
          <h2>もちろんお客様からすでにデザインされたものを依頼することも可能です</h2>
        </div>
      </div>
      <div className={styles.right_wrap}>
        <div className={styles.service_wrap}>
          <FileCheck2 color={`gray`}/>
          <div className={styles.service_title}>静的サイトの制作</div>
          <div className={styles.service_desc}>サンプルのテンプレートから好きなテンプレートを選択してカスタム制作を行います</div>
        </div>
        <div className={styles.service_wrap}>
          <Cog color={`gray`} />
          <div className={styles.service_title}>オーダーメイドサイトの制作</div>
          <div className={styles.service_desc}>お客様から事前にデザインしたWebサイトの画面設計を元にサイトの制作を行います</div>
        </div>
      </div>
    </div>
  );
}