import MenuItem from './components/MenuItem';
import ImageOne from './assets/image1.jpg'
import ImageTwo from './assets/image2.jpg'
import ImageThree from './assets/image3.jpg'
import ImageFour from './assets/image4.jpg'
import ImageFive from './assets/image5.jpg'
import ImageSix from './assets/image6.jpg'
import Bookmark from './assets/bookmark.svg'
import GalleryImage from './components/GalleryImage';

function App() {
	return (
		// Global container
		<div className="flex items-center justify-center min-h-screen bg-cyan-50">
			{/* Card Container */}
			<div className="bg-white p-6 m-3 spacing-y-10 shadow-3xl rounded-3xl md:p-40">
				{/* Menu Container */}
				<div className="flex flex-col items center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
					{/* Menu Items */}
					<MenuItem text="Vector" />
					<MenuItem text="Illustrations" />
					<MenuItem text="Images" />
					<MenuItem text="Icons" />
				</div>
				{/* Search Container */}
				<div className="flex flex-col justify-between mb-8 space-y-5 md:flex-row md:space-y-0">
					{/* Searrch Input container */}
					<div className="flex justify-between border-b">
						<input
							type="text"
							className="ml-6 border-none md:w-80 space-holder:font-thin focus:outline-none"
							placeholder="search"
						/>
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-8 text-gray-300 duration-200 hover:scale-110"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<circle cx="10" cy="10" r="7" />
								<line x1="21" y1="21" x2="15" y2="15" />
							</svg>
						</button>
					</div>
          {/* Upload button */}
          <button className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black">Upload</button>
				</div>
        {/* Gallery Container */}
        <div className="grid gap-4 md:grid-cols-3">
          <GalleryImage image={ImageOne} title="Abstract Painting" likes={245} shares={4} />
          <GalleryImage image={ImageTwo} title="Abstract Painting" likes={10} shares={54} />
          <GalleryImage image={ImageThree} title="Abstract Painting" likes={775} shares={800} />
          <GalleryImage image={ImageFour} title="Abstract Painting" likes={45} shares={12} />
          <GalleryImage image={ImageFive} title="Abstract Painting" likes={3} shares={1} />
          <GalleryImage image={ImageSix} title="Abstract Painting" likes={123} shares={13} />

          
        </div>
			</div>
		</div>
	);
}

export default App;
