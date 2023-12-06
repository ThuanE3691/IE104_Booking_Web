import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

const transition = {
	duration: 0.2,
	ease: "easeInOut",
	y: {
		duration: 0.05,
	},
};

const animation = {
	variants: {
		hidden: (position) => ({
			opacity: 0,
			x: "-50%",
			y: "5px",
			left: position ? position : "50%",
		}),
		show: (position) => ({
			opacity: 1,
			x: "-50%",
			y: "0px",
			left: position ? position : "50%",
		}),
		exit: (position) => ({
			opacity: 0,
			x: "-50%",
			y: "5px",
			left: position ? position : "50%",
		}),
	},
	initial: "hidden",
	animate: "show",
	exit: "exit",
};

const Tooltip = ({ text, position, children }) => {
	const [show, setShow] = useState(false);

	return (
		<div
			className="relative inline-block group "
			onMouseEnter={() => setShow(true)}
			onMouseLeave={() => setShow(false)}
		>
			{children}
			<MotionConfig transition={transition} custom={position}>
				<AnimatePresence custom={position}>
					{show && (
						<>
							<motion.div
								className="absolute p-2 text-xs text-white rounded group-hover:inline-block bg-neutral-400 whitespace-nowrap  bottom-[calc(100%+10px)] font-vietnam-pro transition-all duration-300"
								{...animation}
								custom={position}
							>
								{text}
							</motion.div>
							<motion.div
								className="absolute group-hover:inline-block border-[6px] bottom-[calc(100%+5px)] border-l-transparent border-r-transparent border-b-0 border-t-neutral-400 transition-all duration-300"
								{...animation}
								custom={position}
							></motion.div>
						</>
					)}
				</AnimatePresence>
			</MotionConfig>
		</div>
	);
};

export default Tooltip;
