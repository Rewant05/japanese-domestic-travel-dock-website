import React from 'react';
import { Outlet } from 'react-router-dom';
import { BottomDockNav } from './BottomDockNav';
import { Footer } from './Footer';

import { TopMenuBar } from './TopMenuBar';

export const Layout: React.FC = () => {
  return (
    <>
      <TopMenuBar />
      <main style={{ paddingTop: '36px' }}>
        <Outlet />
      </main>
      <Footer />
      <BottomDockNav />
    </>
  );
};
