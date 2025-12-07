import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,

  reporter: 'html',

  use: {
    headless: false,
    video: 'on',
    screenshot: 'on',
    trace: 'on',
    slowMo: 500 // 👈 Aqui sim funciona!
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false
      }
    },
  ],
});
