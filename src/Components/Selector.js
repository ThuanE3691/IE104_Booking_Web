import { AnimatePresence, motion } from "framer-motion";
import PathSVG from "@/Assets/Icons/SVG/PathSVG";
import getVietNamProvinces from "@/Utils/getVietNamProvinces";

const Selector = ({ handleSelectLocation, locationQuery, closeSelector }) => {
	const locationDisplay = getVietNamProvinces(locationQuery);
	return (
		<AnimatePresence>
			{locationDisplay.length > 0 && (
				<motion.ul
					className={`absolute left-0 z-10 grid w-[200%] grid-rows-5 px-2 py-2 shadow-2xl -top-[320px] bg-main-bg rounded-2xl text-sub-text font-nunito font-semibold cursor-default`}
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0, opacity: 0 }}
					onBlur={closeSelector}
					tabIndex="-1"
				>
					{locationDisplay.map((location, index) => {
						var name_location = location.name.replace("Tỉnh ", "");
						name_location = name_location.replace("Thành phố ", "");
						name_location = name_location.replace("Huyện ", "");
						return (
							<li
								key={location.name}
								className={`px-2 py-3 rounded-xl ${
									index === 0 && "bg-selection-active text-black"
								} hover:bg-selection-active group hover:text-black transition-colors flex items-center gap-x-2 cursor-pointer`}
								onClick={() => handleSelectLocation(name_location)}
							>
								<div
									className={`p-2 border-2 rounded-full border-selection-active group-hover:bg-main-bg ${
										index === 0 && "bg-main-bg"
									}`}
								>
									<PathSVG className="w-4 h-4"></PathSVG>
								</div>
								{name_location}
							</li>
						);
					})}
				</motion.ul>
			)}
		</AnimatePresence>
	);
};

export default Selector;
