import Card from './components/Card';

function App() {
	return (
		// container
		<div className="flex items-center justify-center min-h-screen bg-slate-800">
			<div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
				<Card price="99.99" plan="basic" value="100GB" mainPlan={false} />
				<Card price="199.99" plan="standard" value="200GB" mainPlan={true}/>
				<Card price="499.99" plan="premium" value="2TB" mainPlan={false}/>
			</div>
		</div>
	);
}

export default App;
