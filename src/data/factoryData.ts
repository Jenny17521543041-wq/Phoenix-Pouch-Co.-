import { ProductSpecOption, ProcessStep, Certification, FAQItem } from '../types';
import nicotineCanPng from '../assets/images/nicotine_can_transparent.png';
import nootropicCanPng from '../assets/images/nootropic_can_transparent.png';
import caffeineCanPng from '../assets/images/caffeine_can_transparent.png';
import yourBrandFactoryImg from '../assets/images/your_brand_factory_1786346857393.jpg';

export const FACTORY_INFO = {
  name: "Phoenix Pouch Co.",
  tagline: "Precision Pouches, Made in Phoenix, USA",
  subTagline: "One-Stop Contract Manufacturing for Private Label Nicotine, Nootropic & Caffeine Pouches",
  location: "Phoenix, Arizona, USA",
  address: "2450 W Broadway Rd, Phoenix, AZ 85041",
  email: "sales@phoenixpouch.com",
  phone: "+1 (602) 555-0199",
  whatsapp: "+1 (602) 555-0199",
  wechat: "PhoenixPouch_OEM",
  facilitySize: "cGMP Cleanroom Facility",
  annualCapacity: "High-Speed Automated Capacity",
  activeLines: "10 Automated Packaging Lines",
  sampleTurnaround: "5-7 Business Days",
  productionLeadTime: "2-3 Weeks",
  moq: "10,000 Cans per Flavor/Strength",
  images: {
    nicotineCan: nicotineCanPng,
    nootropicCan: nootropicCanPng,
    caffeineCan: caffeineCanPng,
    cleanroom: "/src/assets/images/cleanroom_manufacturing_1785921691074.jpg",
    yourBrandConcept: yourBrandFactoryImg,
    phoenixFacilityAerial: "/src/assets/images/phoenix_facility_aerial_1786343049883.jpg",
    phoenixLogistics: "/src/assets/images/phoenix_logistics_hub_1786343060957.jpg",
    phoenixEcosystem: "/src/assets/images/phoenix_business_eco_1786343073807.jpg",
    phoenixTalent: "/src/assets/images/phoenix_skilled_talent_1786343084573.jpg",
    processHeroBanner: "/src/assets/images/process_hero_banner_1786343560650.jpg",
    rawMaterialInspection: "/src/assets/images/raw_material_inspection_1786344732256.jpg",
    finalQcInspection: "/src/assets/images/final_qc_inspection_1786344746429.jpg",
    hplcTestingSuite: "/src/assets/images/hplc_testing_suite_1786344919960.jpg"
  }
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cgmp",
    name: "cGMP Compliant",
    code: "21 CFR Part 111 & 117",
    description: "Current Good Manufacturing Practice certified for dietary supplements & pouch formulations.",
    verifiedBy: "FDA Compliant Audit Protocols"
  },
  {
    id: "iso9001",
    name: "ISO 9001:2015 Quality System",
    code: "ISO-9001-USA",
    description: "Standardized quality control from raw material receipt to final batch packaging.",
    verifiedBy: "Global ISO Registrar"
  },
  {
    id: "fda_registered",
    name: "FDA Registered Facility",
    code: "FDA Reg. #18492048",
    description: "Registered US food & supplement manufacturing establishment in Phoenix, Arizona.",
    verifiedBy: "US Food & Drug Administration"
  },
  {
    id: "third_party_lab",
    name: "Third-Party Lab Tested",
    code: "HPLC & GC-MS Verified",
    description: "Every production batch comes with accredited Certificate of Analysis (COA) for purity & dose accuracy.",
    verifiedBy: "Independent ISO 17025 Labs"
  }
];

