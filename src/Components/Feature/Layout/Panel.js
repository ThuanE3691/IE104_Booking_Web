import { motion, usePresence } from "framer-motion";

const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };

const Panel = ({ children }) => {
	const [isPresent, safeToRemove] = usePresence();

	const animations = {
		layout: true,
		initial: "out",
		style: {
			position: isPresent ? "relative" : "absolute",
		},
		animate: isPresent ? "in" : "out",
		whileTap: "tapped",
		variants: {
			in: { scaleY: 1, opacity: 1, zIndex: 1 },
			out: { scaleY: 0, opacity: 0, zIndex: -1 },
		},
		onAnimationComplete: () => !isPresent && safeToRemove(),
		transition,
	};

	return (
		<motion.div
			{...animations}
			className="w-full border-2 rounded-lg border-slate-200 h-fit"
		>
			{children}
		</motion.div>
	);
};

export default Panel;
