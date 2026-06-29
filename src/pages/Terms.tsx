import React from 'react';
import { siteData } from '../config/siteData';

export const Terms: React.FC = () => {
  return (
    <div className="container">
      <header className="page-header animate-fade-up">
        <h1>利用規約</h1>
        <p>Terms and Conditions</p>
      </header>

      <section className="section-padding pt-0 animate-fade-up delay-1" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="glass-panel" style={{ padding: '3rem' }}>
          <p style={{ marginBottom: '2rem' }}>
            この利用規約（以下、「本規約」といいます。）は、{siteData.editor}（以下、「当方」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {siteData.terms.map((section, index) => (
              <div key={index}>
                <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                  第{index + 1}条（{section.title}）
                </h2>
                <p style={{ lineHeight: '1.8' }}>{section.content}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#fff1f2', borderRadius: '4px', borderLeft: '4px solid #e11d48' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#be123c', marginBottom: '0.5rem' }}>旅行情報に関する免責事項</h3>
            <p style={{ fontSize: '0.95rem', color: '#be123c', margin: 0 }}>
              {siteData.disclaimer}
            </p>
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eee', textAlign: 'right', color: 'var(--color-text-muted)' }}>
            制定日：2023年4月1日<br />
            {siteData.editor}
          </div>
        </div>
      </section>
    </div>
  );
};
