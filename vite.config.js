import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Mini_E-shop_App_React/",
  plugins: [react()],
});
