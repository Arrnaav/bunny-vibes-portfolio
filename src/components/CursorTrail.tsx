
import React, { useState, useEffect } from 'react';

const CursorTrail = () => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ };
      
      setTrail(prev => {
        const updated = [...prev, newTrail];
        return updated.length > 6 ? updated.slice(-6) : updated;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const cleanup = setInterval(() => {
      setTrail(prev => prev.slice(1));
    }, 150);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanup);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-1 h-1 bg-gradient-to-r from-orange-400/30 to-red-500/30 rounded-full"
          style={{
            left: point.x - 2,
            top: point.y - 2,
            opacity: (index + 1) / trail.length * 0.3,
            transform: `scale(${(index + 1) / trail.length * 0.8})`,
            transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
