import { Header } from '@/components/layout/header';
import HeroWithImageBackground from '@/components/sections/hero-with-image-background';
import MapSection from '@/components/sections/map-section';
import ArsenalChartSection from '@/components/sections/arsenal-chart-section';
import TimelineSection from '@/components/sections/timeline-section';
import FactsSection from '@/components/sections/facts-section';
import InfographicsSection from '@/components/sections/infographics-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main>
        <HeroWithImageBackground />
        <MapSection />
        <ArsenalChartSection />
        <TimelineSection />
        <FactsSection />
        <InfographicsSection />
      </main>
    </div>
  );
}
