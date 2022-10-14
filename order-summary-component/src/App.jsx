import Hero from './assets/illustration-hero.svg';
import MusicIcon from './assets/icon-music.svg';

function App() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-pale-blue bg-contain bg-mobile-bg-image md:bg-desktop-bg-image bg-no-repeat bg-top">
			<div className="flex flex-col items-center justify-center max-w-md rounded-t-2xl rounded-b-2xl bg-white space-y-4 pb-4">
				<img src={Hero} alt="hero" className="rounded-t-2xl" />
				<div className="flex flex-col items-center justify-center space-y-4 px-12">
					<h1 className="text-black font-extrabold text-3xl font-red-hat-display">Order Summary</h1>
					<p className="text-center text-gray-500 font-red-hat-display">
						You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you
						like!
					</p>
				</div>
				<div className="flex flex-row bg-gray-50 bg-opacity-50 rounded-xl p-4 space-x-8 justify-between">
					<img src={MusicIcon} alt="" />
					<div className="flex flex-col">
						<p className="font-bold font-red-hat-display">Annual Plan</p>
						<p className="font-light text-gray-500 font-red-hat-display">R99.99/year</p>
					</div>
					<a
						href="#"
						className="text-dark-blue font-bold text-sm underline self-center hover:no-underline hover:text-bright-blue  transition-all duration-200 hover:scale-110"
					>
						Change
					</a>
				</div>
				<div className="flex items-center justify-center font-red-hat-display bg-bright-blue rounded-lg py-2 px-12 text-white hover:scale-110 transition-all duration-200 ">
					Proceed to Payment
				</div>
				<div className="flex items-center justify-center font-red-hat-display bg-gray-50 bg-opacity-50 font-bold rounded-lg py-2 px-12 text-gray-800  transition-all duration-200 hover:scale-110">
					Cancel Order
				</div>
			</div>
		</div>
	);
}

export default App;
