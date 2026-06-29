import React from 'react';
import { siteData } from '../config/siteData';

export const Itineraries: React.FC = () => {
  return (
    <div className="container">
      <header className="page-header animate-fade-up">
        <h1>モデルコース</h1>
        <p>Itineraries</p>
      </header>

      <section className="section-padding pt-0 animate-fade-up delay-1">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {siteData.itineraries.map((itinerary) => (
            <div key={itinerary.id} className="glass-panel" style={{ overflow: 'hidden' }}>
              <div style={{ position: 'relative', padding: '3rem 2rem', borderBottom: '1px solid var(--color-glass-border)' }}>
                {itinerary.imageUrl && (
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: `url(${itinerary.imageUrl})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    opacity: 0.3, zIndex: 0
                  }} />
                )}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="tag" style={{ margin: 0, background: 'var(--color-accent-purple)', color: '#fff', border: 'none' }}>{itinerary.duration}</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-main)' }}>目安予算: {itinerary.budget}</span>
                  </div>
                  <h2 style={{ margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{itinerary.title}</h2>
                  <p style={{ marginTop: '1rem', color: 'var(--color-text-main)', fontSize: '1.1rem', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>{itinerary.routeSummary}</p>
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <div className="grid-3" style={{ marginBottom: '2rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-glass-border)' }}>
                    <h4 style={{ color: '#38bdf8', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8' }}></span>
                      午前
                    </h4>
                    <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--color-text-muted)' }}>{itinerary.morning}</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-glass-border)' }}>
                    <h4 style={{ color: '#fbbf24', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fbbf24' }}></span>
                      午後
                    </h4>
                    <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--color-text-muted)' }}>{itinerary.afternoon}</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-glass-border)' }}>
                    <h4 style={{ color: '#818cf8', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#818cf8' }}></span>
                      夕方〜夜
                    </h4>
                    <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--color-text-muted)' }}>{itinerary.evening}</p>
                  </div>
                </div>
                <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1rem', borderLeft: '3px solid var(--color-accent-purple)', borderRadius: '0 4px 4px 0' }}>
                  <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem', color: 'var(--color-accent-purple)' }}>💡 旅のヒント</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-main)' }}>{itinerary.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
