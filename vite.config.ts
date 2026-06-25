import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Aponta o '@' direto para a nova pasta src na raiz
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  // O root volta a ser a raiz do projeto (.) para a Vercel encontrar o index.html
  root: import.meta.dirname,
  build: {
    // A Vercel espera, por padrão, que o build de um projeto Vite vá para a pasta 'dist' na raiz
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});