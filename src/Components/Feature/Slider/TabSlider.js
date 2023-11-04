import { motion } from "framer-motion";

const TabSlider = ({ listItem, tabActive, handleOnChangeTab }) => {
	return (
		<motion.ul className="flex items-center gap-5 mt-4">
			{listItem.map((type, index) => {
				return (
					<motion.li
						className="relative flex items-center px-4 py-2 font-semibold transition-colors duration-200 cursor-pointer rounded-xl group hover-button mix-blend-darken gap-x-2"
						onClick={() => handleOnChangeTab(index)}
						key={index}
						data-isactive={tabActive === index}
					>
						{tabActive === index && (
							<motion.div
								className="absolute inset-0 w-full h-full text-white rounded-xl bg-button-primary"
								layoutId="bg-tab"
								transition={{ duration: 0.3 }}
							></motion.div>
						)}
						{type.image}
						<span
							className={`relative transition-colors delay-100 group-data-[isactive=true]:text-white  text-black`}
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
