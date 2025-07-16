'use client';

import { useState } from 'react';
import { reinterpretData, ReinterpretDataOutput } from '@/ai/flows/data-reinterpretation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

const arsenalData = [
  { year: "1950", usa: 369, ussr: 25 },
  { year: "1960", usa: 18000, ussr: 1600 },
  { year: "1970", usa: 26000, ussr: 11000 },
  { year: "1980", usa: 24000, ussr: 40000 },
  { year: "1990", usa: 22000, ussr: 33000 },
];

const ReinterpretationSection = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ReinterpretDataOutput | null>(null);
  const { toast } = useToast();

  async function handleReinterpret() {
    setLoading(true);
    setResult(null);
    try {
      const output = await reinterpretData({
        datasetDescription: 'Evolução do arsenal nuclear dos EUA e URSS entre 1950 e 1990.',
        datasetJson: JSON.stringify(arsenalData),
        userRequest: 'Sugira maneiras criativas de visualizar a rivalidade e o perigo implícito nesses números, para além de um simples gráfico de linhas.'
      });
      setResult(output);
    } catch (e: any) {
      toast({
        variant: "destructive",
        title: "Erro de IA",
        description: "Ocorreu um erro ao gerar novas perspectivas. Tente novamente.",
      })
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <Card className="text-center shadow-lg">
          <CardHeader>
            <div className="mx-auto mb-4 w-fit rounded-full bg-primary/10 p-4">
              <Wand2 className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Reinterprete os Dados com IA</CardTitle>
            <CardDescription className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Cansado do mesmo gráfico? Use IA para descobrir novas formas de visualizar a história da corrida armamentista.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" onClick={handleReinterpret} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Gerando Ideias...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Sugerir Novas Visualizações
                </>
              )}
            </Button>
            
            {result && (
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {result.alternativeVisualizations.map((vis, index) => (
                  <Card key={index} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <CardHeader>
                      <CardTitle className="font-headline">{vis.visualizationType}</CardTitle>
                      <CardDescription>{vis.perspectiveDescription}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="font-semibold mb-2">Justificativa:</h4>
                        <p className="text-sm text-muted-foreground mb-4">{vis.justification}</p>
                        <h4 className="font-semibold mb-2">Mapeamento de Dados:</h4>
                        <p className="text-sm text-muted-foreground">{vis.dataMappingSuggestions}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReinterpretationSection;
