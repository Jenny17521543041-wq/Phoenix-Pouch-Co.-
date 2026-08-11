import React, { useState } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AIAssistantModal } from './components/AIAssistantModal';

import { HomePage } from './pages/HomePage';
import { NicotinePouchesPage } from './pages/NicotinePouchesPage';
import { NootropicPouchesPage } from './pages/NootropicPouchesPage';
import { CaffeinePouchesPage } from './pages/CaffeinePouchesPage';
import { ServicePage } from './pages/ServicePage';
import { ProductionProcessPage } from './pages/ProductionProcessPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);

  // Selected specs to prefill quote form
  const [selectedProductLine, setSelectedProductLine] = useState<string>('nicotine');
  const [selectedStrength, setSelectedStrength] = useState<string>('6mg');
  const [selectedFlavor, setSelectedFlavor] = useState<string>('Spearmint Freeze');

  const handleSelectSpecForQuote = (category: string, strength: string, flavor: string) => {
    setSelectedProductLine(category);
    setSelectedStrength(strength);
    setSelectedFlavor(flavor);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenAIAssistant={() => setAiAssistantOpen(true)}
          />
        );
      case 'nicotine-pouches':
        return (
          <NicotinePouchesPage
            onNavigate={setCurrentPage}
            onSelectSpecForQuote={handleSelectSpecForQuote}
          />
        );
      case 'nootropic-pouches':
        return (
          <NootropicPouchesPage
            onNavigate={setCurrentPage}
            onSelectSpecForQuote={handleSelectSpecForQuote}
          />
        );
      case 'caffeine-pouches':
        return (
          <CaffeinePouchesPage
            onNavigate={setCurrentPage}
            onSelectSpecForQuote={handleSelectSpecForQuote}
          />
        );
      case 'service':
        return (
          <ServicePage
            onNavigate={setCurrentPage}
            onSelectSpecForQuote={handleSelectSpecForQuote}
          />
        );
      case 'production-process':
        return (
          <ProductionProcessPage
            onNavigate={setCurrentPage}
          />
        );
      case 'about-us':
        return (
          <AboutUsPage
            onNavigate={setCurrentPage}
          />
        );
      case 'contact-us':
        return (
          <ContactUsPage
            onNavigate={setCurrentPage}
            selectedProductLine={selectedProductLine}
            selectedStrength={selectedStrength}
            selectedFlavor={selectedFlavor}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenAIAssistant={() => setAiAssistantOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-neutral-900 selection:bg-[#c94a29] selection:text-white">
      {/* Persistent Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenAIAssistant={() => setAiAssistantOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Persistent Footer */}
      <Footer onNavigate={setCurrentPage} />

      {/* AI Spec & Formulation Assistant Modal */}
      <AIAssistantModal
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
        onApplySpecToQuote={(cat, str, flv) => {
          handleSelectSpecForQuote(cat, str, flv);
          setCurrentPage('contact-us');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
