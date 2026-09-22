import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export interface CursorContextType {
  cursorText: string;
  cursorVariant: 'default' | 'project' | 'explore' | 'drag' | 'play' | 'pointer' | 'discuss';
  setCursor: (text: string, variant?: 'default' | 'project' | 'explore' | 'drag' | 'play' | 'pointer' | 'discuss') => void;
  resetCursor: () => void;
}

export const CursorContext = React.createContext<CursorContextType>({
  cursorText: '',
  cursorVariant: 'default',
  setCursor: () => {},
  resetCursor: () => {},
});

export const CustomCursor: React.FC = () => {
  const { cursorText, cursorVariant } = React.useContext(CursorContext);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouch) return null;

  const hasText = cursorText.length > 0;
  const isExpanded = hasText || cursorVariant !== 'default';

  return (
    <>
      {/* Outer Context Bubble */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - (hasText ? 44 : isExpanded ? 20 : 6),
          y: mousePosition.y - (hasText ? 44 : isExpanded ? 20 : 6),
          width: hasText ? 88 : isExpanded ? 40 : 12,
          height: hasText ? 88 : isExpanded ? 40 : 12,
          backgroundColor: '#FAF9F6',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
      >
        {hasText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] uppercase font-mono tracking-wider text-black text-center font-semibold px-2"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};
