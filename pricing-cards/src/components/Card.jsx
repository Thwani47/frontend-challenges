import React from 'react';
import ListItem from './ListItem';

export default function Card({plan, value, price, mainPlan}) {
	return (
		<div className={`${mainPlan ? "bg-violet-600" : "bg-slate-700" } rounded-xl text-white`}>
			<div className="p-8 mx-3 mt-3 rounded-t xl bg-slate-800">
				<div className="text-center uppercase">{plan}</div>
				<h2 className="mt-10 font-serif text-5xl text-center">{value}</h2>
				<h3 className="mt-2 text-center">R{price}/Month</h3>
				<div className="flex justify-center">
					<a
						href="#"
						className={`${mainPlan ? "bg-violet-600" : ""} inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200`}
					>
						Purchase
					</a>
				</div>
			</div>
			<div className="border-t border-slate-700" />
			<div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
				<div className="flex flex-col space-y-2">
					<ListItem text={`${value} of storage`} />
					<ListItem text="Option to add members" />
					<ListItem text="Extra member benefits" />
				</div>
			</div>
		</div>
	);
}
