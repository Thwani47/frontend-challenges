import { Fragment } from 'react';
import LogoImage from './assets/logo.svg';
import Computer from './assets/image-computer.png';
import Devices from './assets/image-devices.png';
import BlacklistIcon from './assets/icon-blacklist.svg';
import TextIcon from './assets/icon-text.svg';
import PreviewIcon from './assets/icon-preview.svg';
import GoogleLogo from './assets/logo-google.png';
import IbmLogo from './assets/logo-ibm.png';
import MicrosoftLogo from './assets/logo-microsoft.png';
import HpLogo from './assets/logo-hp.png';
import VgLogo from './assets/logo-vector-graphics.png';
import FacebookIcon from './assets/icon-facebook.svg';
import TwitterIcon from './assets/icon-twitter.svg';
import InstagramIcon from './assets/icon-instagram.svg';
import FeatureItem from './components/FeatureItem';

function App() {
	return (
		<Fragment>
			{/*  Hero Section */}
			<section id="hero">
				<div className="section-container mb-40 pt-16">
					<img src={LogoImage} alt="Logo Image" className="mx-auto my-16" />
					<h3>A history of everything you copy</h3>
					<p className="section-content mb-10">
						Clipboard allows you to track and organize everything you copy. Instantly access your clip board
						on all your devices.
					</p>

					{/* Button Container */}
					<div className="button-container">
						<a
							href="#"
							className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
						>
							Download for iOS
						</a>
						<a
							href="#"
							className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
						>
							Download for Mac
						</a>
					</div>
				</div>
			</section>
			{/* Snippets Section */}
			<section id="snippets">
				<div className="section-container my-20">
					<h3>Keep track of your snippets</h3>
					<p className="section-content mb-24">
						Clipboard instantly stores any item you copy in the cloud, meaning you can access snippets
						immediately on all your devices. Our Mac and iOS apps will help yu organize everything.
					</p>
				</div>
			</section>
			{/* Features section */}
			<section id="features">
				<div className="section-container my-20">
					<div className="relative flex flex-col md:flex-row md:space-x-32">
						{/* Image */}
						<div className="w-1/2">
							<img src={Computer} className="md:absolute top-0 right-[50%]" alt="Computer Image" />
						</div>
						{/* Items container */}
						<div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:pl-16 md:w-1/2">
							<div>
								<h5>Quick Search</h5>
								<p className="max-w-md text-grayishBlue">
									Easily search your snippets by content, category, web address, application, and
									more.
								</p>
							</div>
							<div>
								<h5>iCloud Sync</h5>
								<p className="max-w-md text-grayishBlue">
									Instantly saves and syncs snippets across all your devices.
								</p>
							</div>
							<div>
								<h5>Completely History</h5>
								<p className="max-w-md text-grayishBlue">
									Retrieve any snippets from the moment you started using the app.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Access Anywhere Section */}
			<section id="access">
				<div className="section-container my-20">
					<h3>Access Clipboard Anywhere</h3>
					<p className="section-content mb-10">
						Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a
						few simple clicks.
					</p>
					<img src={Devices} className="mx-auto" />
				</div>
			</section>
			{/* Suparcharge section */}
			<section id="suparcharge">
				<div className="section-container my-20">
					<h3>Suparcharge your workflow</h3>
					<p className="section-content mb-16">We've got tools to boost your productivity.</p>
					<div className="flex flex-col items-center jusity-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            <FeatureItem icon={BlacklistIcon} title="Create Blacklists" content="Easily search your snippets by content, category, web address, application, and more."/>
            <FeatureItem icon={TextIcon} title="Plain Text Snippets" content="	Remove unwanted formatting from copied text for a consistent look."/>
            <FeatureItem icon={PreviewIcon} title="Sneak Preview" content="uick preview of all snippets on your Clipboard for easy access."/>
					</div>
				</div>
			</section>
			{/* References Section */}
			<section id="references">
				<div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
					<img src={GoogleLogo} />
					<img src={IbmLogo} />
					<img src={MicrosoftLogo} />
					<img src={HpLogo} />
					<img src={VgLogo} />
				</div>
			</section>
			{/* Bottom Call To Action Section */}
			<section id="bottom">
				<div className="section-container my-20">
					<h3>Clipboard for iOS and MacOS</h3>
					<p className="section-content mb-10">
						Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready
						to start adding to your Clipboard.
					</p>
					{/* Button Container */}
					<div className="button-container">
						<a
							href="#"
							className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
						>
							Download for iOS
						</a>
						<a
							href="#"
							className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
						>
							Download for Mac
						</a>
					</div>
				</div>
			</section>
			<footer className="bg-gray-50">
				<div className="section-container">
					<div className="flex flex-col items-center justify-between md:flex-row">
						<img className="scale-50" src={LogoImage} />
						<div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
							<div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
								<div className="flex flex-col space-y-4 text-center md:text-left">
									<div>
										<a href="#" className="hover:text-strongCyan">
											FAQs
										</a>
									</div>
									<div>
										<a href="#" className="hover:text-strongCyan">
											Contact Us
										</a>
									</div>
								</div>
								<div className="flex flex-col space-y-4 text-center md:text-left">
									<div>
										<a href="#" className="hover:text-strongCyan">
											Privacy Policy
										</a>
									</div>
									<div>
										<a href="#" className="hover:text-strongCyan">
											Press Kit
										</a>
									</div>
								</div>
								<div className="flex flex-col space-y-4 text-center md:text-left">
									<div>
										<a href="#" className="hover:text-strongCyan">
											Install Guide
										</a>
									</div>
								</div>
							</div>
							<div className="flex justify-between w-32 py-1">
								<a href="#">
									<img src={FacebookIcon} alt="" className="duration-200 ficon" />
								</a>
								<a href="#">
									<img src={TwitterIcon} alt="" className="duration-200 ficon" />
								</a>
								<a href="#">
									<img src={InstagramIcon} alt="" className="duration-200 ficon" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</Fragment>
	);
}

export default App;
