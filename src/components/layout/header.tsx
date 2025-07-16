import { ThemeToggle } from '@/components/layout/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="mr-4 flex items-center">
          <span className="font-bold font-headline text-yellow-400">Corrida Armamentista e Medo Nuclear</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
