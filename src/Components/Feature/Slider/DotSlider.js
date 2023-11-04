import { motion } from "framer-motion";
const DotSlider = ({ length, setDotIndex, dotIndex, dotColor }) => {
	return (
		<motion.ul className="flex gap-2 mx-auto mt-4 w-fit">
			{[...Array(length).keys()].map((dot) => {
				return (
					<motion.li
						className="relative z-0 w-2 h-2 rounded-full cursor-pointer bg-slate-200 mix-blend-darken"
						key={dot}
						onClick={() => setDotIndex(dot)}
						layout
					>
						{dotIndex === dot && (
							<motion.div
								className={`absolute inset-0 z-10 w-2 h-2 ${dotColor} rounded-full`}
								layoutId="selected"
							></motion.div>
						)}
					</motion.li>
				);
			})}
		</motion.ul>
	);
};

export default DotSlider;
