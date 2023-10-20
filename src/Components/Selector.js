import { motion } from "framer-motion";
import PathSVG from "@/Assets/Icons/SVG/PathSVG";

const Selector = ({ handleSelectLocation }) => {
	const list_location = [
		"Hà Nội",
		"Hồ Chí Minh",
		"Hải Phòng",
		"Vũng Tàu",
		"Đà Nẵng",
	];
	return (
		<motion.ul
			className="absolute left-0 z-10 grid w-[200%] grid-rows-5 px-2 py-2 shadow-2xl -top-[320px] bg-main-bg rounded-2xl text-sub-text font-nunito font-semibold"
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			exit={{ scale: 0, opacity: 0 }}
		>
			{list_location.map((location, index) => {
				return (
					<li
						key={location}
						className={`px-2 py-3 rounded-xl ${
							index === 3 && "bg-selection-active text-black"
						} hover:bg-selection-active group hover:text-black transition-colors flex items-center gap-x-2`}
						onClick={() => handleSelectLocation(location)}
					>
						<div
							className={`p-2 border-2 rounded-full border-selection-active group-hover:bg-main-bg ${
								index === 3 && "bg-main-bg"
							}`}
						>
							<PathSVG className="w-4 h-4"></PathSVG>
						</div>
						{location}
					</li>
				);
			})}
		</motion.ul>
	);
};

export default Selector;
