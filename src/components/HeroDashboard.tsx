import React from 'react';
import { FloatingWindow } from './FloatingWindow';
import { siteData } from '../config/siteData';
import { Link } from '../routing';

export const HeroDashboard: React.FC = () => {
  return (
    <section className="dashboard-hero bg-map-texture">
      <div className="hero-dashboard-grid">
        
        {/* Main Center Window (2x2) */}
        <FloatingWindow 
          title="Overview" 
          className="animate-fade-up hero-main-widget"
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <div className="card-content" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <h1 className="gradient-text" style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>{siteData.tagline}</h1>
            <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', color: '#CBD5E1' }}>{siteData.description}</p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/destinations" className="btn btn-primary">旅先を探す</Link>
              <Link to="/itineraries" className="btn btn-secondary">モデルコースを見る</Link>
            </div>
          </div>
        </FloatingWindow>

        {/* Top Right 1 (1x1) */}
        <FloatingWindow 
          title="Trending"
          className="animate-fade-up delay-1 hero-side-widget"
          style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(217, 70, 239, 0.05))' }}
        >
          <div className="card-content" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#F472B6' }}>
              <span className="hero-mini-icon" aria-hidden="true" />
              <strong style={{ fontSize: '1.05rem', color: '#fff' }}>今週の人気急上昇</strong>
            </div>
            <p style={{ fontSize: '0.9rem', margin: 0, color: '#E2E8F0', lineHeight: 1.6 }}>秋の京都・嵐山エリアが注目を集めています。</p>
          </div>
        </FloatingWindow>

        {/* Top Right 2 (1x1) */}
        <FloatingWindow 
          title="Weather & Tips"
          className="animate-fade-up delay-2 hero-side-widget"
          backgroundImageUrl={siteData.seasons[2].imageUrl}
        >
          <div className="card-content" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#FCD34D' }}>
              <span className="hero-mini-icon" aria-hidden="true" />
              <strong style={{ fontSize: '1.05rem', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>秋の撮影ヒント</strong>
            </div>
            <p style={{ fontSize: '0.9rem', margin: 0, color: '#F1F5F9', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>逆光で紅葉を透かして撮ると美しく写ります。</p>
          </div>
        </FloatingWindow>

        {/* Bottom Right 1 (1x1) */}
        <FloatingWindow 
          title="Weekend Trip"
          className="animate-fade-up delay-3 hero-side-widget"
          backgroundImageUrl={siteData.itineraries[0].imageUrl}
        >
          <div className="card-content" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#fff' }}>
              <span className="hero-mini-icon" style={{ color: 'var(--color-accent-magenta)' }} aria-hidden="true" />
              <strong style={{ fontSize: '1.05rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>週末モデルコース</strong>
            </div>
            <p style={{ fontSize: '0.9rem', margin: 0, color: '#F1F5F9', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>京都で過ごす静かな一泊二日</p>
          </div>
        </FloatingWindow>

        {/* Bottom Right 2 (1x1) */}
        <FloatingWindow 
          title="Local Food"
          className="animate-fade-up delay-1 hero-side-widget"
          backgroundImageUrl={siteData.destinations[2].imageUrl}
        >
          <div className="card-content" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#34D399' }}>
              <span className="hero-mini-icon" aria-hidden="true" />
              <strong style={{ fontSize: '1.05rem', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>金沢の美食</strong>
            </div>
            <p style={{ fontSize: '0.9rem', margin: 0, color: '#F1F5F9', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>海鮮丼と金沢おでんは冬が特におすすめ。</p>
          </div>
        </FloatingWindow>

        {/* Bottom Row: Updates (2 wide) */}
        <FloatingWindow 
          title="Updates"
          className="animate-fade-up delay-2 hero-bottom-wide"
          style={{ background: 'rgba(30, 41, 59, 0.7)' }}
        >
          <div className="card-content" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '16px', height: '100%' }}>
            <span className="hero-mini-icon hero-mini-icon-large" style={{ color: '#60A5FA' }} aria-hidden="true" />
            <div>
              <strong style={{ display: 'block', fontSize: '1rem', color: '#fff', marginBottom: '4px' }}>新着記事</strong>
              <span style={{ fontSize: '0.9rem', color: '#94A3B8' }}>2023年の紅葉予想カレンダーを公開しました</span>
            </div>
          </div>
        </FloatingWindow>

        {/* Bottom Row: Passes (1 small) */}
        <FloatingWindow 
          title="Passes"
          className="animate-fade-up delay-3 hero-bottom-small"
          style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(52, 211, 153, 0.05))' }}
        >
          <div className="card-content" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#34D399' }}>
              <span className="hero-mini-icon hero-mini-icon-small" aria-hidden="true" />
              <strong style={{ fontSize: '0.95rem', color: '#fff' }}>移動のヒント</strong>
            </div>
            <p style={{ fontSize: '0.85rem', margin: 0, color: '#E2E8F0' }}>地域ごとのフリーパスを活用しましょ</p>
          </div>
        </FloatingWindow>

        {/* Bottom Row: Cafe Culture (1 small) */}
        <FloatingWindow 
          title="Cafe Culture"
          className="animate-fade-up delay-1 hero-bottom-small"
          style={{ background: 'linear-gradient(135deg, rgba(217, 70, 239, 0.1), rgba(139, 92, 246, 0.15))' }}
        >
          <div className="card-content" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#FBBF24' }}>
              <span className="hero-mini-icon hero-mini-icon-small" aria-hidden="true" />
              <strong style={{ fontSize: '0.95rem', color: '#fff' }}>喫茶店めぐり</strong>
            </div>
            <p style={{ fontSize: '0.85rem', margin: 0, color: '#E2E8F0' }}>小樽の歴史的建造物を改装したレトロな</p>
          </div>
        </FloatingWindow>

      </div>

      <style>{`
        .dashboard-hero {
          min-height: 85vh;
          display: flex;
          align-items: center;
          padding: 80px 2rem 40px; /* Account for top menu bar */
        }
        .hero-dashboard-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 260px) 130px;
          gap: 1.5rem;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }
        .hero-main-widget {
          grid-column: span 2;
          grid-row: span 2;
        }
        .hero-side-widget {
          grid-column: span 1;
          grid-row: span 1;
        }
        .hero-bottom-wide {
          grid-column: span 2;
          grid-row: span 1;
        }
        .hero-bottom-small {
          grid-column: span 1;
          grid-row: span 1;
        }
        .hero-mini-icon {
          width: 20px;
          height: 20px;
          border-radius: 999px;
          background: currentColor;
          box-shadow: 0 0 12px currentColor;
          display: inline-block;
          flex: 0 0 auto;
          opacity: 0.85;
        }
        .hero-mini-icon-small {
          width: 18px;
          height: 18px;
        }
        .hero-mini-icon-large {
          width: 24px;
          height: 24px;
        }
        
        @media (max-width: 1024px) {
          .hero-dashboard-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }
          .hero-main-widget, .hero-bottom-wide {
            grid-column: span 2;
          }
          .hero-dashboard-grid > div {
            min-height: 200px;
          }
        }
        
        @media (max-width: 600px) {
          .hero-dashboard-grid {
            grid-template-columns: 1fr;
          }
          .hero-main-widget, .hero-side-widget, .hero-bottom-wide, .hero-bottom-small {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
};
