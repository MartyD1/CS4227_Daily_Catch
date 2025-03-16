import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isProduction = process.env.NODE_ENV === "production" || process.env.VITE_MODE === "production";

export default defineConfig({
  plugins: [react()],
  base: isProduction ? "/CS4227_Daily_Catch/" : "/",
});
