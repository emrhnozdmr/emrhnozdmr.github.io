import { useState, useEffect } from 'react';

/**
 * Custom hook for creating a typewriter effect
 * @param text - The text to type
 * @param speed - Speed of typing in milliseconds
 * @param delay - Delay before starting in milliseconds
 * @returns The current display text
 */
export default function useTypewriter(text: string, speed: number = 50, delay: number = 0): string {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const startTyping = () => {
      timeoutId = setTimeout(function typeCharacter() {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeCharacter, speed);
        }
      }, speed);
    };

    timeout = setTimeout(() => {
      startTyping();
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeoutId);
    };
  }, [text, speed, delay]);

  return displayText;
}
