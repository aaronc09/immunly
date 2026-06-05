import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

type Mode = 'login' | 'register';

export default function LoginPage() {
  const { user, login, register } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

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
      } else {
        navigate('/');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page page-content">
      <div className="container login-page__center">
        <div className="login-card card">
          {/* Logo area */}
          <div className="login-card__logo">
            <span className="login-card__logo-text">Immuno<span>Learn</span></span>
            <p>{mode === 'login' ? 'Welcome back!' : 'Create your free account'}</p>
          </div>

          {/* Tabs */}
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
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
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
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>
            <div className="login-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
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

          <div className="login-divider">
            <span>or</span>
          </div>

          <Link to={`/module/mod1/lesson/mod1-l1`} className="btn btn-outline login-guest">
            Continue as guest →
          </Link>

          <p className="login-disclaimer">
            Your data stays in your browser. We don't send it anywhere.
          </p>
        </div>
      </div>
    </div>
  );
}
