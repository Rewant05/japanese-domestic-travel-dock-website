import React, { useState, useEffect } from 'react';
import { siteData } from '../config/siteData';
import { Link } from '../routing';

export const TopMenuBar: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' }));
    };
    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-menu-bar glass-panel">
      <div className="menu-left">
        <Link to="/" className="logo">
          <strong>{siteData.name}</strong> <span className="romanized">{siteData.romanizedName}</span>
        </Link>
        <div className="menu-links desktop-only">
          <Link to="/destinations">旅先</Link>
          <Link to="/itineraries">モデルコース</Link>
          <Link to="/seasonal">季節の旅</Link>
        </div>
      </div>
      
      <div className="menu-right">
        <div className="menu-icon"><span className="menu-icon-shape" aria-hidden="true" /></div>
        <div className="menu-icon desktop-only"><span className="menu-icon-shape menu-icon-wifi" aria-hidden="true" /></div>
        <div className="menu-icon desktop-only"><span className="menu-icon-shape menu-icon-battery" aria-hidden="true" /></div>
        <div className="time">{time}</div>
      </div>

      <style>{`
        .top-menu-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 36px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 16px;
          z-index: 1000;
          border-radius: 0;
          border-top: none;
          border-left: none;
          border-right: none;
          background: rgba(10, 1, 24, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          font-size: 0.8rem;
          color: var(--color-text-main);
        }

        .menu-left, .menu-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .logo strong {
          color: var(--color-accent-purple);
        }
        
        .romanized {
          color: var(--color-text-muted);
          font-size: 0.75rem;
        }

        .menu-links {
          display: flex;
          gap: 16px;
          margin-left: 16px;
        }
        
        .menu-links a {
          color: var(--color-text-main);
          font-weight: 500;
        }
        
        .menu-links a:hover {
          color: var(--color-accent-magenta);
        }

        .menu-icon {
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
        }

        .menu-icon-shape {
          width: 14px;
          height: 14px;
          border: 1.5px solid currentColor;
          border-radius: 999px;
          display: inline-block;
          opacity: 0.85;
        }

        .menu-icon-wifi {
          height: 9px;
          border-bottom: none;
          border-radius: 999px 999px 2px 2px;
          transform: translateY(2px);
        }

        .menu-icon-battery {
          width: 16px;
          height: 9px;
          border-radius: 2px;
        }

        .time {
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
          .top-menu-bar {
            padding: 0 12px;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
          }
        }
      `}</style>
    </div>
  );
};
