import React from 'react';

export default function FooterItem({ itemText }) {
	return (
		<div className="h-10 group">
			<a href="#">{itemText}</a>
			<div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
		</div>
	);
}
