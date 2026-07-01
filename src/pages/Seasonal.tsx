import React from 'react';
import { siteData } from '../config/siteData';
import { FloatingWindow } from '../components/FloatingWindow';

export const Seasonal: React.FC = () => {
  return (
    <div className="container">
      <header className="page-header animate-fade-up">
        <h1>季節の旅</h1>
        <p>Seasonal Travel</p>
      </header>

      <section className="section-padding pt-0 animate-fade-up delay-1">
        <div className="grid-2">
          {siteData.seasons.map((season) => (
            <FloatingWindow key={season.id} title={season.name} backgroundImageUrl={season.imageUrl}>
              <div className="card-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{season.name}</h2>
                <p style={{ color: 'var(--color-accent-purple)', fontWeight: 600, marginBottom: '1.5rem', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>{season.mood}</p>
                
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-glass-border)' }}>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>おすすめエリア</strong>
                    <span>{season.regions.join(' / ')}</span>
                  </div>
                  
                  <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-glass-border)' }}>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>旬の味覚</strong>
                    <span>{season.localFood}</span>
                  </div>
                  
                  <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-glass-border)' }}>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>パッキングのヒント</strong>
                    <span style={{ fontSize: '0.9rem' }}>{season.packingTip}</span>
                  </div>
                  
                  <div style={{ background: 'rgba(2, 132, 199, 0.2)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(2, 132, 199, 0.4)' }}>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: '#38bdf8', marginBottom: '0.25rem' }}>撮影テクニック 📷</strong>
                    <span style={{ fontSize: '0.9rem', color: '#bae6fd' }}>{season.photoTip}</span>
                  </div>
                  
                  <div style={{ background: 'rgba(225, 29, 72, 0.2)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(225, 29, 72, 0.4)' }}>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: '#fb7185', marginBottom: '0.25rem' }}>ご注意事項 ⚠️</strong>
                    <span style={{ fontSize: '0.9rem', color: '#fecdd3' }}>{season.caution}</span>
                  </div>
                </div>
              </div>
            </FloatingWindow>
          ))}
        </div>
      </section>
    </div>
  );
};
