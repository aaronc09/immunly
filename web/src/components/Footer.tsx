import { Link } from 'react-router-dom';
import Logo from './Logo';
import { MODULES } from '../data/curriculum';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo"><Logo size={26} /></span>
          <p>Free immunology &amp; biomedical-research education, built for curious minds.</p>
        </div>
        <div className="footer__links">
          <div className="footer__col">
            <h4>Learn</h4>
            <Link to="/courses">All Courses</Link>
            {MODULES.map((mod) => (
              <Link key={mod.id} to={`/module/${mod.id}`}>Module {mod.number} — {mod.title}</Link>
            ))}
          </div>
          <div className="footer__col">
            <h4>Site</h4>
            <Link to="/">Home</Link>
            <Link to="/research">Research</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Immunly. Educational use only.</span>
          <span>All research paper links point to published journals — content belongs to respective publishers.</span>
        </div>
      </div>
    </footer>
  );
}
