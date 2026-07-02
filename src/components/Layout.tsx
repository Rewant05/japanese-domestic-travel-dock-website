import React, { lazy, Suspense, useEffect, useState } from 'react';
import { TopMenuBar } from './TopMenuBar';

const BottomDockNav = lazy(() => import('./BottomDockNav').then((module) => ({ default: module.BottomDockNav })));
const Footer = lazy(() => import('./Footer').then((module) => ({ default: module.Footer })));

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showDeferredChrome, setShowDeferredChrome] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => setShowDeferredChrome(true));
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <>
      <TopMenuBar />
      <main style={{ paddingTop: '36px' }}>
        {children}
      </main>
      {showDeferredChrome && (
        <Suspense fallback={null}>
          <Footer />
          <BottomDockNav />
        </Suspense>
      )}
    </>
  );
};
