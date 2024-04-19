import { vi } from 'vitest';
import { render, screen } from '../utils/test-utils';
import RootLayout from './layout';

vi.mock('next/font/google', () => ({
	Inter: () => ({ className: 'mocked-font-class' }),
}));

describe('RootLayout', () => {
	it('Should render the children', () => {
		const testText = 'This is a test child';
		render(<RootLayout children={testText} />);

		expect(screen.getByText(testText)).toBeInTheDocument();
	});
});
