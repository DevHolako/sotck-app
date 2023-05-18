import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@features": path.resolve(__dirname, "./src/app/features"),
      "@compo": path.resolve(__dirname, "./src/components"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@hooks": path.resolve(__dirname, "./src/helpers/Hooks"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
});
