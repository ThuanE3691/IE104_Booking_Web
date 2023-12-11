import { useState, useRef, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationSVG from "@SVGComponent/SearchBar/NavigationSVG";
import Selector from "@/Components/SearchBar/Selector";
import getVietNamProvinces from "@/Utils/getVietNamProvinces";
import changeLocationName from "@/Utils/changeLocationName";
import classNames from "@/Utils/classNames";
import { QueryContext } from "@/Context/QueryContext";

const LocationTab = ({ overrides, notFillForm }) => {
	const NUM_LOCATION_DISPLAY = 4;
	const ref = useRef(null);
	const [indexSelection, SetIndexSelection] = useState(null);
	const { location, setLocation, showOffAll } = useContext(QueryContext);

	const [locationOptions, setLocationOptions] = useState(
		getVietNamProvinces(location.content, NUM_LOCATION_DISPLAY)
	);

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

	const onChangeInputLocation = (event) => {
		setLocation({
			...location,
			content: event.target.value,
			active: true,
		});
	};

	const handleOnClick = () => {
		showOffAll();
		setLocation({ ...location, active: true });
		const current_index = locationOptions.findIndex(
			(option) =>
				changeLocationName(option) === changeLocationName(location.content, 0)
		);
		SetIndexSelection(current_index !== -1 ? current_index : 0);
	};

	const handleKeyEvents = (event) => {
		switch (event.code) {
			case "ArrowDown":
				event.preventDefault();
				if (indexSelection < NUM_LOCATION_DISPLAY - 1)
					SetIndexSelection((prev) => prev + 1);
				break;
			case "ArrowUp":
				event.preventDefault();
				if (indexSelection > 0) SetIndexSelection((prev) => prev - 1);
				break;
			case "Enter":
				if (location.active && locationOptions.length > 0) {
					ref.current.blur();
					const location_name = changeLocationName(
						locationOptions[indexSelection]
					);
					handleSelectLocation(location_name);
				}
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		if (location.active) {
			setLocationOptions(
				getVietNamProvinces(location.content, NUM_LOCATION_DISPLAY)
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.content]);

	return (
		<div
			className={classNames(
				"relative flex items-start gap-3 px-3 py-4 duration-300 cursor-pointer rounded-2xl",
				location.active && "ring-2 ring-sub-text"
			)}
			onBlur={(event) => handleOnBlur(event)}
			tabIndex="-1"
		>
			<NavigationSVG className="w-6 h-6 mt-1 -rotate-90 cursor-pointer fill-current text-sub-text"></NavigationSVG>
			<AnimatePresence>
				{location.active && locationOptions.length > 0 && (
					<Selector
						handleSelectLocation={handleSelectLocation}
						locationOptions={locationOptions}
						closeSelector={closeSelector}
						indexSelection={indexSelection}
						NUM_LOCATION_DISPLAY={NUM_LOCATION_DISPLAY}
						overrides={overrides}
					></Selector>
				)}
			</AnimatePresence>
			<motion.div className="cursor-pointer " layout={true}>
				<input
					className={`text-xl w-56 font-bold outline-none placeholder-inherit min-w-full  `}
					placeholder="Địa điểm"
					ref={ref}
					onChange={onChangeInputLocation}
					value={location.content}
					onClick={handleOnClick}
					onKeyDown={(event) => handleKeyEvents(event)}
				></input>
				<p className="text-sm text-sub-text">Nơi bạn muốn đến </p>
			</motion.div>

			<AnimatePresence>
				{!location.content.length > 0 && notFillForm && (
					<motion.div
						className="absolute bottom-0 w-[210px] h-1 translate-y-6 bg-red-500 rounded-md cursor-default"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					></motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default LocationTab;
