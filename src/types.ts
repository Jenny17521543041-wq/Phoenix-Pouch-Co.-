export type PageId =
  | 'home'
  | 'nicotine-pouches'
  | 'nootropic-pouches'
  | 'caffeine-pouches'
  | 'service'
  | 'production-process'
  | 'about-us'
  | 'contact-us';

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productLines: string[]; // 'nicotine' | 'nootropic' | 'caffeine'
  estimatedVolume: string; // e.g., '10k-50k', '50k-250k', etc.
  nicotineStrength?: string;
  caffeineDosage?: string;
  nootropicFocus?: string;
  flavorPreference?: string;
  pouchType?: string;
  targetLaunchDate?: string;
  message: string;
}

export interface QuoteResponse {
  success: boolean;
  referenceNo?: string;
  message: string;
}

export interface ProductSpecOption {
  category: string;
  title: string;
  subtitle: string;
  heroImage: string;
  canImage: string;
  overview: string;
  marketTrends: string[];
  keyAdvantages: string[];
  specs: {
    dosagesOrStrengths: string[];
    flavors: string[];
    pouchWeights: string[];
    canPuckOptions: string[];
  };
  packagingCustomization: {
    canColors: string[];
    labelFinishes: string[];
    specialCrafts: string[];
  };
  complianceNotice: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  cnTitle?: string;
  subtitle: string;
  description: string;
  details: string[];
  qcCheckpoint: string;
  iconName: string;
  image?: string;
}

export interface Certification {
  id: string;
  name: string;
  code: string;
  description: string;
  verifiedBy: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'moq' | 'formulation' | 'packaging' | 'compliance' | 'lead-time';
}
