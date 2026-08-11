import React from 'react';

interface ProcessIllustrationProps {
  stepId: number;
}

export const ProcessIllustration: React.FC<ProcessIllustrationProps> = ({ stepId }) => {
  const getIcon = () => {
    switch (stepId) {
      case 1:
        return (
          <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Clipboard / Inspection paper */}
            <rect x="10" y="8" width="28" height="34" rx="4" stroke="#171717" />
            <path d="M18 8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3" stroke="#171717" />
            {/* Document Lines */}
            <line x1="16" y1="17" x2="32" y2="17" stroke="#171717" />
            <line x1="16" y1="23" x2="26" y2="23" stroke="#171717" />
            <line x1="16" y1="29" x2="22" y2="29" stroke="#171717" />
            {/* Checkmark Badge in #c94a29 */}
            <circle cx="31" cy="30" r="6.5" stroke="#c94a29" fill="#ffffff" strokeWidth="2" />
            <path d="M28.5 30l1.8 1.8 3.7-3.7" stroke="#c94a29" strokeWidth="2.5" />
          </svg>
        );
      case 2:
        return (
          <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Laboratory Beaker / Flask */}
            <path d="M17 6h14M20 6v10l-8.5 17.5A3 3 0 0 0 14.1 38h19.8a3 3 0 0 0 2.6-4.5L28 16V6" stroke="#171717" />
            {/* Liquid Surface Line */}
            <path d="M14.5 28c3 1 6-1 9.5 0s6.5 1 9.5 0" stroke="#c94a29" strokeWidth="2" />
            {/* Active Particles */}
            <circle cx="20" cy="22" r="1.5" fill="#c94a29" stroke="#c94a29" />
            <circle cx="27" cy="24" r="2" fill="#c94a29" stroke="#c94a29" />
            <circle cx="21" cy="33" r="1" fill="#c94a29" stroke="#c94a29" />
          </svg>
        );
      case 3:
        return (
          <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Pouch Package */}
            <rect x="11" y="8" width="26" height="32" rx="5" stroke="#171717" />
            {/* Pouch Crimp Seals */}
            <line x1="11" y1="14" x2="37" y2="14" stroke="#171717" strokeDasharray="1.5 2.5" />
            <line x1="11" y1="34" x2="37" y2="34" stroke="#171717" strokeDasharray="1.5 2.5" />
            {/* Ultrasonic Pulse Sealing Wave */}
            <path d="M17 24h3l2-4 3 8 3-8 2 4h3" stroke="#c94a29" strokeWidth="2.3" />
          </svg>
        );
      case 4:
        return (
          <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Can Puck Cylinder */}
            <ellipse cx="24" cy="15" rx="16" ry="7" stroke="#171717" />
            <path d="M8 15v17c0 3.9 7.2 7 16 7s16-3.1 16-7V15" stroke="#171717" />
            <path d="M8 23c0 3.9 7.2 7 16 7s16-3.1 16-7" stroke="#171717" />
            {/* Brand Accent Seal Ring */}
            <ellipse cx="24" cy="15" rx="9" ry="4" stroke="#c94a29" strokeWidth="2" />
            <circle cx="24" cy="15" r="2" fill="#c94a29" stroke="#c94a29" />
          </svg>
        );
      case 5:
        return (
          <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Tag / Label Outline */}
            <rect x="9" y="11" width="30" height="26" rx="4" stroke="#171717" />
            {/* Barcode & Batch Code Lines */}
            <line x1="15" y1="18" x2="15" y2="30" stroke="#171717" />
            <line x1="19" y1="18" x2="19" y2="30" stroke="#c94a29" strokeWidth="2.5" />
            <line x1="22" y1="18" x2="22" y2="30" stroke="#171717" />
            <line x1="26" y1="18" x2="26" y2="30" stroke="#171717" />
            <line x1="30" y1="18" x2="30" y2="30" stroke="#c94a29" strokeWidth="2.5" />
            <line x1="33" y1="18" x2="33" y2="30" stroke="#171717" />
          </svg>
        );
      case 6:
        return (
          <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Quality Certificate Seal */}
            <circle cx="24" cy="19" r="11" stroke="#171717" />
            <path d="M19 19l3.5 3.5 7-7" stroke="#c94a29" strokeWidth="2.5" />
            {/* Ribbon Tails */}
            <path d="M17 28l-3 12 7-3.5 3 1.5 3-1.5 7 3.5-3-12" stroke="#171717" />
          </svg>
        );
      case 7:
        return (
          <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            {/* 3D Shipping Box */}
            <path d="M12 16l12-6 12 6v16l-12 6-12-6V16z" stroke="#171717" />
            <path d="M12 16l12 6 12-6" stroke="#171717" />
            <line x1="24" y1="22" x2="24" y2="38" stroke="#171717" />
            {/* Tape Seal Highlight */}
            <path d="M19 12.5l10 5" stroke="#c94a29" strokeWidth="2.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-neutral-50/90 border border-neutral-200/80 flex items-center justify-center p-3 text-neutral-900 group-hover:bg-[#fef2ed] group-hover:border-[#fcd9cc] group-hover:scale-105 transition-all duration-300 shrink-0">
      {getIcon()}
    </div>
  );
};

