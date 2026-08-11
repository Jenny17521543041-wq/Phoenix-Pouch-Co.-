import React from 'react';
import { PageId } from '../types';
import { FACTORY_INFO } from '../data/factoryData';
import { QuoteForm } from '../components/QuoteForm';
import { QuoteCTASection } from '../components/QuoteCTASection';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';

interface ContactUsPageProps {
  onNavigate: (page: PageId) => void;
  selectedProductLine?: string;
  selectedStrength?: string;
  selectedFlavor?: string;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({
  onNavigate,
  selectedProductLine,
  selectedStrength,
  selectedFlavor
}) => {
  return (
    <div className="bg-white text-neutral-900 min-h-screen space-y-32 sm:space-y-40 lg:space-y-48 pb-0">
      
      {/* Header Banner - Light Grey Background with Dark Text */}
      <section className="bg-[#f4f5f7] border-b border-neutral-200/80 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 tracking-tight">
            Contact Phoenix Pouch Co.
          </h1>

          <p className="text-neutral-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            Ready to manufacture your brand's pouch product line? Submit your specification requirements below.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-neutral-500 pt-2 font-mono font-medium">
            <span>Guaranteed Response within 24 Hours</span>
            <span className="text-neutral-300">•</span>
            <span>100% NDA & IP Protection</span>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          
          {/* Left Column: Direct Contact Info & Plant Location */}
          <div className="lg:col-span-5 space-y-12 sm:space-y-16">
            
            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight pb-1">
                Phoenix HQ & Sales Contacts
              </h2>

              <div className="space-y-8 text-sm text-neutral-700 font-semibold">
                
                <div className="space-y-1.5">
                  <div className="font-bold text-neutral-900 text-base">Facility Address</div>
                  <div className="text-neutral-600">{FACTORY_INFO.address}</div>
                  <div className="text-neutral-400 font-mono text-xs">Phoenix, Arizona 85041 USA</div>
                </div>

                <div className="space-y-1.5">
                  <div className="font-bold text-neutral-900 text-base">OEM Sales Line</div>
                  <a href={`tel:${FACTORY_INFO.phone}`} className="text-[#c94a29] font-bold text-base hover:underline block">
                    {FACTORY_INFO.phone}
                  </a>
                  <div className="text-neutral-500 font-normal">WhatsApp: {FACTORY_INFO.whatsapp}</div>
                </div>

                <div className="space-y-1.5">
                  <div className="font-bold text-neutral-900 text-base">Email Inquiries</div>
                  <a href={`mailto:${FACTORY_INFO.email}`} className="text-[#c94a29] font-bold text-base hover:underline block">
                    {FACTORY_INFO.email}
                  </a>
                  <div className="text-neutral-500 font-normal">WeChat ID: <span className="font-mono text-neutral-900 font-bold">{FACTORY_INFO.wechat}</span></div>
                </div>

                <div className="space-y-1.5">
                  <div className="font-bold text-neutral-900 text-base">Operating Hours</div>
                  <div className="text-neutral-600 font-normal">Monday – Friday: 8:00 AM – 6:00 PM (MST)</div>
                </div>

              </div>
            </div>

            {/* Location Map Visual */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between text-sm font-bold text-neutral-800">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#c94a29]" />
                  <span>Phoenix Plant Location</span>
                </div>
                <span className="text-neutral-400 font-mono text-xs">Phoenix, AZ</span>
              </div>

              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden border border-neutral-200/90 shadow-sm bg-neutral-100 group">
                {/* Google Maps Embedded Frame */}
                <iframe
                  title="Phoenix Plant Location Map"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=2450+W+Broadway+Rd,+Phoenix,+AZ+85041&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale-[20%] contrast-[105%] group-hover:grayscale-0 transition-all duration-300"
                />

                {/* Floating Info Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-lg border border-neutral-200/90 shadow-lg space-y-3">
                  <div className="flex items-start gap-2.5">
                    <div className="p-1.5 bg-[#c94a29]/10 rounded-md text-[#c94a29] shrink-0 mt-0.5">
                      <Navigation className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-neutral-900 leading-snug">
                        {FACTORY_INFO.name}
                      </div>
                      <div className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                        {FACTORY_INFO.address}, Phoenix, AZ 85041
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=2450+W+Broadway+Rd,+Phoenix,+AZ+85041"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-neutral-900 hover:bg-[#c94a29] text-white font-bold text-xs rounded transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: RFQ Form */}
          <div className="lg:col-span-7">
            <QuoteForm
              initialProductLine={selectedProductLine}
              initialStrength={selectedStrength}
              initialFlavor={selectedFlavor}
            />
          </div>

        </div>

      </section>

      {/* MANDATORY Bottom CTA */}
      <QuoteCTASection
        onNavigate={onNavigate}
        title="Prefer Direct Phone or Video Consultation?"
        subtitle="Our Phoenix application engineers and sales team are ready to discuss your specific pouch formulations."
      />

    </div>
  );
};

