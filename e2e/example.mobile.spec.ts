import { expect, test } from '@playwright/test';

test.describe('test homepage', () => {
	test('Find links in DOM', async ({ page }) => {
		await expect(
			page.getByRole('link', { name: 'Docs -> Find in-depth' }),
		).toBeVisible();
		await expect(
			page.getByRole('link', { name: 'Learn -> Learn about Next.js' }),
		).toBeVisible();
		await expect(
			page.getByRole('link', { name: 'Templates -> Explore starter' }),
		).toBeVisible();
		await expect(
			page.getByRole('link', { name: 'Deploy -> Instantly deploy' }),
		).toBeVisible();
	});
});
