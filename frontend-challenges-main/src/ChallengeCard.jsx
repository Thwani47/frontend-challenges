import { Card } from 'flowbite-react';
import React from 'react';

export default function ChallengeCard({ title, githubLink, liveUrl, imageSrc, description }) {
	return (
		<div className="max-w-sm hover:scale-105">
			<Card href={liveUrl} imgAlt={title} imgSrc={imageSrc}>
				<h5 className="text-2xl font-bold tracking-tight mt-2 mb-2 text-gray-900 dark:text-white">{title}</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
			</Card>
			<a href={githubLink} target="_blank" className="mt-4 text-lg">
				Source code
			</a>
		</div>
	);
}
