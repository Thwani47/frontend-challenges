import DesktopImage from './assets/image-product-desktop.jpg';
import MobileImage from './assets/image-product-mobile.jpg';
import IconCart from './assets/icon-cart.svg';

function App() {
	return (
		<div className="flex justify-center items-center bg-cream h-screen p-6 md:flex-row">
			<div className="container mx-auto bg-white flex mobile:flex-col  desktop:flex-row bg-red rounded-xl desktop:max-w-2xl desktop:max-h-80">
				<img src={MobileImage} alt="" className="rounded-t-xl desktop:hidden" />
				<img src={DesktopImage} alt="" className="rounded-l-xl mobile:hidden desktop:max-w-xs" />
				<div className="container mx-auto p-4 desktop:py-6">
					<p className="text-dark-grayish-blue text-xl uppercase self-start">Perfume</p>
					<p className="text-4xl font-bold font-fraunces mt-2">Gabrielle Essence Eau De Parfum</p>
					<p className="text-dark-grayish-blue">
						A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for
						the House of CHANEL
					</p>
					<div className="flex flex-row justify-start p-3 space-x-6">
						<p className="text-dark-cyan text-3xl font-bold font-fraunces">$149.99</p>
						<p className="text-dark-grayish-blue line-through mt-2">$169.99</p>
					</div>
					<div className="flex flex-row bg-dark-cyan items-center justify-center space-x-2 mobile:p-2 desktop:p-1 rounded-lg mobile:mt-3 desktop:w-72 desktop:mx-4 hover:bg-very-dark-cyan">
						<img src={IconCart} alt="" />
						<p className="text-white text-lg font-semibold">Add to Cart</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
