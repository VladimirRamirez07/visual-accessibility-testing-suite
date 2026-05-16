import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,        // ← cambia 30000 por 60000
  use: {
    baseURL: 'https://www.w3schools.com',
    headless: true,
    screenshot: 'on',
    viewport: { width: 1280, height: 720 },
    actionTimeout: 60000,  // ← agrega esta línea
  },
  reporter: [['html', { outputFolder: 'reports' }]],
});