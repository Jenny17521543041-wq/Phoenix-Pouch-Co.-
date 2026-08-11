import React from 'react';
import { PageId } from '../types';
import { SERVICE_MODELS, FACTORY_INFO } from '../data/factoryData';
import { QuoteCTASection } from '../components/QuoteCTASection';
import { PouchSpecCalculator } from '../components/PouchSpecCalculator';
import { 
  FileText, 
  FlaskConical, 
  Sparkles, 
  Palette, 
  Factory, 
  ShieldCheck, 
  Truck 
} from 'lucide-react';

interface ServicePageProps {
  onNavigate: (page: PageId) => void;
  onSelectSpecForQuote: (category: string, strength: string, flavor: string) => void;
}

const WORKFLOW_STEPS = [
  { step: "01", title: "Inquiry & NDA", desc: "Target specs discovery", icon: FileText },
  { step: "02", title: "Formula R&D", desc: "Active blending & taste", icon: FlaskConical },
  { step: "03", title: "Lab Sampling", desc: "5-7 day fast dispatch", icon: Sparkles },
  { step: "04", title: "Brand Artwork", desc: "Can colorway & proofing", icon: Palette },
  { step: "05", title: "Mass Production", desc: "High-speed cleanroom runs", icon: Factory },
  { step: "06", title: "QC & COA", desc: "Lab testing & certificate", icon: ShieldCheck },
  { step: "07", title: "Logistics", desc: "Dispatch from Phoenix, AZ", icon: Truck }
];

const CUSTOMIZATION_CARDS = [
  {
    title: "Formulation Chemistry",
    desc: "Synthetic Nicotine (99.9%), Tobacco-Derived Nicotine, L-Theanine, Alpha-GPC, Caffeine, Vitamins, Taurine.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Pouch Dimensions & Moisture",
    desc: "Slim (0.45g), Standard (0.60g), Large (0.75g); Dry (10-14% moisture) vs. Semi-Moist (30-35%).",
    image: FACTORY_INFO.images.cleanroom
  },
  {
    title: "Can Puck Customization",
    desc: "Pantone color matching, matte soft-touch, gloss, metallic clear pucks, catch-lid compartments.",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Labels & Outer Packaging",
    desc: "Embossed foil, metallic UV spot gloss, tamper-evident shrink bands, counter display master cartons.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
  }
];

export const ServicePage: React.FC<ServicePageProps> = ({
  onNavigate,
  onSelectSpecForQuote
}) => {
  return (
    <div className="bg-white text-neutral-900 min-h-screen space-y-32 sm:space-y-40 lg:space-y-48 pb-0">
      
      {/* Header Banner - Light Grey Background with Dark Text */}
      <section className="bg-[#f4f5f7] border-b border-neutral-200/80 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 tracking-tight">
            Custom Brand Service
          </h1>

          <p className="text-neutral-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            Private label and contract manufacturing — your brand, our factory, from concept to delivery.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-neutral-500 pt-2 font-mono font-medium">
            <span>5-7 Day Sample Turnaround</span>
            <span className="text-neutral-300">•</span>
            <span>2-3 Week Mass Production</span>
            <span className="text-neutral-300">•</span>
            <span>cGMP & FDA Registered Facility</span>
          </div>
        </div>
      </section>

      {/* Main Content Part 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 sm:space-y-36 pb-0 mb-0">
        
        {/* Three Partnership Models */}
        <div className="space-y-12 sm:space-y-16">
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">Tailored Manufacturing Models</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-14">
            {SERVICE_MODELS.map((model, idx) => (
              <div key={idx} className="space-y-8 flex flex-col justify-between pt-2">
                <div className="space-y-5">
                  <div className="font-mono font-bold text-3xl text-[#c94a29]">
                    0{idx + 1}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-extrabold text-neutral-950">{model.title}</h3>
                    <div className="text-xs font-semibold text-[#c94a29]">{model.subtitle}</div>
                  </div>
                  <div className="text-xs text-neutral-600 leading-relaxed">
                    <strong className="text-neutral-900">Best for:</strong> {model.bestFor}
                  </div>
                  <ul className="space-y-3 text-xs text-neutral-700 font-semibold pt-2">
                    {model.features.map((feat, fIdx) => (
                      <li key={fIdx} className="leading-relaxed">
                        <span>• {feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    onNavigate('contact-us');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 px-4 bg-neutral-950 hover:bg-[#c94a29] text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  <span>Request Quote for {model.title}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Interactive Workflow */}
        <div className="space-y-12 sm:space-y-16 pt-4 pb-0 mb-0">
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">7-Step Turnkey OEM Workflow</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12 sm:gap-x-12 sm:gap-y-16">
            {WORKFLOW_STEPS.map((wf, idx) => {
              const IconComp = wf.icon;
              return (
                <div key={idx} className="space-y-3.5 flex flex-col items-start">
                  <div className="text-neutral-950 mb-1">
                    <IconComp className="w-9 h-9 text-neutral-950 stroke-[1.8]" />
                  </div>
                  <div className="font-mono text-xs font-bold text-[#c94a29] uppercase tracking-wider">
                    Step {wf.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
                    {wf.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal">
                    {wf.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </section>

      {/* Comprehensive Customization Matrix - Full-Bleed Section with 2x2 Grid */}
      <section className="w-full relative space-y-10 sm:space-y-14 lg:space-y-16 pt-[150px]">
        {/* Section Header (Centered on White Background) */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center pb-2 sm:pb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
            Comprehensive Customization Matrix
          </h2>
        </div>

        {/* 2x2 Grid Section without black backdrop */}
        <div className="relative w-full">
          {/* 1600px Container for 2x2 Grid */}
          <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
            {/* 2x2 Grid (四宫格) with 450px card height */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {CUSTOMIZATION_CARDS.map((card, idx) => (
                <div 
                  key={idx}
                  className="relative overflow-hidden group min-h-[320px] sm:min-h-[400px] lg:min-h-[450px] p-8 sm:p-10 lg:p-12 flex flex-col justify-end text-white rounded-[10px] border-0 shadow-none"
                >
                  {/* Background Photo */}
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Top-to-Bottom Gradient Overlay for Clear Image & High Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/60 to-neutral-950/95 transition-opacity group-hover:opacity-90" />

                  {/* Text Content */}
                  <div className="relative z-10 space-y-3 sm:space-y-4 max-w-2xl">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Separated Section: Interactive Spec Calculator nested in 1600px container */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-[10px] pb-6 sm:pb-8">
        <PouchSpecCalculator
          initialCategory="nicotine"
          onSelectSpecForQuote={onSelectSpecForQuote}
          onNavigate={onNavigate}
        />
      </section>

      {/* MANDATORY Bottom CTA */}
      <QuoteCTASection
        onNavigate={onNavigate}
        title="Start Your OEM Partnership Today"
        subtitle="Request a formal price quote, sample pucks, or schedule a technical discovery call with our Phoenix engineering team."
      />

    </div>
  );
};


