import Box from './components/Box';
import Quotes from './assets/bg-pattern-quotation.svg';
import ImageDaniel from './assets/image-daniel.jpg';
import ImageJonathan from './assets/image-jonathan.jpg';
import ImageKira from './assets/image-kira.jpg';
import ImageJeanette from './assets/image-jeanette.jpg';
import ImagePatrick from './assets/image-patrick.jpg';
import { testimonials } from './testimonials';
function App() {
	return (
		<div className="container mx-auto max-w-7xl p-2 md:p-10">
			<div className="grid  gap-6 grid-cols-1 text-white md:grid-cols-4 md:grid-rows-2">
				<Box
					baseImage={ImageDaniel}
					name="Daniel Clifford"
					title="Verified Graduate"
					testimony={testimonials.daniel}
					boxStyling="bg-purple-700 md:col-span-2"
					quotesImage={Quotes}
				/>
				<Box
					baseImage={ImageJonathan}
					name="Jonathan Walters"
					title="Verified Graduate"
					boxStyling="bg-gray-600"
					testimony={testimonials.jonathan}
				/>
				<Box
					baseImage={ImageKira}
					name="Kira Whittle"
					title="Verified Graduate"
					boxStyling="bg-white text-gray-900 hidden md:block md:row-span-2"
					testimony={testimonials.kira}
				/>
				<Box
					baseImage={ImageJeanette}
					name="Jeanette Harmon"
					title="Verified Graduate"
					boxStyling="bg-white text-gray-900"
					testimony={testimonials.jeanette}
				/>
				<Box
					baseImage={ImagePatrick}
					name="Patrick Abrams"
					title="Verified Graduate"
					boxStyling="bg-gray-900 text-white md:col-span-2"
					testimony={testimonials.patrick}
				/>
				<Box
					baseImage={ImageKira}
					name="Kira Whittle"
					title="Verified Graduate"
					boxStyling="bg-white text-gray-900 md:hidden"
					testimony={testimonials.kira}
				/>
			</div>
		</div>
	);
}

export default App;
