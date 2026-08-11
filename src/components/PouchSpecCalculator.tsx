import React, { useState } from 'react';
import { PageId } from '../types';
import { PRODUCT_LINES } from '../data/factoryData';
import { Sliders, ArrowRight, Check, Package, Sparkles } from 'lucide-react';

interface PouchSpecCalculatorProps {
  initialCategory?: 'nicotine' | 'nootropic' | 'caffeine';
  onSelectSpecForQuote: (category: string, strength: string, flavor: string) => void;
  onNavigate: (page: PageId) => void;
}

export const PouchSpecCalculator: React.FC<PouchSpecCalculatorProps> = ({
  initialCategory = 'nicotine',
  onSelectSpecForQuote,
  onNavigate
}) => {
  const [category, setCategory] = useState<'nicotine' | 'nootropic' | 'caffeine'>(initialCategory);
  const specData = PRODUCT_LINES[category];

  const [strength, setStrength] = useState(specData.specs.dosagesOrStrengths[1] || specData.specs.dosagesOrStrengths[0]);
  const [flavor, setFlavor] = useState(specData.specs.flavors[0]);
  const [weight, setWeight] = useState(specData.specs.pouchWeights[0]);
  const [canColor, setCanColor] = useState(specData.packagingCustomization.canColors[0]);
  const [volume, setVolume] = useState('10,000 Cans (Standard Pilot MOQ)');

  const handleCategoryChange = (cat: 'nicotine' | 'nootropic' | 'caffeine') => {
    setCategory(cat);
    const newSpec = PRODUCT_LINES[cat];
    setStrength(newSpec.specs.dosagesOrStrengths[0]);
    setFlavor(newSpec.specs.flavors[0]);
    setWeight(newSpec.specs.pouchWeights[0]);
    setCanColor(newSpec.packagingCustomization.canColors[0]);
  };

  const handleProceedToQuote = () => {
    onSelectSpecForQuote(category, strength, flavor);
    onNavigate('contact-us');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-neutral-950 px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-12 space-y-8 sm:space-y-12 rounded-none border-0 shadow-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-neutral-200 pb-8">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">
            Configure Your Custom Pouch Batch
          </h2>
          <p className="text-neutral-600 text-sm max-w-xl font-normal">
            Select your product line, active dosage, flavor profile, and packaging to generate custom MOQ estimates.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex border-b border-neutral-200 shrink-0">
          {[
            { id: 'nicotine', label: 'Nicotine' },
            { id: 'nootropic', label: 'Nootropic' },
            { id: 'caffeine', label: 'Caffeine' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleCategoryChange(tab.id as any)}
              className={`px-6 py-3 text-sm font-bold transition-all cursor-pointer border-b-2 ${
                category === tab.id
                  ? 'border-[#c94a29] text-neutral-950 font-black'
                  : 'border-transparent text-neutral-500 hover:text-neutral-950'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        
        {/* Active Strength / Dosage */}
        <div className="space-y-3">
          <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider font-mono">
            Active Dosage / Strength
          </label>
          <div className="space-y-2 max-h-56 overflow-y-auto no-scrollbar pr-2">
            {specData.specs.dosagesOrStrengths.map((item) => (
              <button
                key={item}
                onClick={() => setStrength(item)}
                className={`w-full text-left px-4 py-3 text-xs font-semibold flex items-center justify-between transition-all border-b ${
                  strength === item
                    ? 'border-[#c94a29] text-neutral-950 font-bold bg-neutral-100'
                    : 'border-neutral-200 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50'
                }`}
              >
                <span>{item}</span>
                {strength === item && <Check className="w-4 h-4 text-[#c94a29]" />}
              </button>
            ))}
          </div>
        </div>

        {/* Flavors */}
        <div className="space-y-3">
          <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider font-mono">
            Flavor Profile Selection
          </label>
          <div className="space-y-2 max-h-56 overflow-y-auto no-scrollbar pr-2">
            {specData.specs.flavors.map((item) => (
              <button
                key={item}
                onClick={() => setFlavor(item)}
                className={`w-full text-left px-4 py-3 text-xs font-semibold flex items-center justify-between transition-all border-b ${
                  flavor === item
                    ? 'border-[#c94a29] text-neutral-950 font-bold bg-neutral-100'
                    : 'border-neutral-200 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50'
                }`}
              >
                <span>{item}</span>
                {flavor === item && <Check className="w-4 h-4 text-[#c94a29]" />}
              </button>
            ))}
          </div>
        </div>

        {/* Grammage & Packaging */}
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider font-mono mb-2">
              Pouch Format / Weight
            </label>
            <select
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full bg-neutral-50 border-b-2 border-neutral-300 text-neutral-950 px-4 py-3 text-xs font-semibold outline-none focus:border-[#c94a29] shadow-none cursor-pointer"
            >
              {specData.specs.pouchWeights.map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider font-mono mb-2">
              Can Puck Finish & Color
            </label>
            <select
              value={canColor}
              onChange={(e) => setCanColor(e.target.value)}
              className="w-full bg-neutral-50 border-b-2 border-neutral-300 text-neutral-950 px-4 py-3 text-xs font-semibold outline-none focus:border-[#c94a29] shadow-none cursor-pointer"
            >
              {specData.packagingCustomization.canColors.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

      </div>

      {/* Selected Config Summary Bar */}
      <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider font-bold">Configured Specification:</div>
          <div className="text-sm font-bold text-neutral-950 flex flex-wrap items-center gap-2">
            <span className="capitalize text-[#c94a29] font-black">{category} Pouches</span>
            <span className="text-neutral-400">•</span>
            <span>{strength}</span>
            <span className="text-neutral-400">•</span>
            <span>{flavor}</span>
            <span className="text-neutral-400">•</span>
            <span>{weight}</span>
            <span className="text-neutral-400">•</span>
            <span>{canColor}</span>
          </div>
        </div>

        <button
          onClick={handleProceedToQuote}
          className="w-full md:w-auto px-8 py-4 bg-[#c94a29] hover:bg-[#b33e20] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0"
        >
          <span>Lock Spec & Get Official Quote</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

