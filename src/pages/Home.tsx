import React from 'react';
import { HeroDashboard } from '../components/HeroDashboard';

import { siteData } from '../config/siteData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div>
      <HeroDashboard />
      
      <section className="section-padding container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ marginBottom: '0.5rem' }}>注目の旅先</h2>
            <p style={{ margin: 0 }}>今週末に行きたい、おすすめのエリア</p>
          </div>
          <Link to="/destinations" style={{ fontWeight: 500, color: 'var(--color-accent-purple)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            すべて見る <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="bento-grid">
          {siteData.destinations.slice(0, 4).map((dest, index) => {
            let bentoClass = "bento-small";
            if (index === 0) bentoClass = "bento-large";
            else if (index === 1) bentoClass = "bento-wide";
            
            return (
              <Link to="/destinations" key={dest.id} className={`bento-item ${bentoClass}`}>
                {dest.imageUrl && <img src={dest.imageUrl} alt={dest.name} className="image-bg" />}
                <div className="bento-content">
                  <span className="tag" style={{ backdropFilter: 'blur(10px)', background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                    {dest.bestSeason}におすすめ
                  </span>
                  <h3 style={{ color: '#fff', fontSize: index === 0 ? '2rem' : '1.25rem', marginBottom: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{dest.name}</h3>
                  {index === 0 && (
                    <p style={{ color: '#E2E8F0', marginBottom: 0, fontSize: '1rem', textShadow: '0 1px 2px rgba(0,0,0,0.8)', maxWidth: '80%' }}>
                      {dest.description}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section-padding container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ marginBottom: '0.5rem' }}>人気のモデルコース</h2>
            <p style={{ margin: 0 }}>編集部が厳選した、失敗しない旅程</p>
          </div>
          <Link to="/itineraries" style={{ fontWeight: 500, color: 'var(--color-accent-purple)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            すべて見る <ArrowRight size={16} />
          </Link>
        </div>

        <div className="horizontal-scroll">
          {siteData.itineraries.map((itinerary) => (
            <Link to="/itineraries" key={itinerary.id} className="scroll-item floating-window" style={{ display: 'block', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img src={itinerary.imageUrl} alt={itinerary.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                  <span className="tag" style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none' }}>{itinerary.duration}</span>
                </div>
              </div>
              <div className="card-content">
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{itinerary.title}</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>{itinerary.routeSummary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-padding container">
        <div className="glass-panel" style={{ padding: '4rem', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 100% 0%, rgba(139,92,246,0.2) 0%, transparent 50%)', zIndex: 0 }} />
          
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>季節の旅</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
              日本には美しい四季があります。その季節にしか見られない景色や、味わえない食を楽しむ旅に出かけましょう。
            </p>
            
            <div className="grid-2" style={{ textAlign: 'left' }}>
              {siteData.seasons.slice(0, 2).map((season) => (
                <div key={season.id} className="floating-window" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                    <img src={season.imageUrl} alt={season.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                      <h3 style={{ margin: 0, color: '#fff' }}>{season.name}</h3>
                    </div>
                  </div>
                  <div className="card-content">
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-accent-purple)', fontWeight: 600, marginBottom: '0.5rem' }}>{season.mood}</p>
                    <p style={{ fontSize: '0.9rem', margin: 0 }}><strong>エリア:</strong> {season.regions.join('、')}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '3rem' }}>
              <Link to="/seasonal" className="btn btn-primary">四季の旅をすべて見る</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ display: 'inline-block', position: 'relative' }}>
            ニュースレター登録
            <div style={{ position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', width: '40px', height: '4px', background: 'var(--color-accent-purple)', borderRadius: '2px' }} />
          </h2>
        </div>
        <div className="glass-panel" style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>最新の旅先情報やモデルコースを月に1回お届けします。</p>
          <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input type="email" placeholder="メールアドレス" className="form-control" />
              <button className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>登録する</button>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0 }}>
              登録により、<Link to="/privacy-policy" style={{ textDecoration: 'underline', color: 'var(--color-text-main)' }}>プライバシーポリシー</Link>に同意したものとみなされます。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
