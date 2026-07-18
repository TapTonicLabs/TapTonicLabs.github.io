import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Use "/" for user/org GitHub Pages (TapTonicLabs.github.io)
             // Change to "/repo-name/" if deploying from a project repo instead
});