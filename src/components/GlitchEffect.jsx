import { useEffect, useState } from 'react';

const GlitchEffect = ({ onComplete }) => {
  const [glitchText, setGlitchText] = useState('');
  
  useEffect(() => {
    const chars = '!<>-_\\/[]{}—=+*^?#________01010101░▒▓█▀▄▌▐';
    const interval = setInterval(() => {
      let text = '';
      for (let i = 0; i < 2000; i++) {
        text += chars[Math.floor(Math.random() * chars.length)];
      }
      setGlitchText(text);
    }, 50);

    const timer = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-green-500 font-mono text-xs z-[9998] overflow-hidden flex items-center justify-center animate-glitch">
      <div className="w-full h-full p-4 break-all leading-tight opacity-80">
        {glitchText}
      </div>
      <style jsx>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .animate-glitch {
          animation: glitch 0.1s infinite;
        }
      `}</style>
    </div>
  );
};

export default GlitchEffect;
