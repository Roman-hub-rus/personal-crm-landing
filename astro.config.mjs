// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Fonts are downloaded from Google Fonts at build time and served from our own domain
const subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext"];

export default defineConfig({
  output: "static",
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Unbounded",
      cssVariable: "--font-unbounded",
      weights: [500, 600, 700],
      subsets,
    },
    {
      provider: fontProviders.google(),
      name: "Golos Text",
      cssVariable: "--font-golos",
      weights: [400, 500, 600, 700],
      subsets,
      // Golos has no "→": like the mockup, take it from the system font, not from a resized Arial
      optimizedFallbacks: false,
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains",
      weights: [400],
      subsets,
      fallbacks: ["monospace"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
