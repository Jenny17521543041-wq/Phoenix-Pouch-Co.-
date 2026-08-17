import React from 'react';
import { PageId } from '../types';
import { FACTORY_INFO } from '../data/factoryData';
import { QuoteCTASection } from '../components/QuoteCTASection';

interface AboutUsPageProps {
  onNavigate: (page: PageId) => void;
}

const TEAM_MEMBERS = [
  {
    name: "Dr. Marcus Vance",
    title: "Chief Technology Officer & Head of R&D",
    roleCategory: "R&D & FORMULATION",
    image: "/src/assets/images/team_cto_marcus_1786343094577.jpg",
    bio: "Ph.D. in Pharmaceutical Chemistry. 15+ years developing sublingual mucosal absorption systems, moisture-retention matrix design, and active ingredient stability."
  },
  {
    name: "Elena Rostova",
    title: "VP of Quality Assurance & cGMP Compliance",
    roleCategory: "QUALITY & REGULATORY",
    image: "/src/assets/images/team_qa_elena_1786343106740.jpg",
    bio: "Former FDA compliance specialist and certified cGMP Lead Auditor. Oversees IQC/IPQC/OQC protocols and batch release COA verification across all production runs."
  },
  {
    name: "David Miller",
    title: "VP of Operations & Supply Chain",
    roleCategory: "MANUFACTURING OPERATIONS",
    image: "/src/assets/images/team_ops_david_1786343116660.jpg",
    bio: "20+ years managing high-speed automated packaging plants. Responsible for continuous pouch manufacturing throughput, ERP batch genealogy tracking, and dock dispatch."
  },
  {
    name: "Sarah Jenkins",
    title: "Director of Flavor Engineering & Sensory",
    roleCategory: "FLAVOR SCIENCE",
    image: "/src/assets/images/team_flavor_sarah_1786343127574.jpg",
    bio: "Master Flavorist with specialized expertise in high-potency nicotine flavor masking, long-lasting cooling agents, and food-grade oral pouch release dynamics."
  }
];

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-neutral-900 min-h-screen space-y-32 sm:space-y-40 lg:space-y-48 pb-0">
      
      {/* Header Banner with Real Phoenix Facility Photo & Mask Overlay */}
      <section className="bg-neutral-950 text-white py-28 sm:py-36 lg:py-40 relative overflow-hidden">
        {/* Real Aerial Photo of Phoenix Plant - High Visibility */}
        <img
          src={FACTORY_INFO.images.phoenixFacilityAerial}
          alt="Phoenix Pouch Co. Facility Aerial View in Phoenix, Arizona"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-95"
        />
        {/* Lighter Gradient Overlays for High Photo Visibility + High Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/75 via-neutral-950/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-neutral-950/20" />

        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            About Phoenix Pouch Co.
          </h1>

          <p className="text-neutral-100 text-lg sm:text-xl max-w-3xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            America's premier contract manufacturer dedicated strictly to modern oral pouch formulations—Nicotine, Nootropics, and Caffeine.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-100 pt-4 font-mono font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">
            <span>Phoenix, AZ Manufacturing Hub</span>
            <span className="text-neutral-400">•</span>
            <span>cGMP & FDA Registered</span>
            <span className="text-neutral-400">•</span>
            <span>Automated Pouch Packing Lines</span>
          </div>
        </div>
      </section>

      {/* Factory Story & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 sm:space-y-36">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">
              High-Precision Sublingual & Oral Pouch Manufacturing
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              Phoenix Pouch Co. was built to provide brand owners and distributors with a 100% US-based, cGMP compliant, high-speed contract manufacturing facility.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed">
              We eliminate international supply chain risks and ocean freight delays with rapid sample delivery, scalable production, and complete regulatory transparency.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="pt-2 space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-[#c94a29] font-mono">100%</div>
                <div className="text-sm font-bold text-neutral-800">Made in Phoenix, USA</div>
              </div>
              <div className="pt-2 space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-[#c94a29] font-mono">24/7</div>
                <div className="text-sm font-bold text-neutral-800">Quality Monitoring</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src={FACTORY_INFO.images.cleanroom}
              alt="Phoenix Pouch Co. Facility Cleanroom Operations"
              referrerPolicy="no-referrer"
              className="w-full h-[450px] object-cover rounded-[8px]"
            />
          </div>

        </div>

        {/* Strategic Advantage: Why Phoenix, Arizona with Photographic Proof */}
        <div className="space-y-12 pt-4">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">Why Phoenix, Arizona?</h2>
            <p className="text-neutral-600 max-w-2xl text-base">
              Strategically situated in the Southwest manufacturing corridor to ensure high-speed freight distribution, robust regulatory stability, and top-tier formulation talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            
            {/* 1. Logistics Hub */}
            <div className="space-y-4 group">
              <div className="relative h-60 w-full overflow-hidden rounded-[10px] bg-neutral-100">
                <img
                  src={FACTORY_INFO.images.phoenixLogistics}
                  alt="Phoenix Logistics & Freight Infrastructure"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-[10px]"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-neutral-950 text-xl">Logistics Hub</h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-normal">
                  Direct access to Interstate 10, Interstate 17, and rail networks connecting major West Coast ports, Midwest freight hubs, and East Coast delivery corridors.
                </p>
              </div>
            </div>

            {/* 2. Pro-Business Ecosystem */}
            <div className="space-y-4 group">
              <div className="relative h-60 w-full overflow-hidden rounded-[10px] bg-neutral-100">
                <img
                  src={FACTORY_INFO.images.phoenixEcosystem}
                  alt="Phoenix Pro-Business Manufacturing Park"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-[10px]"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-neutral-950 text-xl">Pro-Business Ecosystem</h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-normal">
                  Stable Arizona business climate, competitive industrial utility rates, transparent local regulation, and strong state support for advanced bio-tech manufacturing.
                </p>
              </div>
            </div>

            {/* 3. Skilled Talent */}
            <div className="space-y-4 group">
              <div className="relative h-60 w-full overflow-hidden rounded-[10px] bg-neutral-100">
                <img
                  src={FACTORY_INFO.images.phoenixTalent}
                  alt="Phoenix Chemical Engineering & Formulation Talent"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-[10px]"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-neutral-950 text-xl">Skilled Talent</h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-normal">
                  Direct access to premier chemical engineers, cGMP quality assurance directors, and pharmaceutical formulation experts from leading regional universities.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Leadership & R&D Team Section */}
        <div className="space-y-12 pt-8 border-t border-neutral-100">
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold text-[#c94a29] uppercase tracking-wider">
              Executive Management & Scientific R&D
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">
              Leadership & R&D Team
            </h2>
            <p className="text-neutral-600 max-w-2xl text-base">
              Our executive leadership combines decades of pharmaceutical formulation science, cGMP quality auditing, and high-speed automated packaging engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="space-y-4 group">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-[10px] bg-neutral-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-[10px]"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="text-xs font-mono font-bold text-[#c94a29]">
                    {member.roleCategory}
                  </div>
                  <h3 className="font-extrabold text-neutral-950 text-lg">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-neutral-800">
                    {member.title}
                  </div>
                  <p className="text-neutral-600 text-xs leading-relaxed pt-1 font-normal">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="bg-neutral-950 text-white py-20 sm:py-24 px-8 sm:px-16 space-y-12 rounded-[12px]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-14 text-sm">
            <div className="space-y-3">
              <h3 className="font-bold text-white text-xl">1. Precision Engineering</h3>
              <p className="text-neutral-400 leading-relaxed font-normal text-sm">
                Zero tolerance for dose variation or defective pouch seals. Every pouch delivers consistent dosage and mouthfeel.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-white text-xl">2. Uncompromising Compliance</h3>
              <p className="text-neutral-400 leading-relaxed font-normal text-sm">
                Operating strictly under cGMP (21 CFR Part 111 & Part 117) and FDA facility registration.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-white text-xl">3. Client First</h3>
              <p className="text-neutral-400 leading-relaxed font-normal text-sm">
                We view ourselves as an extension of your company. Your brand growth and market speed drive our operational choices.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* MANDATORY Bottom CTA */}
      <QuoteCTASection
        onNavigate={onNavigate}
        title="Partner With Phoenix Pouch Co."
        subtitle="Talk to our Phoenix management team about custom brand OEM, contract manufacturing, or sample evaluation."
      />

    </div>
  );
};


