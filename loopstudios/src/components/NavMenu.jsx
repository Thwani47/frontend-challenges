import React from 'react';
import MenuLink from './MenuLink';

export default function NavMenu({isMenuOpen}) {
	return (
		<div
			id="menu"
			className={`absolute top-0 bottom-0 left-0 ${isMenuOpen
				? 'flex'
				: 'hidden'} flex-col self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`}
		>
			<MenuLink linkText="About" />
			<MenuLink linkText="Careers" />
			<MenuLink linkText="Events" />
			<MenuLink linkText="Products" />
			<MenuLink linkText="Support" />
		</div>
	);
}
