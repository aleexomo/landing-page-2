import React from 'react';

const tutors = [
  {
    name: 'Teacher David',
    country: 'EUA',
    flag: '🇺🇸',
    bio: 'Eu me especializo em desenvolver a confiança em jovens falantes. Exploramos tópicos empolgantes e aprendemos a nos expressar de forma clara e criativa.',
    image: 'https://images.pexels.com/photos/4158022/pexels-photo-4158022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Teacher Sarah',
    country: 'Reino Unido',
    flag: '🇬🇧',
    bio: 'Com mais de 8 anos de experiência, adoro fazer o aprendizado parecer uma aventura. Minhas aulas são cheias de energia, músicas e risadas!',
    image: 'https://images.pexels.com/photos/4968390/pexels-photo-4968390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Teacher Emily',
    country: 'Canadá',
    flag: '🇨🇦',
    bio: 'Minha paixão é contar histórias! Ajudo os alunos a descobrirem a alegria da leitura e da escrita, transformando a gramática em um quebra-cabeça divertido para resolvermos juntos.',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const MeetTheTutors: React.FC = () => {
  return (
    <section id="tutors" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Conheça Nossos Tutores de Classe Mundial
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Seu filho aprenderá com os melhores. Nossos professores são todos falantes nativos e apaixonados por educação.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <div key={tutor.name} className="bg-slate-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <img src={tutor.image} alt={tutor.name} className="w-32 h-32 rounded-full object-cover mx-auto mb-6 ring-4 ring-blue-100" />
              <h3 className="text-2xl font-bold text-slate-900">{tutor.name}</h3>
              <p className="text-slate-500 font-semibold mb-4">Do {tutor.country} {tutor.flag}</p>
              <p className="text-slate-600">{tutor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTutors;