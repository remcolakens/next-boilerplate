import Home from '@/app/page';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Home', () => {
	it('renders the Next SVG', () => {
		render(<Home />);

		const nextSvg = screen.getByAltText('Next.js logo');

		expect(nextSvg).toBeInTheDocument();
	});

	it('renders a text row', () => {
		render(<Home />);

		expect(
			screen.getByText('Save and see your changes instantly.'),
		).toBeInTheDocument();
	});

	it('renders and clicks the "Deploy now" link', () => {
		render(<Home />);

		const deployLink = screen.getByText('Deploy now');

		const clickSpy = jest.spyOn(fireEvent, 'click');
		fireEvent.click(deployLink);
		expect(clickSpy).toHaveBeenCalledTimes(1);

		clickSpy.mockRestore();
	});

	it('renders the "Read our docs" link', () => {
		render(<Home />);

		const docsLink = screen.getByText('Read our docs');

		expect(docsLink).toHaveAttribute(
			'href',
			'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
		);
	});
});
