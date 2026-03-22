import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { SignatureItems } from "./components/SignatureItems";
import { CafeExperience } from "./components/CafeExperience";
import { PhotoGallery } from "./components/PhotoGallery";
import { Testimonials } from "./components/Testimonials";
import { MenuOrdering } from "./components/MenuOrdering";
import { Events } from "./components/Events";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <SignatureItems />
      <CafeExperience />
      <div id="gallery">
        <PhotoGallery />
      </div>
      <Testimonials />
      <MenuOrdering />
      <div id="events">
        <Events />
      </div>
      <div id="contact">
        <Location />
      </div>
      <Footer />
    </div>
  );
}