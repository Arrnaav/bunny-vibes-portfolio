
import React, { useState, useEffect } from 'react';

const CursorTrail = () => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ };
      
      setTrail(prev => {
        const updated = [...prev, newTrail];
        return updated.length > 10 ? updated.slice(-10) : updated;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const cleanup = setInterval(() => {
      setTrail(prev => prev.slice(1));
    }, 100);

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
          className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (index + 1) / trail.length * 0.6,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
