import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';

test("Check if the text 'Get started by editing' is defined", () => {
	expect.hasAssertions();
	render(<Page />);
	expect(screen.getByText(/get started by editing/i)).not.toBeNull();
	// expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
});
