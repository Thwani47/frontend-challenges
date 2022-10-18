import React from 'react';
import LogoImage from '../assets/logo.svg';
import FacebookIcon from '../assets/icon-facebook.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import PinterestIcon from '../assets/icon-pinterest.svg';
import InstagramIcon from '../assets/icon-instagram.svg';
import FooterItem from './FooterItem';
import FooterSocial from './FooterSocial';

export default function Footer() {
	return (
		<footer className="bg-black">
			<div className="container max-w-6xl py-10 mx-auto">
				<div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-c">
					<div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
						<div className="h-8">
							<img src={LogoImage} alt="" className="w-44 md:ml-3" />
						</div>
						<div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
							<FooterItem itemText="About" />
							<FooterItem itemText="Careers" />
							<FooterItem itemText="Events" />
							<FooterItem itemText="Products" />
							<FooterItem itemText="Support" />
						</div>
					</div>
					<div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
						<div className="flex items-center justify-center mx-auto space-x-4 md:mx-0 md:justify-end">
							<FooterSocial icon={FacebookIcon} />
							<FooterSocial icon={TwitterIcon} />
							<FooterSocial icon={PinterestIcon} />
							<FooterSocial icon={InstagramIcon} />
						</div>
						<div className="font-bold">&copy; 2022 Loopstudios. All Rights Reserved</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
