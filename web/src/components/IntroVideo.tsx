import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import './IntroVideo.css';

const SEEN_KEY = 'immunly_intro_seen';

/**
 * One-time intro video that plays the first time someone opens Immunly.
 * Dismisses on finish or skip and remembers via localStorage.
 * Can be replayed anytime by dispatching `window` event 'immunly:play-intro'.
 */
export default function IntroVideo() {
  const [visible, setVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!localStorage.getItem(SEEN_KEY)) {
      setVisible(true);
    }
    const replay = () => setVisible(true);
    window.addEventListener('immunly:play-intro', replay);
    return () => window.removeEventListener('immunly:play-intro', replay);
  }, []);

  useEffect(() => {
    if (visible && videoRef.current) {
      // Try to start playback; browsers may block autoplay with sound until the
      // user interacts, in which case the native controls / play button take over.
      const v = videoRef.current;
      v.currentTime = 0;
      v.play().catch(() => {/* autoplay blocked — user can press play */});
    }
  }, [visible]);

  function dismiss() {
    localStorage.setItem(SEEN_KEY, '1');
    if (videoRef.current) videoRef.current.pause();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="intro-overlay" role="dialog" aria-label="Welcome to Immunly">
      <div className="intro-overlay__top">
        <Logo size={28} className="intro-overlay__logo" />
        <button className="intro-overlay__skip" onClick={dismiss}>Skip intro →</button>
      </div>

      <div className="intro-overlay__video-wrap">
        <video
          ref={videoRef}
          className="intro-overlay__video"
          src="/intro.mp4"
          controls
          autoPlay
          playsInline
          onEnded={dismiss}
        />
      </div>

      <button className="btn btn-primary intro-overlay__enter" onClick={dismiss}>
        Enter Immunly →
      </button>
    </div>
  );
}
