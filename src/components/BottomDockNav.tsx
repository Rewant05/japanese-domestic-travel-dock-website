import React from 'react';
import { NavLink } from 'react-router-dom';
import { siteData } from '../config/siteData';
import { Home, Map, Navigation, Sun, Mail } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  home: <Home size={20} />,
  map: <Map size={20} />,
  navigation: <Navigation size={20} />,
  sun: <Sun size={20} />,
  mail: <Mail size={20} />
};

export const BottomDockNav: React.FC = () => {
  return (
    <div className="dock-container">
      <nav className="dock-nav glass-panel">
        {siteData.dockLinks.map((link) => (
          <NavLink 
            key={link.path} 
            to={link.path} 
            className={({ isActive }) => `dock-item ${isActive ? 'active' : ''}`}
            title={link.label}
          >
            <div className="dock-icon">
              {iconMap[link.icon]}
            </div>
            <span className="dock-label">{link.label}</span>
            <div className="active-dot"></div>
          </NavLink>
        ))}
      </nav>
      <style>{`
        .dock-container {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
        }

        .dock-nav {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px;
          border-radius: var(--radius-full);
          background: var(--color-dock-bg);
          box-shadow: var(--shadow-dock);
          border: 1px solid var(--color-glass-border);
        }

        .dock-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          border-radius: var(--radius-lg);
          color: var(--color-text-muted);
          position: relative;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .dock-item:hover {
          transform: translateY(-12px) scale(1.1);
          color: var(--color-text-main);
          background: rgba(139, 92, 246, 0.15);
          box-shadow: 0 10px 20px rgba(139, 92, 246, 0.2);
        }

        .dock-label {
          font-size: 0.7rem;
          font-weight: 600;
          opacity: 0;
          position: absolute;
          top: -30px;
          background: var(--color-glass-bg);
          backdrop-filter: blur(8px);
          border: 1px solid var(--color-glass-border);
          color: var(--color-text-main);
          padding: 4px 10px;
          border-radius: 8px;
          transition: opacity 0.2s, transform 0.2s;
          transform: translateY(5px);
          pointer-events: none;
          white-space: nowrap;
          box-shadow: var(--shadow-sm);
        }

        .dock-item:hover .dock-label {
          opacity: 1;
          transform: translateY(0);
        }

        .active-dot {
          width: 5px;
          height: 5px;
          background-color: var(--color-accent-purple);
          border-radius: 50%;
          position: absolute;
          bottom: 6px;
          opacity: 0;
          transition: opacity 0.3s;
          box-shadow: 0 0 8px var(--color-accent-magenta);
        }

        .dock-item.active {
          color: var(--color-accent-purple);
        }
        
        .dock-item.active .active-dot {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .dock-container {
            bottom: 0;
            left: 0;
            right: 0;
            transform: none;
            width: 100%;
          }
          .dock-nav {
            border-radius: 0;
            padding: 12px 16px env(safe-area-inset-bottom, 16px);
            justify-content: space-between;
            width: 100%;
            border: none;
            border-top: 1px solid var(--color-glass-border);
            background: rgba(10, 1, 24, 0.95);
            backdrop-filter: blur(20px);
          }
          .dock-item {
            width: auto;
            flex: 1;
            height: auto;
            gap: 4px;
          }
          .dock-item:hover {
            transform: none;
            background: transparent;
            box-shadow: none;
          }
          .dock-label {
            position: static;
            opacity: 1;
            background: transparent;
            border: none;
            box-shadow: none;
            color: inherit;
            padding: 0;
            transform: none;
            font-size: 0.65rem;
          }
          .dock-item.active {
            color: var(--color-accent-purple);
          }
          .active-dot {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
