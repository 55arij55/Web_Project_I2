import { Header } from '../../components/ui/header.tsx';
import { HeroSection } from '../../components/ui/client/herosection.tsx';
import { WhyChooseSection } from '../../components/ui/client/WhyChooseSection.tsx';
import { TopRatedToursSection } from '../../components/ui/client/TopRatedToursSection.tsx';
import { ReadyToStartSection } from '../../components/ui/client/ReadyToStartSection.tsx';

export default function Homepage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <br />
      <br />
      <WhyChooseSection />
      <br />
      <br />
      <TopRatedToursSection />
      
      {/* Add more homepage content here if needed */}
    </div>
  );
}