import { lazy, Suspense } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import { RouterProvider, useLocation } from './routing';

const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })));
const Destinations = lazy(() => import('./pages/Destinations').then((module) => ({ default: module.Destinations })));
const Itineraries = lazy(() => import('./pages/Itineraries').then((module) => ({ default: module.Itineraries })));
const Seasonal = lazy(() => import('./pages/Seasonal').then((module) => ({ default: module.Seasonal })));
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then((module) => ({ default: module.PrivacyPolicy })));
const Terms = lazy(() => import('./pages/Terms').then((module) => ({ default: module.Terms })));

const CurrentPage = () => {
  const { pathname } = useLocation();

  switch (pathname) {
    case '/about':
      return <About />;
    case '/destinations':
      return <Destinations />;
    case '/itineraries':
      return <Itineraries />;
    case '/seasonal':
      return <Seasonal />;
    case '/contact':
      return <Contact />;
    case '/privacy-policy':
      return <PrivacyPolicy />;
    case '/terms':
      return <Terms />;
    default:
      return <Home />;
  }
};

function App() {
  return (
    <RouterProvider>
      <ScrollToTop />
      <Suspense fallback={<div className="route-fallback" aria-hidden="true" />}>
        <Layout>
          <CurrentPage />
        </Layout>
      </Suspense>
    </RouterProvider>
  );
}

export default App;
