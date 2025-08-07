import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  firstText: string;
  secondText: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  firstText,
  secondText,
  className = "",
  speed = 70,
  delay = 100
}) => {
  const [displayedFirstText, setDisplayedFirstText] = useState('');
  const [displayedSecondText, setDisplayedSecondText] = useState('');
  const [currentPhase, setCurrentPhase] = useState<'first' | 'second' | 'complete'>('first');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentPhase === 'first') {
      if (currentIndex < firstText.length) {
        const timer = setTimeout(() => {
          setDisplayedFirstText(firstText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        // First text is complete, wait for delay then start second text
        setShowCursor(false);
        const timer = setTimeout(() => {
          setCurrentPhase('second');
          setCurrentIndex(0);
          setShowCursor(true);
        }, delay);
        return () => clearTimeout(timer);
      }
    } else if (currentPhase === 'second') {
      if (currentIndex < secondText.length) {
        const timer = setTimeout(() => {
          setDisplayedSecondText(secondText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        setCurrentPhase('complete');
        setShowCursor(false);
      }
    }
  }, [currentIndex, currentPhase, firstText, secondText, speed, delay]);

  return (
    <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight ${className}`}>
      <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
        {displayedFirstText}
        {showCursor && currentPhase === 'first' && <span className="animate-pulse">|</span>}
        {currentPhase === 'second' || currentPhase === 'complete' ? (
          <>
            <br />
            {displayedSecondText}
            {showCursor && currentPhase === 'second' && <span className="animate-pulse">|</span>}
          </>
        ) : null}
      </span>
    </h1>
  );
};

export default TypewriterText;
