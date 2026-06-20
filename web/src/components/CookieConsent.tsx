import { useEffect, useState } from 'react';
import './CookieConsent.css';

const CONSENT_KEY = 'immunly_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'granted');
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'denied');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-label="Cookie consent">
      <p>
        Immunly uses Google Analytics to understand how the site is used (e.g. which pages are popular and
        roughly where visitors are from). No data is sold or shared with advertisers.
      </p>
      <div className="cookie-consent__actions">
        <button className="btn btn-outline" onClick={decline}>Decline</button>
        <button className="btn btn-primary" onClick={accept}>Accept</button>
      </div>
    </div>
  );
}
