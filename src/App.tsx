import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemAgitate } from './components/ProblemAgitate';
import { SolutionSection } from './components/SolutionSection';
import { ProductProofSection } from './components/ProductProofSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { HowToStartSection } from './components/HowToStartSection';
import { MarketingKitSection } from './components/MarketingKitSection';
import { BeginnerFriendlySection } from './components/BeginnerFriendlySection';
import { LicenseSection } from './components/LicenseSection';
import { SocialProofSection } from './components/SocialProofSection';
import { PricingOfferSection } from './components/PricingOfferSection';
import { TransparencySection } from './components/TransparencySection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ProductSample } from './data/content';

// Lazy load modals to keep initial bundle size minimal
const CheckoutModal = lazy(() =>
  import('./components/CheckoutModal').then((m) => ({ default: m.CheckoutModal }))
);
const SamplePreviewModal = lazy(() =>
  import('./components/SamplePreviewModal').then((m) => ({ default: m.SamplePreviewModal }))
);

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedSample, setSelectedSample] = useState<ProductSample | null>(null);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleScrollToSolution = () => {
    const el = document.getElementById('solusi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToProof = () => {
    const el = document.getElementById('bukti-produk');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCatalog = () => {
    const el = document.getElementById('koleksi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-emerald-100 selection:text-emerald-950 pb-16 md:pb-0">
      {/* Navigation Header */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      {/* Main Content Flow: Strictly Ordered as Instructed */}
      <main>
        {/* 1. HERO */}
        <HeroSection
          onOpenCheckout={handleOpenCheckout}
          onScrollToSolution={handleScrollToSolution}
          onScrollToCatalog={handleScrollToCatalog}
        />

        {/* 2. KERESAHAN */}
        <ProblemAgitate />

        {/* 3. SOLUSI */}
        <SolutionSection
          onScrollToProof={handleScrollToProof}
        />

        {/* 4. PRODUCT PROOF */}
        <ProductProofSection
          onScrollToCatalog={handleScrollToCatalog}
        />

        {/* 5. PREVIEW KATALOG 700+ */}
        <WhatYouGetSection />

        {/* 6. CARA MULAI */}
        <HowToStartSection />

        {/* 7. MARKETING KIT & PANDUAN */}
        <MarketingKitSection />

        {/* 8. PEMULA USIA 40+ */}
        <BeginnerFriendlySection />

        {/* 9. HAK JUAL / LISENSI */}
        <LicenseSection />

        {/* 10. SOCIAL PROOF / BUKTI NYATA */}
        <SocialProofSection />

        {/* 11 & 12. OFFER STACK & HARGA DIGABUNG */}
        <PricingOfferSection
          onOpenCheckout={handleOpenCheckout}
        />

        {/* 14. TRANSPARANSI */}
        <TransparencySection />

        {/* 15. FAQ */}
        <FaqSection />

        {/* 16. FINAL CTA */}
        <FinalCtaSection
          onOpenCheckout={handleOpenCheckout}
        />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Interactive Modals loaded on-demand */}
      <Suspense fallback={null}>
        {isCheckoutOpen && (
          <CheckoutModal
            isOpen={isCheckoutOpen}
            onClose={handleCloseCheckout}
          />
        )}

        {selectedSample && (
          <SamplePreviewModal
            sample={selectedSample}
            onClose={() => setSelectedSample(null)}
            onOpenCheckout={handleOpenCheckout}
          />
        )}
      </Suspense>

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenCheckout={handleOpenCheckout} />
    </div>
  );
}
