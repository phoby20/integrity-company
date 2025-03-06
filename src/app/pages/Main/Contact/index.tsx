'use client';

import { useState } from 'react';
import styles from '@/src/app/pages/Main/Contact/index.module.scss';
import Button from '@/src/app/ui/atoms/Button';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
  
      const result = await res.json();
  
      if (result.success) {
        alert('メールを送信しました！');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('送信に失敗しました。');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('エラーが発生しました。');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left_wrap}>
        <div className={styles.title}>
          <p>Contact</p>
        </div>
        <div className={styles.title_desc}>
          <h2>お問い合わせフォームからお気軽にお問い合わせください</h2>
        </div>
      </div>
      <div className={styles.right_wrap}>
        <div className={styles.contact_wrap}>
          <div className={styles.contact_title}>お問い合わせフォーム</div>
          <form className={styles.contact_form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.form_wrap}>
              <label className={styles.form_label} htmlFor="name">お名前</label>
              <input
                className={styles.form_input}
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.form_wrap}>
              <label htmlFor="email" className={styles.form_label}>メールアドレス</label>
              <input
                className={styles.form_input}
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.form_wrap}>
              <label htmlFor="message" className={styles.form_label}>お問い合わせ内容</label>
              <textarea
                className={styles.form_input}
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button buttonName="送信" onClick={handleSubmit} type="primary" />
          </form>
        </div>
      </div>
    </div>
  );
}