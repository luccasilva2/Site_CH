import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/40 bg-slate-900/50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Corrida Armamentista Nuclear
            </h3>
            <p className="text-gray-400 text-sm">
              Uma exploração visual e educativa sobre a era que redefiniu 
              a geopolítica global através do poder nuclear.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Explorar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  Mapa Interativo
                </Link>
              </li>
              <li>
                <Link href="/tsar-bomba" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                  Tsar Bomba
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  Linha do Tempo
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  Dados Históricos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  Estatísticas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  Documentação
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Site CH. Projeto educacional sobre história nuclear.
          </p>
        </div>
      </div>
    </footer>
  );
}
