/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Everything is monospace - even stray `font-sans` resolves to mono.
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        sans: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        void: "rgb(var(--bg) / <alpha-value>)",
        panel: "rgb(var(--bg-panel) / <alpha-value>)",
        raised: "rgb(var(--bg-raised) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        edge: "rgb(var(--line-bright) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        dim: "rgb(var(--fg-dim) / <alpha-value>)",
        brand: "rgb(var(--brand) / <alpha-value>)",
        accent: "rgb(var(--brand-bright) / <alpha-value>)",
        warn: "rgb(var(--amber) / <alpha-value>)",
        alert: "rgb(var(--red) / <alpha-value>)",
      },
      letterSpacing: {
        widest: "0.22em",
      },
    },
    // Kill every rounded token - any stray `rounded-*` renders sharp.
    borderRadius: {
      none: "0",
      sm: "0",
      DEFAULT: "0",
      md: "0",
      lg: "0",
      xl: "0",
      "2xl": "0",
      "3xl": "0",
      full: "0",
    },
  },
  plugins: [],
};
