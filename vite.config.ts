import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

export default defineConfig(({ mode }) => ({
  base: "/lavanya-portfolio/", // Important for GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    mode === "development" && require("lovable-tagger")?.componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  buildEnd: () => {
    const from = "dist/index.html";
    const to = "dist/404.html";
    if (fs.existsSync(from)) {
      fs.copyFileSync(from, to);
      console.log("✅ Copied index.html to 404.html for GitHub Pages support");
    }
  },
}));
