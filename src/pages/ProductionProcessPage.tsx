import React, { useState } from 'react';
import { PageId } from '../types';
import { PROCESS_STEPS, FACTORY_INFO } from '../data/factoryData';
import { QuoteCTASection } from '../components/QuoteCTASection';
import { CertificationBadges } from '../components/CertificationBadges';
import { 
  ShieldCheck, 
  Cpu, 
  FileCheck, 
  Lock, 
  CheckCircle2, 
  Maximize2
} from 'lucide-react';

interface ProductionProcessPageProps {
  onNavigate: (page: PageId) => void;
}

export const ProductionProcessPage: React.FC<ProductionProcessPageProps> = ({ onNavigate }) => {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const [selectedImageModal, setSelectedImageModal] = useState<string | null>(null);

  const activeStep = PROCESS_STEPS.find(s => s.id === activeStepId) || PROCESS_STEPS[0];

  const EQUIPMENT_LIST = [
    {
      id: "pouching-line",
      name: "High-Speed Ultrasonic Pouch Forming Lines",
      capacity: "1,200 Pouches / min",
      standard: "ISO Class 7 Cleanroom",
      description: "State-of-the-art multi-lane pouch forming and non-contact ultrasonic seam sealing machinery with ±0.01g precision micro-dosing.",
      features: ["Non-contact ultrasonic seam seal", "±0.01g dose accuracy", "In-line optical vision inspection"],
      image: "/src/assets/images/cleanroom_manufacturing_1785921691074.jpg"
    },
    {
      id: "mixing-homogenizer",
      name: "Stainless Steel High-Shear Vacuum Homogenizer",
      capacity: "500L Batch Vessels",
      standard: "Pharmaceutical Grade 316L",
      description: "Dust-free closed mixing vessels engineered for high-shear liquid and powder homogenization, locking flavor stability and active ingredient uniformity.",
      features: ["Dust-free closed vacuum system", "316L sanitary stainless steel", "Controlled temperature & moisture mixing"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "capping-line",
      name: "Automated Rotary Puck Filling & Capping Station",
      capacity: "80 Cans / min",
      standard: "Continuous Optical Counting",
      description: "Automated counting and puck filling conveyor loading pouches into cans, followed by dual catch-lid mechanical pressing and hermetic sealing.",
      features: ["Optical sensor pouch counting", "Dual catch-lid press mechanism", "Hermetic freshness seal"],
      image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "labeling-tunnel",
      name: "Laser Inkjet Coding & Heat Shrink Tunnel",
      capacity: "120 Units / min",
      standard: "2D Datamatrix Laser Encoders",
      description: "High-speed 360° wrap-around labeling machines with real-time laser batch code inkjet printing and tamper-evident shrink safety banding.",
      features: ["360° label positioning precision", "Laser lot & expiration code", "Tamper-evident heat shrink band"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "hplc-testing",
      name: "HPLC & Quality Assurance Testing Suite",
      capacity: "99.9% Assay Accuracy",
      standard: "ISO 17025 Compliance",
      description: "High-performance liquid chromatography and FTIR spectroscopy instrumentation for raw material identity, potency assay, and COA generation.",
      features: ["HPLC active potency assay", "FTIR chemical identity test", "Automated sample autosampler"],
      image: FACTORY_INFO.images.hplcTestingSuite
    }
  ];

  const QC_PILLARS = [
    {
      code: "IQC",
      name: "Raw Material Inspection",
      icon: ShieldCheck,
      items: [
        "Quarantine isolation upon factory dock arrival",
        "HPLC purity assay for nicotine & active nootropics (99%+ target)",
        "FTIR raw material chemical identity verification",
        "Microbiological screening, heavy metal & pesticide residue testing",
        "Raw material supplier COA audit & release sign-off"
      ]
    },
    {
      code: "IPQC",
      name: "In-Process Line Auditing",
      icon: Cpu,
      items: [
        "Continuous high-speed optical vision camera inspection",
        "Automated continuous pouch weight check-weighing (±0.01g tolerance)",
        "Ultrasonic seam seal pressure & burst strength testing every 30 mins",
        "Cleanroom HEPA differential pressure & humidity monitoring",
        "Hourly batch operator line audit log verification"
      ]
    },
    {
      code: "OQC",
      name: "Outgoing Quality Release",
      icon: FileCheck,
      items: [
        "Third-party ISO 17025 accredited laboratory assay verification",
        "Batch active dosage uniformity & dissolution profile testing",
        "Visual packaging, label barcode & tamper band inspection",
        "Official Certificate of Analysis (COA) issued for every shipment",
        "Final Quality Assurance Director release seal"
      ]
    },
    {
      code: "TRACE",
      name: "Retention & Traceability",
      icon: Lock,
      items: [
        "Physical retention samples archived for 24 months post-production",
        "Temperature & humidity controlled retention vault storage",
        "End-to-end ERP batch genealogy barcode tracking",
        "Full raw lot # to customer shipping box traceability within 2 hours",
        "Annual mock recall exercise compliance"
      ]
    }
  ];

  const CERTIFICATION_IMAGES = [
    {
      id: "cgmp",
      title: "cGMP 21 CFR Part 111 & 117",
      code: "Audit Certified Facility",
      image: "/src/assets/images/factory_certificate_mockup_1785987282223.jpg"
    },
    {
      id: "fda",
      title: "FDA Establishment Registration",
      code: "Reg #18492048",
      image: "/src/assets/images/fda_facility_registration_badge_1785988276515.jpg"
    },
    {
      id: "iso9001",
      title: "ISO 9001:2015 Certification",
      code: "Quality Management System",
      image: "/src/assets/images/factory_certificate_mockup_1785987282223.jpg"
    },
    {
      id: "iso17025",
      title: "ISO/IEC 17025 Laboratory Accreditation",
      code: "Independent COA Testing",
      image: "/src/assets/images/fda_facility_registration_badge_1785988276515.jpg"
    }
  ];

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsMouseDown(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="bg-white text-neutral-900 min-h-screen space-y-32 sm:space-y-40 lg:space-y-48 pb-0">
      
      {/* Hero Banner with Automated Cleanroom & Quality Control Background Image */}
      <section className="bg-neutral-950 text-white py-24 sm:py-32 lg:py-36 relative overflow-hidden">
        {/* Real Automated Cleanroom Manufacturing Photo - 95% Opacity */}
        <img
          src={FACTORY_INFO.images.processHeroBanner}
          alt="Automated Oral Pouch Manufacturing & Quality Inspection Line"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-95"
        />
        {/* Lighter Gradient Overlays for High Photo Visibility + Excellent Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/75 via-neutral-950/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-neutral-950/20" />

        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Key Facility & Quality Certification Endorsement Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-950/60 backdrop-blur-sm rounded-full border border-white/20 text-xs font-mono text-white font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>50,000 SQ FT PHOENIX PLANT</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-950/60 backdrop-blur-sm rounded-full border border-white/20 text-xs font-mono text-white font-medium">
              <span>ISO CLASS 7/8 CLEANROOM</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c94a29]/90 backdrop-blur-sm rounded-full border border-[#c94a29] text-xs font-mono text-white font-bold">
              <span>cGMP 21 CFR 111 & 117 COMPLIANT</span>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              Production Process & Quality Control
            </h1>

            <p className="text-neutral-100 text-lg sm:text-xl max-w-3xl leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Inside our 50,000 sq ft contract manufacturing plant in Phoenix, Arizona—engineered for pharmaceutical-grade precision, 100% batch genealogy traceability, and 500M+ annual pouch capacity.
            </p>
          </div>

          {/* High Contrast Stat Counters - Flat, No Box Frames, No Top Divider Line */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 pt-4 max-w-5xl">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">50,000 sq ft</div>
              <div className="text-xs sm:text-sm text-neutral-100 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">cGMP Cleanroom Facility</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-[#ff6b4a] font-mono drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">500M+ Pouches</div>
              <div className="text-xs sm:text-sm text-neutral-100 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">Annual Capacity</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">1,200 / min</div>
              <div className="text-xs sm:text-sm text-neutral-100 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">Pouching Speed</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">100% COA</div>
              <div className="text-xs sm:text-sm text-neutral-100 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">3rd-Party Lab Verified</div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 1: Production Process Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-950">
            Production Process Overview
          </h2>
          <p className="text-neutral-600 text-base max-w-2xl">
            Select a manufacturing step to view detailed operational specifications and cleanroom photography.
          </p>
        </div>

        {/* Drag-to-Scroll Horizontal Step Nav Tabs */}
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex items-center gap-3 overflow-x-auto no-scrollbar py-2 select-none ${
            isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {PROCESS_STEPS.map((step) => {
            const isActive = activeStepId === step.id;
            return (
              <button
                key={step.id}
                onClick={() => {
                  if (!hasDragged) {
                    setActiveStepId(step.id);
                  }
                }}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-bold transition-all whitespace-nowrap rounded-lg shrink-0 ${
                  isActive
                    ? 'bg-[#c94a29] text-white font-bold shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-950 font-medium'
                }`}
              >
                <span className={isActive ? 'text-white/80 font-mono text-xs' : 'text-neutral-400 font-mono text-xs'}>
                  0{step.id}.
                </span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Content - Open Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center pt-4">
          
          {/* Left: Large Photo */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative overflow-hidden group">
              {activeStep.image ? (
                <img
                  src={activeStep.image}
                  alt={activeStep.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[480px] object-cover rounded-[8px]"
                />
              ) : (
                <div className="w-full h-[400px] bg-neutral-200 flex items-center justify-center text-neutral-500">
                  Workplace Photo
                </div>
              )}

              <button 
                onClick={() => activeStep.image && setSelectedImageModal(activeStep.image)}
                className="absolute bottom-4 right-4 bg-neutral-950/80 backdrop-blur-md text-white px-3 py-2 text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Fullscreen</span>
              </button>
            </div>
            <div className="text-xs text-neutral-500 font-mono">
              Quality Checkpoint: {activeStep.qcCheckpoint}
            </div>
          </div>

          {/* Right: Step Description */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold text-[#c94a29] uppercase tracking-wider">
                Step 0{activeStep.id} of 0{PROCESS_STEPS.length}
              </div>
              <h3 className="text-3xl font-black text-neutral-950">
                {activeStep.title}
              </h3>
              <p className="text-neutral-600 text-base leading-relaxed">
                {activeStep.description}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                Operational Specifications:
              </div>
              <ul className="space-y-3.5">
                {activeStep.details.map((dt, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-[#c94a29] shrink-0 mt-0.5" />
                    <span>{dt}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </section>

      {/* SECTION 2: Quality Control System */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-950">
            Quality Control System
          </h2>
          <p className="text-neutral-600 text-base max-w-3xl leading-relaxed">
            Our multi-tier quality architecture covers incoming raw material inspection (IQC), real-time line auditing (IPQC), outgoing batch certification (OQC), and a 24-month retention sample vault.
          </p>
        </div>

        {/* 4 Quality Pillars - Open Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          {QC_PILLARS.map((pillar) => (
            <div key={pillar.code} className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-neutral-950">
                  {pillar.name}
                </h3>
                <span className="text-xs font-mono font-bold text-[#c94a29]">{pillar.code}</span>
              </div>

              <ul className="space-y-3 pt-1">
                {pillar.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </section>

      {/* SECTION 3: Facility & Production Equipment (Full-Bleed Responsive Layout) */}
      <section className="w-full bg-neutral-950 text-white py-24 sm:py-32 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Facility & Production Equipment
            </h2>
            <p className="text-neutral-400 text-base max-w-3xl leading-relaxed">
              Located in Phoenix, Arizona — featuring 50,000 sq ft of HEPA-filtered cleanrooms and high-speed automated pouching, homogenizing, and packaging machinery fleet.
            </p>
          </div>

          {/* Cleanroom Environment Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center pt-4">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Cleanroom Production Environment
              </h3>
              <p className="text-neutral-300 text-base leading-relaxed">
                Our plant operates positive-pressure cGMP cleanrooms equipped with HEPA filtration (99.97% 0.3μm retention), anti-static epoxy flooring, and automated 24/7 environmental monitoring for temperature (20±2°C) and relative humidity (40-50%).
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-4 text-xs font-mono text-neutral-400">
                <div>
                  <div className="text-white text-base font-bold">ISO Class 7/8</div>
                  <div>Air Cleanliness</div>
                </div>
                <div>
                  <div className="text-white text-base font-bold">20°C ± 2°C</div>
                  <div>Temp Control</div>
                </div>
                <div>
                  <div className="text-white text-base font-bold">40% - 50%</div>
                  <div>Humidity</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img
                src={FACTORY_INFO.images.cleanroom}
                alt="Phoenix Pouch Co Cleanroom Environment"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover rounded-[8px]"
              />
            </div>
          </div>

          {/* Major Equipment Fleet List */}
          <div className="space-y-12 pt-6">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Major Equipment Fleet
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
              {EQUIPMENT_LIST.map((equip) => (
                <div key={equip.id} className="space-y-6">
                  <img
                    src={equip.image}
                    alt={equip.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-72 sm:h-80 object-cover rounded-[8px]"
                  />

                  <div className="space-y-3 text-white">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold text-white">
                        {equip.name}
                      </h4>
                      <span className="text-xs font-mono text-[#c94a29] font-bold">{equip.capacity}</span>
                    </div>

                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {equip.description}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {equip.features.map((feat, idx) => (
                        <span key={idx} className="text-xs text-neutral-300 font-mono">
                          • {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: Certifications & Compliance (Flat Images, No Card, No Box, No Shadows) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        <div className="space-y-3 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-950">
            Certifications & Compliance
          </h2>
          <p className="text-neutral-600 text-base max-w-3xl leading-relaxed">
            cGMP 21 CFR Part 111 & 117, ISO 9001:2015, and official FDA Facility Registration — audit-ready quality certifications.
          </p>
        </div>

        {/* Flat Badges Component */}
        <div className="py-4">
          <CertificationBadges />
        </div>

      </section>

      {/* SECTION 5: CTA Section */}
      <QuoteCTASection
        onNavigate={onNavigate}
        title="Schedule a Factory Audit or Request Samples"
        subtitle="Experience our cGMP cleanroom standards firsthand. Request a formal quotation or schedule a virtual or on-site tour of our Phoenix, Arizona plant."
      />

      {/* High-Res Photo Modal */}
      {selectedImageModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImageModal(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden bg-neutral-900">
            <img 
              src={selectedImageModal} 
              alt="High-Res Photo" 
              className="w-full h-auto max-h-[85vh] object-contain rounded-[8px]" 
            />
            <button
              onClick={() => setSelectedImageModal(null)}
              className="absolute top-3 right-3 bg-neutral-900 text-white px-3 py-1.5 text-xs font-bold cursor-pointer"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
