import React from 'react';
import type { Testimonial } from '../types';
import StarIcon from './icons/StarIcon';

const testimonials: Testimonial[] = [
  {
    quote: 'Minha filha era tão tímida. Agora ela canta músicas em inglês o dia todo! A Jolly English Academy fez o aprendizado parecer uma brincadeira. Estou impressionada com o progresso dela.',
    name: 'Sarah L.',
    role: 'Mãe da Chloe, 5 anos',
    avatar: 'https://picsum.photos/id/65/100/100',
  },
  {
    quote: 'O coach de IA Alex muda o jogo! Meu filho adora praticar suas habilidades de conversação depois da aula. E as aulas gratuitas para pais foram um bônus inesperado e incrível!',
    name: 'Maria P.',
    role: 'Mãe do Leo, 7 anos',
    avatar: 'https://picsum.photos/id/44/100/100',
  },
  {
    quote: 'Vimos uma melhora enorme nas habilidades de leitura do nosso filho em poucas semanas. O método Jolly Phonics realmente faz maravilhas. Esta é a melhor aula de inglês online.',
    name: 'Priya Sharma',
    role: 'Mãe do Aarav, 4 anos',
    avatar: 'https://picsum.photos/id/43/100/100',
  },
];

const Rating: React.FC = () => (
    <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Amado por Pais em Todo Lugar
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Não acredite apenas na nossa palavra. Veja o que os pais estão dizendo sobre sua experiência.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg flex flex-col">
              <div className="flex-grow">
                <Rating />
                <p className="text-slate-600 mt-4 text-lg italic">"{testimonial.quote}"</p>
              </div>
              <div className="mt-6 flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;