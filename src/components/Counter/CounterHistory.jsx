import { useState } from "react";

import { log } from "../../log.js";

function HistoryItem({ count }) {
	log("<HistoryItem /> rendered", 3);

	const [selected, setSelected] = useState(false);

	function handleClick() {
		setSelected((prevSelected) => !prevSelected);
	}

	return (
		<li onClick={handleClick} className={selected ? "selected" : undefined}>
			{count}
		</li>
	);
}

export default function CounterHistory({ history }) {
	log("<CounterHistory /> rendered", 2);

	// const [selected, setSelected] = useState(false);

	// function handleClick() {
	// 	setSelected((prevSelected) => !prevSelected);
	// }

	return (
		<ol>
			{/* {history.map((count, index) => (
				<HistoryItem key={index} count={count} /> */}
			{history.map((count) => (
				<HistoryItem key={count.id} count={count.value} />

				// <li key={index} onClick={handleClick} className={selected ? "selected" : undefined}>
				// 	{count}
				// </li>
				// If we do like the above way, with state and handleClick function inside this component function, then what's happening is that the "selected" css class is getting applied to all the list items, which is not what we want.

				// The reason the class is added to all list items is that the variable selected is likely a single piece of state (a boolean like true or false) that is shared by the entire component.
				// When the component re-renders, every single item in the map loop looks at that same selected variable. If it is true, every <li> gets the class.
			))}
		</ol>
	);
}
