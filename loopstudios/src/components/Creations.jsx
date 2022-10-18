import React from 'react';

import DeepEarthDesktop from '../assets/desktop/image-deep-earth.jpg';
import DeepEarthMobile from '../assets/mobile/image-deep-earth.jpg';
import NightArcadeDesktop from '../assets/desktop/image-night-arcade.jpg';
import NightArcadeMobile from '../assets/mobile/image-night-arcade.jpg';
import SoccerTeamDesktop from '../assets/desktop/image-soccer-team.jpg';
import SoccerTeamMobile from '../assets/mobile/image-soccer-team.jpg';
import ImageGridDesktop from '../assets/desktop/image-grid.jpg';
import ImageGridMobile from '../assets/mobile/image-grid.jpg';
import FromAboveDesktop from '../assets/desktop/image-from-above.jpg';
import FromAboveMobile from '../assets/mobile/image-from-above.jpg';
import PocketBorealisDesktop from '../assets/desktop/image-pocket-borealis.jpg';
import PocketBorealisMobile from '../assets/mobile/image-pocket-borealis.jpg';
import CuriosityDesktop from '../assets/desktop/image-curiosity.jpg';
import CuriosityMobile from '../assets/mobile/image-curiosity.jpg';
import FishEyeDesktop from '../assets/desktop/image-fisheye.jpg';
import FishEyeMobile from '../assets/mobile/image-fisheye.jpg';
import Item from './Item';

export default function Creations() {
	return (
		<section id="creations">
			<div className="container max-w-6xl mx-auto my-32 p-6 text-gray-900 md:px-0">
				<div className="flex justify-center mb-20 md:justify-between">
					<h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">Our Creations</h2>
					<button className="hidden btn md:block">See All</button>
				</div>
				<div className="item-container">
					<Item desktopImage={DeepEarthDesktop} mobileImage={DeepEarthMobile} itemText="Deep Earth" />
					<Item desktopImage={NightArcadeDesktop} mobileImage={NightArcadeMobile} itemText="Night Arcade" />
					<Item desktopImage={SoccerTeamDesktop} mobileImage={SoccerTeamMobile} itemText="Soccer Team VR" />
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
	);
}
