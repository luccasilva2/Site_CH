"use client";

import { ArrowDown, Atom, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroWithImageBackground = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("arsenal-chart");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative flex h-[calc(100vh-3.5rem)] min-h-[600px] w-full flex-col items-center justify-center overflow-hidden text-center"
      style={{ 
        background: "linear-gradient(135deg, #1a202c 0%, #2d3748 25%, #4a5568 50%, #2d3748 75%, #1a202c 100%)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 8s ease infinite"
      }}
      aria-labelledby="hero-title"
    >
      {/* Efeito de partículas tecnológicas */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-red-600/20"></div>
      
      {/* Linhas de grade tecnológica */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Elementos decorativos EUA vs URSS */}
      <div className="absolute left-10 top-1/4 opacity-30">
        <div className="w-16 h-16 border-4 border-blue-500 rounded-full flex items-center justify-center">
          <span className="text-blue-500 font-bold text-lg">USA</span>
        </div>
      </div>
      
      <div className="absolute right-10 top-1/4 opacity-30">
        <div className="w-16 h-16 border-4 border-red-500 rounded-full flex items-center justify-center">
          <span className="text-red-500 font-bold text-lg">USSR</span>
        </div>
      </div>

      <div className="container z-10 px-4 relative">
        {/* Título principal com efeito tecnológico */}
        <div className="mb-8">
          <h1
            id="hero-title"
            className="animate-fade-in-up font-mono text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-red-400"
            style={{ animationDelay: "0.2s" }}
          >
            GUERRA FRIA
          </h1>
          <h2
            className="animate-fade-in-up font-mono text-2xl font-bold tracking-wider sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 mt-4"
            style={{ animationDelay: "0.4s" }}
          >
            CORRIDA ARMAMENTISTA
          </h2>
        </div>

        {/* Subtítulo com ícones tecnológicos */}
        <div className="flex items-center justify-center space-x-6 mb-6">
          <Atom className="w-8 h-8 text-blue-400 animate-pulse" />
          <p
            className="mx-auto max-w-3xl animate-fade-in-up text-lg text-gray-300 md:text-xl lg:text-2xl font-mono"
            style={{ animationDelay: "0.6s" }}
          >
            CONFRONTO TECNOLÓGICO • PODER NUCLEAR • ESPIONAGEM
          </p>
          <Zap className="w-8 h-8 text-red-400 animate-pulse" />
        </div>

        {/* Descrição */}
        <p
          className="mx-auto mt-4 max-w-4xl animate-fade-in-up text-base text-gray-400 md:text-lg lg:text-xl"
          style={{ animationDelay: "0.8s" }}
        >
          Uma análise visual da batalha silenciosa que redefiniu os limites do poder militar, 
          da tecnologia e da geopolítica global durante a Guerra Fria.
        </p>

        {/* Botão com estilo tecnológico */}
        <Button
          variant="outline"
          size="lg"
          className="mt-8 animate-fade-in-up bg-transparent border-2 border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-white transition-all duration-300 font-mono"
          style={{ animationDelay: "1.0s" }}
          onClick={scrollToNextSection}
          aria-label="Explorar próxima seção sobre arsenal nuclear"
        >
          <Shield className="mr-2 h-5 w-5" />
          INICIAR EXPLORAÇÃO
          <ArrowDown className="ml-2 h-5 w-5" aria-hidden="true" />
        </Button>
      </div>

    </section>
  );
};

export default HeroWithImageBackground;
