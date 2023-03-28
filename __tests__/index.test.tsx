import { screen } from '@testing-library/react';
import Home from '../pages/index';
import { renderWithChakra } from './utils';

describe('Home', () => {
	it('renders a heading', () => {
		renderWithChakra(<Home />);

		expect(
			screen.getByRole('heading', {
				name: 'Welcome to your Next.js Boilerplate',
			})
		).toBeInTheDocument();
	});

	it('renders a text row', () => {
		renderWithChakra(<Home />);
		expect(screen.getByText('(xs) This is default text!')).toBeInTheDocument();
	});
});
