import React from 'react';
import { PageId } from '../types';
import { ArrowRight, ShieldCheck, Clock, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface QuoteCTASectionProps {
  onNavigate: (page: PageId) => void;
  title?: string;
  subtitle?: string;
}

export const QuoteCTASection: React.FC<QuoteCTASectionProps> = ({
  onNavigate,
  title = "Ready to Launch Your Custom Pouch Brand?",
  subtitle = "Partner with Phoenix Pouch Co. for US-made, cGMP compliant, precision pouch contract manufacturing. Get a tailored quotation and sample kit today."
}) => {
  return (
    <section className="bg-neutral-950 text-white py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33333315_1px,transparent_1px),linear-gradient(to_bottom,#33333315_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />
      
      {/* Radial warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c94a29]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="max-w-2xl text-left space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              {subtitle}
            </p>

            {/* Quick Guarantees */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-300 font-medium">
              <div>
                <span>5-7 Day Sample Delivery</span>
              </div>
              <div>
                <span>2-3 Week Lead Time</span>
              </div>
              <div>
                <span>cGMP & FDA Facility</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => {
                onNavigate('contact-us');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c94a29] hover:bg-[#b33e1f] text-white font-extrabold text-base transition-all cursor-pointer w-full"
            >
              <span>Get a Quote Now</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="tel:+16025550199"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-bold text-sm transition-colors w-full"
            >
              <span>Call Sales: +1 (602) 555-0199</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
