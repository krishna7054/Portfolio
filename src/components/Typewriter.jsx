import React, { useEffect, useState } from 'react';

const Typewriter = ({ texts, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const currentText = texts[loopIndex];
      setDisplayText(currentText.substring(0, charIndex));

      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setLoopIndex((loopIndex + 1) % texts.length);
        }
      }
    };

    const typingSpeed = isDeleting ? speed / 2 : speed;
    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, loopIndex, texts, speed]);

  return <p className="text-4xl italic text-cyan-200 font-semibold">{displayText}</p>;
};

export default Typewriter;
