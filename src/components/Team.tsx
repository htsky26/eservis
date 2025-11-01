import { Users } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-32 px-6 bg-dark-bg relative">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Audio mixing console at live concert"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-orange">Chi Siamo</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tre professionisti, un partner unico
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-bg-secondary border border-dark-bg-tertiary rounded-2xl p-12 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-orange/10 rounded-full mb-8">
              <Users className="text-primary-orange" size={48} strokeWidth={1.5} />
            </div>

            <h3 className="text-3xl font-bold mb-6 text-white">
              Un Team, Un'Esperienza Completa
            </h3>

            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              <span className="text-primary-orange font-semibold">e' SERVIS</span> è il risultato dell'unione di tre professionisti del settore audio con oltre 15 anni di esperienza combinata. Ci occupiamo personalmente di ogni fase del progetto: dalla consulenza iniziale alla progettazione, dall'installazione alla manutenzione.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Il nostro approccio è <span className="text-primary-orange font-semibold">diretto e personalizzato</span>. Non subappaltiamo, non deleghiamo. Siamo noi a seguire il tuo progetto dall'inizio alla fine, garantendo massima qualità, controllo e un rapporto di fiducia costruito sulla competenza tecnica e sulla passione per l'audio professionale.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Che si tratti di un evento live, di un'installazione complessa o di una consulenza specialistica, con noi hai un <span className="text-white font-semibold">unico punto di riferimento</span> che si prende cura di ogni dettaglio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary-orange mb-2">Esperienza</div>
              <p className="text-gray-400">Anni di progetti nel settore audio professionale</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary-orange mb-2">Dedizione</div>
              <p className="text-gray-400">Seguiamo personalmente ogni fase del progetto</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary-orange mb-2">Qualità</div>
              <p className="text-gray-400">Standard professionali senza compromessi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
