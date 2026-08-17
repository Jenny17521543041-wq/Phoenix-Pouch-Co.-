import React from 'react';

export const CertificationBadges: React.FC = () => {
  return (
    <div className="w-full space-y-8 sm:space-y-12">
      {/* Row 1: Top 5 Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 items-center justify-items-center">
        
        {/* 1. Bureau Veritas ISO 9001:2015 */}
        <div className="flex items-center justify-center h-20 sm:h-24 w-full max-w-[220px]">
          <svg viewBox="0 0 240 90" className="w-full h-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Red Box Left */}
            <rect x="5" y="15" width="145" height="60" fill="#C8102E" />
            <text x="15" y="34" fill="#FFFFFF" fontSize="11" fontFamily="Arial, sans-serif" fontWeight="bold">ISO 9001:2015</text>
            <text x="15" y="49" fill="#FFFFFF" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="bold">BUREAU VERITAS</text>
            <text x="15" y="62" fill="#FFFFFF" fontSize="9" fontFamily="Arial, sans-serif">Certification</text>
            
            {/* Seal Ring Right */}
            <circle cx="185" cy="45" r="32" fill="#C8102E" />
            <circle cx="185" cy="45" r="29" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="185" cy="45" r="26" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            {/* Seal Inner Details */}
            <path d="M185 24 L188 30 L195 30 L189 34 L191 40 L185 36 L179 40 L181 34 L175 30 L182 30 Z" fill="#FFFFFF" opacity="0.9" />
            <text x="185" y="52" fill="#FFFFFF" fontSize="6.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">BUREAU VERITAS</text>
            <text x="185" y="61" fill="#FFFFFF" fontSize="7" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">1828</text>
          </svg>
        </div>

        {/* 2. HACCP */}
        <div className="flex items-center justify-center h-20 sm:h-24 w-full max-w-[150px]">
          <svg viewBox="0 0 120 120" className="w-full h-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="52" stroke="#2B3990" strokeWidth="2.5" fill="none" />
            {/* Circular Text Placeholder Path */}
            <path id="haccp-path" d="M 18,60 A 42,42 0 1,1 102,60 A 42,42 0 1,1 18,60" fill="none" />
            <text fill="#2B3990" fontSize="7.5" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="0.8">
              <textPath href="#haccp-path" startOffset="50%" textAnchor="middle">
                HAZARD ANALYSIS AND CRITICAL CONTROL POINT
              </textPath>
            </text>
            {/* Globe Grid */}
            <ellipse cx="60" cy="60" rx="32" ry="16" stroke="#2B3990" strokeWidth="1" fill="none" />
            <ellipse cx="60" cy="60" rx="16" ry="32" stroke="#2B3990" strokeWidth="1" fill="none" />
            <line x1="28" y1="60" x2="92" y2="60" stroke="#2B3990" strokeWidth="1.5" />
            <line x1="60" y1="28" x2="60" y2="92" stroke="#2B3990" strokeWidth="1.5" />
            {/* Center HACCP */}
            <rect x="25" y="47" width="70" height="26" fill="#FFFFFF" />
            <text x="60" y="66" fill="#2B3990" fontSize="20" fontWeight="900" textAnchor="middle" fontFamily="Arial, sans-serif" letterSpacing="1">HACCP</text>
          </svg>
        </div>

        {/* 3. Health Canada Medical Device Establishment License */}
        <div className="flex items-center justify-center h-20 sm:h-24 w-full max-w-[180px]">
          <div className="flex flex-col items-center text-center space-y-1">
            <span className="text-[10px] sm:text-xs font-bold text-neutral-900 tracking-tight leading-tight uppercase">
              Medical Device Establishment License
            </span>
            <div className="flex items-center justify-center gap-1.5 my-0.5">
              {/* Canada Flag Icon */}
              <svg viewBox="0 0 30 20" className="w-5 h-3.5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="20" fill="#FF0000" />
                <rect x="7.5" width="15" height="20" fill="#FFFFFF" />
                <path d="M15 4 L16.5 8.5 L19.5 7 L18 10.5 L21 12.5 L17.5 13 L17.5 16 L15 14.5 L12.5 16 L12.5 13 L9 12.5 L12 10.5 L10.5 7 L13.5 8.5 Z" fill="#FF0000" />
              </svg>
              <span className="text-[9px] font-medium text-neutral-700">
                Santé Canada / Health Canada
              </span>
            </div>
            <span className="text-[11px] font-bold text-neutral-900 font-mono">
              17198
            </span>
          </div>
        </div>

        {/* 4. Health Canada Drug Establishment License */}
        <div className="flex items-center justify-center h-20 sm:h-24 w-full max-w-[180px]">
          <div className="flex flex-col items-center text-center space-y-1">
            <span className="text-[10px] sm:text-xs font-bold text-neutral-900 tracking-tight leading-tight uppercase">
              Drug Establishment License
            </span>
            <div className="flex items-center justify-center gap-1.5 my-0.5">
              {/* Canada Flag Icon */}
              <svg viewBox="0 0 30 20" className="w-5 h-3.5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="20" fill="#FF0000" />
                <rect x="7.5" width="15" height="20" fill="#FFFFFF" />
                <path d="M15 4 L16.5 8.5 L19.5 7 L18 10.5 L21 12.5 L17.5 13 L17.5 16 L15 14.5 L12.5 16 L12.5 13 L9 12.5 L12 10.5 L10.5 7 L13.5 8.5 Z" fill="#FF0000" />
              </svg>
              <span className="text-[9px] font-medium text-neutral-700">
                Santé Canada / Health Canada
              </span>
            </div>
            <span className="text-[11px] font-bold text-neutral-900 font-mono">
              3-002735-A
            </span>
          </div>
        </div>

        {/* 5. Health Canada Natural Health Products Site License */}
        <div className="flex items-center justify-center h-20 sm:h-24 w-full max-w-[180px]">
          <div className="flex flex-col items-center text-center space-y-1">
            <span className="text-[10px] sm:text-xs font-bold text-neutral-900 tracking-tight leading-tight uppercase">
              Natural Health Products Site License
            </span>
            <div className="flex items-center justify-center gap-1.5 my-0.5">
              {/* Canada Flag Icon */}
              <svg viewBox="0 0 30 20" className="w-5 h-3.5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="20" fill="#FF0000" />
                <rect x="7.5" width="15" height="20" fill="#FFFFFF" />
                <path d="M15 4 L16.5 8.5 L19.5 7 L18 10.5 L21 12.5 L17.5 13 L17.5 16 L15 14.5 L12.5 16 L12.5 13 L9 12.5 L12 10.5 L10.5 7 L13.5 8.5 Z" fill="#FF0000" />
              </svg>
              <span className="text-[9px] font-medium text-neutral-700">
                Santé Canada / Health Canada
              </span>
            </div>
            <span className="text-[11px] font-bold text-neutral-900 font-mono">
              302401
            </span>
          </div>
        </div>

      </div>

      {/* Row 2: Bottom 2 Badges Centered */}
      <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 pt-2 sm:pt-4">
        
        {/* 6. FDA FEI NUMBER Box Badge */}
        <div className="flex items-center justify-center h-20 sm:h-24">
          <div className="border-2 border-neutral-800 rounded-lg px-6 py-2.5 flex flex-col items-center justify-center text-center space-y-1">
            <span className="text-xs sm:text-sm font-extrabold text-neutral-900 tracking-wider">
              FDA FEI NUMBER
            </span>
            <div className="w-full h-[1.5px] bg-neutral-800 my-0.5" />
            <span className="text-sm sm:text-base font-extrabold text-neutral-900 font-mono tracking-widest">
              3014400962
            </span>
          </div>
        </div>

        {/* 7. GMP Quality Badge */}
        <div className="flex items-center justify-center h-20 sm:h-24">
          <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer Green Ring */}
            <circle cx="60" cy="60" r="54" stroke="#00A651" strokeWidth="2.5" fill="none" />
            <circle cx="60" cy="60" r="48" stroke="#00A651" strokeWidth="1" strokeDasharray="2 2" fill="none" />
            
            {/* Circular Text */}
            <path id="gmp-path" d="M 18,60 A 42,42 0 1,1 102,60 A 42,42 0 1,1 18,60" fill="none" />
            <text fill="#00A651" fontSize="7" fontWeight="bold" fontFamily="Arial, sans-serif">
              <textPath href="#gmp-path" startOffset="50%" textAnchor="middle">
                • GOOD MANUFACTURING PRACTICE •
              </textPath>
            </text>

            {/* Inner Green Circle */}
            <circle cx="60" cy="60" r="32" fill="#00A651" />
            
            {/* GMP Quality Text */}
            <text x="60" y="57" fill="#FFFFFF" fontSize="15" fontWeight="900" textAnchor="middle" fontFamily="Arial, sans-serif" letterSpacing="0.5">
              GMP
            </text>
            <text x="60" y="70" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">
              Quality
            </text>
          </svg>
        </div>

      </div>
    </div>
  );
};
