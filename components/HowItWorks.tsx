import React from 'react';

const HowItWorks: React.FC = () => {
    const steps = [
        {
            number: '01',
            title: 'Garanta Seu Mês GRÁTIS',
            description: 'Não precisa de cartão de crédito. Apenas se inscreva e desbloqueie 30 dias de acesso ilimitado às nossas divertidas aulas de inglês.'
        },
        {
            number: '02',
            title: 'Experimente a Magia',
            description: 'Deixe seu filho participar de nossas aulas ao vivo no computador, tablet ou celular, interagir com os professores e praticar com nosso Coach de IA Alex.'
        },
        {
            number: '03',
            title: 'Continue a Jornada',
            description: 'Amou o progresso? Faça o upgrade facilmente para um plano pago. Se não, sem problemas. Sem compromisso, nunca.'
        },
    ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Começar é Fácil
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Apenas três passos simples para iniciar seu filho na aventura de aprender inglês.
          </p>
        </div>
        <div className="relative">
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-100 -translate-y-1/2"></div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {steps.map((step, index) => (
                    <div key={index} className="text-center">
                        <div className="relative inline-block">
                           <div className="w-24 h-24 flex items-center justify-center bg-white border-4 border-blue-200 rounded-full text-blue-600 font-extrabold text-3xl mb-4 relative z-10">
                            {step.number}
                           </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600">{step.description}</p>
                    </div>
                ))}
             </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;