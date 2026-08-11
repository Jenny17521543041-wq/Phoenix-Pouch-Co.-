import React, { useState } from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { FACTORY_INFO } from '../data/factoryData';
import nicotineCanPng from '../assets/images/nicotine_can_transparent.png';
import nootropicCanPng from '../assets/images/nootropic_can_transparent.png';
import caffeineCanPng from '../assets/images/caffeine_can_transparent.png';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  PhoneCall, 
  ShieldCheck, 
  Factory,
  Layers,
  Zap,
  Brain,
  Cigarette,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAIAssistant: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenAIAssistant }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isProductPage = ['nicotine-pouches', 'nootropic-pouches', 'caffeine-pouches'].includes(currentPage);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all shadow-xs">
      {/* Top Bar - B2B Credibility Announcement */}
      <div className="w-full bg-neutral-950 text-neutral-300 text-xs py-1.5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-neutral-200 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Phoenix, AZ cGMP Facility Active
            </span>
            <span className="hidden md:inline text-neutral-700 font-bold">•</span>
            <span className="hidden md:inline text-neutral-400">
              FDA Registered Facility #18492048
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAIAssistant}
              className="inline-flex items-center text-[#e87046] hover:text-white transition-colors font-medium text-xs cursor-pointer"
            >
              <span>AI Formulation Advisor</span>
            </button>
            <span className="text-neutral-700 font-bold">•</span>
            <a
              href="tel:+16025550199"
              className="inline-flex items-center text-neutral-300 hover:text-white transition-colors"
            >
              <span className="hidden sm:inline">+1 (602) 555-0199</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Inner Container - 1600px max width centered */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="text-left focus:outline-none rounded p-1"
        >
          <Logo className="h-7 sm:h-9" variant="dark" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <button
            onClick={() => handleNav('home')}
            className={`text-sm font-bold tracking-tight transition-colors ${
              currentPage === 'home'
                ? 'text-[#c94a29]'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            Home
          </button>

          {/* Products Dropdown */}
          <div 
            className="relative" 
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              onClick={() => handleNav('nicotine-pouches')}
              className={`inline-flex items-center gap-1 text-sm font-bold tracking-tight transition-colors cursor-pointer py-2 ${
                isProductPage
                  ? 'text-[#c94a29]'
                  : 'text-neutral-700 hover:text-neutral-950'
              }`}
            >
              <span>Products</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180 text-[#c94a29]' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {productsDropdownOpen && (
              <div 
                className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-2 space-y-1">
                  <div className="px-3 py-1 text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                    Product Lines
                  </div>
                  
                  {/* 1. Nicotine Pouches */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNav('nicotine-pouches');
                    }}
                    className={`w-full text-left p-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-3 ${
                      currentPage === 'nicotine-pouches'
                        ? 'bg-orange-50 text-[#c94a29] font-bold'
                        : 'hover:bg-orange-50/70 hover:text-[#c94a29] text-neutral-800'
                    }`}
                  >
                    <div className="w-11 h-11 shrink-0 flex items-center justify-center p-0.5">
                      <img
                        src={nicotineCanPng}
                        alt="Nicotine Pouches"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-sm leading-tight">Nicotine Pouches</div>
                      <div className="text-xs text-neutral-500 font-normal mt-0.5">3mg-15mg synthetic & tobacco-derived</div>
                    </div>
                  </button>

                  {/* 2. Nootropic Pouches */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNav('nootropic-pouches');
                    }}
                    className={`w-full text-left p-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-3 ${
                      currentPage === 'nootropic-pouches'
                        ? 'bg-orange-50 text-[#c94a29] font-bold'
                        : 'hover:bg-orange-50/70 hover:text-[#c94a29] text-neutral-800'
                    }`}
                  >
                    <div className="w-11 h-11 shrink-0 flex items-center justify-center p-0.5">
                      <img
                        src={nootropicCanPng}
                        alt="Nootropic Pouches"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-sm leading-tight">Nootropic Pouches</div>
                      <div className="text-xs text-neutral-500 font-normal mt-0.5">Cognitive focus & L-Theanine blends</div>
                    </div>
                  </button>

                  {/* 3. Caffeine Pouches */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNav('caffeine-pouches');
                    }}
                    className={`w-full text-left p-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-3 ${
                      currentPage === 'caffeine-pouches'
                        ? 'bg-orange-50 text-[#c94a29] font-bold'
                        : 'hover:bg-orange-50/70 hover:text-[#c94a29] text-neutral-800'
                    }`}
                  >
                    <div className="w-11 h-11 shrink-0 flex items-center justify-center p-0.5">
                      <img
                        src={caffeineCanPng}
                        alt="Caffeine Pouches"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-sm leading-tight">Caffeine Pouches</div>
                      <div className="text-xs text-neutral-500 font-normal mt-0.5">50-150mg liquid-free energy pouches</div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('service')}
            className={`text-sm font-bold tracking-tight transition-colors ${
              currentPage === 'service'
                ? 'text-[#c94a29]'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            Services & OEM
          </button>

          <button
            onClick={() => handleNav('production-process')}
            className={`text-sm font-bold tracking-tight transition-colors ${
              currentPage === 'production-process'
                ? 'text-[#c94a29]'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            Production Process
          </button>

          <button
            onClick={() => handleNav('about-us')}
            className={`text-sm font-bold tracking-tight transition-colors ${
              currentPage === 'about-us'
                ? 'text-[#c94a29]'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => handleNav('contact-us')}
            className={`text-sm font-bold tracking-tight transition-colors ${
              currentPage === 'contact-us'
                ? 'text-[#c94a29]'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNav('contact-us')}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#c94a29] hover:bg-[#b33e1f] text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => handleNav('contact-us')}
            className="px-4 py-1.5 bg-[#c94a29] text-white text-xs font-bold rounded-full shadow-md"
          >
            Get Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white px-6 py-5 space-y-4 shadow-2xl">
          <button
            onClick={() => handleNav('home')}
            className={`block w-full text-left py-2 font-bold text-base ${currentPage === 'home' ? 'text-[#c94a29]' : 'text-neutral-800'}`}
          >
            Home
          </button>

          <div className="py-2 space-y-2">
            <div className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Product Lines</div>
            <button
              onClick={() => handleNav('nicotine-pouches')}
              className={`block w-full text-left pl-3 py-1.5 text-sm ${currentPage === 'nicotine-pouches' ? 'text-[#c94a29] font-bold' : 'text-neutral-700'}`}
            >
              Nicotine Pouches
            </button>
            <button
              onClick={() => handleNav('nootropic-pouches')}
              className={`block w-full text-left pl-3 py-1.5 text-sm ${currentPage === 'nootropic-pouches' ? 'text-[#c94a29] font-bold' : 'text-neutral-700'}`}
            >
              Nootropic Pouches
            </button>
            <button
              onClick={() => handleNav('caffeine-pouches')}
              className={`block w-full text-left pl-3 py-1.5 text-sm ${currentPage === 'caffeine-pouches' ? 'text-[#c94a29] font-bold' : 'text-neutral-700'}`}
            >
              Caffeine Pouches
            </button>
          </div>

          <button
            onClick={() => handleNav('service')}
            className={`block w-full text-left py-2 font-bold text-base ${currentPage === 'service' ? 'text-[#c94a29]' : 'text-neutral-800'}`}
          >
            Services & OEM
          </button>
          <button
            onClick={() => handleNav('production-process')}
            className={`block w-full text-left py-2 font-bold text-base ${currentPage === 'production-process' ? 'text-[#c94a29]' : 'text-neutral-800'}`}
          >
            Production Process
          </button>
          <button
            onClick={() => handleNav('about-us')}
            className={`block w-full text-left py-2 font-bold text-base ${currentPage === 'about-us' ? 'text-[#c94a29]' : 'text-neutral-800'}`}
          >
            About Us
          </button>
          <button
            onClick={() => handleNav('contact-us')}
            className={`block w-full text-left py-2 font-bold text-base ${currentPage === 'contact-us' ? 'text-[#c94a29]' : 'text-neutral-800'}`}
          >
            Contact Us & Quote
          </button>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={onOpenAIAssistant}
              className="w-full py-2.5 px-4 bg-orange-50 text-[#c94a29] text-sm font-bold rounded-full flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch AI Formulation Advisor</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
