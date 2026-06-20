import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import Avatar from './Avatar';
import Logo from './Logo';
import './Navbar.css';

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { user, logout } = useAuth();
  const { progress } = useProgress();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout() {
    logout();
    navigate('/');
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <Logo size={30} />
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links">
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/courses" className={({ isActive }) => isActive ? 'active' : ''}>Courses</NavLink></li>
          <li><NavLink to="/reference" className={({ isActive }) => isActive ? 'active' : ''}>Reference</NavLink></li>
          {user && (
            <li><NavLink to="/progress" className={({ isActive }) => isActive ? 'active' : ''}>Progress</NavLink></li>
          )}
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
        </ul>

        {/* Right actions */}
        <div className="navbar__actions">
          {/* Streak pill */}
          {progress.streak > 0 && (
            <span className="navbar__streak">🔥 {progress.streak}</span>
          )}

          {/* Theme toggle */}
          <button className="navbar__theme-btn" onClick={toggle} aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {user ? (
            <div className="navbar__user">
              <button className="navbar__avatar-btn" onClick={() => setMenuOpen(o => !o)}>
                <Avatar size="sm" />
                <span className="navbar__username">{user.name.split(' ')[0]}</span>
              </button>
              {menuOpen && (
                <div className="navbar__dropdown">
                  <Link to="/progress" onClick={() => setMenuOpen(false)}>My Progress</Link>
                  <button onClick={handleLogout}>Log out</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary navbar__login-btn">Log in</Link>
          )}

          {/* Hamburger */}
          <button className="navbar__hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/courses" onClick={() => setMenuOpen(false)}>Courses</NavLink>
          <NavLink to="/reference" onClick={() => setMenuOpen(false)}>Reference</NavLink>
          {user && <NavLink to="/progress" onClick={() => setMenuOpen(false)}>Progress</NavLink>}
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          {user
            ? <button onClick={handleLogout} className="navbar__mobile-logout">Log out</button>
            : <Link to="/login" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Log in</Link>
          }
        </div>
      )}
    </nav>
  );
}
