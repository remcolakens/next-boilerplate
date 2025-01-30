import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: 'src/e2e',
	testMatch: 'src/e2e/*.spec.{ts,tsx}',
	reporter: [
		[
			'html',
			{ open: 'never', outputFolder: 'src/e2e/test_output/playwright-report' },
		],
	],
	outputDir: 'src/e2e/test_output/test-results',

	workers: process.env.CI ? 1 : undefined,
	fullyParallel: true,

	forbidOnly: process.env.CI ? true : false,
	retries: process.env.CI ? 3 : 0,
	maxFailures: 25,

	use: {
		baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL ?? 'http://localhost:3000',
		trace: 'on-first-retry',
	},

	projects: [
		{
			name: 'chromium',
			grep: /@desktop|@chrome|@chromium/,
			use: { ...devices['Desktop Chrome'] },
		},

		{
			name: 'firefox',
			grep: /@desktop|@firefox/,
			use: { ...devices['Desktop Firefox'] },
		},
		{
			name: 'webkit',
			grep: /@desktop|@webkit|@safari/,
			use: { ...devices['Desktop Safari'] },
		},
		{
			name: 'mobile webkit',
			grep: /@mobile|@ios/,
			use: {
				...devices['iPhone 15'],
			},
		},
		{
			name: 'mobile chromium',
			grep: /@mobile|@android/,
			use: {
				...devices['Pixel 7'],
			},
		},
	],

	webServer: process.env.CI
		? undefined
		: {
				command: 'pnpm build && pnpm start',
				url: 'http://localhost:3000',
				reuseExistingServer: !process.env.CI,
			},
});
