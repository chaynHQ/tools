import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['var(--font-merriweather)', 'serif'],
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
      },
      colors: {
        background: 'oklch(var(--color-background))',
        foreground: 'oklch(var(--color-foreground))',
        primary: {
          DEFAULT: 'oklch(var(--color-primary))',
          foreground: 'oklch(var(--color-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'oklch(var(--color-secondary))',
          foreground: 'oklch(var(--color-secondary-foreground))',
        },
        card: {
          DEFAULT: 'oklch(var(--color-neutral))',
          foreground: 'oklch(var(--color-foreground))',
        },
        popover: {
          DEFAULT: 'oklch(var(--color-neutral))',
          foreground: 'oklch(var(--color-foreground))',
        },
        muted: {
          DEFAULT: 'oklch(var(--color-muted))',
          foreground: 'oklch(var(--color-muted-foreground))',
        },
        accent: {
          DEFAULT: 'oklch(var(--color-accent-blue))',
          foreground: 'oklch(var(--color-foreground))',
          green: 'oklch(var(--color-accent-green))',
          blue: 'oklch(var(--color-accent-blue))',
          light: 'oklch(var(--color-accent-light))',
          yellow: 'oklch(var(--color-accent-yellow))',
        },
        destructive: {
          DEFAULT: 'oklch(var(--color-destructive))',
          foreground: 'oklch(var(--color-destructive-foreground))',
        },
        border: 'oklch(var(--color-border))',
        input: 'oklch(var(--color-input))',
        ring: 'oklch(var(--color-ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 0.25rem)',
        sm: 'calc(var(--radius) - 0.5rem)',
        full: 'var(--radius-full)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
