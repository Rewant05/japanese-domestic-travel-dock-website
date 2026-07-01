import React from 'react';
import { siteData } from '../config/siteData';
import { FloatingWindow } from '../components/FloatingWindow';
import { ResponsiveImage } from '../components/ResponsiveImage';

export const Destinations: React.FC = () => {
  return (
    <div className="container">
      <header className="page-header animate-fade-up">
        <h1>旅先ガイド</h1>
        <p>Destinations</p>
      </header>
      
      <section className="section-padding pt-0 animate-fade-up delay-1">
        <div className="grid-3">
          {siteData.destinations.map((dest) => (
            <FloatingWindow key={dest.id} title={dest.region}>
              {dest.imageUrl && (
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <ResponsiveImage
                    src={dest.imageUrl}
                    alt={dest.name}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              )}
              <div className="card-content">
                <span className="tag">{dest.bestSeason}の旅</span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{dest.name}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-glass-border)', paddingBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>旅のムード</span>
                    <strong>{dest.travelMood}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-glass-border)', paddingBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>ご当地グルメ</span>
                    <strong>{dest.localFood}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-glass-border)', paddingBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>滞在目安</span>
                    <strong>{dest.stayDuration}</strong>
                  </div>
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                  {dest.description}
                </p>
                <button className="btn btn-secondary" style={{ width: '100%' }}>詳細を見る</button>
              </div>
            </FloatingWindow>
          ))}
        </div>
      </section>
    </div>
  );
};
