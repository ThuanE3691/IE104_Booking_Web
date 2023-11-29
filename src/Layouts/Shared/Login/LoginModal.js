import Modal from "@/Components/Feature/Layout/Modal";
import { motion } from "framer-motion";
import { useState } from "react";
import HotelImg from "@/Assets/Images/HotelType/Camping.jpg";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

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

const OverlayContainer = ({ showLoginForm, setShowLoginForm }) => {
	return (
		<motion.div
			className="absolute w-1/2 h-full left-1/2 z-[100] overflow-hidden"
			animate={{ x: showLoginForm ? "-100%" : "0%" }}
			transition={{ bound: 0, duration: 0.6, ease: "easeInOut" }}
		>
			<motion.div
				className="relative -left-full w-[200%] h-full bg-gradient-to-r bg-cover bg-no-repeat bg-[0_0]"
				style={{
					backgroundImage: `url(https://architecture.hetzeldesign.com/wp-content/uploads/2020/06/08-Jiashan-Mixed-Use-Development_Page_18.jpg?fbclid=IwAR2e6FSgG-bvKUlQ3t8NVVGjhBi6j142ff0_7lOj4QDtV0jduHpTG6W8zj0)`,
				}}
				animate={{ x: showLoginForm ? "50%" : "0%" }}
				transition={{ bound: 0, duration: 0.6, ease: "easeInOut" }}
			>
				<motion.div
					className="absolute top-0 flex items-end justify-center w-1/2 h-full "
					animate={{ x: showLoginForm ? "0%" : "-20%" }}
					transition={{ bound: 0, duration: 0.6, ease: "easeInOut" }}
				>
					<button
						className="relative z-10 px-6 py-2 text-lg font-semibold transition-colors bg-white -translate-y-[132px] text-text-primary rounded-xl hover:bg-text-primary hover:text-white h-fit w-fit"
						onClick={() => setShowLoginForm(false)}
					>
						Đăng nhập
					</button>
				</motion.div>
				<motion.div
					className="absolute top-0 right-0 flex items-end justify-center w-1/2 h-full"
					animate={{ x: showLoginForm ? "20%" : "0%" }}
					transition={{ bound: 0, duration: 0.6, ease: "easeInOut" }}
				>
					<button
						className="relative z-10 px-6 py-2 text-lg font-semibold transition-colors bg-white -translate-y-[132px] text-text-primary rounded-xl hover:bg-text-primary hover:text-white h-fit w-fit right-0"
						onClick={() => setShowLoginForm(true)}
					>
						Đăng ký
					</button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

const LoginModal = ({ isShowLogin, setShowLogin, handleLogIn }) => {
	const stopPropagation = (event) => {
		event.stopPropagation();
	};

	const [showLoginForm, setShowLoginForm] = useState(false);

	const handleShowOffModal = () => {
		setShowLogin(false);
	};

	return (
		<Modal isOpen={isShowLogin} onClose={handleShowOffModal}>
			<motion.div
				className="bg-white flex font-vietnam-pro w-[1048px] h-[544px] relative"
				variants={modalVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				tabIndex="0"
				onClick={stopPropagation}
				key="filter-modal"
			>
				<LoginForm
					showLoginForm={showLoginForm}
					handleLogIn={handleLogIn}
				></LoginForm>
				<RegisterForm
					showLoginForm={showLoginForm}
					handleLogIn={handleLogIn}
				></RegisterForm>
				<OverlayContainer
					showLoginForm={showLoginForm}
					setShowLoginForm={setShowLoginForm}
				></OverlayContainer>
			</motion.div>
		</Modal>
	);
};

export default LoginModal;
