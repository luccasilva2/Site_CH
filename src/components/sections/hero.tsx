"use client";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("arsenal-chart");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative flex h-[calc(100vh-3.5rem)] min-h-[600px] w-full flex-col items-center justify-center overflow-hidden text-center"
    >
      <div className="absolute inset-0 -z-10 bg-black/60"></div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        aria-label="Background video of the war"
      />
      <div className="container z-10">
        <h1 className="animate-fade-in-up font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-yellow-400" style={{ animationDelay: '0.2s' }}>
          A Corrida Armamentista
        </h1>
        <h2 className="animate-fade-in-up font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-yellow-400" style={{ animationDelay: '0.4s' }}>
          e o Medo Nuclear
        </h2>
        <p className="mx-auto mt-6 max-w-3xl animate-fade-in-up text-lg text-yellow-400 md:text-xl" style={{ animationDelay: '0.6s' }}>
          Uma exploração visual e interativa da era da Guerra Fria que redefiniu o poder militar e a geopolítica global.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="mt-8 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
          onClick={scrollToNextSection}
        >
          Explorar a Escalada
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
