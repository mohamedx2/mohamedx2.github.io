import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary": "#ffffff",
        "error-container": "#ffdad6",
        "on-tertiary-fixed-variant": "#39485a",
        "on-error": "#ffffff",
        "tertiary-container": "#0d1c2d",
        "surface-tint": "#5e5e5e",
        "secondary-fixed-dim": "#b9c7df",
        "outline": "#7e7576",
        "on-secondary": "#ffffff",
        "on-surface-variant": "#4c4546",
        "tertiary": "#000000",
        "tertiary-fixed-dim": "#b9c8de",
        "on-background": "#1a1c1c",
        "on-primary-fixed": "#1b1b1b",
        "secondary-container": "#d5e3fc",
        "on-secondary-fixed-variant": "#3a485b",
        "on-primary-fixed-variant": "#474747",
        "on-tertiary": "#ffffff",
        "on-tertiary-fixed": "#0d1c2d",
        "error": "#ba1a1a",
        "surface-container": "#eeeeee",
        "secondary": "#515f74",
        "surface-variant": "#e2e2e2",
        "surface-container-lowest": "#ffffff",
        "on-tertiary-container": "#768599",
        "on-surface": "#1a1c1c",
        "secondary-fixed": "#d5e3fc",
        "on-error-container": "#93000a",
        "surface-container-highest": "#e2e2e2",
        "primary-fixed-dim": "#c6c6c6",
        "tertiary-fixed": "#d4e4fa",
        "primary": "#000000",
        "background": "#f9f9f9",
        "inverse-primary": "#c6c6c6",
        "surface-container-low": "#f3f3f4",
        "on-secondary-container": "#57657a",
        "surface-dim": "#dadada",
        "on-primary-container": "#848484",
        "primary-container": "#1b1b1b",
        "inverse-surface": "#2f3131",
        "on-secondary-fixed": "#0d1c2e",
        "outline-variant": "#cfc4c5",
        "surface-container-high": "#e8e8e8",
        "surface": "#f9f9f9",
        "surface-bright": "#f9f9f9",
        "inverse-on-surface": "#f0f1f1",
        "primary-fixed": "#e2e2e2",
        "foreground": "#1a1c1c"
      },
      borderRadius: {
        "DEFAULT": "0rem",
        "lg": "0rem",
        "xl": "0rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "24px",
        "stack-md": "24px",
        "margin-mobile": "16px",
        "container-max": "1200px",
        "stack-sm": "8px",
        "stack-lg": "64px",
        "margin-desktop": "48px"
      },
      fontFamily: {
        "display-lg": ["Libre Caslon Text", "serif"],
        "body-md": ["Hanken Grotesk", "sans-serif"],
        "body-lg": ["Hanken Grotesk", "sans-serif"],
        "headline-md": ["Libre Caslon Text", "serif"],
        "quote": ["Libre Caslon Text", "serif"],
        "label-caps": ["Work Sans", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"]
      },
      fontSize: {
        "display-lg": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "quote": ["24px", { "lineHeight": "1.4", "fontWeight": "400" }],
        "label-caps": ["12px", { "lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "600" }],
        "headline-md": ["32px", { "lineHeight": "1.2", "fontWeight": "600" }]
      }
    },
  },
  plugins: [],
};
export default config;
