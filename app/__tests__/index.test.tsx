/**
 * @jest-environment jsdom
 */
import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
	it('renders a heading', () => {
		render(<Home />);

		expect(
			screen.getByRole('heading', {
				name: 'Get started by editing app/page.tsx',
			})
		).toBeInTheDocument();
	});

	it('renders a text row', () => {
		render(<Home />);
		expect(
			screen.getByText(
				'Find in-depth information about Next.js features and API.'
			)
		).toBeInTheDocument();
	});
});