export const PRODUCT_LINES: Record<string, ProductSpecOption> = {
  nicotine: {
    category: "nicotine",
    title: "Nicotine Pouches",
    subtitle: "Synthetic & Tobacco-Derived Nicotine Private Label Manufacturing",
    heroImage: FACTORY_INFO.images.cleanroom,
    canImage: FACTORY_INFO.images.nicotineCan,
    overview: "We manufacture premium 100% tobacco-leaf free nicotine pouches engineered for fast nicotine release, smooth feel, and long-lasting flavor stability. Available in both pharmaceutical-grade Synthetic Nicotine (99.9% purity) and Tobacco-Derived Nicotine formulations for 21+ adult brands.",
    marketTrends: [
      "Rapid shift from traditional tobacco to smoke-free, discreet oral pouches",
      "High demand for clean synthetic nicotine with zero tobacco aroma",
      "Preference for slim, ergonomic pouches with moisture-lock technology",
      "Skyrocketing demand in US, EU, and global distribution channels"
    ],
    keyAdvantages: [
      "99.9% Pure Pharmaceutical-Grade Nicotine Options",
      "Precision Moisture Control (Dry 12% vs. Semi-Moist 35%)",
      "Zero Tobacco Leaf Material, Non-Staining Tooth Formulation",
      "Rapid 30-Second Nicotine Onset with Controlled Release Curve"
    ],
    specs: {
      dosagesOrStrengths: ["3 mg", "6 mg", "9 mg", "12 mg", "15 mg", "Custom Dosage"],
      flavors: ["Spearmint Freeze", "Wintergreen Chill", "Arctic Peppermint", "Mango Freeze", "Citrus Surge", "Espresso Mocha", "Berry Chill", "Cinnamon Flame"],
      pouchWeights: ["Slim 0.45g", "Standard 0.60g", "Large 0.75g"],
      canPuckOptions: ["20-Pouch Standard Puck", "15-Pouch Slim Puck", "Catch-Lid Dual Chamber Can"]
    },
    packagingCustomization: {
      canColors: ["Matte White", "Gloss Black", "Clear Frosted", "Metallic Silver", "Custom Pantone"],
      labelFinishes: ["Soft-Touch Matte", "High-Gloss UV", "Embossed Foil", "Holographic Metallic"],
      specialCrafts: ["Child-Resistant Lock Can", "Tamper-Evident Shrink Band", "Printed Master Cartons"]
    },
    complianceNotice: "Notice: Contract manufacturing services for nicotine pouches are exclusively provided to 21+ adult brand owners. All clients must comply with applicable FDA, TTB, and regional state regulations. Phoenix Pouch Co. maintains cGMP & FDA registered facility standards."
  },
  nootropic: {
    category: "nootropic",
    title: "Nootropic Pouches",
    subtitle: "Cognitive Focus & Brain Health Sublingual Pouches",
    heroImage: FACTORY_INFO.images.cleanroom,
    canImage: FACTORY_INFO.images.nootropicCan,
    overview: "Formulated for biohackers, executives, gamers, and students seeking mental clarity without nicotine or crash. Our sublingual nootropic pouches utilize bioavailable ingredients like L-Theanine, Alpha-GPC, and Caffeine combinations for rapid mucosal absorption.",
    marketTrends: [
      "Explosive growth in the brain health & cognitive enhancement supplement industry",
      "Shift away from energy drinks towards clean, zero-sugar pouch delivery",
      "Synergistic pairing of natural caffeine with L-Theanine for smooth focus",
      "High margin potential for lifestyle & wellness supplement brands"
    ],
    keyAdvantages: [
      "Direct Sublingual Absorption (Bypasses First-Pass Liver Metabolism)",
      "Zero Sugar, Zero Calories, Zero Tobacco or Nicotine",
      "Custom Active Blends (Alpha-GPC, Lion's Mane, L-Theanine, B-Complex)",
      "Instant Refreshment & Clean Executive Energy"
    ],
    specs: {
      dosagesOrStrengths: ["Focus Matrix (50mg L-Theanine + 40mg Natural Caffeine)", "Cognitive Max (100mg L-Theanine + Alpha-GPC)", "Caffeine-Free Focus (100mg L-Theanine + B12)", "Custom Blend"],
      flavors: ["Crisp Mint", "Citrus Clarity", "Matcha Green Tea", "Wild Blueberry", "Lemon Ginger"],
      pouchWeights: ["Slim 0.50g", "Standard 0.65g"],
      canPuckOptions: ["15-Pouch Pocket Puck", "20-Pouch Standard Can"]
    },
    packagingCustomization: {
      canColors: ["Titanium Dark Grey", "Matte Black", "Cobalt Blue", "Eco Natural Slate"],
      labelFinishes: ["Metallic Foil Stamping", "Matte Texture", "Spot UV Gloss"],
      specialCrafts: ["Custom Die-Cut Labels", "Retail Counter Display Boxes"]
    },
    complianceNotice: "Notice: Nootropic pouches are manufactured as dietary supplement pouches under 21 CFR Part 111 cGMP standards. Label claims must align with FDA structure/function guidance."
  },
  caffeine: {
    category: "caffeine",
    title: "Caffeine Pouches",
    subtitle: "Tobacco-Free Energy & Stamina Oral Pouches",
    heroImage: FACTORY_INFO.images.cleanroom,
    canImage: FACTORY_INFO.images.caffeineCan,
    overview: "High-octane oral energy pouches designed for athletes, night-shift workers, long-distance drivers, and active professionals. Delivering fast-acting caffeine directly through buccal absorption, providing instant alertness without liquid volume or teeth staining.",
    marketTrends: [
      "Rising consumer demand for portable, liquid-free energy solutions",
      "Popular alternative for individuals quitting tobacco/nicotine habits",
      "High adoption in fitness, gaming, trucking, and outdoor recreation sectors",
      "Strong repeat purchase rate and compact retail footprint"
    ],
    keyAdvantages: [
      "Fast-Acting Buccal Absorption in 60 Seconds",
      "Zero Sugar, Zero Nicotine, Zero Tobacco",
      "Fortified with Taurine, Electrolytes & Vitamin B-Complex",
      "High Temperature & Humidity Stability for Pocket Convenience"
    ],
    specs: {
      dosagesOrStrengths: ["50 mg Caffeine", "80 mg Caffeine", "100 mg Caffeine", "150 mg Maximum Energy"],
      flavors: ["Energy Surge (Red Citrus)", "Cool Peppermint", "Iced Cold Brew", "Tropical Mango", "Cinnamon Blast"],
      pouchWeights: ["Standard 0.60g", "Max 0.80g"],
      canPuckOptions: ["20-Pouch Standard Can", "15-Pouch Slim Can"]
    },
    packagingCustomization: {
      canColors: ["Electric Orange", "Jet Black", "Neon Yellow", "Brushed Aluminum"],
      labelFinishes: ["High-Gloss UV", "Textured Grip Finish", "Metallic Accents"],
      specialCrafts: ["Multi-Pack Bundle Sleeves", "Point-of-Sale Merchandising Packaging"]
    },
    complianceNotice: "Notice: Caffeine pouches are manufactured under cGMP guidelines. Responsible labeling including caffeine content and adult consumption recommendations is standard."
  }
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Raw Material Inspection",
    cnTitle: "原料检验",
    subtitle: "Incoming Quality Control (IQC)",
    description: "Every ingredient—nicotine, active nootropics, natural flavors, and food-grade non-woven pouch material—is quarantined upon arrival. Independent HPLC testing verifies 99%+ active ingredient purity before release.",
    details: [
      "FTIR spectroscopy identity verification",
      "Microbiological screening & heavy metal assay",
      "Accredited raw material COA compliance check"
    ],
    qcCheckpoint: "IQC Release Approved",
    iconName: "ShieldCheck",
    image: "/src/assets/images/raw_material_inspection_1786344732256.jpg"
  },
  {
    id: 2,
    title: "Formulation & Blending",
    cnTitle: "配料与混合",
    subtitle: "High-Shear Homogenization",
    description: "Ingredients are precisely weighed in cleanroom environments and homogenized using high-shear stainless steel industrial mixers to guarantee uniform active dose distribution across every micro-gram.",
    details: [
      "Dust-free closed mixing vessels",
      "Calibrated moisture target (10% to 35%)",
      "Flavor stability & micro-particle distribution"
    ],
    qcCheckpoint: "Batch Uniformity Verified",
    iconName: "FlaskConical",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Pouch Forming & Dosing",
    cnTitle: "制袋灌装",
    subtitle: "Automated Ultrasonic Pouching",
    description: "State-of-the-art automated pouching lines form, dose, and ultrasonically seal food-grade non-woven pouches at speeds up to 1,200 pouches per minute with +/- 0.01g weight precision.",
    details: [
      "Non-contact ultrasonic seam sealing",
      "In-line optical vision inspection",
      "Real-time continuous weight feedback"
    ],
    qcCheckpoint: "Zero-Leak Seam Guarantee",
    iconName: "Cpu",
    image: "/src/assets/images/cleanroom_manufacturing_1785921691074.jpg"
  },
  {
    id: 4,
    title: "Can Filling & Sealing",
    cnTitle: "罐装与封装",
    subtitle: "Puck Assembly & Catch-Lid Press",
    description: "Pouches are automatically counted (15, 20, or custom counts) and loaded into polypropylene cans. Top lids and catch-lid waste compartments are mechanically pressed and hermetically sealed.",
    details: [
      "Precision optical pouch counters",
      "Cleanroom puck transfer conveyor",
      "Hermetic freshness press sealing"
    ],
    qcCheckpoint: "Exact Count & Seal Verified",
    iconName: "PackageCheck",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    title: "Labeling & Packaging",
    cnTitle: "贴标与包装",
    subtitle: "360° Branding & Shrink Banding",
    description: "High-speed wrap-around labeling machinery applies pressure-sensitive or metallic foil labels to cans. Laser inkjet encoders apply lot codes, and tamper-evident shrink bands are heat-sealed.",
    details: [
      "360-degree high-accuracy label positioning",
      "Laser batch code & expiration printing",
      "Tamper-evident heat shrink safety band"
    ],
    qcCheckpoint: "Visual & Code Verification",
    iconName: "QrCode",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    title: "Final QC",
    cnTitle: "出厂质检",
    subtitle: "Outgoing Quality Control & Retention",
    description: "QA inspectors pull finished samples from every master lot for final weight, label accuracy, microbial purity, and active dosage testing. Official Certificate of Analysis (COA) is issued for each batch.",
    details: [
      "Final batch COA certificate issuance",
      "24-month sample vault retention",
      "Complete chain-of-custody batch records"
    ],
    qcCheckpoint: "COA Release Certificate Issued",
    iconName: "FileCheck",
    image: "/src/assets/images/final_qc_inspection_1786344746429.jpg"
  },
  {
    id: 7,
    title: "Shipping",
    cnTitle: "发货",
    subtitle: "Climate-Controlled Dispatch",
    description: "Finished goods are stored in climate-controlled warehousing in Phoenix, Arizona (65-72°F) ready for palletized freight shipping, express delivery, or international container export.",
    details: [
      "Temperature-controlled warehouse storage",
      "US domestic freight & export customs docs",
      "Custom drop-shipping to brand distribution hubs"
    ],
    qcCheckpoint: "Freight Dispatch Ready",
    iconName: "Truck",
    image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1000&q=80"
  }
];

