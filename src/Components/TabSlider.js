import { motion } from "framer-motion";

const TabSlider = ({ listItem, tabActive, setTabActive }) => {
	return (
		<motion.ul className="flex items-center gap-5 mt-4">
			{listItem.map((type, index) => {
				return (
					<motion.li
						className="relative flex items-center px-4 py-2 font-semibold rounded-lg cursor-pointer hover-button bg-slate-200 mix-blend-darken gap-x-2"
						onClick={() => setTabActive(index)}
						key={index}
					>
						{tabActive === index && (
							<motion.div
								className="absolute inset-0 w-full h-full text-white rounded-lg bg-button-primary"
								layoutId="bg-tab"
								transition={{ duration: 0.3 }}
							></motion.div>
						)}
						{type.image}
						<span
							className={`relative transition-colors delay-100 mix-blend-normal ${
								tabActive === index ? "text-white" : "text-black"
							} `}
						>
							{type.name}
						</span>
					</motion.li>
				);
			})}
		</motion.ul>
	);
};

export default TabSlider;
