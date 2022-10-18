import React from 'react';

export default function FooterSocial({icon}) {
	return (
		<div className="h-8 group">
			<a href="#">
				<img src={icon} className="h-6" />
			</a>
		</div>
	);
}