export const SERVICE_MODELS = [
  {
    title: "Private Label / OEM",
    subtitle: "Custom Brand on Factory-Proven Bases",
    bestFor: "Startups & E-Commerce Brands looking for fast market launch",
    features: [
      "Choose from 25+ market-tested pouch flavors",
      "Select standard dosages (Nicotine 3-12mg, Caffeine 50-150mg)",
      "Custom can color & branded label printing",
      "Low starting MOQ (10,000 cans)",
      "5-7 day fast sample turnaround"
    ]
  },
  {
    title: "Full Contract Manufacturing",
    subtitle: "Bespoke R&D & Proprietary Formulations",
    bestFor: "Established Brands, Pharma, & Global Distributors",
    features: [
      "Custom active ingredient formulation (client IP ownership)",
      "Custom pouch dimensions, moisture & grammage development",
      "Bespoke flavor development by senior flavorists",
      "Dedicated high-speed cleanroom production runs",
      "Full regulatory submission dossier assistance"
    ]
  },
  {
    title: "White Label Ready-to-Ship",
    subtitle: "Turnkey Stock Solutions",
    bestFor: "Distributors & Retail Chains needing rapid replenishment",
    features: [
      "Pre-formulated stock pouches ready for immediate labeling",
      "Shortest lead time (5-7 business days)",
      "Flexible un-labeled black/white can stock",
      "Standard COA documentation included",
      "Ideal for market testing and pilot campaigns"
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    titleLine1: "100% US Made &",
    titleLine2: "cGMP Quality Guarantee",
    title: "100% US Made & cGMP Quality Guarantee",
    description: "Manufactured in Phoenix, Arizona under strict cGMP and ISO standards. Eliminates overseas shipping delays and customs risks, with every production lot backed by independent laboratory Certificate of Analysis (COA) testing.",
    icon: "ShieldCheck"
  },
  {
    titleLine1: "Custom Formulations",
    titleLine2: "& Flavors",
    title: "Custom Formulations & Flavors",
    description: "Our in-house R&D lab crafts custom flavors, active ingredient ratios, and moisture profiles tailored precisely to your brand positioning.",
    icon: "Sparkles"
  },
  {
    titleLine1: "Flexible MOQs &",
    titleLine2: "Rapid Production",
    title: "Flexible MOQs & Rapid Production",
    description: "Whether you need a 10,000-can pilot batch or high-volume commercial scaling, our automated lines deliver with fast 5-7 day sample turnaround and 2-3 week production lead times.",
    icon: "TrendingUp"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer: "Our standard MOQ starts at 10,000 cans per flavor/strength combination for Private Label projects. For custom R&D contract manufacturing formulations, MOQs may vary based on ingredient sourcing.",
    category: "moq"
  },
  {
    question: "How long does it take to get product samples?",
    answer: "For standard private label stock flavors, sample pucks are dispatched within 5-7 business days. Custom formula R&D samples typically take 10-14 business days.",
    category: "lead-time"
  },
  {
    question: "What is your typical mass production lead time?",
    answer: "Once artwork and initial samples are approved, our standard production lead time is 2 to 3 weeks for domestic dispatch from our Phoenix plant.",
    category: "lead-time"
  },
  {
    question: "Can we supply our own active ingredients or flavors?",
    answer: "Yes! We accommodate client-supplied materials (Customer Furnished Materials) subject to our Incoming Quality Control (IQC) testing and COA verification.",
    category: "formulation"
  },
  {
    question: "Do you offer full custom label design and packaging?",
    answer: "Yes. Our design team can provide exact print templates for cans, catch-lids, shrink bands, and counter displays, or assist in finalizing your brand artwork.",
    category: "packaging"
  },
  {
    question: "Are your manufacturing facilities FDA registered?",
    answer: "Yes. Phoenix Pouch Co. operates an FDA registered facility in Phoenix, Arizona, adhering to cGMP standards under 21 CFR Part 111 & Part 117.",
    category: "compliance"
  }
];
