import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const ResizablePanel = ({ children, name, ...props }) => {
	const [ref, { height }] = useMeasure();
	return (
		<motion.div
			animate={{ height }}
			transition={{
				type: "spring",
				duration: 0.2,
				bounce: 0,
			}}
			{...props}
		>
			<div ref={ref} key={"expanded"}>
				{children}
			</div>
		</motion.div>
	);
};

export default ResizablePanel;
