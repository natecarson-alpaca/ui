import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import Navbar from '.';

const linkClickMock = vi.fn();
vi.mock('react-router-dom', () => ({
	Link: (props: { children: any }) => (
		<a onClick={linkClickMock}>{props.children}</a>
	),
}));

describe('navigation bar ', () => {
	beforeEach(() => {
		render(<Navbar />);
	});
	describe('link section', () => {
		it('should have a link that goes to the shop page', () => {
			const shopLink = screen.getByText('Shop');
			expect(shopLink).toBeDefined();
			fireEvent.click(shopLink);
			expect(linkClickMock).toHaveBeenCalledOnce();
		});
	});
});
