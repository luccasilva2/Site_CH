"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield,
  Satellite,
  Zap,
  Skull, 
  Eye, 
  AlertTriangle,
  Rocket,
  Globe,
  Brain,
  DollarSign,
  Microscope
} from 'lucide-react';

export default function DefesaAntinuclearPage() {
  const [selectedCategory, setSelectedCategory] = useState("sdi");

  const sdiComponents = [
    {
      name: "Lasers Espaciais",
      type: "Arma de Energia Direcionada",
      description: "Lasers de raio-X e químicos baseados no espaço para interceptar mísseis",
      status: "Experimental - nunca implementado",
      cost: "US$ 26+ bilhões em pesquisa",
      challenge: "Precisão impossível com tecnologia da época"
    },
    {
      name: "Mirrors de Batalha", 
      description: "Espelhos orbitais para refletir lasers em alvos",
      type: "Sistema de Direcionamento",
      status: "Abandonado - inviável tecnologicamente",
      cost: "Estimativa: US$ 10+ bilhões",
      challenge: "Posicionamento preciso em órbita"
    },
    {
      name: "Interceptor Kinético",
      description: "Mísseis de interceptação terrestres e espaciais",
      type: "Defesa por Impacto",
      status: "Parcialmente desenvolvido (levou ao atual sistema)",
      cost: "US$ 40+ bilhões",
      challenge: "Interceptar ogivas em reentrada a Mach 20+"
    },
    {
      name: "Sensores Avançados",
      description: "Radares e sensores infravermelhos para detecção precoce",
      type: "Sistema de Alerta",
      status: "Implementado parcialmente",
      cost: "US$ 15+ bilhões",
      challenge: "Distinguir ogivas de iscas"
    }
  ];

  const politicalContext = [
    {
      aspect: "Contexto Político",
      description: "Anunciado em 1983 no auge da tensão EUA-URSS",
      details: "Reagan buscava mudar doutrina de \"Destruição Mútua Assegurada\""
    },
    {
      aspect: "Reação Soviética", 
      description: "URSS viu como tentativa de tornar EUA invulnerável",
      details: "Levou a aumento massivo em gastos militares soviéticos"
    },
    {
      aspect: "Crítica Científica",
      description: "Comunidade científica considerou tecnicamente inviável",
      details: "Apelidado de \"Star Wars\" por críticos"
    },
    {
      aspect: "Legado",
      description: "Apesar do fracasso, mudou cálculo estratégico nuclear",
      details: "Levou a tratados de controle de armas e pesquisa em defesa antimísseis"
    }
  ];

  const technicalChallenges = [
    {
      challenge: "Problema do Ovo e da Galinha",
      description: "Sistema precisaria ser perfeito no primeiro uso - sem teste real possível",
      impact: "Impossível verificar eficácia sem guerra nuclear real"
    },
    {
      challenge: "Enxame de Iscas",
      description: "Foguetes podem liberar centenas de iscas que parecem ogivas reais",
      impact: "Sistema teria que distinguir entre alvos reais e falsos em segundos"
    },
    {
      challenge: "Tempo de Reação",
      description: "Apenas 30 minutos desde lançamento até impacto",
      impact: "Decisões de interceptação teriam que ser automatizadas - risco de erro"
    },
    {
      challenge: "Escalabilidade",
      description: "URSS poderia saturar sistema com milhares de mísseis",
      impact: "Custo de defesa muito maior que custo de ofensa"
    }
  ];

  const globalImpact = [
    {
      country: "URSS",
      reaction: "Pânico estratégico - temia perda de dissuasão nuclear",
      action: "Aumentou gastos militares em 15%, acelerou crise econômica",
      consequence: "Contribuiu para colapso soviético"
    },
    {
      country: "Aliados NATO",
      reaction: "Preocupação com desestabilização e \"fortaleza América\"",
      action: "Pressão por consultas e garantias de proteção extendida",
      consequence: "Tensões na aliança transatlântica"
    },
    {
      country: "China",
      reaction: "Preocupação com nova corrida armamentista espacial",
      action: "Acelerou próprio programa nuclear e de mísseis",
      consequence: "Aumento do arsenal nuclear chinês"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-4">
            <Badge variant="secondary" className="bg-blue-600 text-white">
              <Shield className="w-4 h-4 mr-2" />
              ESCUDO ESPACIAL
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            DEFESA ANTINUCLEAR
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            O ambicioso - e polêmico - programa "Guerra nas Estrelas" de Reagan que 
            prometia tornar obsoletas as armas nucleares e quase levou a URSS à falência.
          </p>

          <div className="flex justify-center space-x-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4"
              onClick={() => setSelectedCategory("sdi")}
            >
              <Satellite className="w-5 h-5 mr-2" />
              SDI
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-4"
              onClick={() => setSelectedCategory("politica")}
            >
              <Globe className="w-5 h-5 mr-2" />
              POLÍTICA
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {selectedCategory === "sdi" ? "INICIATIVA DE DEFESA ESTRATÉGICA" : "CONTEXTO POLÍTICO"}
            </h2>
            <p className="text-xl text-gray-300">
              {selectedCategory === "sdi" 
                ? "Componentes tecnológicos do ambicioso escudo antimísseis" 
                : "O impacto geopolítico do programa que mudou a Guerra Fria"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedCategory === "sdi" 
              ? sdiComponents.map((component, index) => (
                  <Card key={index} className="bg-slate-700/50 border-slate-600 text-white backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{component.name}</CardTitle>
                        <Badge variant="secondary" className="bg-blue-600">
                          {component.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{component.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-2 text-yellow-400" />
                          <span className="text-sm">
                            <strong>Status:</strong> {component.status}
                          </span>
                        </div>
                        
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-2 text-green-400" />
                          <span className="text-sm">
                            <strong>Custo:</strong> {component.cost}
                          </span>
                        </div>
                        
                        <div className="flex items-center">
                          <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
                          <span className="text-sm">
                            <strong>Desafio:</strong> {component.challenge}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              : politicalContext.map((item, index) => (
                  <Card key={index} className="bg-slate-700/50 border-slate-600 text-white backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{item.aspect}</CardTitle>
                        <Badge variant="secondary" className="bg-cyan-600">
                          CONTEXTO
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      
                      <div className="flex items-center p-3 bg-blue-900/50 rounded-lg">
                        <Brain className="w-4 h-4 mr-2 text-blue-400" />
                        <span className="text-sm">
                          <strong>Detalhes:</strong> {item.details}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))
            }
          </div>
        </div>
      </section>

      {/* Technical Challenges Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              DESAFIOS TÉCNICOS
            </h2>
            <p className="text-xl text-gray-300">
              Por que muitos cientistas consideraram o SDI impossível
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {technicalChallenges.map((challenge, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Microscope className="w-5 h-5 mr-2 text-blue-400" />
                    {challenge.challenge}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-3">{challenge.description}</p>
                  <div className="flex items-center p-3 bg-red-900/50 rounded-lg">
                    <Skull className="w-4 h-4 mr-2 text-red-400" />
                    <span className="text-sm">
                      <strong>Impacto:</strong> {challenge.impact}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-20 bg-blue-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              IMPACTO GLOBAL
            </h2>
            <p className="text-xl text-gray-300">
              Como o mundo reagiu ao escudo antinuclear americano
            </p>
          </div>

          <Tabs defaultValue="urss" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8 bg-slate-700">
              <TabsTrigger value="urss" className="data-[state=active]:bg-red-600">
                <AlertTriangle className="w-4 h-4 mr-2" />
                URSS
              </TabsTrigger>
              <TabsTrigger value="nato" className="data-[state=active]:bg-blue-600">
                <Shield className="w-4 h-4 mr-2" />
                NATO
              </TabsTrigger>
              <TabsTrigger value="china" className="data-[state=active]:bg-yellow-600">
                <Globe className="w-4 h-4 mr-2" />
                China
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="urss">
              <Card className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle>Reação Soviética ao SDI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    A URSS entrou em pânico com o SDI. Líderes soviéticos temiam que 
                    os EUA se tornassem invulneráveis a retaliação nuclear, destruindo 
                    o equilíbrio de terror que mantinha a paz. A resposta foi acelerar 
                    programas próprios e aumentar gastos militares dramaticamente.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Aumento de 15% no orçamento militar soviético</li>
                    <li>• Desenvolvimento de mísseis MIRV para saturar defesas</li>
                    <li>• Programas próprios de pesquisa antimísseis</li>
                    <li>• Pressão diplomática intensa para abandonar SDI</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="nato">
              <Card className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle>Preocupações dos Aliados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Aliados da NATO ficaram divididos. Enquanto alguns viam proteção 
                    extendida, outros temiam que EUA se tornasse \"fortaleza América\" 
                    abandonando aliados. Houve preocupação com desestabilização e 
                    possível decoupling estratégico.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Reino Unido: Apoio cauteloso com reservas</li>
                    <li>• Alemanha Ocidental: Preocupação com nova corrida armamentista</li>
                    <li>• França: Ceticismo sobre viabilidade técnica</li>
                    <li>• Resultado: Pressão por consultas e garantias de proteção</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="china">
              <Card className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle>Resposta Chinesa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    A China monitorou cuidadosamente o SDI enquanto expandia seu próprio 
                    programa nuclear. Preocupações com possível extensão do escudo para 
                    Ásia levaram a modernização acelerada das forças nucleares chinesas 
                    e desenvolvimento de contramedidas.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Aceleração do programa de mísseis DF-5</li>
                    <li>• Desenvolvimento de ogivas MIRV</li>
                    <li>• Pesquisa em medidas de penetração de defesas</li>
                    <li>• Diplomacia cautelosa evitando confronto direto</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}
