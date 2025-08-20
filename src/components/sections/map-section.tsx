"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Importar fronteiras GeoJSON (precisa ter os arquivos na pasta indicada)
import ussr1950 from "@/data/urss 1990.json";
import ussr1990 from "@/data/urss 1950.json";
import usaGeo from "@/data/usa.json";

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

// Fronteiras por década
const territoryBoundaries = {
  1950: { ussr: ussr1950, usa: usaGeo },
  1960: { ussr: ussr1950, usa: usaGeo },
  1970: { ussr: ussr1950, usa: usaGeo },
  1980: { ussr: ussr1950, usa: usaGeo },
  1990: { ussr: ussr1990, usa: usaGeo },
};

// Dados por década
const mapDataByDecade = {
  1950: [
    {
      id: 1,
      name: "URSS - 1950",
      position: [55.7558, 37.6176],
      type: "capital",
      description: "União Soviética no início da Guerra Fria",
      arsenal: "Estimado: 5 ogivas nucleares",
      events: ["1949: Primeiro teste nuclear soviético"],
    },
    {
      id: 2,
      name: "EUA - 1950",
      position: [38.9072, -77.0369],
      type: "capital",
      description: "Estados Unidos no início da Guerra Fria",
      arsenal: "Estimado: 299 ogivas nucleares",
      events: ["1950: Desenvolvimento de armas H-bomb"],
    },
  ],
  1960: [
    {
      id: 1,
      name: "URSS - 1960",
      position: [55.7558, 37.6176],
      type: "capital",
      description: "URSS durante a Crise de Cuba",
      arsenal: "Estimado: 3,300 ogivas nucleares",
      events: ["1962: Crise dos Mísseis de Cuba"],
    },
    {
      id: 2,
      name: "EUA - 1960",
      position: [38.9072, -77.0369],
      type: "capital",
      description: "EUA durante a Crise de Cuba",
      arsenal: "Estimado: 18,000 ogivas nucleares",
      events: ["1962: Gestão da Crise de Cuba"],
    },
  ],
  1970: [
    {
      id: 1,
      name: "URSS - 1970",
      position: [55.7558, 37.6176],
      type: "capital",
      description: "URSS no auge da Guerra Fria",
      arsenal: "Estimado: 11,000 ogivas nucleares",
      events: ["1972: SALT I - Limitação de armas"],
    },
    {
      id: 2,
      name: "EUA - 1970",
      position: [38.9072, -77.0369],
      type: "capital",
      description: "EUA no auge da corrida armamentista",
      arsenal: "Estimado: 26,000 ogivas nucleares",
      events: ["1972: SALT I - Limitação de armas"],
    },
  ],
  1980: [
    {
      id: 1,
      name: "URSS - 1980",
      position: [55.7558, 37.6176],
      type: "capital",
      description: "URSS na década de 1980",
      arsenal: "Estimado: 39,000 ogivas nucleares",
      events: ["1987: INF Treaty - Eliminação de mísseis"],
    },
    {
      id: 2,
      name: "EUA - 1980",
      position: [38.9072, -77.0369],
      type: "capital",
      description: "EUA na década de 1980",
      arsenal: "Estimado: 23,000 ogivas nucleares",
      events: ["1987: INF Treaty - Eliminação de mísseis"],
    },
  ],
  1990: [
    {
      id: 1,
      name: "URSS - 1990",
      position: [55.7558, 37.6176],
      type: "capital",
      description: "URSS no fim da Guerra Fria",
      arsenal: "Estimado: 37,000 ogivas nucleares",
      events: ["1991: Dissolução da URSS"],
    },
    {
      id: 2,
      name: "EUA - 1990",
      position: [38.9072, -77.0369],
      type: "capital",
      description: "EUA no fim da Guerra Fria",
      arsenal: "Estimado: 21,000 ogivas nucleares",
      events: ["1991: START I - Redução de armas"],
    },
  ],
};

const MapSection = () => {
  const [selectedDecade, setSelectedDecade] = useState<
    "1950" | "1960" | "1970" | "1980" | "1990"
  >("1950");

  const decades: Array<"1950" | "1960" | "1970" | "1980" | "1990"> = [
    "1950",
    "1960",
    "1970",
    "1980",
    "1990",
  ];
  const currentBoundaries = territoryBoundaries[selectedDecade];
  const currentData = mapDataByDecade[selectedDecade];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mapa Interativo da Guerra Fria
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a evolução dos territórios da URSS e EUA durante a Guerra
            Fria. Selecione uma década para ver as mudanças territoriais e os
            arsenais nucleares.
          </p>
        </div>

        {/* Seletor de décadas */}
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

              {/* Fronteiras via GeoJSON */}
              <GeoJSON
                data={currentBoundaries.ussr as any}
                style={{
                  color: "#dc2626",
                  weight: 2,
                  opacity: 0.8,
                  dashArray: "5, 5",
                  fillColor: "#dc2626",
                  fillOpacity: 0.2,
                }}
              />
              <GeoJSON
                data={currentBoundaries.usa as any}
                style={{
                  color: "#2563eb",
                  weight: 2,
                  opacity: 0.8,
                  dashArray: "5, 5",
                  fillColor: "#2563eb",
                  fillOpacity: 0.2,
                }}
              />

              {/* Marcadores da década */}
              {currentData.map((location) => (
                <Marker
                  key={location.id}
                  position={[
                    location.position[0],
                    location.position[1],
                  ] as [number, number]}
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
                        <h4 className="font-semibold text-sm mb-1">Eventos:</h4>
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
                <div className="w-4 h-1 bg-red-600"></div>
                <span>Território da URSS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-blue-600"></div>
                <span>Território dos EUA</span>
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

// Usar dynamic import para evitar problemas de SSR
export default dynamic(() => Promise.resolve(MapSection), {
  ssr: false,
});
