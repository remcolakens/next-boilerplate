import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
	it('renders a heading', () => {
		render(<Home />);

		expect(
			screen.getByRole('heading', {
				name: 'Welcome to your Next.js Boilerplate',
			})
		).toBeInTheDocument();
	});

	it('renders a text row', () => {
		render(<Home />);
		expect(screen.getByText('(xs) This is default text!')).toBeInTheDocument();
	});
});
