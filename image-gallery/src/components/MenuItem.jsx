import React from 'react';

export default function MenuItem({text}) {
	return (
		<div className="group">
			<a href="#">{text}</a>
			<div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100" />
		</div>
	);
}
