import Footer from '../../components/Footer';
import './index.css';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
	const navigate = useNavigate();
	return (
		<>
			<main className='landingPage'>
				<section className='hero'>
					<h1>Alpaca</h1>
					<h2>find inexpensive art that you love</h2>
					<h2>support beginner artists</h2>
					<button className='callToAction' onClick={() => navigate('/shop')}>
						<span className='material-symbols-outlined'>shopping_cart</span>
						Shop Now
					</button>
				</section>
			</main>
			<Footer />
		</>
	);
}
