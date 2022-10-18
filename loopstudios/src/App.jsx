import { Fragment, useState } from 'react';

import InteractiveImage from './assets/desktop/image-interactive.jpg';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import Nav from './components/Nav';
import Creations from './components/Creations';

function App() {
	const [ isMenuOpen, setIsMenuOpen ] = useState(false);
	return (
		<Fragment>
			<section id="hero">
				<div className="container mx-w-6xl mx-auto px-6 py-12">
					<Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
					<NavMenu isMenuOpen={isMenuOpen} />

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
			<Creations />
			<Footer />
		</Fragment>
	);
}

export default App;
