import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Skull, BrainCircuit } from "lucide-react";

const facts = [
  {
    icon: Skull,
    title: "Aniquilação Global",
    description: "Apenas uma fração do arsenal nuclear combinado (cerca de 100 ogivas) seria suficiente para causar um 'inverno nuclear' e devastar o planeta.",
  },
  {
    icon: BrainCircuit,
    title: "O 'Dead Hand' Soviético",
    description: "Um sistema de controle de armas nucleares 'à prova de falhas' que poderia lançar mísseis automaticamente se detectasse um ataque nuclear, mesmo com a liderança eliminada.",
  },
  {
    icon: Globe,
    title: "Pico do Arsenal",
    description: "No auge da Guerra Fria, em meados da década de 1980, o mundo possuía um arsenal estimado em mais de 60.000 ogivas nucleares.",
  },
];

const FactsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Fatos Impactantes</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Curiosidades e informações que revelam a escala da ameaça nuclear.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <Card key={index} className="flex flex-col text-center items-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <CardHeader className="items-center">
                <div className="p-4 rounded-full bg-primary/10 mb-4">
                  <fact.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="font-headline">{fact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
