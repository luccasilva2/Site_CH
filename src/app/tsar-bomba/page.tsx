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
  Eye
} from 'lucide-react';

export default function TsarBombaPage() {
  const [explosionProgress, setExplosionProgress] = useState(0);
  const [isExploding, setIsExploding] = useState(false);

  const startExplosionAnimation = () => {
    setIsExploding(true);
    setExplosionProgress(0);
    
    const interval = setInterval(() => {
      setExplosionProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExploding(false), 2000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const stats = [
    { label: "Potência", value: "50 Megatons", icon: Zap, description: "3.800x Hiroshima" },
    { label: "Altura da Nuvem", value: "64 km", icon: Layers, description: "7x Monte Everest" },
    { label: "Raio de Destruição", value: "35 km", icon: Target, description: "Destruição total" },
    { label: "Raio de Queimaduras", value: "100 km", icon: Radiation, description: "Queimaduras de 3º grau" },
    { label: "Duração do Teste", value: "30 minutos", icon: Clock, description: "Preparação e detonação" },
    { label: "Peso", value: "27 toneladas", icon: Gauge, description: "8 metros de comprimento" }
  ];

  const comparisonData = [
    { bomb: "Little Boy (Hiroshima)", power: 0.015, color: "bg-blue-500" },
    { bomb: "Fat Man (Nagasaki)", power: 0.021, color: "bg-green-500" },
    { bomb: "Ivy Mike (EUA)", power: 10.4, color: "bg-purple-500" },
    { bomb: "Tsar Bomba (URSS)", power: 50, color: "bg-red-500" }
  ];

  const maxPower = Math.max(...comparisonData.map(d => d.power));

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-4">
            <Badge variant="secondary" className="bg-red-500 text-white">
              <Radiation className="w-4 h-4 mr-2" />
              MAIOR ARMA NUCLEAR DA HISTÓRIA
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            TSAR BOMBA
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A detonação mais poderosa já realizada pela humanidade. 
            Um marco aterrorizante na corrida armamentista nuclear que redefiniu os limites do poder destrutivo.
          </p>

          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
            onClick={startExplosionAnimation}
          >
            <Zap className="w-6 h-6 mr-2" />
            SIMULAR EXPLOSÃO
          </Button>
        </div>

        {/* Explosion Progress */}
        {isExploding && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-80">
            <Progress value={explosionProgress} className="w-full bg-red-800 [&>div]:bg-red-500" />
            <p className="text-white text-center mt-2">
              Simulação em progresso: {explosionProgress}%
            </p>
          </div>
        )}
      </section>

      {/* Stats Grid Section */}
      <section className="py-20 bg-red-800/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ESTATÍSTICAS COLOSSAIS
            </h2>
            <p className="text-xl text-gray-300">
              Números que demonstram o poder incompreensível desta arma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-red-900/30 border-red-700 text-white backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-2xl">{stat.label}</CardTitle>
                  <stat.icon className="w-8 h-8 text-red-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-400 mb-2">
                    {stat.value}
                  </div>
                  <CardDescription className="text-red-200">
                    {stat.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-red-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              COMPARAÇÃO DE POTÊNCIA
            </h2>
            <p className="text-xl text-gray-300">
              Como a Tsar Bomba se compara a outras armas nucleares
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {comparisonData.map((item) => (
              <div key={item.bomb} className="flex items-center space-x-4">
                <div className="w-48 text-right">
                  <span className="text-white font-semibold">{item.bomb}</span>
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
      <section className="py-20 bg-red-800/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              DETALHES TÉCNICOS
            </h2>
            <p className="text-xl text-gray-300">
              A ciência por trás da arma mais poderosa já criada
            </p>
          </div>

          <Tabs defaultValue="design" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8 bg-red-800">
              <TabsTrigger value="design" className="data-[state=active]:bg-red-600">
                <Atom className="w-4 h-4 mr-2" />
                Design
              </TabsTrigger>
              <TabsTrigger value="test" className="data-[state=active]:bg-red-600">
                <Eye className="w-4 h-4 mr-2" />
                Teste
              </TabsTrigger>
              <TabsTrigger value="impact" className="data-[state=active]:bg-red-600">
                <Globe className="w-4 h-4 mr-2" />
                Impacto
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="design">
              <Card className="bg-red-900/30 border-red-700 text-white">
                <CardHeader>
                  <CardTitle>Design Revolucionário</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    A Tsar Bomba utilizou um design de três estágios (fissão-fusão-fissão) 
                    que permitiu alcançar potências nunca antes vistas. Originalmente projetada 
                    para 100 megatons, foi reduzida para 50 megatons para minimizar a precipitação radioativa.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Peso: 27 toneladas</li>
                    <li>• Comprimento: 8 metros</li>
                    <li>• Diámetro: 2,1 metros</li>
                    <li>• Design: Bomba de hidrogênio de três estágios</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="test">
              <Card className="bg-red-900/30 border-red-700 text-white">
                <CardHeader>
                  <CardTitle>Teste Nuclear</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    O teste ocorreu em 30 de outubro de 1961, no Arquipélago de Novaya Zemlya, 
                    no Ártico russo. A bomba foi lançada de um bombardeiro Tu-95 modificado e 
                    detonada a 4.000 metros de altitude.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Data: 30 de Outubro de 1961</li>
                    <li>• Local: Novaya Zemlya, URSS</li>
                    <li>• Altura de detonação: 4.000 metros</li>
                    <li>• Bombardeiro: Tupolev Tu-95V modificado</li>
                    <li>• Distância de segurança: 45 km do epicentro</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="impact">
              <Card className="bg-red-900/30 border-red-700 text-white">
                <CardHeader>
                  <CardTitle>Impacto Global</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    A Tsar Bomba representou o ápice da corrida armamentista nuclear e teve 
                    profundas implicações geopolíticas. Seu teste demonstrou que a URSS 
                    possuía capacidade tecnológica para produzir armas de destruição em massa 
                    em escala previously unimaginável.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Ondas sísmicas detectadas em todo o mundo</li>
                    <li>• Nuvem radioativa alcançou a estratosfera</li>
                    <li>• Pressão atmosférica sentida a 1.000 km de distância</li>
                    <li>• Acelerou negociações de controle de armas nucleares</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-red-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            UM AVISO PARA A HUMANIDADE
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A Tsar Bomba permanece como um lembrete solene do poder destrutivo que a humanidade 
            é capaz de criar e da importância crucial da paz e do controle de armamentos.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-red-900 hover:bg-gray-200">
            <Shield className="w-6 h-6 mr-2" />
            SAIBA MAIS SOBRE DESARMAMENTO
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
