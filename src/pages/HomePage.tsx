import React, { useState } from 'react';
import { PageId } from '../types';
import { FACTORY_INFO, PROCESS_STEPS, WHY_CHOOSE_US } from '../data/factoryData';
import { QuoteCTASection } from '../components/QuoteCTASection';
import { ProcessIllustration } from '../components/ProcessStepIcons';
import nicotineCanPng from '../assets/images/nicotine_can_transparent.png';
import nootropicCanPng from '../assets/images/nootropic_can_transparent.png';
import caffeineCanPng from '../assets/images/caffeine_can_transparent.png';
import nicotineOpenPng from '../assets/images/nicotine_open_can_1786418063205.jpg';
import nootropicOpenPng from '../assets/images/nootropic_open_can_1786418073496.jpg';
import caffeineOpenPng from '../assets/images/caffeine_open_can_1786418081983.jpg';
import yourBrandFactoryImg from '../assets/images/your_brand_factory_1786346857393.jpg';
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenAIAssistant: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<'nicotine' | 'nootropic' | 'caffeine'>('nicotine');

  const categories = [
    {
      id: 'nicotine' as const,
      pageId: 'nicotine-pouches' as PageId,
      title: 'Nicotine Pouches',
      description: 'Pharmaceutical-grade 99.9% pure Synthetic & Tobacco-Derived Nicotine pouches. Tobacco-free, fast release, 25+ flavors.',
      openImg: nicotineOpenPng,
      closedImg: nicotineCanPng,
    },
    {
      id: 'nootropic' as const,
      pageId: 'nootropic-pouches' as PageId,
      title: 'Nootropic Pouches',
      description: 'Sublingual brain health & mental focus pouches formulated with L-Theanine, Alpha-GPC, caffeine, and B-Complex.',
      openImg: nootropicOpenPng,
      closedImg: nootropicCanPng,
    },
    {
      id: 'caffeine' as const,
      pageId: 'caffeine-pouches' as PageId,
      title: 'Caffeine Pouches',
      description: 'Fast-acting oral energy pouches providing 50mg to 150mg of caffeine fortified with Taurine and Electrolytes.',
      openImg: caffeineOpenPng,
      closedImg: caffeineCanPng,
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0];
  return (
    <div className="bg-white text-neutral-900 min-h-screen space-y-32 sm:space-y-40 lg:space-y-48 pb-0">
      
      {/* 1. Large Hero Video Banner */}
      <section className="relative min-h-[80vh] lg:min-h-[85vh] bg-neutral-950 overflow-hidden flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={FACTORY_INFO.images.cleanroom}
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 transition-opacity duration-1000"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-working-in-a-pharmaceutical-laboratory-40901-large.mp4" type="video/mp4" />
          <source src="https://cdn.coverr.co/videos/coverr-pharmaceutical-factory-production-line-5406/1080p.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-black/40 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-10 pt-16 pb-20 sm:pt-20 sm:pb-24">
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Precision Pouches, Made in Phoenix, USA
          </h1>

          <p className="text-lg sm:text-2xl text-neutral-200 max-w-3xl mx-auto font-normal leading-relaxed">
            One-stop Private Label & OEM manufacturing for Nicotine, Nootropic, and Caffeine Pouches.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => onNavigate('contact-us')}
              className="group inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#c94a29] hover:bg-[#b33e1f] text-white font-extrabold text-base rounded-full shadow-2xl transition-all transform hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
            >
              <span>Request a Sample</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate('service')}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-base rounded-full backdrop-blur-md transition-all cursor-pointer w-full sm:w-auto"
            >
              <span>Explore Product Lines</span>
            </button>
          </div>

          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono text-neutral-300 max-w-3xl mx-auto">
            <div>
              <div className="text-white font-bold text-base">50,000 sq ft</div>
              <div className="text-neutral-400 text-[11px]">cGMP Cleanroom Plant</div>
            </div>
            <div>
              <div className="text-white font-bold text-base">500M+</div>
              <div className="text-neutral-400 text-[11px]">Pouches / Year Capacity</div>
            </div>
            <div>
              <div className="text-white font-bold text-base">5-7 Days</div>
              <div className="text-neutral-400 text-[11px]">Sample Delivery</div>
            </div>
            <div>
              <div className="text-white font-bold text-base">100% FDA</div>
              <div className="text-neutral-400 text-[11px]">Registered Facility</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Core Product Lines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight">
            Three Core Custom Pouch Categories
          </h2>
          <p className="text-neutral-600 text-base max-w-2xl">
            High-precision contract manufacturing tailored to your brand's specifications.
          </p>
        </div>

        {/* Split 2-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Large Image Display Area */}
          <div className="lg:col-span-6 flex items-center justify-center p-2 sm:p-6 bg-transparent">
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
              <img
                key={currentCategory.id}
                src={currentCategory.openImg}
                alt={`${currentCategory.title} Open Can`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain transition-opacity duration-500 animate-fadeIn"
              />
            </div>
          </div>

          {/* Right Column: Selected Info & Category Thumbnails */}
          <div className="lg:col-span-6 space-y-10 flex flex-col justify-between">
            
            {/* Top: Active Category Info */}
            <div className="space-y-5">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight transition-all duration-300">
                {currentCategory.title}
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-lg transition-all duration-300">
                {currentCategory.description}
              </p>
              <div>
                <button
                  onClick={() => onNavigate(currentCategory.pageId)}
                  className="inline-flex items-center gap-2 text-base font-bold text-[#c94a29] hover:text-[#b33e1f] transition-colors cursor-pointer group pt-1"
                >
                  <span>View Specs & Options</span>
                  <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Bottom: Horizontal Row of 3 Category Thumbnails */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-8 sm:pt-12">
              {categories.map((cat) => {
                const isActive = cat.id === activeCategory;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    onMouseEnter={() => setActiveCategory(cat.id)}
                    className={`flex flex-col items-center justify-between p-3 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer text-center group border ${
                      isActive
                        ? 'bg-[#f4f5f7] border-neutral-200/80 shadow-xs'
                        : 'bg-white border-transparent hover:bg-neutral-50'
                    }`}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-2">
                      <img
                        src={cat.closedImg}
                        alt={cat.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className={`text-xs sm:text-sm leading-tight transition-colors ${
                      isActive ? 'font-extrabold text-neutral-950' : 'font-semibold text-neutral-600 group-hover:text-neutral-900'
                    }`}>
                      {cat.title}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 3A. Private Label Services */}
      <section className="bg-neutral-950 text-white py-24 sm:py-32 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Your Brand, Our Factory
              </h2>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                We handle every stage of pouch creation—from active formulation R&D and taste flavor engineering to custom Pantone puck can coloring, soft-touch matte labels, and master cartons.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c94a29] shrink-0" />
                  <span className="text-neutral-200">Custom Active Ingredient Blending</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c94a29] shrink-0" />
                  <span className="text-neutral-200">Pantone Can Color Matching</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c94a29] shrink-0" />
                  <span className="text-neutral-200">5-7 Day Fast Sample Turnaround</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c94a29] shrink-0" />
                  <span className="text-neutral-200">Strict NDA & IP Protection</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('service')}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#c94a29] hover:bg-[#b33e1f] text-white font-extrabold text-base rounded-full transition-all cursor-pointer group"
                >
                  <span>Explore Services & OEM Solutions</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img
                src={yourBrandFactoryImg}
                alt="Your Brand Our Factory Custom Pouch Manufacturing"
                referrerPolicy="no-referrer"
                className="w-full h-96 sm:h-[420px] object-cover rounded-[12px] shadow-2xl border border-neutral-800"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3B. Cleanroom Plant Capability */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight">
              State-of-the-Art Cleanroom Manufacturing Power
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
              Inside our 50,000 sq ft cGMP cleanroom facility engineered specifically for continuous, high-speed oral pouch production in Phoenix, Arizona.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about-us')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#c94a29] hover:text-[#b33e1f] transition-colors cursor-pointer"
              >
                <span>Explore Factory & Audit Info</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src={FACTORY_INFO.images.cleanroom}
              alt="Phoenix Cleanroom Automated Production Line"
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 object-cover rounded-[8px]"
            />
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 pt-6">
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-black text-[#c94a29] font-mono">50,000 sq ft</div>
            <div className="text-lg font-bold text-neutral-950">cGMP Cleanroom Plant</div>
            <p className="text-sm text-neutral-600 leading-relaxed">ISO Class 7/8 cleanroom standards with humidity and temperature controls.</p>
          </div>

          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-black text-[#c94a29] font-mono">500,000,000+</div>
            <div className="text-lg font-bold text-neutral-950">Annual Pouches Capacity</div>
            <p className="text-sm text-neutral-600 leading-relaxed">10 automated high-speed packing lines operating at 1,200 pouches per minute.</p>
          </div>

          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-black text-[#c94a29] font-mono">21 CFR 111 & 117</div>
            <div className="text-lg font-bold text-neutral-950">cGMP & FDA Registered</div>
            <p className="text-sm text-neutral-600 leading-relaxed">Complete raw material IQC, in-process optical line monitoring, and COA issuance.</p>
          </div>
        </div>
      </section>

      {/* 4. Production Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-950">
            High-Speed Production Process
          </h2>
          <button
            onClick={() => onNavigate('production-process')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#c94a29] hover:text-[#b33e1f] transition-colors cursor-pointer"
          >
            <span>Full 7-Step Workflow</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PROCESS_STEPS.slice(0, 4).map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-[12px] p-6 sm:p-7 flex flex-col justify-start min-h-[290px] space-y-4 group hover:border-[#c94a29]/50 transition-all border border-neutral-200/70"
            >
              <ProcessIllustration stepId={step.id} />
              
              <div className="space-y-1.5 pt-1">
                <div>
                  <span className="text-xs font-mono font-bold text-[#c94a29] tracking-wider">
                    STEP 0{step.id}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight leading-snug">
                  {step.title}
                </h3>
              </div>
              
              <p className="text-xs text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <h2 className="text-3xl sm:text-4xl font-black text-neutral-950">
          Why Brands Trust Phoenix Pouch Co.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div key={idx} className="space-y-3 pt-2">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight leading-snug">
                {item.titleLine1 || item.title}
                {item.titleLine2 && (
                  <>
                    <br />
                    {item.titleLine2}
                  </>
                )}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Quote CTA Section */}
      <QuoteCTASection onNavigate={onNavigate} />

    </div>
  );
};
