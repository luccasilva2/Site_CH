import { Header } from '@/components/layout/header';
import HeroWithImageBackground from '@/components/sections/hero-with-image-background';
import ArsenalChartSection from '@/components/sections/arsenal-chart-section';
import TimelineSection from '@/components/sections/timeline-section';
import FactsSection from '@/components/sections/facts-section';
import InfographicsSection from '@/components/sections/infographics-section';
import MapSection from '@/components/sections/map-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main>
        <HeroWithImageBackground />
        <ArsenalChartSection />
        <TimelineSection />
        <FactsSection />
        <InfographicsSection />
        <MapSection />
      </main>
    </div>
  );
}
