import React from 'react';
import { PageId } from '../types';
import { PRODUCT_LINES } from '../data/factoryData';
import { QuoteCTASection } from '../components/QuoteCTASection';
import nicotineCanCategoryImg from '../assets/images/nicotine_can_category_1786006821337.jpg';
import packagingCustomizationImg from '../assets/images/nicotine_custom_brand_can_1786350796909.jpg';

import nicotineHeroBannerImg from '../assets/images/nicotine_hero_banner_1786348806376.jpg';

interface NicotinePouchesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectSpecForQuote: (category: string, strength: string, flavor: string) => void;
}

export const NicotinePouchesPage: React.FC<NicotinePouchesPageProps> = ({
  onNavigate
}) => {
  const spec = PRODUCT_LINES.nicotine;

  return (
    <div className="bg-white text-neutral-900 min-h-screen">
      
      {/* 1. Header Banner (Hero) */}
      <section className="bg-neutral-950 text-white py-24 sm:py-32 lg:py-40 relative overflow-hidden">
        {/* Background Image with Dark Overlay Mask */}
        <div className="absolute inset-0 z-0">
          <img
            src={nicotineHeroBannerImg}
            alt=""
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 opacity-75"
          />
          <div className="absolute inset-0 bg-neutral-950/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Nicotine Pouches OEM Manufacturing
          </h1>

          <p className="text-neutral-300 text-lg sm:text-xl max-w-3xl leading-relaxed">
            {spec.subtitle}. 100% tobacco-leaf free oral nicotine pouches crafted with pharmaceutical-grade 99.9% pure synthetic or tobacco-derived nicotine.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-300 pt-4 font-mono">
            <span>cGMP & FDA Registered Facility</span>
            <span>•</span>
            <span>Strengths: 3mg to 15mg+</span>
            <span>•</span>
            <span>25+ Market-Tested Flavors</span>
          </div>
        </div>
      </section>

      {/* Main Content Body - Reference Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 space-y-28 sm:space-y-36 lg:space-y-48">
        
        {/* Section 1: Category Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              The Modern Oral Nicotine Category
            </h2>
            <div className="text-neutral-600 text-sm sm:text-base leading-relaxed space-y-5 sm:space-y-6">
              <p>
                Nicotine pouches represent one of the fastest-growing segments in the oral nicotine market. These small, white pouches deliver nicotine through the oral mucosa — no combustion, no tobacco leaf, no smoke, and no vapor.
              </p>
              <p>
                For brand owners and entrepreneurs, nicotine pouches offer a compelling product format: discreet, portable, socially acceptable, and appealing to adult consumers seeking alternatives to traditional tobacco products.
              </p>
              <p>
                Phoenix Pouch Co. manufactures premium nicotine pouches under your brand name, with full control over nicotine strength, flavor profile, pouch format, and packaging design.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-lg bg-neutral-100 shadow-sm border border-neutral-200/80">
              <img
                src={nicotineCanCategoryImg}
                alt="The Modern Oral Nicotine Category"
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
              Every element of your nicotine pouch product can be tailored to your brand requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 sm:gap-y-16 pt-4">
            
            {/* Top Left: Nicotine Strength Levels */}
            <div className="space-y-4">
              <h3 className="font-bold text-base text-neutral-900">
                Nicotine Strength Levels
              </h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>3 mg — Light / Entry Level</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>6 mg — Regular / Standard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>9 mg — Strong</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>12 mg — Extra Strong</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Custom levels available upon request</span>
                </li>
              </ul>
            </div>

            {/* Top Right: Flavor Library */}
            <div className="space-y-4">
              <h3 className="font-bold text-base text-neutral-900">
                Flavor Library
              </h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Mint & Menthol (Classic, Ice, Wintergreen)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Fruit (Berry, Citrus, Tropical, Apple)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Coffee & Espresso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Spice & Herbal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Custom flavor development available</span>
                </li>
              </ul>
            </div>

            {/* Bottom Left: Pouch Format */}
            <div className="space-y-4">
              <h3 className="font-bold text-base text-neutral-900">
                Pouch Format
              </h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Slim format — discreet, comfortable fit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Original format — standard size</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Moisture content customization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 select-none">—</span>
                  <span>Pouch weight: 0.6g – 1.0g per pouch</span>
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
              <ul className="space-y-3 text-sm text-neutral-600">
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
                  <span>Matte, gloss, or soft-touch finish</span>
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
              <strong className="text-neutral-900 font-semibold">Age-Restricted Product Category:</strong> Nicotine pouches are intended exclusively for adult consumers aged 21 and older. All brand partners must comply with applicable federal, state, and local regulations governing the sale and marketing of nicotine products.
            </p>
            <p>
              Phoenix Pouch Co. operates an FDA-registered manufacturing facility and follows cGMP protocols. We manufacture nicotine pouch products for licensed brand customers who are responsible for their own product registration, marketing compliance, and retail distribution requirements. Specific regulatory guidance should be confirmed with qualified legal counsel.
            </p>
          </div>
        </section>

      </div>

      {/* MANDATORY Bottom CTA */}
      <QuoteCTASection
        onNavigate={onNavigate}
        title="Get Your Custom Nicotine Pouch Quote Today"
        subtitle="Request a formal price quote, minimum order details, and a 5-7 day sample kit dispatched from our Phoenix, Arizona plant."
      />

    </div>
  );
};


