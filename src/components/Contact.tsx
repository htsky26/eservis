import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center">
                <MapPin className="text-primary-orange" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Sede</h3>
                <p className="text-gray-400">
                  Via dell'Audio Professionale, 1<br />
                  20100 Milano, Italia
                </p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Orari di Apertura</h3>
              <div className="space-y-2 text-gray-400">
                <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                <p>Sabato: 9:00 - 13:00</p>
                <p>Domenica: Chiuso</p>
                <p className="text-primary-orange font-semibold pt-2">Supporto tecnico eventi: 24/7</p>
              </div>
            </div>
          </div>

          <div className="bg-dark-bg border border-dark-bg-tertiary rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg-secondary border border-dark-bg-tertiary rounded-lg focus:outline-none focus:border-primary-orange transition-colors duration-300 text-white"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg-secondary border border-dark-bg-tertiary rounded-lg focus:outline-none focus:border-primary-orange transition-colors duration-300 text-white"
                  placeholder="mario.rossi@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
                  Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg-secondary border border-dark-bg-tertiary rounded-lg focus:outline-none focus:border-primary-orange transition-colors duration-300 text-white"
                  placeholder="+39 340 123 4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-bg-secondary border border-dark-bg-tertiary rounded-lg focus:outline-none focus:border-primary-orange transition-colors duration-300 text-white resize-none"
                  placeholder="Descrivi il tuo progetto o le tue esigenze..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary-orange text-dark-bg font-semibold rounded-lg hover:bg-primary-orange-light transition-all duration-300 hover:scale-105"
              >
                Invia Richiesta
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
