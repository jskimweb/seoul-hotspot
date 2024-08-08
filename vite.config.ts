import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/seoul-api": {
        target: "http://openapi.seoul.go.kr:8088",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/seoul-api/, ""),
      },
    },
  },
});
