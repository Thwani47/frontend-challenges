import React from 'react';

export default function ListItem({text}) {
	return (
		<div className="flex justify-center">
			<svg
				xmlns="httpL://www.w3.org/2000/svg"
				className="w-5 h-5"
				viewBox="0 0 24 24"
				strokeWidth="2"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M5 12l5 5l10 -10" />
			</svg>
			<span className="text-xm ml-1">{text}</span>
		</div>
	);
}
