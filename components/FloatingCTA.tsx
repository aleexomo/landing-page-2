import React, { useState, useEffect } from 'react';

interface FloatingCTAProps {
  onCTAClick: () => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ onCTAClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={onCTAClick}
      className={`fixed bottom-6 right-6 bg-yellow-400 text-blue-900 font-bold py-4 px-6 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 z-40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      aria-label="Comece Seu Mês Grátis"
    >
      Comece o Teste Grátis
    </button>
  );
};

export default FloatingCTA;