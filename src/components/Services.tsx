import { Music, Building2, Package, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Music,
    title: 'Eventi Live Indoor',
    description: 'Service audio completo per concerti, spettacoli teatrali ed eventi corporate in ambienti chiusi. Acustica controllata e resa sonora impeccabile.',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Building2,
    title: 'Eventi Live Outdoor',
    description: 'Sistemi audio professionali per festival, concerti all\'aperto e manifestazioni esterne. Gestione dell\'acustica in spazi aperti con soluzioni innovative.',
    image: 'https://images.pexels.com/photos/7095/people-coffee-notes-tea.jpg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Package,
    title: 'Noleggio Attrezzatura',
    description: 'Parco macchine professionale di ultima generazione. Noleggio con o senza operatore, assistenza tecnica garantita.',
    image: 'https://images.pexels.com/photos/744320/pexels-photo-744320.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Lightbulb,
    title: 'Consulenza Tecnica',
    description: 'Progettazione acustica, studio di fattibilità, training e formazione. Il nostro know-how al servizio del tuo progetto.',
    image: 'https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Services() {
  return (
    <section id="servizi" className="py-32 px-6 bg-dark-bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-orange">I Nostri Servizi</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Competenza tecnica e attenzione al dettaglio per garantire risultati eccellenti in ogni progetto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-dark-bg border border-dark-bg-tertiary rounded-2xl hover:border-primary-orange transition-all duration-300 hover:shadow-xl hover:shadow-primary-orange/10"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 p-8 bg-gradient-to-t from-dark-bg via-dark-bg/90 to-dark-bg/70">
                <div className="mb-6">
                  <service.icon
                    className="text-primary-orange group-hover:scale-110 transition-transform duration-300"
                    size={48}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
