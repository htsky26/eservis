export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-dark-bg-tertiary py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-orange mb-4">e' SERVIS</h3>
            <p className="text-gray-400 leading-relaxed">
              Service audio professionale per eventi live e installazioni permanenti. /n Competenza tecnica e soluzioni su misura.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary-orange transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary-orange transition-colors duration-300"
                >
                  Servizi
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary-orange transition-colors duration-300"
                >
                  Chi Siamo
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary-orange transition-colors duration-300"
                >
                  Contatti
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contatti</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Via dell'Audio Professionale, 1</li>
              <li>20100 Milano, Italia</li>
              <li className="pt-2">
                <a href="tel:+393401234567" className="hover:text-primary-orange transition-colors duration-300">
                  +39 340 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:info@eservis.it" className="hover:text-primary-orange transition-colors duration-300">
                  info@eservis.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-bg-tertiary pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} e' SERVIS. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
