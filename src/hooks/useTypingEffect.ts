import { useState, useEffect } from 'react';

export function useTypingEffect(text: string, delay = 1000, speed = 100) {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          setTypedText(text.slice(0, i + 1));
          i++;
          setTimeout(typeWriter, speed);
        }
      };
      typeWriter();
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return { typedText, isTyping };
}
