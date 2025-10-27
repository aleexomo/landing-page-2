import React from 'react';

interface CallToActionProps {
  onCTAClick: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onCTAClick }) => {
  return (
    <section id="cta" className="py-20 bg-blue-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Pronto para um Mês de Aventuras em Inglês GRÁTIS?
        </h2>
        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto mb-8">
          Sem risco, sem compromisso. Apenas um mês inteiro de diversão, crescimento e desenvolvimento de confiança. Veja a diferença da Jolly English por si mesmo.
        </p>
        <button
          onClick={onCTAClick}
          className="bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-yellow-300 transform hover:scale-105 transition-all shadow-lg text-lg"
        >
          Garanta Seu Mês Grátis Agora
        </button>
      </div>
    </section>
  );
};

export default CallToAction;