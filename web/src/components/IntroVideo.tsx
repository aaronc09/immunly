import { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import './IntroVideo.css';

/**
 * Replay-able intro video modal. Shown only when something dispatches the
 * `window` event 'immunly:play-intro' (e.g. a "Watch intro" button) — the
 * one-time welcome-on-first-visit gating lives in WelcomeIntro instead.
 */
export default function IntroVideo() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
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
    if (videoRef.current) videoRef.current.pause();
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 280);
  }

  if (!visible) return null;

  return (
    <div
      className={`intro-overlay ${closing ? 'intro-overlay--closing' : ''}`}
      role="dialog"
      aria-label="Immunly intro video"
    >
      <div className="intro-overlay__top">
        <Logo size={28} className="intro-overlay__logo" />
        <button className="intro-overlay__skip" onClick={dismiss}>Close ✕</button>
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
        Close
      </button>
    </div>
  );
}
