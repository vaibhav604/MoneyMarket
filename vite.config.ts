import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/MoneyMarket/",
  // build: {
  //   assetsDir: "assets", // Change this to your preferred output directory for assets
  //   rollupOptions: {
  //     output: {
  //       // entryFileNames: "assets/[name]",
  //       // chunkFileNames: "assets/[name]",
  //       // assetFileNames: "assets/[name]",
  //     },
  //   },
  // },
});
