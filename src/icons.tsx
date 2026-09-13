import type { SVGProps } from 'react';

/** Reusable inline icons keep the site fast and avoid another icon dependency. */
export type IconName = 'arrow' | 'github' | 'linkedin' | 'mail' | 'menu' | 'close';
interface IconProps extends SVGProps<SVGSVGElement> { name: IconName; }

export function Icon({ name, ...props }: IconProps) {
  const paths: Record<IconName, JSX.Element> = {
    arrow: <path d="M5 12h13M13 6l6 6-6 6" />,
    github: <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.03a9.54 9.54 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.39.2 2.42.1 2.67.64.7 1.03 1.6 1.03 2.69 0 3.85-2.35 4.69-4.58 4.94.36.31.68.91.68 1.84v2.73c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />,
    linkedin: <path d="M6.5 8.5H3.3V21h3.2V8.5ZM4.9 3A1.9 1.9 0 1 0 4.9 6.8 1.9 1.9 0 0 0 4.9 3ZM21 13.8c0-3.77-2-5.52-4.66-5.52-2.15 0-3.1 1.18-3.64 2.01V8.5H9.5V21h3.2v-6.19c0-1.63.31-3.2 2.33-3.2 1.99 0 2.02 1.86 2.02 3.3V21h3.2v-7.2Z" />,
    mail: <path d="M3 5.5h18v13H3v-13Zm.7.6L12 12.2l8.3-6.1M3.5 18l6.3-6.1M20.5 18l-6.3-6.1" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>{paths[name]}</svg>;
}
