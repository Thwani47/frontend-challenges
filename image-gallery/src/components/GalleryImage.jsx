import React from 'react';
import Bookmark from '../assets/bookmark.svg'

export default function GalleryImage({image, title, likes, shares}) {
	return (
		<div className="relative group">
			<img src={image} alt="" className="w-72" />
			<div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
				<div className="flex justify-between w-full">
					<div className="font-normal">
						<p className="">{title}</p>
						<p className="">{likes} Likes - {shares} Shares</p>
					</div>
					<div className="flex flex-items">
						<img src={Bookmark} alt="bookmark" />
					</div>
				</div>
			</div>
		</div>
	);
}
