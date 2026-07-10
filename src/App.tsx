import SmoothScroll from "./components/SmoothScroll";
import CursorGlow from "./components/CursorGlow";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

import Hero from "./sections/Hero";
import IntroBlock from "./sections/IntroBlock";
import HighlightCards from "./sections/HighlightCards";
import Scenes from "./sections/Scenes";
import TechBlock from "./sections/TechBlock";
import ServicesGrid from "./sections/ServicesGrid";
import HowItWorks from "./sections/HowItWorks";
import Plans from "./sections/Plans";
import AudienceMarquee from "./sections/AudienceMarquee";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";

function App() {
  return (
    <SmoothScroll>
      <CursorGlow />
      <Header />
      <main className="relative z-10">
        <Hero />
        <IntroBlock />
        <HighlightCards />
        <Scenes />
        <TechBlock />
        <ServicesGrid />
        <HowItWorks />
        <Plans />
        <AudienceMarquee />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </SmoothScroll>
  );
}

export default App;
