import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="text-3xl font-bold text-white font-pacifico">
              Jolly English
            </a>
            <p className="mt-4 text-slate-400 max-w-md">
              Tornando o inglês divertido e acessível para crianças em todo o mundo através de nossas aulas online inovadoras e envolventes.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white tracking-wider uppercase">Links Rápidos</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#courses" className="hover:text-yellow-400 transition-colors">Cursos</a></li>
              <li><a href="#tutors" className="hover:text-yellow-400 transition-colors">Tutores</a></li>
              <li><a href="#testimonials" className="hover:text-yellow-400 transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-yellow-400 transition-colors">Dúvidas</a></li>
              <li><a href="#cta" className="hover:text-yellow-400 transition-colors">Comece Agora</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white tracking-wider uppercase">Conecte-se</h4>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
               <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218 1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zM12 7c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm6-9a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Jolly English Academy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;