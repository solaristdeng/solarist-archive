import { useState } from 'react';

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

const GlitchText = ({ text, className = '' }) => {
  const [display, setDisplay] = useState(text);

  const handleHover = () => {
    let iterations = 0;

    const interval = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((letter, index) => {
            if (index < iterations) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  };

  return (
    <span onMouseEnter={handleHover} className={`cursor-pointer inline-block ${className}`}>
      {display}
    </span>
  );
};

export default GlitchText;
