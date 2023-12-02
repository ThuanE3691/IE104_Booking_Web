import { AnimatePresence, motion } from "framer-motion";

const checkedVariants = {
	uncheck: {
		opacity: 0,
		pathLength: 0,
	},
	checked: {
		opacity: 1,
		pathLength: 1,
	},
	transition: {
		delay: 0.25,
		opacity: {
			duration: 0.02,
		},
		duration: 0.1,
		type: "tween",
		ease: "easeOut",
	},
};

const Circle = ({
	step,
	order,
	current,
	complete,
	handleOnClick,
	...props
}) => {
	return (
		<div {...props} className="flex flex-col items-center gap-y-2">
			<motion.div
				className=" w-[48px] h-[48px] flex items-center justify-center text-lg font-semibold  rounded-full z-10 cursor-pointer border-4 "
				initial={false}
				animate={{
					backgroundColor:
						!complete && !current ? "rgb(226 232 240)" : "rgb(36 146 183)",
					color: !complete && !current ? "#000" : "#fff",
					borderColor: !complete ? "rgb(252, 252, 253)" : "rgb(191 219 254)",
				}}
				transition={{ delay: 0.1 }}
				onClick={() => handleOnClick(order - 1)}
			>
				<AnimatePresence>
					{!complete && (
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							key="not-complete"
						>
							{order}
						</motion.span>
					)}
					{complete && (
						<motion.svg
							fill="none"
							stroke="currentColor"
							strokeWidth="3"
							className="absolute w-7 h-7 text-white pointer-events-none mx-0.5 my-0.5"
							viewBox="0 0 24 24"
							key="complete"
						>
							<motion.path
								variants={checkedVariants}
								initial="uncheck"
								animate="checked"
								transition={checkedVariants["transition"]}
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5 13l4 4L19 7"
							></motion.path>
						</motion.svg>
					)}
				</AnimatePresence>
			</motion.div>
			<span
				className={`${
					complete || current ? "text-text-primary" : "text-black"
				} transition-colors`}
			>
				{step}
			</span>
		</div>
	);
};

const MultiStepProgress = ({ steps, progress, handleChangeStep }) => {
	const lengthProgress = ["0", "50%", "90%"];

	const handleOnClick = (index) => {
		if (index === progress.current) return;
		if (progress.current < index) handleChangeStep(index - progress.current);
		else handleChangeStep(index - progress.current);
	};

	return (
		<div className="relative flex items-center justify-center w-full ">
			<div className="relative flex items-center gap-x-32 w-fit">
				{steps.map((step, index) => {
					return (
						<Circle
							step={step}
							order={index + 1}
							key={index}
							current={progress.current === index}
							complete={progress.complete[index]}
							handleOnClick={handleOnClick}
						></Circle>
					);
				})}
				<div className="w-[90%] h-0.5 bg-slate-200 absolute -translate-y-4 translate-x-8 ">
					<motion.div
						className="w-1 h-0.5 bg-button-primary absolute translate-x-8 z-[2]"
						animate={{ width: lengthProgress[progress.current] }}
						transition={{ duration: 0.2 }}
					></motion.div>
				</div>
			</div>
		</div>
	);
};

export default MultiStepProgress;
