import React from 'react';
import { ResponsiveImage } from './ResponsiveImage';

interface FloatingWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  backgroundImageUrl?: string;
}

export const FloatingWindow: React.FC<FloatingWindowProps> = ({ title = "TabiMado", children, className = "", style, backgroundImageUrl }) => {
  return (
    <div className={`floating-window ${className}`} style={{ position: 'relative', overflow: 'hidden', ...style }}>
      {backgroundImageUrl && (
        <div className="floating-window-bg" aria-hidden="true">
          <ResponsiveImage
            src={backgroundImageUrl}
            alt=""
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="floating-window-bg-image"
          />
        </div>
      )}
      <div className="window-header" style={{ position: 'relative', zIndex: 1, background: backgroundImageUrl ? 'rgba(26, 16, 51, 0.7)' : 'var(--color-bg-surface-light)' }}>
        <div className="window-dot"></div>
        <div className="window-dot"></div>
        <div className="window-dot"></div>
        {title && <span className="window-title">{title}</span>}
      </div>
      <div className="window-content" style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};
