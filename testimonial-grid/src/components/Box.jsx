import React from 'react';

export default function Box({ baseImage, name, title,testimony, boxStyling,  quotesImage }) {
	return (
		<div className={`relative p-10 rounded-xl ${boxStyling == null ? 'bg-purple-700' : boxStyling}`}>
			{quotesImage === null ? null : (
				<img
					src={quotesImage}
					alt=""
					className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
				/>
			)}

			<div className="flex z-index-10 space-x-4">
				<img src={baseImage} alt="" className="w-10 h-10 rounded-full ring-2 ring-purple-300" />
				<div className="text-sm">
					<h4 className="opacity-90">{name}</h4>
					<p className="opacity-50">{title}</p>
				</div>
			</div>
            <p className="relative z-10 mt-6 text-xl">{testimony.largeText}</p>
            <p className="mt-6 opacity-50 line-clamp-6">"{testimony.smallText}"</p>
		</div>
	);
}
