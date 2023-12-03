import { motion, usePresence } from "framer-motion";
import { useMemo } from "react";

const transition_left = {
	type: "spring",
	stiffness: 500,
	damping: 50,
	mass: 1,
};

const transition_right = {
	type: "spring",
	bounce: 0,
	duration: 0.5,
};

const Panel = ({ children, panelPosition, ...props }) => {
	const [isPresent, safeToRemove] = usePresence();

	const animations_panel_left = useMemo(() => {
		return {
			layout: true,
			initial: "out",
			style: {
				position: isPresent ? "relative" : "absolute",
			},
			animate: isPresent ? "in" : "out",
			variants: {
				in: { scaleY: 1, opacity: 1, zIndex: 1 },
				out: { scaleY: 0, opacity: 0, zIndex: -1 },
			},
			onAnimationComplete: () => !isPresent && safeToRemove(),
			transition: transition_left,
		};
	}, [isPresent, safeToRemove]);

	const animations_panel_right = useMemo(() => {
		return {
			initial: "out",
			style: {
				position: isPresent ? "relative" : "absolute",
			},
			animate: "in",
			exit: "out",
			onAnimationComplete: () => !isPresent && safeToRemove(),
			transition: transition_right,
			variants: {
				in: {
					opacity: 1,
					visibility: "visible",
				},
				out: {
					opacity: 0,
					visibility: "hidden",
				},
			},
		};
	}, [isPresent, safeToRemove]);

	const animations = useMemo(
		() =>
			panelPosition === "left" ? animations_panel_left : animations_panel_right,
		[panelPosition, animations_panel_left, animations_panel_right]
	);

	return (
		<motion.div
			{...animations}
			// {...props}
			className="w-full border-2 rounded-lg border-slate-200 h-fit "
		>
			{children}
		</motion.div>
	);
};

export default Panel;
