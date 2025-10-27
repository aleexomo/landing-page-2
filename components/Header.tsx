import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onCTAClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCTAClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-3xl font-bold text-blue-600 font-pacifico">
            Jolly English
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-slate-600 hover:text-blue-600 transition-colors">Cursos</a>
            <a href="#tutors" className="text-slate-600 hover:text-blue-600 transition-colors">Tutores</a>
            <a href="#testimonials" className="text-slate-600 hover:text-blue-600 transition-colors">Depoimentos</a>
            <a href="#faq" className="text-slate-600 hover:text-blue-600 transition-colors">Dúvidas</a>
          </nav>
          <button
            onClick={onCTAClick}
            className="hidden md:inline-block bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transform hover:scale-105 transition-all"
          >
            Comece Seu Mês Grátis
          </button>
          <button className="md:hidden text-slate-800">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;