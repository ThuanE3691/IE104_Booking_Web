import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const SelectorSearch = ({ sortOption, setSortOption }) => {
	const [showOptions, setShowOptions] = useState(false);

	const options = [
		"Giá cao nhất",
		"Giá thấp nhất",
		"Điểm đánh giá",
		"Độ phổ biến",
	];

	return (
		<div
			className="relative z-50 flex items-center px-4 py-2 font-semibold bg-white rounded-lg outline-none cursor-pointer select-none text-text-primary w-52 drop-shadow-lg"
			onClick={() => setShowOptions((prevState) => !prevState)}
		>
			{sortOption}
			<IoIosArrowDown
				size={16}
				className="ml-auto data-[showOptions=true]:rotate-180 transition-all z-0"
				data-showoptions={showOptions}
			></IoIosArrowDown>
			<AnimatePresence>
				{showOptions && (
					<motion.section
						className="absolute top-0 left-0 z-10 w-full mt-12 font-normal bg-white select-none rounded-xl drop-shadow-lg "
						key="select-options"
						initial={{ y: "-6%", opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: "-6%", opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						{options.map((option) => {
							return (
								<div
									className="px-4 [&:first-child]:rounded-t-lg [&:last-child]:rounded-b-lg text-black py-2.5 bg-white select-none [&:nth-child(even)]:bg-slate-200 data-[ischecked=true]:text-text-primary data-[ischecked=true]:hover:text-white hover:bg-button-primary hover:text-white transition-colors [&:nth-child(even)]:hover:bg-button-primary [&:nth-child(even)]:hover:text-white"
									data-ischecked={sortOption === option}
									onClick={() => setSortOption(option)}
									key={option}
								>
									{option}
								</div>
							);
						})}
					</motion.section>
				)}
			</AnimatePresence>
		</div>
	);
};

export default SelectorSearch;
