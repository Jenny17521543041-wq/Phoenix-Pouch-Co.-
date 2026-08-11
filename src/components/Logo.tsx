import React from 'react';

// 填入黑色logo图片路径logo-black.png
import logoBlack from '../assets/images/logo-black.png';

// 填入白色logo图片路径logo-white.png
import logoWhite from '../assets/images/logo-white.png';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-10',
  variant = 'dark',
}) => {
  return (
    <div className={`inline-flex items-center select-none group cursor-pointer ${className}`}>
      {variant === 'dark' ? (
        <img
          src={logoBlack} // 填入黑色logo图片路径logo-black.png
          alt="Phoenix Pouch Manufacturing Logo"
          className="h-full w-auto max-w-full transition-transform duration-300 group-hover:scale-[1.01]"
        />
      ) : (
        <img
          src={logoWhite} // 填入白色logo图片路径logo-white.png
          alt="Phoenix Pouch Manufacturing Logo"
          className="h-full w-auto max-w-full transition-transform duration-300 group-hover:scale-[1.01]"
        />
      )}
    </div>
  );
};
