import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContatti = () => {
    const element = document.getElementById('contatti');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/95 to-dark-bg z-0"></div>
      <div className="absolute inset-0 opacity-20 z-0">
        <img
          src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Small live concert with band and stage lighting"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-primary-orange">Il tuo evento, il nostro sound</span>
            <br />
            <span className="text-white">L'audio che ti ascolta</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Il sound del tuo evento è la nostra priorità. Mettiamo la nostra esperienza e la nostra empatia al servizio di ogni singola nota, ovunque tu sia
          </p>

          <div className="pt-8">
            <button
              onClick={scrollToContatti}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-orange text-dark-bg text-lg font-semibold rounded-full hover:bg-primary-orange-light transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-orange/50"
            >
              Richiedi la Tua Soluzione Audio Personalizzata
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary-orange">15+</div>
            <div className="text-gray-400">Anni di Esperienza Combinata</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary-orange">50+</div>
            <div className="text-gray-400">Progetti Realizzati</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary-orange">100%</div>
            <div className="text-gray-400">Clienti Soddisfatti</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary-orange">24/7</div>
            <div className="text-gray-400">Supporto Tecnico</div>
          </div>
        </div>
      </div>
    </section>
  );
}
