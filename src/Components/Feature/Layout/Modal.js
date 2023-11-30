import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const modalVariants = {
	hidden: {
		y: "100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: "easeInOut",
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
};

const Backdrop = ({ children, onClose }) => {
	return (
		<motion.div
			className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-70 z-[1000]"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={onClose}
			key="backdrop"
		>
			{children}
		</motion.div>
	);
};

const stopPropagation = (e) => {
	e.stopPropagation();
};

const Modal = ({ isOpen, onClose, children, ...properties }) => {
	const showOffModal = (event) => {
		event.stopPropagation();
		onClose();
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			document.body.style.paddingRight = "15px";
		} else {
			document.body.style.overflow = "auto";
			document.body.style.paddingRight = "0px";
		}
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<Backdrop onClose={showOffModal} {...properties}>
					{children}
				</Backdrop>
			)}
		</AnimatePresence>
	);
};

export default Modal;
export { modalVariants, stopPropagation };
