import React from 'react';

export default function FeatureItem({ title, icon, content }) {
	return (
		<div className="flex flex-col items-center space-y-5">
			<img src={icon} className="mb-6" />
			<h5>{title}</h5>
			<p className="max-w-md text-grayishBlue">{content}</p>
		</div>
	);
}
