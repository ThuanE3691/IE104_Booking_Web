import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import NavigationSVG from "@/Assets/Icons/SVG/NavigationSVG";
import Selector from "@/Components/Selector";

const LocationTab = () => {
	const ref = useRef(null);

	const [location, setLocation] = useState({
		active: false,
		content: "",
	});

	const handleSelectLocation = (locationSelected) => {
		setLocation({
			...location,
			active: false,
			content: locationSelected,
		});
	};

	const handleOnBlur = (event) => {
		if (!event.relatedTarget) {
			setLocation({
				...location,
				active: false,
			});
		}
	};

	const closeSelector = () => {
		setLocation({
			...location,
			active: false,
		});
	};

	const onChangeLocation = (event) => {
		setLocation({
			...location,
			content: event.target.value,
			active: true,
		});
	};
	return (
		<div
			className={`relative flex items-start gap-3 px-2 py-8 transition-all duration-300 cursor-pointer hover:shadow-2xl rounded-2xl ${
				location.active && "shadow-2xl"
			}`}
			onBlur={(event) => handleOnBlur(event)}
			tabIndex="1"
		>
			<NavigationSVG className="w-6 h-6 mt-1 -rotate-90 cursor-pointer fill-current text-sub-text"></NavigationSVG>
			<AnimatePresence>
				{location.active && (
					<Selector
						handleSelectLocation={handleSelectLocation}
						locationQuery={location.content}
						closeSelector={closeSelector}
					></Selector>
				)}
			</AnimatePresence>
			<div className="cursor-pointer">
				<input
					className={`text-2xl w-56 font-bold outline-none placeholder-inherit min-w-full`}
					placeholder="Địa điểm"
					ref={ref}
					onChange={onChangeLocation}
					value={location.content}
					onClick={() => setLocation({ ...location, active: true })}
				></input>
				<p className="text-sm text-sub-text">Nơi bạn muốn đến </p>
			</div>
		</div>
	);
};

export default LocationTab;
