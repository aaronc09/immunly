import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';
import '../pages/LoginPage.css';
import './WelcomeIntro.css';

const SLIDE_BACKGROUNDS = ['/intro1.png', '/intro2.png'];

type AuthMode = 'login' | 'register';

export default function WelcomeIntro() {
  const { user, login, register } = useAuth();
  const navigate = useNavigate();
  const [dismissed, setDismissed] = useState(false);
  const [slide, setSlide] = useState(0);

  const [mode, setMode] = useState<AuthMode>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const shouldShow = !user && !dismissed;
  // Starts already-hidden with no animation if the user is already logged in
  // on first render; otherwise fades out (rather than vanishing instantly)
  // whenever shouldShow flips to false — covering skip, guest, login, and
  // register in one place since they all just flip `dismissed` or `user`.
  const [hidden, setHidden] = useState(!shouldShow);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!shouldShow && !hidden) {
      setClosing(true);
      const t = setTimeout(() => {
        setHidden(true);
        setClosing(false);
      }, 320);
      return () => clearTimeout(t);
    }
  }, [shouldShow, hidden]);

  useEffect(() => {
    if (!hidden) {
      const prevBody = document.body.style.overflow;
      const prevHtml = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevBody;
        document.documentElement.style.overflow = prevHtml;
      };
    }
  }, [hidden]);

  function dismiss() {
    setDismissed(true);
  }

  function watchIntro() {
    window.dispatchEvent(new Event('immunly:play-intro'));
  }

  function continueAsGuest() {
    setDismissed(true);
    navigate('/');
  }

  function advanceSlide() {
    setSlide(s => Math.min(SLIDE_BACKGROUNDS.length - 1, s + 1));
  }

  function stop(e: React.MouseEvent) {
    e.stopPropagation();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      let result;
      if (mode === 'login') {
        result = await login(email, password);
      } else {
        if (!name.trim()) {
          setError('Please enter your name.');
          setLoading(false);
          return;
        }
        result = await register(name, email, password);
      }
      if (!result.ok) {
        setError(result.error || 'Something went wrong.');
      }
      // On success `user` updates in context and this overlay unmounts itself.
    } finally {
      setLoading(false);
    }
  }

  if (hidden) return null;

  return (
    <div
      className={`welcome-overlay ${closing ? 'welcome-overlay--closing' : ''}`}
      role="dialog"
      aria-label="Welcome to Immunly"
      onClick={advanceSlide}
    >
      {SLIDE_BACKGROUNDS.map((src, i) => (
        <div
          key={src}
          className="welcome-overlay__bg"
          style={{ backgroundImage: `url('${src}')`, opacity: slide === i ? 1 : 0 }}
        />
      ))}
      <div className="welcome-overlay__scrim" />

      <div className="welcome-overlay__top" onClick={stop}>
        <Logo size={30} />
        <button className="welcome-overlay__skip" onClick={dismiss}>Skip intro →</button>
      </div>

      <div className="welcome-overlay__stage">
        {/* Slide 0: hero */}
        <div className={`welcome-overlay__pane ${slide === 0 ? 'welcome-overlay__pane--active' : ''}`}>
          <div className="welcome-overlay__tag">Welcome to Immunly</div>
          <h1 className="welcome-overlay__heading">
            Unlock the power of your <span>immune system.</span>
          </h1>
          <p className="welcome-overlay__body">
            Immunly is your interactive guide to immunology — designed for curious minds,
            future researchers, and lifelong learners.
          </p>
          <div className="welcome-overlay__features">
            <div className="welcome-overlay__feature">
              <span className="welcome-overlay__feature-icon">🧬</span>
              <span className="welcome-overlay__feature-label">Science-backed content</span>
            </div>
            <div className="welcome-overlay__feature">
              <span className="welcome-overlay__feature-icon">📖</span>
              <span className="welcome-overlay__feature-label">Learn at your own pace</span>
            </div>
            <div className="welcome-overlay__feature">
              <span className="welcome-overlay__feature-icon">🔍</span>
              <span className="welcome-overlay__feature-label">Explore. Understand. Discover.</span>
            </div>
          </div>
          <div className="welcome-overlay__cta" onClick={stop}>
            <button className="btn btn-primary welcome-overlay__btn" onClick={() => setSlide(1)}>
              Get Started →
            </button>
            <button className="btn btn-ghost welcome-overlay__btn" onClick={watchIntro}>
              ▶ Watch intro
            </button>
          </div>
        </div>

        {/* Slide 1: auth */}
        <div className={`welcome-overlay__pane ${slide === 1 ? 'welcome-overlay__pane--active' : ''}`}>
          <div className="login-card card welcome-overlay__auth-card" onClick={stop}>
            <div className="login-card__logo">
              <Logo size={36} />
              <p>{mode === 'login' ? 'Welcome back!' : 'Create your free account'}</p>
            </div>

            <div className="login-tabs">
              <button
                className={`login-tab ${mode === 'login' ? 'login-tab--active' : ''}`}
                onClick={() => { setMode('login'); setError(''); }}
              >
                Log in
              </button>
              <button
                className={`login-tab ${mode === 'register' ? 'login-tab--active' : ''}`}
                onClick={() => { setMode('register'); setError(''); }}
              >
                Register
              </button>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              {mode === 'register' && (
                <div className="login-field">
                  <label htmlFor="welcome-name">Your name</label>
                  <input
                    id="welcome-name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Ada Lovelace"
                    required
                    autoComplete="name"
                  />
                </div>
              )}
              <div className="login-field">
                <label htmlFor="welcome-email">Email</label>
                <input
                  id="welcome-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="login-field">
                <label htmlFor="welcome-password">Password</label>
                <input
                  id="welcome-password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder={mode === 'register' ? 'Min 6 characters' : '••••••••'}
                  required
                  minLength={mode === 'register' ? 6 : 1}
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                />
              </div>

              {error && <div className="login-error">{error}</div>}

              <button type="submit" className="btn btn-primary login-submit" disabled={loading}>
                {loading ? 'Please wait…' : mode === 'login' ? 'Log in' : 'Create account'}
              </button>
            </form>

            <div className="login-footer-note">
              {mode === 'login'
                ? <>Don't have an account? <button className="login-switch" onClick={() => setMode('register')}>Register</button></>
                : <>Already have an account? <button className="login-switch" onClick={() => setMode('login')}>Log in</button></>
              }
            </div>

            <div className="login-divider"><span>or</span></div>

            <button className="btn btn-outline login-guest" onClick={continueAsGuest}>
              Continue as guest →
            </button>
          </div>
        </div>
      </div>

      <div className="welcome-overlay__nav" onClick={stop}>
        <button
          className="welcome-overlay__arrow"
          aria-label="Previous slide"
          disabled={slide === 0}
          onClick={() => setSlide(s => Math.max(0, s - 1))}
        >
          ‹
        </button>
        <div className="welcome-overlay__dots">
          {SLIDE_BACKGROUNDS.map((_, i) => (
            <button
              key={i}
              className={`welcome-overlay__dot ${i === slide ? 'welcome-overlay__dot--active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setSlide(i)}
            />
          ))}
        </div>
        <button
          className="welcome-overlay__arrow"
          aria-label="Next slide"
          disabled={slide === SLIDE_BACKGROUNDS.length - 1}
          onClick={advanceSlide}
        >
          ›
        </button>
      </div>
    </div>
  );
}
