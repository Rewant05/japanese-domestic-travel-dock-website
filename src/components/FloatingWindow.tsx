import React from 'react';

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
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
          zIndex: 0
        }} />
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
