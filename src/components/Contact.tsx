import { Mail, Phone } from 'lucide-react';

export default function Contact() {

  return (
    <section id="contatti" className="py-32 px-6 bg-dark-bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-orange">Contattaci</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Raccontaci il tuo progetto e ti proporremo la soluzione audio perfetta per te
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center">
                <Phone className="text-primary-orange" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Telefono</h3>
                <a href="tel:+393401234567" className="text-gray-400 hover:text-primary-orange transition-colors duration-300">
                  +39 340 123 4567
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center">
                <Mail className="text-primary-orange" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                <a href="mailto:info@eservis.it" className="text-gray-400 hover:text-primary-orange transition-colors duration-300">
                  info@eservis.it
                </a>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-primary-orange font-semibold">Supporto tecnico eventi: 24/7</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
