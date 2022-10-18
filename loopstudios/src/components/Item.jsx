import React from 'react';
import ItemGradient from './ItemGradient';

export default function Item({ itemText, desktopImage, mobileImage }) {
	return (
		<div className="group relative overflow-hidden md:w-1/4">
			<img src={desktopImage} alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
			<img src={mobileImage} alt="" className="w-full md:hidden" />
			<ItemGradient />
			<h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
				{itemText}
			</h5>
		</div>
	);
}
