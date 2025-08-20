'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  texts: string[];
  className?: string;
  delay?: number;
  speed?: number;
}

export function TypingAnimation({ texts, className = '', delay = 1000, speed = 100 }: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentTextIndex];
    
    if (isWaiting) {
      const timer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delay);
      return () => clearTimeout(timer);
    }

    if (!isDeleting && currentText === fullText) {
      setIsWaiting(true);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText((prevText) => {
        if (isDeleting) {
          return fullText.substring(0, prevText.length - 1);
        } else {
          return fullText.substring(0, prevText.length + 1);
        }
      });
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, isWaiting, texts, delay, speed]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="border-r-2 border-current ml-1"
      >
        |
      </motion.span>
    </span>
  );
}