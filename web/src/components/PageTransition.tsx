import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

/**
 * Fades in routed page content on every navigation instead of the instant,
 * jarring swap React Router does by default. Keying on pathname forces a
 * remount, which re-triggers the CSS fade-in animation each time.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="page-transition">
      {children}
    </div>
  );
}
