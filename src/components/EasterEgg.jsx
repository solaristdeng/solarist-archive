import { useState, useEffect } from 'react';
import GlitchEffect from './GlitchEffect';
import Terminal from './Terminal';
import { useAdmin } from './AdminMode';

const EasterEgg = ({ triggerRef }) => {
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [showGlitch, setShowGlitch] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const { activateAdmin } = useAdmin();

  useEffect(() => {
    if (!triggerRef?.current) return;

    const handleClick = () => {
      const newCount = clickCount + 1;
      setClickCount(newCount);

      if (newCount === 4) {
        setMessage('还剩 3 次点击...');
        setShowMessage(true);
      } else if (newCount === 5) {
        setMessage('还剩 2 次点击...');
        setShowMessage(true);
      } else if (newCount === 6) {
        setMessage('还剩 1 次点击...');
        setShowMessage(true);
      } else if (newCount === 7) {
        setShowMessage(false);
        setShowGlitch(true);
      }
    };

    const element = triggerRef.current;
    element.addEventListener('click', handleClick);
    
    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, [triggerRef, clickCount]);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const handleGlitchComplete = () => {
    setShowGlitch(false);
    setShowTerminal(true);
  };

  const handleAuthenticated = () => {
    setShowTerminal(false);
    activateAdmin();
    setClickCount(0);
  };

  return (
    <>
      {/* Click counter message */}
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-[9997] pointer-events-none">
          <div className="bg-black/90 text-white px-8 py-4 rounded-lg font-mono text-sm shadow-2xl animate-pulse">
            {message}
          </div>
        </div>
      )}

      {/* Glitch effect */}
      {showGlitch && <GlitchEffect onComplete={handleGlitchComplete} />}

      {/* Terminal */}
      {showTerminal && <Terminal onAuthenticated={handleAuthenticated} />}
    </>
  );
};

export default EasterEgg;
