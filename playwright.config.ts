import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testMatch: 'e2e/*.spec.ts',
	testDir: 'e2e',
	reporter: [['html', { open: 'never', outputFolder: 'e2e/report' }]],
	outputDir: 'e2e/test-results/',

	workers: process.env.CI ? 1 : undefined,
	fullyParallel: true,

	forbidOnly: process.env.CI ? true : false,
	retries: process.env.CI ? 3 : 0,

	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},

		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},

		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
		},
		{
			name: 'mobile webkit',
			use: {
				...devices['iPhone 14'],
			},
		},
		{
			name: 'mobile chromium',
			use: {
				...devices['Pixel 7'],
			},
		},
	],

	webServer: {
		command: 'pnpm build && pnpm start',
		url: process.env.PLAYWRIGHT_TEST_BASE_URL ?? 'http://localhost:3000',
		reuseExistingServer: true,
	},
	use: {
		baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL ?? 'http://localhost:3000',
		trace: 'on-first-retry',
	},
});
