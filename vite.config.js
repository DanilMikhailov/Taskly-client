import { defineConfig } from 'vite'  // Импорт функции для определения конфигурации Vite
import react from '@vitejs/plugin-react'  // Импорт плагина для поддержки React в Vite

// https://vitejs.dev/config/
// Экспорт конфигурации по умолчанию для Vite
export default defineConfig({
  plugins: [react()],  // Указываем, что для проекта используется плагин React
})
