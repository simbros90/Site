import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const SearchIcon = (props: P) => (
  <svg {...base(props)}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4.4-4.4" />
  </svg>
);

export const CloudRainIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M17.5 15a3.5 3.5 0 0 0-.4-6.98A5.5 5.5 0 0 0 6.4 9.6 4 4 0 0 0 7 15.5h10.5Z" />
    <path d="m8.5 18.5-.8 2M12.5 18.5l-.8 2M16.5 18.5l-.8 2" />
  </svg>
);

export const ArrowRightIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M4 12h15" />
    <path d="m13.5 6.5 5.5 5.5-5.5 5.5" />
  </svg>
);

export const ClockIcon = (props: P) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const MenuIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const ChevronDownIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="m6 9.5 6 6 6-6" />
  </svg>
);

export const ArrowUpRightIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M7 17 17 7" />
    <path d="M9 7h8v8" />
  </svg>
);

export const TrendUpIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="m4 16 5.5-5.5 3.5 3.5L20 8" />
    <path d="M15 8h5v5" />
  </svg>
);

export const TrendDownIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="m4 8 5.5 5.5L13 10l7 6" />
    <path d="M20 11v5h-5" />
  </svg>
);

export const CheckIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const EnvelopeIcon = (props: P) => (
  <svg {...base(props)}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="1" />
    <path d="m4.5 7 7.5 6 7.5-6" />
  </svg>
);

/* Ornamental flourish used either side of the masthead */
export const FlourishIcon = (props: P) => (
  <svg width="46" height="12" viewBox="0 0 46 12" fill="none" {...props}>
    <path
      d="M1 6h14c4 0 5-3 8-3s4 3 6 3-3 3-6 3-4-3-8-3H1Z"
      stroke="currentColor"
      strokeWidth="1.1"
    />
    <circle cx="37" cy="6" r="1.4" fill="currentColor" />
    <path d="M41 6h4" stroke="currentColor" strokeWidth="1.1" />
  </svg>
);

/* Social marks — simplified bespoke versions */
export const XSocialIcon = (props: P) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.7 3h2.9l-6.4 7.3L21.7 21h-5.9l-4.6-6-5.3 6H3l6.9-7.8L2.6 3h6l4.2 5.5L17.7 3Zm-1 16.2h1.6L7.7 4.7H6L16.7 19.2Z" />
  </svg>
);

export const FacebookIcon = (props: P) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.6 21v-7.4h2.5l.4-2.9h-2.9V8.8c0-.84.23-1.4 1.44-1.4h1.54V4.8c-.27-.04-1.18-.11-2.24-.11-2.22 0-3.74 1.35-3.74 3.84v2.14H8v2.9h2.54V21h3.06Z" />
  </svg>
);

export const InstagramIcon = (props: P) => (
  <svg {...base(props)} width={15} height={15}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

export const YoutubeIcon = (props: P) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.3 5 12 5 12 5s-6.3 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.7 19 12 19 12 19s6.3 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.2V8.8l5.2 3.2L10 15.2Z" />
  </svg>
);
