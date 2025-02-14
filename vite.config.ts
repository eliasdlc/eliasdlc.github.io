import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "*" // Opcional: Permitir todos los subdominios de ngrok
    ],
    host: "0.0.0.0", // Asegúrate de tener esto
  }
})
