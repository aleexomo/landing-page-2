import React, { useState } from 'react';
import type { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: 'O mês de teste gratuito é realmente grátis?',
    answer: 'Com certeza! Não há custos ocultos. Você obtém acesso total por 30 dias sem fornecer nenhuma informação de pagamento. É uma oportunidade sem compromisso para você e seu filho experimentarem a Jolly English.'
  },
   {
    question: 'O que meu filho precisa para participar das aulas?',
    answer: 'É muito simples! Seu filho pode participar das aulas ao vivo de qualquer dispositivo com acesso à internet: um computador (PC ou Mac), um tablet (como iPad ou Android) ou até mesmo um smartphone. Nossa plataforma é flexível para se adaptar à sua rotina.'
  },
  {
    question: 'Como funciona o Super Coach Alex?',
    answer: 'Alex é um parceiro de conversação de IA amigável disponível 24/7. Como um complemento às aulas ao vivo, seu filho pode praticar vocabulário e conversação. Os pais têm um painel para monitorar o uso e controlar o acesso, garantindo um ambiente de aprendizado seguro.'
  },
  {
    question: 'Fale mais sobre as aulas gratuitas para os pais.',
    answer: 'Acreditamos no aprendizado em família! Pais de alunos matriculados têm acesso gratuito às suas próprias aulas de conversação em inglês. É uma ótima maneira de melhorar suas habilidades e apoiar melhor o aprendizado do seu filho.'
  },
    {
    question: 'Meu filho tem mais de 7 anos, é tarde demais para começar?',
    answer: 'De forma alguma! Nosso currículo é projetado para crianças a partir de 7 anos. Focamos em construir fluência e confiança, independentemente do nível inicial. Nunca é tarde para se tornar um falante de inglês confiante.'
  },
  {
    question: 'Qual é o tamanho das turmas?',
    answer: 'Acreditamos na atenção personalizada. Nossas turmas são pequenas, geralmente com um máximo de 5-6 alunos, para garantir que cada criança tenha a oportunidade de interagir diretamente com nossos professores nativos.'
  }
];

interface AccordionItemProps {
    item: FAQItem;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-slate-200">
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full py-5 text-left"
            >
                <span className="text-lg font-semibold text-slate-800">{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="pb-5 text-slate-600">{item.answer}</p>
            </div>
        </div>
    );
}

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Tem perguntas? Nós temos as respostas.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
            {faqData.map((item, index) => (
                <AccordionItem
                    key={index}
                    item={item}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;