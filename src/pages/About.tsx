import React from 'react';
import { siteData } from '../config/siteData';

export const About: React.FC = () => {
  return (
    <div className="container">
      <header className="page-header animate-fade-up">
        <h1>私たちについて</h1>
        <p>About {siteData.name}</p>
      </header>
      <section className="section-padding" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="glass-panel" style={{ padding: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>編集部の思い</h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
            {siteData.about.purpose}
          </p>
          <div className="grid-2" style={{ marginTop: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)' }}>国内旅行に特化</h3>
              <p>{siteData.about.focus}</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)' }}>初心者にも優しく</h3>
              <p>{siteData.about.beginnerFriendly}</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)' }}>地域文化の尊重</h3>
              <p>{siteData.about.respect}</p>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(255,189,46,0.1)', borderLeft: '4px solid #ffbd2e', borderRadius: '4px' }}>
            <h4 style={{ marginBottom: '0.5rem', color: '#b45309' }}>【重要なお知らせ】</h4>
            <p style={{ fontSize: '0.9rem', color: '#b45309', margin: 0 }}>
              {siteData.about.disclaimer}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
