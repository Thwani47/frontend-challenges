import './App.css';
import ChallengeCard from './ChallengeCard';
import EmailSubscribe from './assets/EmailSubscribe.png';
import Clipboard from './assets/Clipboard.png';
import ImageGallery from './assets/ImageGallery.png';
import LoginModal from './assets/LoginModal.png';
import LoopStudios from './assets/LoopStudios.png';
import OrderSummaryComponent from './assets/OrderSummaryComponent.png';
import PricingCards from './assets/PricingCards.png';
import ProductModal from './assets/ProductModal.png'
import ProductPreviewCardComponent from './assets/ProductPreviewCardComponent.png'
import TestimonialGrid from './assets/TestimonialGrid.png'
import ProfileCardPreview from './assets/ProfileCardPreview.jpg'

function App() {
	return (
		<div className="w-full">
			<h1 className="text-4xl">Frontend Mentor Challenges</h1>
			<hr className="h-px my-8 bg-gray-800 border-0 dark:bg-gray-200 mb-4" />

			<div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-md:grid-cols-2">
				<ChallengeCard
					title="Email Subscribe"
					liveUrl="https://thwani47.github.io/frontend-challenges/email-subscribe/"
					githubLink="https://github.com/Thwani47/frontend-challenges/blob/master/email-subscribe"
					imageSrc={EmailSubscribe}
					description="An email subscribe card component"
				/>
				<ChallengeCard
					title="Product Preview Card Component"
					liveUrl="https://thwani47.github.io/frontend-challenges/product-preview-card-component/"
					githubLink="https://github.com/Thwani47/frontend-challenges/blob/master/product-preview-card-component"
					imageSrc={ProductPreviewCardComponent}
					description="A product preview card component"
				/>
				<ChallengeCard
					title="Pricing Cards"
					liveUrl="https://thwani47.github.io/frontend-challenges/pricing-cards/"
					githubLink="https://github.com/Thwani47/frontend-challenges/blob/master/pricing-cards"
					imageSrc={PricingCards}
					description="Pricing cards component"
				/>
				<ChallengeCard
					title="Product Modal"
					liveUrl="https://thwani47.github.io/frontend-challenges/product-modal/"
					githubLink="https://github.com/Thwani47/frontend-challenges/blob/master/product-modal"
					imageSrc={ProductModal}
					description="A product modal component"
				/>
				<ChallengeCard
					title="Image Gallery"
					liveUrl="https://thwani47.github.io/frontend-challenges/image-gallery/"
					githubLink="https://github.com/Thwani47/frontend-challenges/tree/master/image-gallery"
					imageSrc={ImageGallery}
					description="An image gallery page"
				/>
				<ChallengeCard
					title="Order Summary Component"
					liveUrl="https://thwani47.github.io/frontend-challenges/order-summary-component/"
					githubLink="https://github.com/Thwani47/frontend-challenges/blob/master/order-summary-component"
					imageSrc={OrderSummaryComponent}
					description="An order summary component"
				/>
				<ChallengeCard
					title="Login Modal"
					liveUrl="https://thwani47.github.io/frontend-challenges/login-modal/"
					githubLink="https://github.com/Thwani47/frontend-challenges/blob/master/login-modal"
					imageSrc={LoginModal}
					description="A login modal"
				/>
				<ChallengeCard
					title="Clipboard"
					liveUrl="https://thwani47.github.io/frontend-challenges/clipboard/"
					githubLink="https://github.com/Thwani47/frontend-challenges/blob/master/clipboard"
					imageSrc={Clipboard}
					description="Clipboard landing page"
				/>
				<ChallengeCard
					title="Loopstudios"
					liveUrl="https://thwani47.github.io/frontend-challenges/loopstudios/"
					githubLink="https://github.com/Thwani47/frontend-challenges/blob/master/loopstudios"
					imageSrc={LoopStudios}
					description="LoopStudios landing page"
				/>
				<ChallengeCard
					title="Profile Card Componnent"
					liveUrl="https://thwani47.github.io/frontend-challenges/profile-card-component/"
					githubLink="https://github.com/Thwani47/frontend-challenges/blob/master/profile-card-component"
					imageSrc={ProfileCardPreview}
					description="A profile card component"
				/>
				<ChallengeCard
					title="Testimonial Grid"
					liveUrl="https://thwani47.github.io/frontend-challenges/testimonial-grid/"
					githubLink="https://github.com/Thwani47/frontend-challenges/blob/master/testimonial-grid"
					imageSrc={TestimonialGrid}
					description="Testimonial grid page"
				/>
			</div>
		</div>
	);
}

export default App;
