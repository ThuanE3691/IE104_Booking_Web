import { motion } from "framer-motion";
import PathSVG from "@/Assets/Icons/SVG/PathSVG";
import changeLocationName from "@/Utils/changeLocationName";

const Selector = ({
	handleSelectLocation,
	locationOptions,
	closeSelector,
	indexSelection,
	NUM_LOCATION_DISPLAY,
}) => {
	const POSITION_Y_CONFIG = 15;
	return (
		<motion.ul
			className={`absolute -left-8 z-10 grid w-[200%] px-2 py-2 shadow-xl bg-main-bg rounded-2xl text-sub-text font-nunito font-semibold cursor-default `}
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			exit={{ scale: 0, opacity: 0 }}
			onBlur={closeSelector}
			tabIndex="-1"
			key="location-selector"
			style={{
				top: "-" + (NUM_LOCATION_DISPLAY * 60 + POSITION_Y_CONFIG) + "px",
				gridTemplateRows: "repeat(" + NUM_LOCATION_DISPLAY + ", minmax(0,1fr)",
			}}
		>
			{locationOptions.map((location, index) => {
				const name_location = changeLocationName(location);
				return (
					<li
						key={location.name}
						className={`px-2 py-3 rounded-xl ${
							index === indexSelection && "bg-selection-active text-black"
						} hover:bg-selection-active group hover:text-black transition-colors flex items-center gap-x-2 cursor-pointer`}
						onClick={() => handleSelectLocation(name_location)}
					>
						<div
							className={`p-2 border-2 rounded-full border-selection-active group-hover:bg-main-bg ${
								index === indexSelection && "bg-main-bg"
							}`}
						>
							<PathSVG className="w-4 h-4"></PathSVG>
						</div>
						{name_location}
					</li>
				);
			})}
		</motion.ul>
	);
};

export default Selector;