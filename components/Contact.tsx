import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#FDFDF9] border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest mb-6 font-display text-gray-400">Contatti</p>
            <h2 className="font-display text-6xl md:text-7xl font-normal tracking-tighter mb-8">Parla con noi.</h2>
            <p className="text-base text-gray-500 max-w-sm leading-relaxed">
                Se vuoi saperne di più sul progetto SpinGO, scaricare la documentazione completa o condividere un feedback, scrivici.
            </p>
        </div>

        <div className="lg:col-span-7 lg:pl-12">
            <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative group">
                        <label className="text-[10px] uppercase font-bold text-gray-400 absolute -top-4 left-0 group-focus-within:text-emerald-600 transition-colors">Nome</label>
                        <input type="text" placeholder="Mario" className="w-full text-2xl md:text-3xl py-2 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent font-light text-black placeholder-gray-200 font-display transition-colors" />
                    </div>
                    <div className="relative group">
                        <label className="text-[10px] uppercase font-bold text-gray-400 absolute -top-4 left-0 group-focus-within:text-emerald-600 transition-colors">Cognome</label>
                        <input type="text" placeholder="Rossi" className="w-full text-2xl md:text-3xl py-2 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent font-light text-black placeholder-gray-200 font-display transition-colors" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative group">
                        <label className="text-[10px] uppercase font-bold text-gray-400 absolute -top-4 left-0 group-focus-within:text-emerald-600 transition-colors">Email</label>
                        <input type="email" placeholder="mario@email.com" className="w-full text-2xl md:text-3xl py-2 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent font-light text-black placeholder-gray-200 font-display transition-colors" />
                    </div>
                    <div className="relative group">
                        <label className="text-[10px] uppercase font-bold text-gray-400 absolute -top-4 left-0 group-focus-within:text-emerald-600 transition-colors">Organizzazione</label>
                        <input type="text" placeholder="Azienda / Università" className="w-full text-2xl md:text-3xl py-2 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent font-light text-black placeholder-gray-200 font-display transition-colors" />
                    </div>
                </div>

                <div className="relative mt-8 group">
                    <label className="text-[10px] uppercase font-bold text-gray-400 absolute -top-4 left-0 group-focus-within:text-emerald-600 transition-colors">Messaggio</label>
                    <textarea placeholder="Il tuo messaggio..." rows={2} className="w-full text-2xl md:text-3xl py-2 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent font-light text-black placeholder-gray-200 resize-none h-auto overflow-hidden font-display transition-colors"></textarea>
                </div>

                <div className="pt-8">
                    <button type="button" className="bg-black text-white px-8 py-4 rounded-full text-xs uppercase font-bold tracking-widest flex items-center gap-3 hover:bg-emerald-600 transition-colors">
                        Invia Messaggio
                        <ArrowUpRight className="w-4 h-4 bg-white text-black rounded-full p-0.5" />
                    </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;