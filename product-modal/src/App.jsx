import './App.css';
import Headphones from './assets/headphone.png';
import heart from './assets/heart.png';
import weight from './assets/weight.png';

function App() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-slate-100">
			<div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
				<div>
					<img src={Headphones} alt="" className="mx-auto duration-200 w-60 hover:scale-105" />
				</div>
				<div className="flex flex-col space-y-6">
					<div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
						<div>
							<div className="inline-block px-3 py-1 text sm text-white bg-black rounded-full">
								Free shipping
							</div>
						</div>
						<div className="max-w-sm text-2xl font-medium">
							Razer Kraken Kitty Edit Gaming Headset Quartz
						</div>
						{/* Price container */}
						<div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
							<p className="line-through">R799</p>
							<p className="text-5xl font-bold">R599</p>
							<p className="text-sm font-light text-gray-400">
								This offer is valid until October 31st or as long as stock lasts!
							</p>
						</div>
						{/* Button Group */}
						<div className="group">
							<button className="w-full bg-blue-700 text-white border-b-8 transition-all duration-150 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
								<div className="px-8 py-4 bg-blue-500 rounded-lg group-hover:bg-blue-700 duration-150">
									Add to cart
								</div>
							</button>
						</div>
						{/* Stock */}
						<div className="flex items-center space-x-3 group">
							<div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping" />
							<div className="text">50+ pcs in stock</div>
						</div>
						{/* Bottom Buttons */}
						<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
							<button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
								<img src={weight} alt="" className="w-8" />
								<span>Add to cart</span>
							</button>
							<button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
								<img src={heart} alt="" className="w-8" />
								<span>Add to wishlist</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
