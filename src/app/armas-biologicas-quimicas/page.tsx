"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Biohazard, 
  FlaskConical as Flask,
  Skull, 
  Shield, 
  Eye, 
  AlertTriangle,
  TestTube2,
  Beaker,
  Globe
} from 'lucide-react';

export default function ArmasBiologicasQuimicasPage() {
  const [selectedCategory, setSelectedCategory] = useState("biologicas");

  const biologicalWeapons = [
    {
      name: "Antraz",
      type: "Bacteriana",
      description: "Bacillus anthracis - altamente letal por inalação",
      effects: "Febre, dificuldade respiratória, choque séptico",
      mortality: "85-90% sem tratamento",
      countries: ["URSS", "EUA", "Reino Unido"]
    },
    {
      name: "Peste Bubônica",
      type: "Bacteriana", 
      description: "Yersinia pestis - pandemia histórica como arma",
      effects: "Febre, inchaço dos gânglios, septicemia",
      mortality: "30-60% sem tratamento",
      countries: ["URSS", "Japão"]
    },
    {
      name: "Varíola",
      type: "Viral",
      description: "Vírus variola - erradicado mas mantido em laboratórios",
      effects: "Febre alta, erupções cutâneas graves",
      mortality: "30% em adultos",
      countries: ["URSS", "EUA"]
    },
    {
      name: "Tularemia",
      type: "Bacteriana",
      description: "Francisella tularensis - altamente infecciosa",
      effects: "Febre, ulcerações, pneumonia",
      mortality: "5-15% sem tratamento", 
      countries: ["URSS", "EUA"]
    }
  ];

  const chemicalWeapons = [
    {
      name: "Gás Sarin",
      type: "Neurotóxico",
      description: "Agente nervoso de ação rápida",
      effects: "Paralisia respiratória, convulsões, morte em minutos",
      potency: "LD50: 0.5 mg (inalação)",
      countries: ["URSS", "EUA", "Iraque"]
    },
    {
      name: "Gás VX",
      type: "Neurotóxico",
      description: "Agente nervoso persistente mais potente",
      effects: "Morte por paralisia muscular em 10-15 minutos",
      potency: "LD50: 0.14 mg (cutâneo)",
      countries: ["EUA", "URSS"]
    },
    {
      name: "Gás Mostarda",
      type: "Vesicante",
      description: "Causa queimaduras químicas severas",
      effects: "Cegueira, queimaduras, danos pulmonares",
      potency: "Letal em concentrações altas",
      countries: ["Todos os principais países"]
    },
    {
      name: "Agente Laranja",
      type: "Herbicida/Desfolhante",
      description: "Usado como arma química no Vietnam",
      effects: "Câncer, defeitos congênitos, danos ambientais",
      potency: "Contém dioxina altamente tóxica",
      countries: ["EUA"]
    }
  ];

  const treaties = [
    {
      name: "Protocolo de Genebra (1925)",
      description: "Proíbe uso de armas químicas e biológicas",
      status: "Ratificado pela maioria dos países",
      loopholes: "Não proíbe desenvolvimento e armazenamento"
    },
    {
      name: "Convenção de Armas Biológicas (1972)",
      description: "Proíbe desenvolvimento, produção e armazenamento",
      status: "Entrou em vigor em 1975",
      loopholes: "Sem mecanismos de verificação robustos"
    },
    {
      name: "Convenção de Armas Químicas (1993)",
      description: "Proíbe todas as armas químicas com verificação",
      status: "Entrou em vigor em 1997",
      loopholes: "Alguns países não signatários"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-4">
            <Badge variant="secondary" className="bg-green-600 text-white">
              <Biohazard className="w-4 h-4 mr-2" />
              ARSENAL INVISÍVEL
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 to-yellow-500 bg-clip-text text-transparent">
            ARMAS BIOLÓGICAS & QUÍMICAS
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A guerra silenciosa da Guerra Fria: armas de destruição em massa 
            que operam nas sombras, ameaçando populações inteiras sem um único disparo.
          </p>

          <div className="flex justify-center space-x-4">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-4"
              onClick={() => setSelectedCategory("biologicas")}
            >
              <Biohazard className="w-5 h-5 mr-2" />
              BIOLÓGICAS
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-4"
              onClick={() => setSelectedCategory("quimicas")}
            >
              <Flask className="w-5 h-5 mr-2" />
              QUÍMICAS
            </Button>
          </div>
        </div>
      </section>

      {/* Weapons Grid Section */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {selectedCategory === "biologicas" ? "ARMAS BIOLÓGICAS" : "ARMAS QUÍMICAS"}
            </h2>
            <p className="text-xl text-gray-300">
              {selectedCategory === "biologicas" 
                ? "Patógenos desenvolvidos como armas de destruição em massa" 
                : "Agentes químicos projetados para incapacitar ou eliminar"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedCategory === "biologicas" 
              ? biologicalWeapons.map((weapon, index) => (
                  <Card key={index} className="bg-slate-700/50 border-slate-600 text-white backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{weapon.name}</CardTitle>
                        <Badge variant="secondary" className="bg-green-600">
                          {weapon.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{weapon.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Skull className="w-4 h-4 mr-2 text-red-400" />
                          <span className="text-sm">
                            <strong>Efeitos:</strong> {weapon.effects}
                          </span>
                        </div>
                        
                        <div className="flex items-center">
                          <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
                          <span className="text-sm">
                            <strong>Letalidade:</strong> {weapon.mortality}
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
              : chemicalWeapons.map((weapon, index) => (
                  <Card key={index} className="bg-slate-700/50 border-slate-600 text-white backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{weapon.name}</CardTitle>
                        <Badge variant="secondary" className="bg-yellow-600">
                          {weapon.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{weapon.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Skull className="w-4 h-4 mr-2 text-red-400" />
                          <span className="text-sm">
                            <strong>Efeitos:</strong> {weapon.effects}
                          </span>
                        </div>
                        
                        <div className="flex items-center">
                          <Beaker className="w-4 h-4 mr-2 text-red-400" />
                          <span className="text-sm">
                            <strong>Potência:</strong> {weapon.potency}
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
            }
          </div>
        </div>
      </section>

      {/* Treaties Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ACORDOS INTERNACIONAIS
            </h2>
            <p className="text-xl text-gray-300">
              Tentativas de controlar o arsenal invisível da Guerra Fria
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {treaties.map((treaty, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle className="text-xl">{treaty.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-3">{treaty.description}</p>
                  <div className="flex items-center mb-2">
                    <Shield className="w-4 h-4 mr-2 text-green-400" />
                    <span className="text-sm"><strong>Status:</strong> {treaty.status}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="text-sm"><strong>Limitações:</strong> {treaty.loopholes}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Incidents */}
      <section className="py-20 bg-green-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              INCIDENTES HISTÓRICOS
            </h2>
            <p className="text-xl text-gray-300">
              Casos que revelaram o perigo das armas não convencionais
            </p>
          </div>

          <Tabs defaultValue="sw Sverdlovsk" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 mb-8 bg-slate-700">
              <TabsTrigger value="sw Sverdlovsk" className="data-[state=active]:bg-green-600">
                <Biohazard className="w-4 h-4 mr-2" />
                Sverdlovsk
              </TabsTrigger>
              <TabsTrigger value="vietnam" className="data-[state=active]:bg-yellow-600">
                <Flask className="w-4 h-4 mr-2" />
                Vietnam
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="sw Sverdlovsk">
              <Card className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle>Acidente de Sverdlovsk (1979)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Em 2 de abril de 1979, um acidente em uma instalação de armas biológicas 
                    em Sverdlovsk (atual Yekaterinburg) liberou esporos de antraz no ar, 
                    causando pelo menos 64 mortes. O incidente expôs o programa secreto 
                    de armas biológicas da URSS.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Local: Sverdlovsk, URSS (atual Rússia)</li>
                    <li>• Agente: Bacillus anthracis (Antraz)</li>
                    <li>• Vítimas: 64-100 mortes confirmadas</li>
                    <li>• Consequência: Exposição do programa Biopreparat</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="vietnam">
              <Card className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle>Agente Laranja no Vietnam</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Entre 1961-1971, os EUA despejaram milhões de litros de Agent Orange 
                    (Agente Laranja) no Vietnam para destruir florestas e plantações. 
                    O herbicida continha dioxina, causando câncer, defeitos congênitos 
                    e danos ambientais duradouros.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Período: 1961-1971</li>
                    <li>• Quantidade: 76 milhões de litros</li>
                    <li>• Vítimas: 400.000 mortes/defeitos congênitos</li>
                    <li>• Área: 20% das florestas do Vietnam do Sul</li>
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
