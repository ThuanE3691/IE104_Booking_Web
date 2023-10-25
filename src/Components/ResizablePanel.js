import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const ResizablePanel = ({ children }) => {
	const [ref, bounds] = useMeasure();
	return (
		<motion.div
			animate={{ height: bounds.height > 0 ? bounds.height : null }}
			transition={{
				type: "spring",
				duration: 0.2,
				bounce: 0,
			}}
		>
			<div ref={ref}>{children}</div>
		</motion.div>
	);
};

export default ResizablePanel;
