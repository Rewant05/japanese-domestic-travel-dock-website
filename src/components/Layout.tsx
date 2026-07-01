import React, { lazy, Suspense, useEffect, useState } from 'react';
import { TopMenuBar } from './TopMenuBar';

const BottomDockNav = lazy(() => import('./BottomDockNav').then((module) => ({ default: module.BottomDockNav })));
const Footer = lazy(() => import('./Footer').then((module) => ({ default: module.Footer })));

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showDeferredChrome, setShowDeferredChrome] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;
    const frameId = window.requestAnimationFrame(() => {
      timeoutId = window.setTimeout(() => setShowDeferredChrome(true), 0);
    });

    return () => {
      window.cancelAnimationFrame(frameId);

      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
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
