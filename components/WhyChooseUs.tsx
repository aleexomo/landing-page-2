import React from 'react';
import type { Feature } from '../types';
import RobotIcon from './icons/RobotIcon';
import GiftIcon from './icons/GiftIcon';
import ParentChildIcon from './icons/ParentChildIcon';
import NativeSpeakerIcon from './icons/NativeSpeakerIcon';

const features: Feature[] = [
  {
    icon: NativeSpeakerIcon,
    title: 'Aulas ao Vivo com Falantes Nativos',
    description: 'Seu filho aprenderá com falantes nativos experientes em sessões divertidas e interativas, que podem ser acessadas do computador, tablet ou celular.',
  },
  {
    icon: GiftIcon,
    title: '1 Mês de Teste Grátis',
    description: 'Sem cartão de crédito, sem compromisso. Desfrute de um mês inteiro de aulas ilimitadas para ver os resultados incríveis por si mesmo.',
  },
  {
    icon: RobotIcon,
    title: 'Super Coach de IA Alex',
    description: 'Reforce o aprendizado da sala de aula 24/7. Seu filho pode praticar conversação com nossa IA amigável, com controle total dos pais.',
  },
  {
    icon: ParentChildIcon,
    title: 'Aulas Grátis para os Pais',
    description: 'Você aprende também! Participe de nossas aulas de inglês gratuitas e faça parte da jornada de aprendizado do seu filho.',
  },
];

const TheJollyDifference: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            O Diferencial Jolly: Mais Que Apenas uma Aula
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Oferecemos um ecossistema único para seu filho prosperar e para você fazer parte da jornada.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheJollyDifference;