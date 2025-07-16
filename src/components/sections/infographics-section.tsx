"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, LabelList } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    name: "Little Boy (Hiroshima)",
    power: 15,
    fill: "hsl(var(--chart-1))"
  },
  {
    name: "W88 (Moderna)",
    power: 475,
    fill: "hsl(var(--chart-2))"
  },
];

const InfographicsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Poder Destrutivo em Perspectiva</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Comparação do poder explosivo em quilotons (milhares de toneladas de TNT).
            </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Comparativo de Potência: Hiroshima vs. Ogiva Moderna</CardTitle>
              <CardDescription>Uma única ogiva W88 moderna tem mais de 30 vezes o poder da bomba lançada sobre Hiroshima.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} layout="vertical" margin={{ left: 20, right: 50 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" fontSize={12} width={150} />
                    <Tooltip cursor={{fill: 'hsl(var(--muted))'}} contentStyle={{background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))'}}/>
                    <Bar dataKey="power" radius={[4, 4, 4, 4]} >
                       <LabelList dataKey="power" position="right" offset={10} className="fill-foreground" formatter={(value: number) => `${value} kT`} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfographicsSection;
