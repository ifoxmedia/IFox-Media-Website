import React from 'react';

interface IFoxLogoProps {
  variant?: 'light' | 'dark';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const IFoxLogo: React.FC<IFoxLogoProps> = ({
  variant = 'light',
  size = 'md',
  className = '',
  showTagline = true,
}) => {
  // Dimension calculations - refined for crisp, balanced modern agency proportions
  const sizeMap = {
    xs: { width: 140, height: showTagline ? 33 : 22 },
    sm: { width: 160, height: showTagline ? 38 : 25 },
    md: { width: 190, height: showTagline ? 45 : 30 },
    lg: { width: 240, height: showTagline ? 57 : 38 },
    xl: { width: 300, height: showTagline ? 71 : 47 },
  };

  const dim = sizeMap[size];
  const isDark = variant === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#0F172A';
  const orange = '#FF5200';
  const subTextColor = isDark ? '#94A3B8' : '#475569';

  return (
    <div
      id={`ifox-logo-${size}-${variant}`}
      className={`inline-flex flex-col items-start select-none transition-all duration-200 hover:opacity-95 ${className}`}
      style={{ width: `${dim.width}px` }}
    >
      <svg
        viewBox="0 0 520 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id={`foxGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5722" />
            <stop offset="100%" stopColor="#FF3D00" />
          </linearGradient>
          <linearGradient id={`taperLeft-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5200" stopOpacity="0" />
            <stop offset="100%" stopColor="#FF5200" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id={`taperRight-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5200" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF5200" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Wordmark: IFOX | MEDIA */}
        <g id="main-brand-text">
          {/* IF */}
          <text
            x="10"
            y="67"
            fontFamily="'Outfit', -apple-system, BlinkMacSystemFont, sans-serif"
            fontWeight="900"
            fontSize="72"
            fill={textColor}
            letterSpacing="-1"
          >
            IF
          </text>

          {/* OX */}
          <text
            x="78"
            y="67"
            fontFamily="'Outfit', -apple-system, BlinkMacSystemFont, sans-serif"
            fontWeight="900"
            fontSize="72"
            fill={`url(#foxGrad-${variant})`}
            letterSpacing="-1"
          >
            OX
          </text>

          {/* Vertical Separator Bar */}
          <rect
            x="210"
            y="14"
            width="4.5"
            height="55"
            rx="2.25"
            fill={orange}
          />

          {/* MEDIA */}
          <text
            x="230"
            y="67"
            fontFamily="'Outfit', -apple-system, BlinkMacSystemFont, sans-serif"
            fontWeight="900"
            fontSize="72"
            fill={textColor}
            letterSpacing="-1"
          >
            MEDIA
          </text>
        </g>

        {/* Tagline: CREATE • GROW • TRANSFORM */}
        {showTagline && (
          <g id="tagline-group">
            {/* Left Taper Accent Line */}
            <polygon
              points="12,93 115,91.8 115,94.2"
              fill={`url(#taperLeft-${variant})`}
            />

            {/* Tagline Text */}
            <text
              x="255"
              y="96.5"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontWeight="800"
              fontSize="12.5"
              fill={subTextColor}
              letterSpacing="5"
              textAnchor="middle"
            >
              CREATE <tspan fill={orange} fontWeight="900">•</tspan> GROW <tspan fill={orange} fontWeight="900">•</tspan> TRANSFORM
            </text>

            {/* Right Taper Accent Line */}
            <polygon
              points="395,91.8 498,93 395,94.2"
              fill={`url(#taperRight-${variant})`}
            />
          </g>
        )}
      </svg>
    </div>
  );
};
