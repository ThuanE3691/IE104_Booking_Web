import { useRef } from "react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ isOpen, children }) => {
	const [isModalOpen, setModalOpen] = useState(isOpen);
	const modalRef = useRef(null);

	useEffect(() => {
		setModalOpen(isOpen);
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isModalOpen && (
				<motion.div
					className="fixed inset-0 z-10 flex items-center justify-center w-screen h-screen bg-black bg-opacity-70"
					ref={modalRef}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					key="modal"
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
