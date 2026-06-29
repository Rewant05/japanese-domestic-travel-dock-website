import React from 'react';
import { siteData } from '../config/siteData';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container">
      <header className="page-header animate-fade-up">
        <h1>プライバシーポリシー</h1>
        <p>Privacy Policy</p>
      </header>

      <section className="section-padding pt-0 animate-fade-up delay-1" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="glass-panel" style={{ padding: '3rem' }}>
          <p style={{ marginBottom: '2rem' }}>
            {siteData.name}（以下、「当サイト」とします。）は、本ウェブサイト上で提供するサービスにおける、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」とします。）を定めます。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {siteData.privacyPolicy.map((section, index) => (
              <div key={index}>
                <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                  {index + 1}. {section.title}
                </h2>
                <p style={{ lineHeight: '1.8' }}>{section.content}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eee', textAlign: 'right', color: 'var(--color-text-muted)' }}>
            制定日：2023年4月1日<br />
            最終改定日：2023年10月1日<br />
            {siteData.editor}
          </div>
        </div>
      </section>
    </div>
  );
};
