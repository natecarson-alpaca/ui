import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import LandingPage from '.';

vi.mock('../../components/Footer');

const navigateMock = vi.fn();
vi.mock('react-router-dom', () => ({
	useNavigate: vi.fn(() => navigateMock),
}));

describe('landing page', () => {
	beforeEach(() => {
		render(<LandingPage />);
	});
	describe('hero section', () => {
		it('should have a call to action that redirects to the shop page', () => {
			const callToAction = screen.getByText('Shop Now');
			expect(callToAction).toBeDefined();
			fireEvent.click(callToAction);
			expect(navigateMock).toHaveBeenCalledOnce();
		});
	});
});
