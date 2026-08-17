import React from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { FACTORY_INFO } from '../data/factoryData';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-neutral-950 text-neutral-300 pt-16 pb-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => handleNav('home')} className="text-left focus:outline-none">
              <Logo className="h-8" variant="light" />
            </button>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Premier US contract manufacturer in Phoenix, Arizona. Specializing in high-precision Private Label & OEM production for Nicotine Pouches, Nootropic Pouches, and Caffeine Pouches.
            </p>
          </div>

          {/* Product Lines */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase font-mono">Product Lines</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <button onClick={() => handleNav('nicotine-pouches')} className="hover:text-[#e87046] transition-colors">
                  Nicotine Pouches
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('nootropic-pouches')} className="hover:text-[#e87046] transition-colors">
                  Nootropic Pouches
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('caffeine-pouches')} className="hover:text-[#e87046] transition-colors">
                  Caffeine Pouches
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('service')} className="hover:text-[#e87046] transition-colors flex items-center gap-1">
                  <span>Private Label Specs</span>
                  <ArrowUpRight className="w-3 h-3 text-[#e87046]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase font-mono">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <button onClick={() => handleNav('service')} className="hover:text-[#e87046] transition-colors">
                  Services & OEM
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('production-process')} className="hover:text-[#e87046] transition-colors">
                  Production Process
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about-us')} className="hover:text-[#e87046] transition-colors">
                  About Phoenix Plant
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact-us')} className="hover:text-[#e87046] transition-colors font-semibold text-[#e87046]">
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase font-mono">Phoenix Plant HQ</h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <div>
                <span>{FACTORY_INFO.address}</span>
              </div>
              <div>
                <a href={`tel:${FACTORY_INFO.phone}`} className="hover:text-white transition-colors">
                  Phone: {FACTORY_INFO.phone}
                </a>
              </div>
              <div>
                <a href={`mailto:${FACTORY_INFO.email}`} className="hover:text-white transition-colors">
                  Email: {FACTORY_INFO.email}
                </a>
              </div>
              <div className="pt-2 text-neutral-400 text-xs">
                <div>WhatsApp: <span className="text-neutral-200">{FACTORY_INFO.whatsapp}</span></div>
                <div>WeChat ID: <span className="text-neutral-200">{FACTORY_INFO.wechat}</span></div>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Phoenix Pouch Co. All Rights Reserved.
          </div>
          <div>
            Contract Pouch Manufacturer • Phoenix, Arizona
          </div>
        </div>

      </div>
    </footer>
  );
};
