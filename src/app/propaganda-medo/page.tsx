"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Megaphone, 
  Brain,
  Skull, 
  Shield,   
  Eye, 
  AlertTriangle,
  Tv,
  Newspaper,
  Radio,
  Film,
  BookOpen,
  Globe
} from 'lucide-react';

export default function PropagandaMedoPage() {
  const [selectedCategory, setSelectedCategory] = useState("tecnicas");

  const propagandaTechniques = [
    {
      name: "Criação do Inimigo",
      description: "Desumanização do adversário para justificar preparação militar",
      examples: "URSS = \"Império do Mal\", EUA = \"Capitalistas Imperialistas\"",
      effectiveness: "Alta - cria consentimento popular para gastos militares",
      countries: ["EUA", "URSS"]
    },
    {
      name: "Medo do Aniquilamento", 
      description: "Uso do medo nuclear para manter população em estado de alerta",
      examples: "Filmes apocalípticos, drills escolares, alertas de ataque",
      effectiveness: "Muito Alta - gera apoio incondicional às políticas de defesa",
      countries: ["EUA", "URSS", "Reino Unido"]
    },
    {
      name: "Superioridade Moral",
      description: "Apresentar próprio lado como defensores da liberdade/civilização",
      examples: "\"Mundo Livre\" vs \"Tirania Comunista\"",
      effectiveness: "Alta - justifica qualquer ação como necessária",
      countries: ["EUA", "URSS"]
    },
    {
      name: "Culto ao Segredo",
      description: "Mistificar tecnologia militar para criar aura de invencibilidade",
      examples: "Programas secretos, vazamentos controlados, silêncio oficial",
      effectiveness: "Média - alimenta especulação e medo no adversário",
      countries: ["EUA", "URSS"]
    }
  ];

  const mediaExamples = [
    {
      title: "Duck and Cover (1951)",
      type: "Filme Educacional",
      country: "EUA",
      description: "Animação que ensinava crianças a se protegerem de ataques nucleares",
      impact: "Normalizou a ameaça nuclear para uma geração inteira"
    },
    {
      title: "Pravda e Izvestia",
      type: "Jornais Oficiais",
      country: "URSS",
      description: "Veículos de propaganda estatal que retratavam EUA como agressores",
      impact: "Controle absoluto da narrativa para população soviética"
    },
    {
      title: "Rádio Free Europe",
      type: "Transmissão",
      country: "EUA",
      description: "Estação financiada pela CIA para transmitir para trás da Cortina de Ferro",
      impact: "Guerra psicológica e disseminação de informações pró-Ocidente"
    },
    {
      title: "The Day After (1983)",
      type: "Filme TV",
      country: "EUA",
      description: "Drama nuclear que mostravam consequências de guerra termonuclear",
      impact: "100 milhões de espectadores, influenciou políticas de Reagan"
    }
  ];

  const psychologicalEffects = [
    {
      effect: "Paranoia Coletiva",
      description: "Medo constante de ataque iminente levando a vigilância permanente",
      consequence: "Aceitação de medidas autoritárias em nome da segurança"
    },
    {
      effect: "Normalização do Inimaginável",
      description: "Guerra nuclear passa de impensável para possibilidade calculada",
      consequence: "Diminuição do limiar moral para uso de armas de destruição"
    },
    {
      effect: "Nacionalismo Militarizado",
      description: "Identidade nacional vinculada à potência militar e preparação",
      consequence: "Militarização da sociedade e cultura belicista"
    },
    {
      effect: "Cegueira Cognitiva",
      description: "Incapacidade de questionar narrativas oficiais sobre ameaças",
      consequence: "Falta de pensamento crítico sobre políticas armamentistas"
    }
  ];

  const caseStudies = [
    {
      name: "Crise dos Mísseis de Cuba",
      year: "1962",
      description: "Ambos os lados usaram propaganda para mostrar determinação enquanto negociavam em segredo",
      lesson: "Propaganda pública vs. diplomacia secreta - as duas faces da estratégia"
    },
    {
      name: "Guerra das Estrelas (SDI)",
      year: "1983",
      description: "Reagan anunciou sistema de defesa antimísseis possivelmente inviável como blefe estratégico",
      lesson: "Tecnologia como propaganda - projetar capacidades futuras para intimidar"
    },
    {
      name: "Exercício Able Archer",
      year: "1983",
      description: "Simulação da NATO tão realista que URSS quase a interpretou como preparativo de ataque real",
      lesson: "Linha tênue entre preparação e provocação - quase leva à guerra nuclear"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-4">
            <Badge variant="secondary" className="bg-purple-600 text-white">
              <Megaphone className="w-4 h-4 mr-2" />
              GUERRA PSICOLÓGICA
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            PROPAGANDA & MEDO
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Como a manipulação da informação e o terror nuclear foram armas 
            tão poderosas quanto os mísseis durante a Guerra Fria.
          </p>

          <div className="flex justify-center space-x-4">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-4"
              onClick={() => setSelectedCategory("tecnicas")}
            >
              <Brain className="w-5 h-5 mr-2" />
              TÉCNICAS
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black px-6 py-4"
              onClick={() => setSelectedCategory("midia")}
            >
              <Tv className="w-5 h-5 mr-2" />
              MÍDIA
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {selectedCategory === "tecnicas" ? "TÉCNICAS DE PROPAGANDA" : "PROPAGANDA NA MÍDIA"}
            </h2>
            <p className="text-xl text-gray-300">
              {selectedCategory === "tecnicas" 
                ? "Métodos usados para moldar opinião pública e justificar armamentismo" 
                : "Como diferentes veículos foram usados para disseminar medo e propaganda"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedCategory === "tecnicas" 
              ? propagandaTechniques.map((tech, index) => (
                  <Card key={index} className="bg-slate-700/50 border-slate-600 text-white backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{tech.name}</CardTitle>
                        <Badge variant="secondary" className="bg-purple-600">
                          TÉCNICA
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{tech.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-2 text-yellow-400" />
                          <span className="text-sm">
                            <strong>Exemplos:</strong> {tech.examples}
                          </span>
                        </div>
                        
                        <div className="flex items-center">
                          <Megaphone className="w-4 h-4 mr-2 text-green-400" />
                          <span className="text-sm">
                            <strong>Efetividade:</strong> {tech.effectiveness}
                          </span>
                        </div>
                        
                        <div className="flex items-center">
                          <Globe className="w-4 h-4 mr-2 text-blue-400" />
                          <span className="text-sm">
                            <strong>Países:</strong> {tech.countries.join(", ")}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              : mediaExamples.map((media, index) => (
                  <Card key={index} className="bg-slate-700/50 border-slate-600 text-white backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{media.title}</CardTitle>
                        <Badge variant="secondary" className={
                          media.country === "EUA" ? "bg-blue-600" : "bg-red-600"
                        }>
                          {media.country}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-400">
                        {media.type}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{media.description}</p>
                      
                      <div className="flex items-center p-3 bg-purple-900/50 rounded-lg">
                        <AlertTriangle className="w-4 h-4 mr-2 text-yellow-400" />
                        <span className="text-sm">
                          <strong>Impacto:</strong> {media.impact}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))
            }
          </div>
        </div>
      </section>

      {/* Psychological Effects Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              EFEITOS PSICOLÓGICOS
            </h2>
            <p className="text-xl text-gray-300">
              Como a propaganda e o medo moldaram mentalidades coletivas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {psychologicalEffects.map((effect, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-purple-400" />
                    {effect.effect}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-3">{effect.description}</p>
                  <div className="flex items-center p-3 bg-red-900/50 rounded-lg">
                    <Skull className="w-4 h-4 mr-2 text-red-400" />
                    <span className="text-sm">
                      <strong>Consequência:</strong> {effect.consequence}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-purple-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ESTUDOS DE CASO
            </h2>
            <p className="text-xl text-gray-300">
              Momentos onde propaganda e realidade se encontraram perigosamente
            </p>
          </div>

          <Tabs defaultValue="cuba" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8 bg-slate-700">
              <TabsTrigger value="cuba" className="data-[state=active]:bg-purple-600">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Cuba 1962
              </TabsTrigger>
              <TabsTrigger value="sdi" className="data-[state=active]:bg-blue-600">
                <Shield className="w-4 h-4 mr-2" />
                SDI 1983
              </TabsTrigger>
              <TabsTrigger value="archer" className="data-[state=active]:bg-red-600">
                <Eye className="w-4 h-4 mr-2" />
                Able Archer
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="cuba">
              <Card className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle>Crise dos Mísseis de Cuba (1962)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Talvez o exemplo máximo onde propaganda pública e diplomacia secreta 
                    se encontraram. Enquanto Kennedy e Khrushchev trocavam ameaças públicas, 
                    canais secretos negociavam solução. A população via apenas a retórica belicista.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Kennedy: Discurso TV anunciando bloqueio naval ("quarentena")</li>
                    <li>• Khrushchev: Cartas públicas ameaçando "consequências mais sérias"</li>
                    <li>• Realidade: Negociações secretas via embaixador soviético em Washington</li>
                    <li>• Resultado: Retirada de mísseis em troca de retirada de mísseis US da Turquia</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="sdi">
              <Card className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle>Iniciativa de Defesa Estratégica (1983)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Reagan anunciou sistema de defesa antimísseis com lasers espaciais que 
                    muitos cientistas consideravam ficção científica. Se era blefe ou não, 
                    funcionou: a URSS gastou bilhões tentando acompanhar tecnologia que 
                    talvez nunca existisse.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Apelidada de "Guerra nas Estrelas" pela mídia</li>
                    <li>• Orçamento inicial: US$ 26 bilhões (US$ 70 bi em valores atuais)</li>
                    <li>• Efeito psicológico: Mostrou superioridade tecnológica US</li>
                    <li>• Contribuiu para colapso econômico soviético</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="archer">
              <Card className="bg-slate-700/50 border-slate-600 text-white">
                <CardHeader>
                  <CardTitle>Exercício Able Archer (1983)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Simulação da NATO tão realista - com líderes mundiais participando e 
                    comunicações criptografadas - que a KGB interpretou como preparativos 
                    reais de ataque nuclear. URSS colocou forças em alerta máximo, 
                    quase iniciando guerra por engano.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Contexto: Tensões altas após abate do KAL 007</li>
                    <li>• URSS: Ativou sistemas de alerta precoce e preparou mísseis</li>
                    <li>• Perigo: Sistema soviético propenso a falsos alarmes</li>
                    <li>• Lição: Propaganda de preparação pode ser mal interpretada</li>
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
