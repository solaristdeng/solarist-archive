import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="custom-cursor fixed w-6 h-6 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 border border-black/20"
      style={{ left: mousePos.x, top: mousePos.y }}
    />
  );
};

export default CustomCursor;
