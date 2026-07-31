import type { SVGProps } from "react";

/**
 * A small, purpose-built stroke icon set.
 * Custom paths keep the visual language consistent and avoid shipping an
 * icon library for a dozen glyphs.
 */
const paths = {
  ai: (
    <>
      <path d="M12 3v3.2M12 17.8V21M3 12h3.2M17.8 12H21M5.6 5.6l2.3 2.3M16.1 16.1l2.3 2.3M18.4 5.6l-2.3 2.3M7.9 16.1l-2.3 2.3" />
      <rect x="8.2" y="8.2" width="7.6" height="7.6" rx="2" />
    </>
  ),
  code: (
    <>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18a4 4 0 0 1-.6-7.96 5.5 5.5 0 0 1 10.7-1.28A3.75 3.75 0 0 1 17.5 18H7Z" />
      <path d="M12 13v5M9.8 15.6 12 18l2.2-2.4" />
    </>
  ),
  consulting: (
    <>
      <path d="M4 5.5h16M4 12h10M4 18.5h7" />
      <circle cx="18" cy="17" r="3" />
      <path d="m20.3 19.3 1.7 1.7" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4 3 7.5 7 9 4-1.5 7-5 7-9V6l-7-3Z" />
      <path d="m9.2 12.2 2 2 3.6-3.8" />
    </>
  ),
  chat: (
    <>
      <path d="M20 12.5a6.5 6.5 0 0 1-6.5 6.5H8l-4 3v-3.9A6.5 6.5 0 0 1 8 5h5.5a6.5 6.5 0 0 1 6.5 6.5v1Z" />
      <path d="M9 12h6" />
    </>
  ),
  handover: (
    <>
      <path d="M3 8h11l-2.5-2.5M21 16H10l2.5 2.5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2" />
    </>
  ),
  cycle: (
    <>
      <path d="M4.5 12a7.5 7.5 0 0 1 12.9-5.2L20 9" />
      <path d="M19.5 12a7.5 7.5 0 0 1-12.9 5.2L4 15" />
      <path d="M20 5v4h-4M4 19v-4h4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 9.5h17.6M3.2 14.5h17.6" />
      <path d="M12 3c2.4 2.6 3.6 5.6 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.6-3.6-9S9.6 5.6 12 3Z" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
      <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.8 6.8 8.2 6 8.2-6" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  chevronDown: <path d="m6 9.5 6 6 6-6" />,
  arrowRight: <path d="M4 12h15m-6-6 6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  external: (
    <>
      <path d="M14 4h6v6M20 4l-8.5 8.5" />
      <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
