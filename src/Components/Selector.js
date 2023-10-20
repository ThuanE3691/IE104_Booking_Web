import { motion } from "framer-motion";

const Selector = () => {
	const list_location = [
		"Hà Nội",
		"Hồ Chí Minh",
		"Hải Phòng",
		"Vũng Tàu",
		"Đà Nẵng",
	];
	return (
		<motion.ul
			className="absolute left-0 z-10 grid w-full grid-rows-5 px-4 py-2 shadow-2xl -top-[312px] bg-main-bg rounded-2xl text-sub-text font-vietnam-pro"
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			exit={{ scale: 0, opacity: 0 }}
		>
			{list_location.map((location, index) => {
				return (
					<li
						key={location}
						className={`px-2 py-4 rounded-xl ${
							index === 3 && "bg-selection-active text-black"
						} hover:bg-selection-active hover:text-black transition-colors`}
					>
						{location}
					</li>
				);
			})}
		</motion.ul>
	);
};

export default Selector;
