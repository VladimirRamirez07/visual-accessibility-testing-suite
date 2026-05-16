import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'https://www.w3schools.com', // sitio de práctica
    headless: true,
    screenshot: 'on',
    viewport: { width: 1280, height: 720 },
  },
  reporter: [['html', { outputFolder: 'reports' }]],
});