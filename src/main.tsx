import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './pages/Landing';
import ShopPage from './pages/Shop';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to='/landing' />} />
				<Route path='/landing' element={<LandingPage />} />
				<Route path='/shop' element={<ShopPage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
