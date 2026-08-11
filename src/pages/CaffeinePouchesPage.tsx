import React from 'react';
import { PageId } from '../types';
import { PRODUCT_LINES } from '../data/factoryData';
import { QuoteCTASection } from '../components/QuoteCTASection';
import caffeineCanCategoryImg from '../assets/images/caffeine_can_category_1786006844709.jpg';
import packagingCustomizationImg from '../assets/images/caffeine_custom_brand_can_1786350824662.jpg';

import caffeineHeroBannerImg from '../assets/images/caffeine_hero_banner_1786348827183.jpg';

interface CaffeinePouchesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectSpecForQuote: (category: string, strength: string, flavor: string) => void;
}

export const CaffeinePouchesPage: React.FC<CaffeinePouchesPageProps> = ({
  onNavigate
}) => {
  const spec = PRODUCT_LINES.caffeine;

  return (
    <div className="bg-white text-neutral-900 min-h-screen">
      
      {/* 1. Header Banner (Hero) */}
      <section className="bg-neutral-950 text-white py-24 sm:py-32 lg:py-40 relative overflow-hidden">
        {/* Background Image with Dark Overlay Mask */}
        <div className="absolute inset-0 z-0">
          <img
            src={caffeineHeroBannerImg}
            alt=""
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 opacity-75"
          />
          <div className="absolute inset-0 bg-neutral-950/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Caffeine Energy Pouches OEM Manufacturing
          </h1>

          <p className="text-neutral-300 text-lg sm:text-xl max-w-3xl leading-relaxed">
            {spec.subtitle}. 100% tobacco-free and nicotine-free oral energy pouches delivering 50mg to 150mg of fast-acting caffeine directly through buccal absorption.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-300 pt-4 font-mono">
            <span>Zero Nicotine & Zero Tobacco</span>
            <span>•</span>
            <span>50mg to 150mg Dosage Options</span>
            <span>•</span>
            <span>Fortified with Taurine & B-Vitamins</span>
          </div>
        </div>
      </section>

      {/* Main Content Body - Reference Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 space-y-28 sm:space-y-36 lg:space-y-48">
        
        {/* Section 1: Category Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              The Modern Functional Energy Category
            </h2>
            <div className="text-neutral-600 text-sm sm:text-base leading-relaxed space-y-5 sm:space-y-6">
              <p>
                Caffeine energy pouches represent a fast-growing, zero-sugar alternative to energy drinks and shots. Delivering pure caffeine directly through buccal absorption, these pouches provide clean, fast-acting energy without liquid bloating or sugar crashes.
              </p>
              <p>
                For fitness, outdoor, long-haul driving, and shift-work brands, energy pouches offer an extremely high-margin, portable format that fits seamlessly into active daily routines.
              </p>
              <p>
                Phoenix Pouch Co. manufactures custom caffeine energy pouches under your brand label, offering precise dosage control, synergistic B-vitamin fortification, signature flavors, and custom packaging.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-lg bg-neutral-100 shadow-sm border border-neutral-200/80">
              <img
                src={caffeineCanCategoryImg}
                alt="The Modern Functional Energy Category"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Customizable Specifications */}
        <section className="space-y-12 sm:space-y-16">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              Customizable Specifications
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base">
              Every element of your caffeine energy pouch product can be tailored to your brand requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 sm:gap-y-16 pt-4">
            
            {/* Top Left: Caffeine Dosage Levels */}
            <div className="space-y-4">
              <h3 className="font-bold text-base text-neutral-900">
                Caffeine Dosage Levels
              </h3>
              <ul className="space-y-2.5 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>50 mg — Gentle / Daily Lift</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>80 mg — Standard Energy Drink Level</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>100 mg — High-Performance Boost</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>150 mg — Extra Strength Pre-Workout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Custom caffeine dosages available</span>
                </li>
              </ul>
            </div>

            {/* Top Right: Flavor Library */}
            <div className="space-y-4">
              <h3 className="font-bold text-base text-neutral-900">
                Flavor Library
              </h3>
              <ul className="space-y-2.5 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Cool Mint & Wintergreen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Citrus Energy (Lemon-Lime, Orange)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Berry & Watermelon Blast</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Espresso & Mocha</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Custom flavor formulation available</span>
                </li>
              </ul>
            </div>

            {/* Bottom Left: Pouch Format */}
            <div className="space-y-4">
              <h3 className="font-bold text-base text-neutral-900">
                Pouch Format
              </h3>
              <ul className="space-y-2.5 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Discreet slim format</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Fast-dissolving caffeine carrier substrate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Zero-sugar, zero-calorie formulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Pouch weight: 0.5g – 0.85g per pouch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Pouches per can: 15 / 20 / custom</span>
                </li>
              </ul>
            </div>

            {/* Bottom Right: Can & Packaging */}
            <div className="space-y-4">
              <h3 className="font-bold text-base text-neutral-900">
                Can & Packaging
              </h3>
              <ul className="space-y-2.5 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Standard round can (custom colors)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Slim can format</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Full-wrap label or shrink sleeve</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Matte, gloss, or metallic finish</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Outer shipper / display box options</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Section 3: Packaging & Brand Customization */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="overflow-hidden rounded-lg bg-neutral-950 shadow-sm">
              <img
                src={packagingCustomizationImg}
                alt="Packaging & Brand Customization - YOUR BRAND"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              Packaging & Brand Customization
            </h2>
            <div className="text-neutral-600 text-sm sm:text-base leading-relaxed space-y-5 sm:space-y-6">
              <p>
                Your brand identity extends to every touchpoint. We support full packaging customization — from can color and label artwork to finishing techniques that make your product stand out on shelf.
              </p>
              <p>
                Our design team works with your artwork files or can recommend packaging partners for label design, ensuring print-ready files that meet our production specifications.
              </p>
            </div>

            <ul className="space-y-3 text-sm text-neutral-600 pt-2">
              <li className="flex items-start gap-2">
                <span className="text-neutral-400 select-none">—</span>
                <span>Custom can colors (Pantone matching)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-400 select-none">—</span>
                <span>Full-color label printing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-400 select-none">—</span>
                <span>Embossing, foil stamping, spot UV</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-400 select-none">—</span>
                <span>Child-resistant closure options</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-400 select-none">—</span>
                <span>Regulatory-compliant labeling</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Regulatory & Compliance */}
        <section className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Regulatory & Compliance
          </h2>

          <div className="bg-[#f8f9fa] border border-neutral-200/70 rounded-lg p-8 sm:p-10 lg:p-12 space-y-6 text-xs sm:text-sm text-neutral-600 leading-relaxed">
            <p>
              <strong className="text-neutral-900 font-semibold">Dietary Supplement Standards:</strong> Caffeine energy pouches are manufactured under FDA cGMP guidelines for dietary supplements (21 CFR Part 111). Brand partners are responsible for complying with federal and state regulations regarding caffeine disclosures, warning statements, and marketing practices.
            </p>
            <p>
              Phoenix Pouch Co. operates an FDA-registered, cGMP-compliant manufacturing facility in Phoenix, Arizona. We provide HPLC testing and batch certificates of analysis to verify active caffeine content and purity for every production run.
            </p>
          </div>
        </section>

      </div>

      {/* MANDATORY Bottom CTA */}
      <QuoteCTASection
        onNavigate={onNavigate}
        title="Manufacture Your Caffeine Energy Pouch Line"
        subtitle="Get a formal quotation for private label caffeine pouches made in our Phoenix, Arizona cleanroom facility."
      />

    </div>
  );
};


