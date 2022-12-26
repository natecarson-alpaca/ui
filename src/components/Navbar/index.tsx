import { Link } from 'react-router-dom';
import './index.css';

export default function Navbar() {
	return (
		<nav className='navBar'>
			<Link className='navLink' to='/shop' aria-label='Shop Link'>
				<span className='linkDesc'>Shop</span>
				<span className='material-symbols-outlined'>shopping_cart</span>
			</Link>
		</nav>
	);
}
