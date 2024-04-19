import { fireEvent, render, screen } from '../utils/test-utils';
import Page from './page';

describe('Page', () => {
	it('Render Page component and click in count button', async () => {
		expect.hasAssertions();
		render(<Page />);
		expect(screen.getByText(/count is 0/i)).not.toBeNull();
    const countBtn = await screen.findByRole("button", { name: "count is 0" });
    fireEvent.click(countBtn);
		expect(screen.getByText(/count is 1/i)).not.toBeNull();
	});
});
