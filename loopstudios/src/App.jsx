import { Fragment, useState } from 'react';
import LogoImage from './assets/logo.svg';
import InteractiveImage from './assets/desktop/image-interactive.jpg';
import DeepEarthDesktop from './assets/desktop/image-deep-earth.jpg';
import DeepEarthMobile from './assets/mobile/image-deep-earth.jpg';
import NightArcadeDesktop from './assets/desktop/image-night-arcade.jpg';
import NightArcadeMobile from './assets/mobile/image-night-arcade.jpg';
import SoccerTeamDesktop from './assets/desktop/image-soccer-team.jpg';
import SoccerTeamMobile from './assets/mobile/image-soccer-team.jpg';
import ImageGridDesktop from './assets/desktop/image-grid.jpg';
import ImageGridMobile from './assets/mobile/image-grid.jpg';
import FromAboveDesktop from './assets/desktop/image-from-above.jpg';
import FromAboveMobile from './assets/mobile/image-from-above.jpg';
import PocketBorealisDesktop from './assets/desktop/image-pocket-borealis.jpg';
import PocketBorealisMobile from './assets/mobile/image-pocket-borealis.jpg';
import CuriosityDesktop from './assets/desktop/image-curiosity.jpg';
import CuriosityMobile from './assets/mobile/image-curiosity.jpg';
import FishEyeDesktop from './assets/desktop/image-fisheye.jpg';
import FishEyeMobile from './assets/mobile/image-fisheye.jpg';

import Item from './components/Item';
import Footer from './components/Footer';
import MenuLink from './components/MenuLink';

function App() {
	const [ isMenuOpen, setIsMenuOpen ] = useState(false);
	return (
		<Fragment>
			<section id="hero">
				<div className="container mx-w-6xl mx-auto px-6 py-12">
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
								className={`${isMenuOpen
									? 'open'
									: ''} z-40 block hamburger md-hidden focus:outline-none`}
							>
								<span className="hamburger-top" />
								<span className="hamburger-middle" />
								<span className="hamburger-bottom" />
							</button>
						</div>
					</nav>
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

					<div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
						Impressive Experiences that Deliver
					</div>
				</div>
			</section>
			<section id="features">
				<div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
					<img src={InteractiveImage} alt="" />
					<div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
						<h2 className="max-w-lg mt-10 mb06 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
							The leader in interactive VR
						</h2>
						<p className="max-w-md text-center md:text-left">
							Founded in 2011, Loopstudios has been producing world-class virtual reality projects for
							some of the best comnpanies around the globe. Our award-winning creations have transformed
							businesses through digital experiences that bind to their brand.
						</p>
					</div>
				</div>
			</section>
			<section id="creations">
				<div className="container max-w-6xl mx-auto my-32 p-6 text-gray-900 md:px-0">
					<div className="flex justify-center mb-20 md:justify-between">
						<h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">Our Creations</h2>
						<button className="hidden btn md:block">See All</button>
					</div>
					<div className="item-container">
						<Item desktopImage={DeepEarthDesktop} mobileImage={DeepEarthMobile} itemText="Deep Earth" />
						<Item
							desktopImage={NightArcadeDesktop}
							mobileImage={NightArcadeMobile}
							itemText="Night Arcade"
						/>
						<Item
							desktopImage={SoccerTeamDesktop}
							mobileImage={SoccerTeamMobile}
							itemText="Soccer Team VR"
						/>
						<Item desktopImage={ImageGridDesktop} mobileImage={ImageGridMobile} itemText="The Grid" />
					</div>
					<div className="item-container">
						<Item desktopImage={FromAboveDesktop} mobileImage={FromAboveMobile} itemText="From Above VR" />
						<Item
							desktopImage={PocketBorealisDesktop}
							mobileImage={PocketBorealisMobile}
							itemText="Pocket Borealis"
						/>
						<Item desktopImage={CuriosityDesktop} mobileImage={CuriosityMobile} itemText="The Curiosity" />
						<Item desktopImage={FishEyeDesktop} mobileImage={FishEyeMobile} itemText="The Grid" />
					</div>
					<div className="flex justify-center mt-10 md:hidden">
						<button className="btn w-full m:hidden">See All</button>
					</div>
				</div>
			</section>
			<Footer />
		</Fragment>
	);
}

export default App;
