"use client";

import { ArrowDown } from "lucide-react";
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
      className="relative flex h-[calc(100vh-3.5rem)] min-h-[600px] w-full flex-col items-center justify-center overflow-hidden text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/soviet-flag.jpg')" }}
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container z-10 px-4 relative">
        <h1
          id="hero-title"
          className="animate-fade-in-up font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-yellow-400"
          style={{ animationDelay: "0.2s" }}
        >
          A Corrida Armamentista
        </h1>
        <h2
          className="animate-fade-in-up font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-yellow-400 mt-2"
          style={{ animationDelay: "0.4s" }}
        >
          e o Medo Nuclear
        </h2>
        <p
          className="mx-auto mt-6 max-w-3xl animate-fade-in-up text-base text-yellow-400 md:text-lg lg:text-xl"
          style={{ animationDelay: "0.6s" }}
        >
          Uma exploração visual e interativa da era da Guerra Fria que redefiniu o poder militar e a geopolítica global.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="mt-8 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
          onClick={scrollToNextSection}
          aria-label="Explorar próxima seção sobre arsenal nuclear"
        >
          Explorar a Escalada
          <ArrowDown className="ml-2 h-5 w-5" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
};

export default HeroWithImageBackground;
