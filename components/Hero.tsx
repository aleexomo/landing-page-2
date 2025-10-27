import React from 'react';
import StarIcon from './icons/StarIcon';

interface HeroProps {
  onCTAClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  return (
    <section className="relative bg-blue-50 pt-20 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Um Mês de Inglês Divertido, <span className="text-blue-600">Totalmente GRÁTIS</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0">
              Experimente nossas aulas ao vivo com falantes nativos, acessíveis de qualquer computador, tablet ou celular. Pratique com nosso Coach de IA Alex, e até participe de aulas gratuitas para pais! Sem cartão de crédito, sem compromisso.
            </p>
            <div className="flex flex-col items-center md:items-start space-y-4">
              <button
                onClick={onCTAClick}
                className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg text-lg"
              >
                Comece Seu Mês Grátis
              </button>
              <p className="text-sm text-slate-500">100% grátis, sem necessidade de cartão de crédito.</p>
               <div className="flex items-center pt-4">
                    <div className="flex -space-x-2">
                        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/id/65/100/100" alt="Usuário" />
                        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/id/64/100/100" alt="Usuário" />
                        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/id/43/100/100" alt="Usuário" />
                    </div>
                    <div className="ml-4 text-left">
                        <div className="flex">
                            {[...Array(5)].map((_,i) => <StarIcon key={i} className="text-yellow-400" />)}
                        </div>
                        <p className="text-sm text-slate-600">Amado por mais de 5.000 pais felizes</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-full shadow-2xl border-8 border-white overflow-hidden">
               <img 
                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Mãe e filho felizes aprendendo inglês online"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
             <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-300 rounded-full opacity-50 -z-10"></div>
             <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-200 rounded-lg transform rotate-12 opacity-60 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;