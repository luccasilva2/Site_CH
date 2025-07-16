import { Header } from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import ArsenalChartSection from '@/components/sections/arsenal-chart-section';
import TimelineSection from '@/components/sections/timeline-section';
import FactsSection from '@/components/sections/facts-section';
import InfographicsSection from '@/components/sections/infographics-section';
// Removed ReinterpretationSection import as requested
// import ReinterpretationSection from '@/components/sections/reinterpretation-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ArsenalChartSection />
        <TimelineSection />
        <FactsSection />
        <InfographicsSection />
      </main>
    </div>
  );
}
