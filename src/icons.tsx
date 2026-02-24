/* SVG icon components — inline Feather/Lucide icons from original HTML */

interface IconProps {
  size?: number;
}

const defaults = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const IconTrend = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

export const IconClock = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

export const IconDatabase = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

export const IconBarChart = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

export const IconRefresh = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);

export const IconLayers = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);

export const IconUser = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

export const IconCpu = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <rect x="9" y="9" width="6" height="6"/>
    <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/>
    <rect x="2" y="2" width="20" height="20" rx="2"/>
  </svg>
);

export const IconShare = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);

export const IconFile = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);

export const IconBolt = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

export const IconLock = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

export const IconDiamond = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"/>
  </svg>
);

export const IconSearch = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

export const IconShield = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

export const IconKey = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
  </svg>
);

export const IconAlertOctagon = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

export const IconFileSearch = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <circle cx="11.5" cy="14.5" r="2.5"/>
    <line x1="13.25" y1="16.25" x2="15" y2="18"/>
  </svg>
);

export const IconXCircle = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <circle cx="12" cy="12" r="10"/>
    <line x1="15" y1="9" x2="9" y2="15"/>
    <line x1="9" y1="9" x2="15" y2="15"/>
  </svg>
);

export const IconAward = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);

export const IconBook = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

export const IconLayout = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="9" y1="21" x2="9" y2="9"/>
  </svg>
);

export const IconCheckSquare = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <polyline points="9 11 12 14 22 4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
);

export const IconTarget = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

export const IconUsers = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

export const IconCheck = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

export const IconCopy = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  </svg>
);

export const IconUserMinus = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="8.5" cy="7" r="4"/>
    <line x1="18" y1="8" x2="23" y2="13"/>
    <line x1="23" y1="8" x2="18" y2="13"/>
  </svg>
);

export const IconActivity = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

export const IconDollar = ({ size = 18 }: IconProps) => (
  <svg {...defaults} width={size} height={size}>
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

export const IconArrowDown = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12l7 7 7-7"/>
  </svg>
);

export const IconDownload = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 16l-4-4h3V4h2v8h3l-4 4z"/>
    <path d="M20 18H4"/>
  </svg>
);
