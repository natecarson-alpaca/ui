import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import ShopPage from '.';

vi.mock('../../components/Navbar');
vi.mock('../../components/Footer');
describe('shopping page', () => {
	beforeEach(() => {
		render(<ShopPage />);
	});
	it('should have a page', () => {
		expect(true).toBeTruthy();
	});
});
