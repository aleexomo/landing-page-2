import React from 'react';
import type { Course } from '../types';

const courses: Course[] = [
  {
    image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Fundamentos da Fluência em Inglês',
    description: 'Construa uma base sólida. Este curso foca na pronúncia, vocabulário e habilidades de conversação com nossos professores nativos.',
    ageGroup: '', // Removed
  },
  {
    image: 'https://images.pexels.com/photos/8364020/pexels-photo-8364020.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Comunicador Confiante',
    description: 'Vá além do básico para dominar a gramática e a fluidez da conversação. Pratique a qualquer momento com o Super Coach Alex para ganhar confiança.',
    ageGroup: '', // Removed
  },
  {
    image: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Expressão Criativa',
    description: 'Liberte a imaginação! Aprenda a expressar ideias complexas através de contação de histórias, debates e projetos de escrita criativa.',
    ageGroup: '', // Removed
  },
];

interface OurCoursesProps {
  onCTAClick: () => void;
}

const OurCourses: React.FC<OurCoursesProps> = ({ onCTAClick }) => {
  return (
    <section id="courses" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            O Caminho do Seu Filho para a Fluência
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Nossos cursos são projetados para alunos a partir de 7 anos para garantir que se tornem falantes de inglês confiantes e fluentes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.title} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
              <img src={course.image} alt={course.title} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{course.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{course.description}</p>
                <button onClick={onCTAClick} className="font-semibold text-blue-600 group-hover:text-blue-800 transition-colors text-left w-full">
                  Comece o Teste Grátis &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCourses;