import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bomb, Shield, Swords } from "lucide-react";

const timelineEvents = [
    {
        year: "1962",
        title: "Crise dos Mísseis de Cuba",
        description: "O mundo chega à beira de uma guerra nuclear quando a URSS instala mísseis em Cuba, levando a um tenso confronto de 13 dias com os EUA.",
        icon: Bomb,
    },
    {
        year: "1972",
        title: "Tratado SALT I",
        description: "Os EUA e a URSS assinam o primeiro Tratado de Limitação de Armas Estratégicas, congelando o número de lançadores de mísseis balísticos.",
        icon: Swords,
    },
    {
        year: "1983",
        title: "Programa 'Star Wars'",
        description: "O presidente Reagan anuncia a Iniciativa de Defesa Estratégica (SDI), um sistema de defesa antimísseis baseado no espaço, apelidado de 'Guerra nas Estrelas'.",
        icon: Shield,
    },
];

const TimelineSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Momentos Críticos da Guerra Fria</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Eventos chave que escalaram ou diminuíram as tensões nucleares.
            </p>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative pl-12 pb-8">
              <div className="absolute left-4 top-2 z-10 -translate-x-1/2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground border-4 border-background">
                  <event.icon className="h-4 w-4" />
                </div>
              </div>
              <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <p className="text-sm text-muted-foreground">{event.year}</p>
                  <CardTitle className="font-headline">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
