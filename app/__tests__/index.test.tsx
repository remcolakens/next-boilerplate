/**
 * @jest-environment jsdom
 */
import Home from '@/app/page';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Home', () => {
	it('renders the Next SVG', () => {
		render(<Home />);

		const nextSvg = screen.getByTestId('next-svg');

		expect(nextSvg).toBeInTheDocument();
	});

	it('renders a text row', () => {
		render(<Home />);

		expect(
			screen.getByText(
				'Find in-depth information about Next.js features and API.',
			),
		).toBeInTheDocument();
	});

	it('renders and clicks the "Docs" link', () => {
		render(<Home />);

		const docsLink = screen.getByRole('link', {
			name: 'Docs -> Find in-depth information about Next.js features and API.',
		});

		const clickSpy = jest.spyOn(fireEvent, 'click');
		fireEvent.click(docsLink);
		expect(clickSpy).toHaveBeenCalledTimes(1);

		clickSpy.mockRestore();
	});

	it('renders the "Learn" link', () => {
		render(<Home />);

		const learnLink = screen.getByRole('link', {
			name: 'Learn -> Learn about Next.js in an interactive course with quizzes!',
		});

		expect(learnLink).toHaveAttribute(
			'href',
			'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
		);
	});
});
