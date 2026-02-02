/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paper Dashboard color palette
        paper: {
          primary: '#51cbce',
          'primary-hover': '#34b5b8',
          success: '#6bd098',
          'success-hover': '#44c47d',
          warning: '#fbc658',
          'warning-alt': '#fcc468',
          danger: '#ef8157',
          'danger-alt': '#f17e5d',
          info: '#51bcda',
          'info-alt': '#51CACF',
          gray: '#9A9A9A',
          dark: '#66615B',
          'dark-hover': '#403D39',
          background: '#f4f3ef',
          white: '#FFFFFF',
          border: '#DDDDDD',
        },
        // Riverbank theme colors
        ti: {
          bg: '#ECE6DC',
          fg: '#1F2127',
          'bg-alt': 'rgba(245, 245, 242, 0.7)',
          'bg-inv': '#1F2125',
          'fg-alt': '#FFFFFF',
          accent: '#1D1F25',
        },
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'Helvetica', 'Arial', 'sans-serif'],
        fraunces: ['var(--font-fraunces)', 'serif'],
      },
      spacing: {
        'sidebar': '260px',
        'navbar-height': '93px',
      },
      borderRadius: {
        'card': '12px',
      },
      boxShadow: {
        'card': '0 6px 10px -4px rgba(0, 0, 0, 0.15)',
        'dropdown': '1px 2px 7px 1px rgba(0, 0, 0, 0.125)',
      },
      width: {
        'sidebar': '260px',
      },
      transitionTimingFunction: {
        'paper': 'cubic-bezier(0.34, 2, 0.6, 1)',
      },
    },
  },
  plugins: [],
}