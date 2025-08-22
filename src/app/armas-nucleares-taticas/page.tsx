"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bomb, 
  Radiation,
  Skull, 
  Shield, 
  Eye, 
  AlertTriangle,
  Target,
  Crosshair,
  Globe,
  Zap
} from 'lucide-react';

export default function ArmasNuclearesTaticasPage() {
  const [selectedCategory, setSelectedCategory] = useState("tipos");

  const tacticalWeapons = [
    {
      name: "Míssil Lance",
      type: "Míssil Tático",
      description: "Míssil nuclear tático de curto alcance dos EUA",
      yield: "1-100 quilotons",
      range: "120 km",
      effects: "Destruição localizada, contaminação radioativa",
      countries: ["EUA", "NATO"]
    },
    {
      name: "Projeto Davy Crockett",
      type: "Arma de Infantaria", 
      description: "Lançador nuclear portátil mais pequeno já desenvolvido",
      yield: "0.01-0.02 quilotons",
      range: "2-4 km",
      effects: "Destruição em pequena escala, radiação letal",
      countries: ["EUA"]
    },
    {
      name: "SS-21 Scarab",
      type: "Míssil Balístico",
      description: "Míssil tático soviético de alta precisão",
      yield: "10-100 quilotons",
      range: "70-120 km",
      effects: "Ataque cirúrgico, dano colateral reduzido",
      countries: ["URSS", "Rússia"]
    },
    {
      name: "Bomba de Nêutrons",
      type: "Arma de Radiação",
      description: "Projetada para maximizar radiação e minimizar destruição física",
      yield: "1-10 quilotons",
      range: "Efeito localizado",
      effects: "Morte por radiação, estruturas preservadas",
      countries: ["EUA", "URSS"]
    }
  ];

  const deploymentScenarios = [
    {
      name: "Fulda Gap",
      description: "Cenário de defesa da Europa Ocidental contra avanço soviético",
      location: "Alemanha Ocidental",
      weapons: "Mísseis Lance, artilharia nuclear",
      risk: "Escalada nuclear rápida para conflito total"
    },
    {
      name: "Coreia do Norte",
      description: "Defesa contra invasão massiva através do paralelo 38",
      location: "Península Coreana",
      weapons: "Armas táticas americanas e sul-coreanas",
      risk: "Contaminação radioativa de áreas densamente povoadas"
    },
    {
      name: "Mar Báltico",
      description: "Confronto naval NATO-URSS em águas restritas",
      location: "Mar Báltico",
      weapons: "Mísseis navais, cargas de profundidade nucleares",
      risk: "Contaminação marinha e costeira em larga escala"
    }
  ];

  const dangers = [
    {
      title: "Limiar Nuclear Baixo",
      description: "Armas 'pequenas' tornam o uso nuclear mais provável",
      consequence: "Rompe o tabu do não-uso de armas nucleares desde 1945"
    },
    {
      title: "Escalada Descontrolada",
      description: "Uso tático pode levar a resposta estratégica total",
      consequence: "Risco de guerra nuclear completa por erro de cálculo"
    },
    {
      title: "Contaminação Local",
      description: "Mesmo armas pequenas criam zonas inabitáveis",
      consequence: "Deslocamento populacional e crise humanitária"
    },
    {
      title: "Erro de Classificação",
      description: "Difícil distinguir ataque tático de estratégico",
      consequence: "Resposta desproporcional e escalada automática"
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
              <Bomb className="w-4 h-4 mr-2" />
              O PERIGO INVISÍVEL
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            ARMAS NUCLEARES TÁTICAS
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            As "pequenas" bombas que tornavam a guerra nuclear pensável - 
            e por isso mesmo, muito mais perigosa durante a Guerra Fria.
          </p>

          <div className="flex justify-center space-x-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4"
              onClick={() => setSelectedCategory("tipos")}
            >
              <Target className="w-5 h-5 mr-2" />
              TIPOS
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-4"
              onClick={() => setSelectedCategory("cenarios")}
            >
              <Crosshair className="w-5 h-5 mr-2" />
              CENÁRIOS
            </Button>
          </div>
        </div>
      </section>

      {/* Weapons Grid Section */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {selectedCategory === "tipos" ? "TIPOS DE ARMAS TÁTICAS" : "CENÁRIOS DE EMPREGO"}
            </h2>
            <p className="text-xl text-gray-300">
              {selectedCategory === "tipos" 
                ? "Armas nucleares projetadas para uso em campo de batalha" 
                : "Situações onde armas táticas poderiam ser utilizadas"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedCategory === "tipos" 
              ? tacticalWeapons.map((weapon, index) => (
                  <Card key={index} className="bg-slate-700/50 border-slate-600 text-white backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{weapon.name}</CardTitle>
                        <Badge variant="secondary" className="bg-blue-600">
                          {weapon.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{weapon.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                          <span className="text-sm">
                            <strong>Potência:</strong> {weapon.yield}
                          </span>
                        </div>
                        
                        <div className="flex items-center">
                          <Target className="w-4 h-4 mr-2 text-red-400" />
                          <span className="text-sm">
                            <strong>Alcance:</strong> {weapon.range}
                          </span>
                        </div>
                        
                        <div className="flex items-center">
                          <Radiation className="w-4 h-4 mr-2 text-green-400" />
                          <span className="text-sm">
                            <strong>Efeitos:</strong> {weapon.effects}
                          </span>
                        </div>
                        
                        <div className="flex items-center">
                          <Globe className="w-4 h-4 mr-2 text-blue-400" />
                          <span className="text-sm">
                            <strong>Países:</strong> {weapon.countries.join(", ")}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              : deploymentScenarios.map((scenario, index) => (
                  <Card key={index} className="bg-slate-700/50 border-slate-600 text-white backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{scenario.name}</CardTitle>
                        <Badge variant="secondary" className="bg-cyan-600">
                          CENÁRIO
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{scenario.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Crosshair className="w-4 h-4 mr-2 text-yellow-400" />
                          <span className="text-sm">
                            <strong>Localização:</strong> {scenario.location}
                          </span>
                        </div>
                        
                        <div className="flex items-center">
                          <Bomb className="w-4 h-4 mr-2 text-red-400" />
                          <span className="text-sm">
                            <strong>Armas:</strong> {scenario.weapons}
                          </span>
                        </div>
                        
                        <div className="flex items-center">
                          <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
                          <span className="text-sm">
                            <strong>Risco:</strong> {scenario.risk}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
            }
          </div>
        </div>
      </section>

      {/* Dangers Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              O PERIGO REAL
            </h2>
            <p className="text-xl text-gray-300">
              Por que armas nucleares "pequenas" eram tão perigosas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {dangers.map((danger, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                    {danger.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-3">{danger.description}</p>
                  <div className="flex items-center p-3 bg-red-900/50 rounded-lg">
                    <Skull className="w-4 h-4 mr-2 text-red-400" />
                    <span className="text-sm">
                      <strong>Consequência:</strong> {danger.consequence}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Context */}
      <section className="py-20 bg-blue-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              CONTEXTO HISTÓRICO
            </h2>
            <p className="text-xl text-gray-300">
              A doutrina nuclear que quase levou ao abismo
            </p>
          </div>

          <Tabs defaultValue="flexible" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 mb-8 bg-slate-700">
              <TabsTrigger value="flexible" className="data-[state=active]:bg-blue-600">
                <Zap className="w-4 h-4 mr-2" />
                Resposta Flexível
              </TabsTrigger>
              <TabsTrigger value="escalation" className="data-[state=active]:bg-cyan-600">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Escada de Escalada
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="flexible">
              <Card className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle>Doutrina de Resposta Flexível (1960s)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Desenvolvida pela NATO, esta doutrina previa o uso gradual de força, 
                    começando com armas convencionais e escalando para nucleares táticos 
                    se necessário. A ideia era dar opções entre rendição e aniquilação total.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Criada para contrapor a superioridade convencional soviética</li>
                    <li>• Primeiro uso: Crise dos Mísseis de Cuba (1962)</li>
                    <li>• Implementada oficialmente em 1967</li>
                    <li>• Criticada por tornar a guerra nuclear "pensável"</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="escalation">
              <Card className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle>A Escada de Escalada Nuclear</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Teoria desenvolvida por Herman Kahn que descrevia 44 degraus de escalada 
                    nuclear, desde crise diplomática até guerra total. As armas táticas 
                    ocupavam os degraus intermediários, criando uma "escada" que poderia 
                    ser subida rapidamente.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Degrau 15: Uso demonstrativo de arma nuclear</li>
                    <li>• Degrau 22: Ataque nuclear tático local</li>
                    <li>• Degrau 27: Ataque nuclear tático em larga escala</li>
                    <li>• Degrau 44: Guerra nuclear espasmódica</li>
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
