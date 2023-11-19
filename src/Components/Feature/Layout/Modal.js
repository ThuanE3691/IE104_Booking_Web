import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const Backdrop = ({ children, onClose }) => {
	return (
		<motion.div
			className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-black z-[1000] bg-opacity-70"
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

const Modal = ({ isOpen, onClose, children }) => {
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
			{isOpen && <Backdrop onClose={showOffModal}>{children}</Backdrop>}
		</AnimatePresence>
	);
};

export default Modal;
