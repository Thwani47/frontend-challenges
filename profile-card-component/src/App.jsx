import Avatar from './assets/image-victor.jpg';

function App() {
	return (
		<div className=" main flex flex-col items-center justify-center bg-darkCyan min-h-screen">
			<div className=" card flex flex-col items-center justify-center bg-white w-1/2 rounded-xl space-y-4 ">
				<div className="p-2 rounded-full bg-white">
					<img src={Avatar} alt="avatar" className="rounded-full" />
				</div>

				<div className="flex space-x-4">
					<span className="font-bold">Victor Crest</span>
					<span className="text-gray-800">26</span>
				</div>
				<h4>London</h4>
				<div className="border border-gray-800 h-0.5 w-full" />
				<div className="flex items-center">
					<div className="flex flex-col items-center justify-center">
						<span className="font-bold">80K</span>
						<span className="text-gray-700">Followers</span>
					</div>
					<div className="flex flex-col items-center justify-center">
						<span className="font-bold">803K</span>
						<span className="text-gray-700">Likes</span>
					</div>
					<div className="flex flex-col items-center justify-center">
						<span className="font-bold">1.4K</span>
						<span className="text-gray-700">Photos</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
