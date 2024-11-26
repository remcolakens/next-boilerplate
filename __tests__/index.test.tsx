import Home from '@/app/page';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Home', () => {
	it('renders Next.js logo', async () => {
		render(<Home />);
		const nextSvg = await screen.findByAltText('Next.js logo');
		expect(nextSvg).toBeTruthy();
	});

	it('renders text "Save and see your changes instantly."', async () => {
		render(<Home />);
		const textRow = await screen.findByText(
			'Save and see your changes instantly.',
		);
		expect(textRow).toBeTruthy();
	});

	it('renders deploy link with correct href', async () => {
		render(<Home />);
		const deployLink = await screen.findByText('Deploy now');
		fireEvent.click(deployLink);
		expect(deployLink).toHaveProperty(
			'href',
			'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
		);
	});

	it('renders docs link with correct href', async () => {
		render(<Home />);
		const docsLink = await screen.findByText('Read our docs');
		expect(docsLink).toHaveProperty(
			'href',
			'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
		);
	});
});
