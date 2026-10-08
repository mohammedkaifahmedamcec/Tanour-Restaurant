import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureDishes } from './components/SignatureDishes';
import { MenuPage } from './pages/MenuPage';
import { StoryBand } from './components/StoryBand';
import { Gallery } from './components/Gallery';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

function App() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      {/* Sticky top navigation */}
      <Navbar />

      {/* Main content — one continuous scroll */}
      <main className="pb-20 md:pb-0">
        {/* 01 · Cinematic hero */}
        <Hero />

        {/* 02 · Curated signatures */}
        <SignatureDishes />

        {/* 03 · Full menu with search + filters */}
        <MenuPage />

        {/* 04 · Story + Halal pillars */}
        <StoryBand />

        {/* 05 · Editorial gallery */}
        <Gallery />

        {/* 06 · Location, phone, WhatsApp, directions */}
        <LocationSection />

        {/* 07 · Final CTA — bottom of page, drives one more action */}
        <section className="relative bg-ink py-20 md:py-28 border-t border-brass/15">
          <div className="container-tanour text-center max-w-3xl mx-auto">
            <span className="eyebrow text-brass">Hungry?</span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-cream">
              Let us come{' '}
              <span className="italic text-brass-soft">to you.</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/65">
              Free home delivery across JP Nagar and nearby areas.
              Order in minutes — by phone or WhatsApp.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={`https://wa.me/917019001733?text=${encodeURIComponent(
                  'Hi Tanour, I would like to place an order.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                Order on WhatsApp
              </a>
              <a
                href="tel:+917019001733"
                className="btn-secondary justify-center"
              >
                Call +91 70190 01733
              </a>
            </div>

            <p className="mt-8 text-[11px] uppercase tracking-ultra text-cream/40">
              Halal Certified · Free Delivery · JP Nagar · Madiwala · Kalasipalya
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent mobile quick actions */}
      <MobileBottomBar />
    </div>
  );
}

export default App;