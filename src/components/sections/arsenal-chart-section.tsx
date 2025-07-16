"use client";

import { useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";

const chartData = [
  { year: "1950", usa: 369, ussr: 25 },
  { year: "1960", usa: 18000, ussr: 1600 },
  { year: "1970", usa: 26000, ussr: 11000 },
  { year: "1980", usa: 24000, ussr: 40000 },
  { year: "1990", usa: 22000, ussr: 33000 },
];

const chartConfig = {
  usa: {
    label: "EUA",
    color: "hsl(var(--chart-1))",
  },
  ussr: {
    label: "URSS",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const ArsenalChartSection = () => {
  const [showUSA, setShowUSA] = useState(true);
  const [showUSSR, setShowUSSR] = useState(true);

  return (
    <section id="arsenal-chart" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <Card className="w-full shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">Evolução do Arsenal Nuclear (1950-1990)</CardTitle>
            <CardDescription>
              Uma comparação do número de ogivas nucleares estratégicas entre os Estados Unidos e a União Soviética.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-4 mb-4">
              <Button onClick={() => setShowUSA(!showUSA)} variant={showUSA ? 'default' : 'outline'} className="bg-primary/90 text-primary-foreground hover:bg-primary">
                {showUSA ? "Ocultar EUA" : "Mostrar EUA"}
              </Button>
              <Button onClick={() => setShowUSSR(!showUSSR)} variant={showUSSR ? 'destructive' : 'outline'}>
                {showUSSR ? "Ocultar URSS" : "Mostrar URSS"}
              </Button>
            </div>
            <ChartContainer config={chartConfig} className="aspect-video h-[450px] w-full">
              <ResponsiveContainer>
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} />
                  <YAxis
                    tickFormatter={(value) => (value as number / 1000) + 'k'}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    width={80}
                  />
                  <Tooltip
                    cursor={{ fill: 'hsl(var(--muted))', fillOpacity: 0.5 }}
                    content={<ChartTooltipContent />}
                  />
                  {showUSA && <Area type="monotone" dataKey="usa" fill="var(--color-usa)" stroke="var(--color-usa)" stackId="1" fillOpacity={0.4} />}
                  {showUSSR && <Area type="monotone" dataKey="ussr" fill="var(--color-ussr)" stroke="var(--color-ussr)" stackId="1" fillOpacity={0.4} />}
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ArsenalChartSection;
