import { motion } from "framer-motion";
import { useState } from "react";

const checkedVariants = {
	uncheck: {
		pathLength: 0,
	},
	checked: {
		pathLength: 1,
	},
	transition: {
		duration: 0.05,
		type: "tween",
		ease: "easeOut",
	},
};

const CheckBox = ({ value, onChange, ...props }) => {
	const [isChecked, setIsChecked] = useState(false);

	const onTicked = (e) => {
		if (onChange) onChange(e, props.index);
		setIsChecked(!isChecked);
	};

	return (
		<div className="flex items-center gap-2" {...props}>
			<input
				type="checkbox"
				id={value}
				className="relative w-5 h-5 transition-colors border-2 rounded-[5px] appearance-none cursor-pointer peer checked:bg-search-button checked:border-0 shrink-0 hover:bg-slate-200 checked:hover:bg-search-button"
				checked={isChecked}
				onChange={onTicked}
			></input>
			<label className="flex items-center gap-2 " key={value} htmlFor={value}>
				{value}
			</label>
			{isChecked && (
				<motion.svg
					fill="none"
					stroke="currentColor"
					strokeWidth="3"
					className="absolute w-4 h-4 text-white pointer-events-none mx-0.5 my-0.5"
					viewBox="0 0 24 24"
				>
					<motion.path
						variants={checkedVariants}
						initial="uncheck"
						animate="checked"
						transition="transition"
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M5 13l4 4L19 7"
					></motion.path>
				</motion.svg>
			)}
		</div>
	);
};

export default CheckBox;
