import { useState } from 'react';
import './App.css';
import IconMoon from './assets/icon-moon.svg';
import IconSun from './assets/icon-sun.svg';
import IconCircle from './assets/icon-circle.svg';
import IconCheck from './assets/icon-check.svg';
import IconCross from './assets/icon-cross.svg';
import { todoItems } from './todoItems';

function App() {
	const [ theme, setTheme ] = useState('lt');

	const toggleTheme = () => {
		if (theme === 'lt') {
			setTheme('dt');
		} else {
			setTheme('lt');
		}
	};
	return (
		<div className="flex flex-col h-[100vh]">
			<div className={`bg-bg-desktop-${theme} h-[40%] fixed top-0 left-0 right-0 `} />
			<div className="flex items-center justify-center z-10">
				<div className="w-[40%] text-white">
					<div className="flex flex-row justify-between py-10">
						<h1 className="font-bold text-3xl">T O D O</h1>
						<img
							src={theme === 'lt' ? IconMoon : IconSun}
							alt="Theme Toggle"
							className="h-8 w-8"
							onClick={toggleTheme}
						/>
					</div>
					<input
						className="w-full h-12 rounded-md text-light-grayish-blue px-4 font-bold mb-8"
						placeholder="Create a new todo..."
					/>

					<div className="flex flex-col rounded-lg border">
						{todoItems.map((item) => {
							return (
								<div
									key={item.title}
									className="h-12 bg-white rounder-lg border-b  border-gray-300 font-bold text-lt-dark-grayish-blue flex flex-row gap-2 items-center justify-between p-4"
								>
									<div className="flex flex-row gap-2 items-center">
										<img src={item.done === true ? IconCheck : IconCircle} className="h-5 w-5" />
										{item.title}
									</div>
									<img src={IconCross} className="h-5 w-5 " />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
