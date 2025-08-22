import { ThemeToggle } from '@/components/layout/theme-toggle';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="mr-4 flex items-center">
          <Link href="/" className="font-bold font-headline text-yellow-400 hover:text-yellow-300 transition-colors">
            Corrida Armamentista e Medo Nuclear
          </Link>
        </div>
        
        <nav className="flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Início
          </Link>
          <Link 
            href="/tsar-bomba" 
            className="text-sm font-medium text-red-400 hover:text-red-300 transition-colors"
          >
            Tsar Bomba
          </Link>
          <Link 
            href="/bomba-hidrogenio" 
            className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
          >
            Bomba H
          </Link>
          <Link 
            href="/armas-biologicas-quimicas" 
            className="text-sm font-medium text-green-400 hover:text-green-300 transition-colors"
          >
            Armas B/Q
          </Link>
          <Link 
            href="/armas-nucleares-taticas" 
            className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            Armas Táticas
          </Link>
          <Link 
            href="/propaganda-medo" 
            className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
          >
            Propaganda
          </Link>
          <Link 
            href="/defesa-antinuclear" 
            className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Defesa
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
