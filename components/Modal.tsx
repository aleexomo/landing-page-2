
import React, { useState } from 'react';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    email: '',
    childAge: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      // Use the new, clean API endpoint. Netlify will handle the rest.
      const response = await fetch('/api/send-welcome-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Algo deu errado. Por favor, tente novamente.");
      }
      
      console.log('Formulário Enviado:', formData);
      setIsSubmitted(true);

    } catch (err) {
      setError('Falha ao enviar o formulário. Por favor, verifique seus dados e tente novamente.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent("Eu me inscrevi, por favor me adicione ao grupo do WhatsApp.");
  const whatsappUrl = `https://wa.me/5511948853088?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 bg-slate-900 bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-lg relative transform transition-all" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {!isSubmitted ? (
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center mb-2">Comece Seu Mês Grátis!</h2>
            <p className="text-center text-slate-600 mb-8">Apenas alguns detalhes para começar. Não é necessário cartão de crédito.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="parentName" className="block text-sm font-medium text-slate-700">Nome do Responsável</label>
                <input type="text" name="parentName" id="parentName" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={handleInputChange} value={formData.parentName} disabled={isSubmitting}/>
              </div>
              <div>
                <label htmlFor="childName" className="block text-sm font-medium text-slate-700">Nome da Criança</label>
                <input type="text" name="childName" id="childName" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={handleInputChange} value={formData.childName} disabled={isSubmitting}/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Endereço de Email</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={handleInputChange} value={formData.email} disabled={isSubmitting}/>
              </div>
              <div>
                <label htmlFor="childAge" className="block text-sm font-medium text-slate-700">Idade da Criança</label>
                <input type="number" name="childAge" id="childAge" min="7" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={handleInputChange} value={formData.childAge} disabled={isSubmitting}/>
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}
              
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-all shadow-lg text-lg flex items-center justify-center disabled:bg-blue-400" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  'Garantir Meu Mês Grátis'
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Bem-vindo(a) a Bordo!</h2>
            <p className="text-slate-600 mb-6">Obrigado por se registrar! Você receberá um email com seus dados de login e horários de aula em até 72 horas.</p>
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-all shadow-lg"
            >
              Entre no nosso Grupo do WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
    