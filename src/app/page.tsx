import { MainLayout } from "@/layouts/main";
import {AnimatedBackground} from "@/components/home/AnimatedBackground";
import { CustomCursor } from "@/components/home/CustomCursor";
import { HeroSection } from "@/components/home/HeroSection";
import { ScrollCardsParallax } from "@/components/Services/ScrollCardsParallax";
import DevelopmentProcess from "@/components/development-process/development-process";

 const App: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Header */}
      {/* <Header /> */}
      
      {/* Hero Section */}
      <HeroSection />
      
      
      
      {/* Parallax Cards Section */}
        <ScrollCardsParallax />

        <DevelopmentProcess />

    </div>
    </MainLayout>
  );
};


export default App;