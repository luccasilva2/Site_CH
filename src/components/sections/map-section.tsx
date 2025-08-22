"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import { Icon } from "leaflet";
import type { GeoJsonObject } from "geojson";
import "leaflet/dist/leaflet.css";

// Importar fronteiras GeoJSON
import ussr1950 from "@/data/urss 1950.json";
import ussr1990 from "@/data/urss 1990.json";
import usaGeo from "@/data/usa.json";
import aliadosUrss from "@/data/aliados-urss.json";
import aliadosUsa from "@/data/aliados-usa.json";

// Fix para ícones do Leaflet em Next.js
const customIcon = new Icon({
  iconUrl:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23dc2626'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const nuclearIcon = new Icon({
  iconUrl:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fbbf24'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const testSiteIcon = new Icon({
  iconUrl:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2314b8a6'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Tipos para os dados
interface TerritoryData {
  ussr: any;
  usa: any;
  aliadosUrss: any;
  aliadosUsa: any;
}

interface TerritoryBoundaries {
  [key: string]: TerritoryData;
}

interface MapLocation {
  id: string;
  name: string;
  position: [number, number];
  type: "capital" | "testSite" | "nuclear";
  description: string;
  arsenal?: string;
  events: string[];
}

interface MapDataByDecade {
  [key: string]: MapLocation[];
}

// Fronteiras por década
const territoryBoundaries: TerritoryBoundaries = {
  1950: { ussr: ussr1950, usa: usaGeo, aliadosUrss, aliadosUsa },
  1960: { ussr: ussr1950, usa: usaGeo, aliadosUrss, aliadosUsa },
  1970: { ussr: ussr1950, usa: usaGeo, aliadosUrss, aliadosUsa },
  1980: { ussr: ussr1950, usa: usaGeo, aliadosUrss, aliadosUsa },
  1990: { ussr: ussr1990, usa: usaGeo, aliadosUrss, aliadosUsa },
};

// Dados por década
const mapDataByDecade: MapDataByDecade = {
  1950: [
    {
      id: "moscow-1950",
      name: "Moscou",
      position: [55.7558, 37.6173],
      type: "capital",
      description: "Capital da URSS em 1950",
      arsenal: "5 armas nucleares",
      events: ["Início da Guerra Fria", "Desenvolvimento nuclear soviético"],
    },
    {
      id: "washington-1950",
      name: "Washington D.C.",
      position: [38.9072, -77.0369],
      type: "capital",
      description: "Capital dos EUA em 1950",
      arsenal: "299 armas nucleares",
      events: ["Início da Guerra Fria", "Superioridade nuclear americana"],
    },
    {
      id: "semipalatinsk-1950",
      name: "Semipalatinsk",
      position: [49.97, 78.86],
      type: "testSite",
      description: "Principal local de testes nucleares da URSS",
      events: ["Primeiros testes nucleares soviéticos"],
    },
    {
      id: "nevada-1950",
      name: "Nevada Test Site",
      position: [37.1174, -116.0511],
      type: "testSite",
      description: "Principal local de testes nucleares dos EUA",
      events: ["Testes nucleares continuados"],
    },
  ],
  1960: [
    {
      id: "moscow-1960",
      name: "Moscou",
      position: [55.7558, 37.6173],
      type: "capital",
      description: "Capital da URSS em 1960",
      arsenal: "1,605 armas nucleares",
      events: ["Crise de Berlim", "Corrida espacial"],
    },
    {
      id: "washington-1960",
      name: "Washington D.C.",
      position: [38.9072, -77.0369],
      type: "capital",
      description: "Capital dos EUA em 1960",
      arsenal: "18,638 armas nucleares",
      events: ["Eleição de Kennedy", "Invasão da Baía dos Porcos"],
    },
    {
      id: "novaya-zemlya-1960",
      name: "Novaya Zemlya",
      position: [73.3, 54.9],
      type: "testSite",
      description: "Local de testes nucleares da URSS",
      events: ["Teste de Tsar Bomba (50 megatons)"],
    },
    {
      id: "christmas-1960",
      name: "Ilha Christmas",
      position: [-10.4475, 105.6906],
      type: "testSite",
      description: "Testes nucleares britânicos na região",
      events: ["Testes nucleares na atmosfera"],
    },
  ],
  1970: [
    {
      id: "moscow-1970",
      name: "Moscou",
      position: [55.7558, 37.6173],
      type: "capital",
      description: "Capital da URSS em 1970",
      arsenal: "11,643 armas nucleares",
      events: ["Détente", "SALT I assinado"],
    },
    {
      id: "washington-1970",
      name: "Washington D.C.",
      position: [38.9072, -77.0369],
      type: "capital",
      description: "Capital dos EUA em 1970",
      arsenal: "26,119 armas nucleares",
      events: ["Vietnam War", "Watergate"],
    },
    {
      id: "baikonur-1970",
      name: "Baikonur",
      position: [45.9644, 63.3053],
      type: "testSite",
      description: "Cosmódromo de Baikonur",
      events: ["Programa espacial soviético"],
    },
    {
      id: "kwajalein-1970",
      name: "Kwajalein Atoll",
      position: [8.7186, 167.731],
      type: "testSite",
      description: "Local de testes de mísseis dos EUA",
      events: ["Testes de defesa antimísseis"],
    },
  ],
  1980: [
    {
      id: "moscow-1980",
      name: "Moscou",
      position: [55.7558, 37.6173],
      type: "capital",
      description: "Capital da URSS em 1980",
      arsenal: "30,062 armas nucleares",
      events: ["Jogos Olímpicos de Moscou", "Invasão do Afeganistão"],
    },
    {
      id: "washington-1980",
      name: "Washington D.C.",
      position: [38.9072, -77.0369],
      type: "capital",
      description: "Capital dos EUA em 1980",
      arsenal: "23,368 armas nucleares",
      events: ["Eleição de Reagan", "Crise dos reféns no Irã"],
    },
    {
      id: "semipalatinsk-1980",
      name: "Semipalatinsk",
      position: [49.97, 78.86],
      type: "testSite",
      description: "Continua como principal local de testes",
      events: ["Testes nucleares subterrâneos"],
    },
    {
      id: "nevada-1980",
      name: "Nevada Test Site",
      position: [37.1174, -116.0511],
      type: "testSite",
      description: "Testes nucleares dos EUA",
      events: ["Testes de armas de neutron"],
    },
  ],
  1990: [
    {
      id: "moscow-1990",
      name: "Moscou",
      position: [55.7558, 37.6173],
      type: "capital",
      description: "Capital da URSS em 1990",
      arsenal: "37,000 armas nucleares",
      events: ["Queda do Muro de Berlim", "Fim da Guerra Fria"],
    },
    {
      id: "washington-1990",
      name: "Washington D.C.",
      position: [38.9072, -77.0369],
      type: "capital",
      description: "Capital dos EUA em 1990",
      arsenal: "21,392 armas nucleares",
      events: ["Guerra do Golfo", "START I assinado"],
    },
    {
      id: "semipalatinsk-1990",
      name: "Semipalatinsk",
      position: [49.97, 78.86],
      type: "testSite",
      description: "Últimos testes antes da moratória",
      events: ["Fim dos testes nucleares soviéticos"],
    },
    {
      id: "nevada-1990",
      name: "Nevada Test Site",
      position: [37.1174, -116.0511],
      type: "testSite",
      description: "Preparação para moratória de testes",
      events: ["Últimos testes nucleares dos EUA"],
    },
  ],
};

// Sistema de fatos interativos
interface InteractiveFact {
  id: string;
  title: string;
  content: string;
  decade: string;
  country: string;
  position: [number, number];
  icon: string;
  stats?: { label: string; value: string }[];
  media?: string;
}

const interactiveFacts: InteractiveFact[] = [
  {
    id: "fact-tsar-bomba",
    title: "Tsar Bomba - A Maior Bomba Nuclear",
    content: "Em 1961, a URSS detonou a Tsar Bomba, a maior arma nuclear já testada, com 50 megatons de potência - 3.800 vezes mais poderosa que a bomba de Hiroshima.",
    decade: "1960",
    country: "ussr",
    position: [73.3, 54.9],
    icon: "💥",
    stats: [
      { label: "Potência", value: "50 Megatons" },
      { label: "Altura da Nuvem", value: "64 km" },
      { label: "Raio de Destruição", value: "35 km" }
    ]
  },
  {
    id: "fact-cuban-missile",
    title: "Crise dos Mísseis de Cuba",
    content: "Em 1962, o mundo esteve à beira de uma guerra nuclear quando a URSS instalou mísseis em Cuba, a apenas 145 km da Flórida.",
    decade: "1960",
    country: "usa",
    position: [23.1136, -82.3666],
    icon: "🚀",
    stats: [
      { label: "Duração", value: "13 dias" },
      { label: "Mísseis", value: "42 instalados" },
      { label: "Bloqueio Naval", value: "500 km de raio" }
    ]
  },
  {
    id: "fact-star-wars",
    title: "Iniciativa de Defesa Estratégica",
    content: "Conhecida como 'Guerra nas Estrelas', foi um programa de defesa antimísseis proposto por Reagan em 1983 para proteger os EUA de ataques nucleares.",
    decade: "1980",
    country: "usa",
    position: [38.9072, -77.0369],
    icon: "🛡️",
    stats: [
      { label: "Orçamento", value: "$30 bilhões" },
      { label: "Tecnologia", value: "Lasers espaciais" },
      { label: "Impacto", value: "Acelerou o fim da URSS" }
    ]
  },
  {
    id: "fact-afghanistan",
    title: "Invasão Soviética do Afeganistão",
    content: "A URSS invadiu o Afeganistão em 1979, iniciando um conflito de 10 anos que custou bilhões e contribuiu para o colapso soviético.",
    decade: "1980",
    country: "ussr",
    position: [34.5553, 69.2075],
    icon: "⚔️",
    stats: [
      { label: "Duração", value: "9 anos, 1 mês" },
      { label: "Baixas Soviéticas", value: "15.000 mortos" },
      { label: "Custo", value: "$8,2 bilhões/ano" }
    ]
  }
];

const MapSection = () => {
  const [selectedDecade, setSelectedDecade] = useState<
    "1950" | "1960" | "1970" | "1980" | "1990"
  >("1950");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [selectedFact, setSelectedFact] = useState<InteractiveFact | null>(null);
  const [showFactsPanel, setShowFactsPanel] = useState(true);
  const [particleEffects, setParticleEffects] = useState<Array<{id: string; x: number; y: number; type: string}>>([]);
  const mapRef = useRef<any>(null);
  const factsContainerRef = useRef<HTMLDivElement>(null);

  const decades: Array<"1950" | "1960" | "1970" | "1980" | "1990"> = [
    "1950",
    "1960",
    "1970",
    "1980",
    "1990",
  ];
  const currentBoundaries = territoryBoundaries[selectedDecade];
  const currentData = mapDataByDecade[selectedDecade];

  // Função para obter o estilo baseado no país
  const getCountryStyle = (countryType: string, isSelected: boolean, isHovered: boolean) => {
    const baseStyles: { [key: string]: any } = {
      ussr: {
        color: "#dc2626",
        weight: 2,
        opacity: 0.8,
        fillColor: "#dc2626",
        fillOpacity: 0.2,
      },
      usa: {
        color: "#2563eb",
        weight: 2,
        opacity: 0.8,
        fillColor: "#2563eb",
        fillOpacity: 0.2,
      },
      aliadosUrss: {
        color: "#b91c1c",
        weight: 1,
        opacity: 0.6,
        dashArray: "5, 5",
        fillColor: "#f87171",
        fillOpacity: 0.15,
      },
      aliadosUsa: {
        color: "#1e3a8a",
        weight: 1,
        opacity: 0.6,
        dashArray: "5, 5",
        fillColor: "#93c5fd",
        fillOpacity: 0.15,
      },
    };

    const style = { ...baseStyles[countryType] };

    // Efeitos de seleção
    if (isSelected) {
      return {
        ...style,
        weight: style.weight + 2,
        color: style.color,
        fillOpacity: 0.4,
        opacity: 1,
        fillColor: style.fillColor,
        dashArray: "",
        className: "country-selected",
      };
    }

    // Efeitos de hover
    if (isHovered) {
      return {
        ...style,
        weight: style.weight + 1,
        opacity: 0.9,
        fillOpacity: style.fillOpacity + 0.1,
        className: "country-hover",
      };
    }

    return style;
  };

  // Handlers para interação
  const handleCountryClick = (countryType: string) => {
    setSelectedCountry(selectedCountry === countryType ? null : countryType);
  };

  const handleCountryMouseOver = (countryType: string) => {
    setHoveredCountry(countryType);
  };

  const handleCountryMouseOut = () => {
    setHoveredCountry(null);
  };

  // Função para mostrar um fato
  const showFact = (fact: InteractiveFact) => {
    setSelectedFact(fact);
    // Efeito de partículas
    createParticleEffect(fact.position);
  };

  // Criar efeito de partículas
  const createParticleEffect = (position: [number, number]) => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: `particle-${Date.now()}-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      type: Math.random() > 0.5 ? "nuclear" : "info"
    }));
    setParticleEffects(prev => [...prev, ...newParticles]);

    // Remover partículas após animação
    setTimeout(() => {
      setParticleEffects(prev => prev.filter(p => !newParticles.some(np => np.id === p.id)));
    }, 2000);
  };

  // Filtrar fatos para a década atual
  const currentFacts = interactiveFacts.filter(fact => fact.decade === selectedDecade);

  // Efeito para limpar partículas
  useEffect(() => {
    const interval = setInterval(() => {
      if (particleEffects.length > 50) {
        setParticleEffects(prev => prev.slice(10));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [particleEffects]);

  return (
    <section className="w-full py-16 bg-gray-50 relative">
      {/* Efeitos de partículas */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {particleEffects.map(particle => (
          <div
            key={particle.id}
            className={`absolute w-2 h-2 rounded-full animate-ping ${
              particle.type === "nuclear" 
                ? "bg-yellow-400" 
                : "bg-blue-400"
            }`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>

      {/* Painel de Fatos Interativos */}
      {showFactsPanel && currentFacts.length > 0 && (
        <div 
          ref={factsContainerRef}
          className="fixed top-20 right-4 z-40 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200 p-6 max-w-sm max-h-[60vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">📚 Fatos Históricos</h3>
            <button
              onClick={() => setShowFactsPanel(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-4">
            {currentFacts.map(fact => (
              <div
                key={fact.id}
                onClick={() => showFact(fact)}
                className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{fact.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {fact.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {fact.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal de Fato Detalhado */}
      {selectedFact && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{selectedFact.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedFact.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedFact(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {selectedFact.content}
              </p>

              {selectedFact.stats && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {selectedFact.stats.map((stat, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-600">{stat.label}</div>
                      <div className="text-xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    if (mapRef.current) {
                      // Fechar o modal primeiro
                      setSelectedFact(null);
                      // Pequeno delay para garantir que o modal feche antes de mover o mapa
                      setTimeout(() => {
                        mapRef.current.setView(selectedFact.position, 6);
                        // Destacar o país relacionado ao fato
                        setSelectedCountry(selectedFact.country);
                      }, 100);
                    }
                  }}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  🗺️ Ver no Mapa
                </button>
                <button
                  onClick={() => setSelectedFact(null)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Botão para mostrar painel de fatos */}
      {!showFactsPanel && (
        <button
          onClick={() => setShowFactsPanel(true)}
          className="fixed top-20 right-4 z-40 bg-blue-600 text-white p-3 rounded-full shadow-2xl hover:bg-blue-700 transition-colors animate-bounce"
        >
          📚
        </button>
      )}

      <div className="container mx-auto px-4">
        {/* título e seletor de décadas */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mapa Interativo da Guerra Fria
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a evolução dos territórios da URSS e EUA durante a Guerra
            Fria. Selecione uma década para ver as mudanças territoriais, aliados
            e arsenais nucleares.
          </p>
        </div>

        {/* Indicador de país em hover */}
        {hoveredCountry && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 text-white px-4 py-2 rounded-lg shadow-lg">
            <span className="font-bold">
              {hoveredCountry === "ussr" && "URSS"}
              {hoveredCountry === "usa" && "EUA"}
              {hoveredCountry === "aliadosUrss" && "Aliados da URSS"}
              {hoveredCountry === "aliadosUsa" && "Aliados dos EUA"}
            </span>
          </div>
        )}

        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg shadow-md p-2 flex space-x-2">
            {decades.map((decade) => (
              <button
                key={decade}
                onClick={() => setSelectedDecade(decade)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedDecade === decade
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {decade}s
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-[500px] w-full">
            <MapContainer
              center={[45, 0]}
              zoom={2}
              style={{ height: "100%", width: "100%" }}
              className="z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Fronteiras via GeoJSON com interações */}
              <GeoJSON
                data={currentBoundaries.ussr as GeoJsonObject}
                style={getCountryStyle("ussr", selectedCountry === "ussr", hoveredCountry === "ussr")}
                eventHandlers={{
                  click: () => handleCountryClick("ussr"),
                  mouseover: () => handleCountryMouseOver("ussr"),
                  mouseout: handleCountryMouseOut,
                }}
              />
              <GeoJSON
                data={currentBoundaries.usa as GeoJsonObject}
                style={getCountryStyle("usa", selectedCountry === "usa", hoveredCountry === "usa")}
                eventHandlers={{
                  click: () => handleCountryClick("usa"),
                  mouseover: () => handleCountryMouseOver("usa"),
                  mouseout: handleCountryMouseOut,
                }}
              />
              {/* Aliados URSS */}
              <GeoJSON
                data={currentBoundaries.aliadosUrss as GeoJsonObject}
                style={getCountryStyle("aliadosUrss", selectedCountry === "aliadosUrss", hoveredCountry === "aliadosUrss")}
                eventHandlers={{
                  click: () => handleCountryClick("aliadosUrss"),
                  mouseover: () => handleCountryMouseOver("aliadosUrss"),
                  mouseout: handleCountryMouseOut,
                }}
              />
              {/* Aliados EUA */}
              <GeoJSON
                data={currentBoundaries.aliadosUsa as GeoJsonObject}
                style={getCountryStyle("aliadosUsa", selectedCountry === "aliadosUsa", hoveredCountry === "aliadosUsa")}
                eventHandlers={{
                  click: () => handleCountryClick("aliadosUsa"),
                  mouseover: () => handleCountryMouseOver("aliadosUsa"),
                  mouseout: handleCountryMouseOut,
                }}
              />

              {/* Marcadores da década */}
              {currentData.map((location) => (
                <Marker
                  key={location.id}
                  position={location.position}
                  icon={
                    location.type === "capital"
                      ? customIcon
                      : location.type === "testSite"
                      ? testSiteIcon
                      : nuclearIcon
                  }
                >
                  <Popup>
                    <div className="p-2 max-w-xs">
                      <h3 className="font-bold text-lg mb-2">
                        {location.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {location.description}
                      </p>
                      {location.arsenal && (
                        <p className="text-sm font-semibold text-red-600 mb-2">
                          Arsenal: {location.arsenal}
                        </p>
                      )}
                      <div className="mt-3">
                        <h4 className="font-semibold text-sm mb-1">
                          Eventos:
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {location.events.map((event, index) => (
                            <li key={index}>• {event}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Legenda atualizada */}
          <div className="p-4 bg-gray-100">
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-red-600"></div>
                <span>Território da URSS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-blue-600"></div>
                <span>Território dos EUA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-pink-400"></div>
                <span>Aliados da URSS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-sky-400"></div>
                <span>Aliados dos EUA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                <span>Capitais</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(MapSection), {
  ssr: false,
});
