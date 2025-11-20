import { memo } from "react";
import { log } from "../../log.js";

const IconButton = memo(function IconButton({ children, icon, ...props }) {
	log("<IconButton /> rendered", 2);

	const Icon = icon;
	// In the above line, we are passing the value which we received through the icon prop to the Icon, which we are then using as a Component below.
	// So the above use of the memo will also prevent this Icon component from being re executed.
	return (
		<button {...props} className="button">
			<Icon className="button-icon" />
			<span className="button-text">{children}</span>
		</button>
	);
});

export default IconButton;
