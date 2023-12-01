import { motion } from "framer-motion";

const timerVariants = {
	initial: { scale: 0.8, opacity: 0 },
	animate: { scale: 1, opacity: 1 },
	exit: { scale: 0.8, opacity: 0 },
};

const timer_transition = { duration: 0.2 };

const Timer = ({ hour, minute }) => {
	return (
		<div className="relative flex items-center mt-1 ml-7 w-fit gap-x-2">
			<motion.input
				value={hour}
				className="w-[35px] border-2 outline-none border-button-primary px-1 py-1 text-center rounded-md"
				initial="initial"
				animate="animate"
				exit="exit"
				variants={timerVariants}
				transition={timer_transition}
			/>
			<span
				initial="initial"
				animate="animate"
				exit="exit"
				variants={timerVariants}
				transition={timer_transition}
			>
				:
			</span>
			<motion.input
				value={minute}
				className="w-[35px] border-2 outline-none border-button-primary px-1 py-1 text-center rounded-md"
				initial="initial"
				animate="animate"
				exit="exit"
				variants={timerVariants}
				transition={timer_transition}
			/>
		</div>
	);
};

export default Timer;
