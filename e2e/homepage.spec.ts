import { expect, test } from '@playwright/test';

test.describe('Test homepage', () => {
	test('Verify page content', async ({ page }) => {
		await page.goto('/', { waitUntil: 'domcontentloaded' });

		await expect(
			page.getByText('Get started by editing src/app/page.tsx'),
		).toBeVisible();

		await expect(
			page.getByText('Save and see your changes instantly.'),
		).toBeVisible();

		await expect(page.getByRole('img', { name: 'Next.js logo' })).toBeVisible();
	});
});