"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Zap, 
  Radiation, 
  Globe, 
  Clock, 
  Gauge, 
  Target, 
  Atom,
  Layers,
  Shield,
  Eye,
  Flame,
  TestTube,
  Brain
} from 'lucide-react';

export default function BombaHidrogenioPage() {
  const [fusionProgress, setFusionProgress] = useState(0);
  const [isFusing, setIsFusing] = useState(false);

  const startFusionAnimation = () => {
    setIsFusing(true);
    setFusionProgress(0);
    
    const interval = setInterval(() => {
      setFusionProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFusing(false), 2000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const stats = [
    { label: "Tipo", value: "Termonuclear", icon: Atom, description: "Fusão de hidrogênio" },
    { label: "Potência Mínima", value: "100+ Kilotons", icon: Zap, description: "Superior a bombas atômicas" },
    { label: "Eficiência", value: "50-60%", icon: Gauge, description: "Conversão massa-energia" },
    { label: "Temperatura", value: "100 milhões °C", icon: Flame, description: "Núcleo solar em escala" },
    { label: "Desenvolvimento", value: "1952", icon: Clock, description: "Primeiro teste: Ivy Mike" },
    { label: "Combustível", value: "Deutério-Trítio", icon: TestTube, description: "Isótopos de hidrogênio" }
  ];

  const comparisonData = [
    { bomb: "Bomba Atômica (Fissão)", power: 0.02, color: "bg-blue-500", type: "Fissão" },
    { bomb: "Bomba H (Fusão-Ternária)", power: 10.4, color: "bg-purple-500", type: "Fusão" },
    { bomb: "Tsar Bomba (Fusão)", power: 50, color: "bg-red-500", type: "Fusão" },
    { bomb: "Bomba de Nêutrons", power: 1.0, color: "bg-green-500", type: "Fusão" }
  ];

  const maxPower = Math.max(...comparisonData.map(d => d.power));

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-4">
            <Badge variant="secondary" className="bg-purple-600 text-white">
              <Atom className="w-4 h-4 mr-2" />
              REVOLUÇÃO TERMONUCLEAR
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            BOMBA DE HIDROGÊNIO
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A arma que transcendeu a fissão nuclear, liberando o poder das estrelas na Terra 
            e redefinindo permanentemente o conceito de poder destrutivo.
          </p>

          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
            onClick={startFusionAnimation}
          >
            <Flame className="w-6 h-6 mr-2" />
            SIMULAR FUSÃO NUCLEAR
          </Button>
        </div>

        {/* Fusion Progress */}
        {isFusing && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-80">
            <Progress value={fusionProgress} className="w-full" />
            <p className="text-white text-center mt-2">
              Reação de fusão em progresso: {fusionProgress}%
            </p>
          </div>
        )}
      </section>

      {/* Stats Grid Section */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              CIÊNCIA DA FUSÃO
            </h2>
            <p className="text-xl text-gray-300">
              Domando o poder que alimenta o Sol e as estrelas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-slate-700/50 border-slate-600 text-white backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-2xl">{stat.label}</CardTitle>
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {stat.value}
                  </div>
                  <CardDescription className="text-gray-300">
                    {stat.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              EVOLUÇÃO DO PODER NUCLEAR
            </h2>
            <p className="text-xl text-gray-300">
              Da fissão à fusão: um salto quântico em poder destrutivo
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {comparisonData.map((item) => (
              <div key={item.bomb} className="flex items-center space-x-4">
                <div className="w-60 text-right">
                  <span className="text-white font-semibold">{item.bomb}</span>
                  <br />
                  <span className="text-gray-400 text-sm">{item.type}</span>
                  <br />
                  <span className="text-gray-400">{item.power} Megatons</span>
                </div>
                
                <div className="flex-1 bg-slate-700 rounded-full h-8 overflow-hidden">
                  <div 
                    className={`h-full ${item.color} rounded-full flex items-center justify-end pr-4 transition-all duration-1000`}
                    style={{ width: `${(item.power / maxPower) * 100}%` }}
                  >
                    <span className="text-white text-sm font-bold">
                      {item.power} MT
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details Tabs */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              MECANISMO DA FUSÃO
            </h2>
            <p className="text-xl text-gray-300">
              Como funciona a arma mais avançada já concebida
            </p>
          </div>

          <Tabs defaultValue="principle" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8 bg-slate-700">
              <TabsTrigger value="principle" className="data-[state=active]:bg-purple-600">
                <Brain className="w-4 h-4 mr-2" />
                Princípio
              </TabsTrigger>
              <TabsTrigger value="design" className="data-[state=active]:bg-purple-600">
                <Atom className="w-4 h-4 mr-2" />
                Design
              </TabsTrigger>
              <TabsTrigger value="impact" className="data-[state=active]:bg-purple-600">
                <Globe className="w-4 h-4 mr-2" />
                Impacto
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="principle">
              <Card className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle>Fusão Nuclear Controlada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Diferente das bombas atômicas que usam fissão nuclear, a bomba de hidrogênio 
                    utiliza fusão nuclear - o mesmo processo que alimenta o Sol. A fusão ocorre 
                    quando núcleos atômicos leves se combinam para formar núcleos mais pesados, 
                    liberando quantidades colossais de energia.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Reação primária: Fissão (para iniciar o processo)</li>
                    <li>• Reação secundária: Fusão de deutério e trítio</li>
                    <li>• Temperatura: 100 milhões de graus Celsius</li>
                    <li>• Pressão: Extremidades inimagináveis</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="design">
              <Card className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle>Design Teller-Ulam</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    O design revolucionário concebido por Edward Teller e Stanislaw Ulam utiliza 
                    uma bomba de fissão como "gatilho" para comprimir e aquecer o combustível 
                    de fusão. Esta configuração em estágios permite potências praticamente ilimitadas.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Estágio 1: Bomba de fissão (gatilho)</li>
                    <li>• Estágio 2: Compressão do combustível de fusão</li>
                    <li>• Estágio 3: Reação de fusão em cadeia</li>
                    <li>• Estágio 4 (opcional): Fusão-fissão adicional</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="impact">
              <Card className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle>Impacto Estratégico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    A bomba de hidrogênio representou um ponto de inflexão na Guerra Fria. 
                    Seu desenvolvimento demonstrou que potências nucleares poderiam criar 
                    armas com poder destrutivo orders of magnitude maior que as bombas 
                    atômicas originais, elevando as apostas do conflito global.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Dissuasão nuclear amplificada</li>
                    <li>• Corrida armamentista acelerada</li>
                    <li>• Desenvolvimento de mísseis balísticos</li>
                    <li>• Estratégia de "Destruição Mútua Assegurada"</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-20 bg-purple-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              LINHA DO TEMPO HISTÓRICA
            </h2>
            <p className="text-xl text-gray-300">
              Marcos no desenvolvimento das armas termonucleares
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-purple-400 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-bold text-white">1952</h3>
                <p className="text-gray-300">EUA testam Ivy Mike - primeira bomba H (10.4 MT)</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-purple-400 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-bold text-white">1953</h3>
                <p className="text-gray-300">URSS testa sua primeira bomba H</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-purple-400 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-bold text-white">1954</h3>
                <p className="text-gray-300">Teste Castle Bravo (15 MT) - maior teste dos EUA</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-purple-400 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-bold text-white">1961</h3>
                <p className="text-gray-300">URSS testa Tsar Bomba (50 MT) - maior arma nuclear</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
