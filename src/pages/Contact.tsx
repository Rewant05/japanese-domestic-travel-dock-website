import React from 'react';
import { siteData } from '../config/siteData';
import { Link } from '../routing';

export const Contact: React.FC = () => {
  return (
    <div className="container">
      <header className="page-header animate-fade-up">
        <h1>お問い合わせ</h1>
        <p>Contact Us</p>
      </header>

      <section className="section-padding pt-0 animate-fade-up delay-1" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="grid-2" style={{ gap: '3rem' }}>
          
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>ご連絡先</h2>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>運営</strong>
                <p style={{ margin: 0 }}>{siteData.editor}</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>所在地</strong>
                <p style={{ margin: 0 }}>{siteData.address}</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>メール</strong>
                <p style={{ margin: 0 }}><a href={`mailto:${siteData.email}`}>{siteData.email}</a></p>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>営業時間</strong>
                <p style={{ margin: 0 }}>{siteData.businessHours}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>お問い合わせフォーム</h2>
            <form className="glass-panel" style={{ padding: '2rem' }} onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">お名前</label>
                <input type="text" id="name" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">メールアドレス</label>
                <input type="email" id="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="type" className="form-label">お問い合わせ種別</label>
                <select id="type" className="form-control" required>
                  <option value="">選択してください</option>
                  <option value="info">旅先情報について</option>
                  <option value="media">掲載・取材について</option>
                  <option value="collab">コラボレーションについて</option>
                  <option value="ad">広告・メディアについて</option>
                  <option value="other">その他</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">メッセージ</label>
                <textarea id="message" className="form-control" required></textarea>
              </div>
              
              <div style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                送信することにより、<Link to="/privacy-policy" style={{ textDecoration: 'underline' }}>プライバシーポリシー</Link>に同意したものとみなされます。
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>送信する</button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};
