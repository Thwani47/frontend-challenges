import React from 'react';
import LogoImage from '../assets/logo.svg';

export default function Nav({ isMenuOpen, setIsMenuOpen }) {
	return (
		<nav className="flex items-center justify-between font-bold text-white">
			<img src={LogoImage} alt="" />
			<div className="hidden h-10 font-alata md:flex md:space-x-8">
				<div className="group">
					<a href="#">About</a>
					<div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
				</div>
				<div className="group">
					<a href="#">Careers</a>
					<div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
				</div>
				<div className="group">
					<a href="#">Events</a>
					<div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
				</div>
				<div className="group">
					<a href="#">Products</a>
					<div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
				</div>
				<div className="group">
					<a href="#">Support</a>
					<div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
				</div>
			</div>
			<div className="md:hidden">
				<button
					id="menu-btn"
					type="button"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className={`${isMenuOpen ? 'open' : ''} z-40 block hamburger md-hidden focus:outline-none`}
				>
					<span className="hamburger-top" />
					<span className="hamburger-middle" />
					<span className="hamburger-bottom" />
				</button>
			</div>
		</nav>
	);
}
