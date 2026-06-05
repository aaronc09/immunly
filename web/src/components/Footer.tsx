import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Immuno<span>Learn</span></span>
          <p>Free immunology education, built for curious minds.</p>
        </div>
        <div className="footer__links">
          <div className="footer__col">
            <h4>Learn</h4>
            <Link to="/courses">All Courses</Link>
            <Link to="/courses">Module 1 — Foundations</Link>
            <Link to="/courses">Module 2 — Immune Response</Link>
          </div>
          <div className="footer__col">
            <h4>Site</h4>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} ImmunoLearn. Educational use only.</span>
          <span>All research paper links point to published journals — content belongs to respective publishers.</span>
        </div>
      </div>
    </footer>
  );
}
