"use client";

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix para ícones do Leaflet em Next.js
const customIcon = new Icon({
  iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23dc2626'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const nuclearIcon = new Icon({
  iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fbbf24'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const testSiteIcon = new Icon({
  iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2314b8a6'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Dados dos locais importantes da Guerra Fria
const mapData = [
  {
    id: 1,
    name: "Moscou - URSS",
    position: [55.7558, 37.6176],
    type: "capital",
    description: "Capital da União Soviética, centro de comando durante a Guerra Fria",
    arsenal: "Estimado: 45,000 ogivas nucleares no pico",
    events: ["1949: Primeiro teste nuclear soviético", "1962: Crise dos Mísseis de Cuba"]
  },
  {
    id: 2,
    name: "Washington D.C. - EUA",
    position: [38.9072, -77.0369],
    type: "capital",
    description: "Capital dos Estados Unidos, liderança do bloco ocidental",
    arsenal: "Estimado: 31,000 ogivas nucleares no pico",
    events: ["1945: Primeiro uso de armas nucleares", "1962: Gestão da Crise de Cuba"]
  },
  {
    id: 3,
    name: "Semipalatinsk - Cazaquistão",
    position: [49.97, 78.86],
    type: "testSite",
    description: "Principal local de testes nucleares soviéticos",
    tests: "456 testes nucleares realizados",
    events: ["1949-1989: Testes nucleares contínuos", "Impacto ambiental severo"]
  },
  {
    id: 4,
    name: "Nevada Test Site - EUA",
    position: [37.1174, -116.0519],
    type: "testSite",
    description: "Principal local de testes nucleares americanos",
    tests: "928 testes nucleares realizados",
    events: ["1951-1992: Testes nucleares contínuos", "Testes atmosféricos e subterrâneos"]
  },
  {
    id: 5,
    name: "Hiroshima - Japão",
    position: [34.3853, 132.4553],
    type: "historic",
    description: "Primeiro alvo de bomba atômica em 6 de agosto de 1945",
    impact: "140,000 mortes até o final de 1945",
    events: ["1945: Bomba 'Little Boy' lançada", "Início da era nuclear"]
  },
  {
    id: 6,
    name: "Nagasaki - Japão",
    position: [32.7503, 129.8779],
    type: "historic",
    description: "Segundo alvo de bomba atômica em 9 de agosto de 1945",
    impact: "74,000 mortes até o final de 1945",
    events: ["1945: Bomba 'Fat Man' lançada", "Último uso militar de armas nucleares"]
  },
  {
    id: 7,
    name: "Berlim - Alemanha",
    position: [52.5200, 13.4050],
    type: "historic",
    description: "Dividida durante a Guerra Fria, símbolo da divisão Leste-Oeste",
    events: ["1961: Construção do Muro de Berlim", "1989: Queda do Muro"]
  },
  {
    id: 8,
    name: "Cuba",
    position: [21.5218, -77.7812],
    type: "historic",
    description: "Palco da Crise dos Mísseis de Cuba em 1962",
    events: ["1962: Instalação de mísseis soviéticos", "Quase guerra nuclear"]
  }
];

const MapSection = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mapa Interativo da Guerra Fria
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore os locais mais importantes da corrida armamentista nuclear. 
            Clique nos marcadores para descobrir detalhes sobre eventos históricos, 
            arsenais nucleares e testes realizados durante a Guerra Fria.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-[500px] w-full">
            <MapContainer
              center={[30, 0]}
              zoom={2}
              style={{ height: '100%', width: '100%' }}
              className="z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {mapData.map((location) => (
                <Marker
                  key={location.id}
                  position={[location.position[0], location.position[1]] as [number, number]}
                  icon={
                    location.type === 'capital' ? customIcon :
                    location.type === 'testSite' ? testSiteIcon :
                    nuclearIcon
                  }
                >
                  <Popup>
                    <div className="p-2 max-w-xs">
                      <h3 className="font-bold text-lg mb-2">{location.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{location.description}</p>
                      
                      {location.arsenal && (
                        <p className="text-sm font-semibold text-red-600 mb-2">
                          Arsenal: {location.arsenal}
                        </p>
                      )}
                      
                      {location.tests && (
                        <p className="text-sm font-semibold text-green-600 mb-2">
                          Testes: {location.tests}
                        </p>
                      )}
                      
                      {location.impact && (
                        <p className="text-sm font-semibold text-orange-600 mb-2">
                          Impacto: {location.impact}
                        </p>
                      )}
                      
                      <div className="mt-3">
                        <h4 className="font-semibold text-sm mb-1">Eventos Importantes:</h4>
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
          
          <div className="p-4 bg-gray-100">
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                <span>Capitais com Arsenais</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>Locais de Testes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span>Eventos Históricos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Usar dynamic import para evitar problemas de SSR
export default dynamic(() => Promise.resolve(MapSection), {
  ssr: false,
});
