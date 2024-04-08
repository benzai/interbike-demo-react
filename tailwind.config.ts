import type { Config } from "tailwindcss"

const colors = {
  "theme-brand-primary-300": "var(--color-brand-primary-300)",
  "theme-brand-primary-500": "var(--color-brand-primary-500)",
  "theme-brand-primary-700": "var(--color-brand-primary-700)",
  "theme-brand-primary-700-60": "var(--color-brand-primary-700-60)",
  "theme-surface-100": "var(--color-surface-100)",
  "theme-surface-300": "var(--color-surface-300)",
  "theme-surface-500": "var(--color-surface-500)",
  "theme-surface-700": "var(--color-surface-700)",
  "theme-surface-900": "var(--color-surface-900)",
  "theme-text-primary": "var(--color-text-primary)",
  "theme-text-secondary": "var(--color-text-secondary)",
  "theme-text-alternate-300": "var(--color-text-alternate-300)",
  "theme-text-alternate-500": "var(--color-text-alternate-500)",
  "theme-icon-primary": "var(--color-icon-primary)",
  "theme-status-positive": "var(--color-status-positive)",
}

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      medium: ["var(--font-medium)"],
      bold: ["var(--font-bold)"],
    },
    fontSize: {
      "2xl": [
        "var(--fontSize-2xl)",
        {
          letterSpacing: "-0.03em",
          lineHeight: "1em",
        },
      ],
      xl: [
        "var(--fontSize-xl)",
        {
          letterSpacing: "-0.03em",
          lineHeight: "1em",
        },
      ],
      lg: [
        "var(--fontSize-lg)",
        {
          letterSpacing: "-0.03em",
          lineHeight: "1em",
        },
      ],
      md: [
        "var(--fontSize-md)",
        {
          letterSpacing: "-0.02em",
          lineHeight: "1em",
        },
      ],
      sm: [
        "var(--fontSize-sm)",
        {
          letterSpacing: "-0.02em",
          lineHeight: "1em",
        },
      ],
      xs: [
        "var(--fontSize-xs)",
        {
          letterSpacing: "-0.01em",
          lineHeight: "1em",
        },
      ],
      "2xs": [
        "var(--fontSize-2xs)",
        {
          letterSpacing: "-0.01em",
          lineHeight: "1em",
        },
      ],
      "3xs": [
        "var(--fontSize-3xs)",
        {
          letterSpacing: "-0.01em",
          lineHeight: "1em",
        },
      ],
    },
    lineHeight: {
      none: "1em",
      tight: "1.1em",
      normal: "1.2em",
      loose: "1.3em",
      relaxed: "1.5em",
    },
    letterSpacing: {
      tight_lg: "-0.04em",
      tight_md: "-0.03em",
      tight_sm: "-0.02em",
      tight_xs: "-0.01em",
      normal: "0",
      wide_xs: "0.01em",
      wide_sm: "0.02em",
      wide_md: "0.03em",
      wide_lg: "0.04em",
    },
    borderRadius: {
      none: "0px",
      default: "4px",
      bubble: "20px",
      round: "9999px",
    },

    extend: {
      aspectRatio: {
        "16/10": "16 / 10",
        "photo-wide": "16 / 7",
        "card-portrait-long": "2 / 3",
      },
      colors: {
        ...colors,
      },
      borderColor: {
        ...colors,
      },
      spacing: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "10/10": "100%",

        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "3/3": "100%",

        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "4/4": "100%",

        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "5/5": "100%",

        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "6/6": "100%",

        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "12/12": "100%",

        full: "100%",

        textblock: "400px",
        "textblock-md": "440px",
        header: "400px",
        "header-md": "480px",
        "header-lg": "640px",
        "card-height-md": "480px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}

export default config
