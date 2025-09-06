// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Or your chosen framework plugin
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/weather-app-pwa/",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate", // or 'prompt'
      start_url: ".",
      scope: ".",
      manifest: {
        name: "هوا شناسی",
        short_name: "اب و هوا",
        description: "My Progressive Web App",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/weather-app-pwa/rain-256.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/weather-app-pwa/rain-256.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
      // Other PWA options like workbox options, offline page, etc.
    }),
  ],
});
