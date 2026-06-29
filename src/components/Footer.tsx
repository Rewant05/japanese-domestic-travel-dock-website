import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../config/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="footer glass-panel">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3>{siteData.name}</h3>
          <p>{siteData.tagline}</p>
          <p className="footer-disclaimer">{siteData.disclaimer}</p>
        </div>
        <div className="footer-links">
          <h4>リンク</h4>
          <ul>
            {siteData.footerLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-contact">
          <h4>お問い合わせ</h4>
          <p>{siteData.editor}</p>
          <p>{siteData.address}</p>
          <p>{siteData.email}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {siteData.name} All rights reserved.</p>
        <p className="footer-note">当サイトは独立した編集部による旅行メディアです。</p>
      </div>

      <style>{`
        .footer {
          margin-top: 4rem;
          padding: 4rem 0 2rem;
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
          border-bottom: none;
          box-shadow: 0 -10px 15px -3px rgba(0, 0, 0, 0.05);
        }
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .footer-brand h3 {
          margin-bottom: 0.5rem;
        }
        .footer-disclaimer {
          margin-top: 1rem;
          font-size: 0.8rem;
          color: var(--color-text-muted);
          background: rgba(0,0,0,0.05);
          padding: 1rem;
          border-radius: var(--radius-sm);
        }
        .footer-links h4, .footer-contact h4 {
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        .footer-links ul {
          list-style: none;
        }
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        .footer-contact p {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(0,0,0,0.1);
        }
        .footer-note {
          font-size: 0.8rem;
          margin-top: 0.5rem;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};
