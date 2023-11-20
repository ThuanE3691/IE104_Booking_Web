import Modal from "@/Components/Feature/Layout/Modal";
import { motion } from "framer-motion";
import Facebook from "@IconCommon/Brands/facebook.png";
import Google from "@IconCommon/Brands/google.png";
import Instagram from "@IconCommon/Brands/instagram.png";
import { useState } from "react";
import HotelImg from "@/Assets/Images/HotelType/Camping.jpg";

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

const RegisterForm = ({ showLoginForm }) => {
	return (
		<motion.section
			className="absolute w-1.2 left-0 top-0 opacity-0 z-[1] flex flex-col items-center py-12 px-28 bg-white  "
			animate={{
				x: showLoginForm ? "100%" : "0%",
				opacity: showLoginForm ? 1 : 0,
				zIndex: showLoginForm ? 5 : 1,
			}}
			transition={{
				bound: 0,
				duration: 0.6,
				ease: "easeInOut",
				opacity: { delay: 0.25 },
				zIndex: { delay: 0.25 },
			}}
		>
			<h2 className="mb-10 text-3xl font-semibold">Đăng ký</h2>
			<div className="flex flex-col gap-y-4">
				<div className="flex flex-col gap-y-1">
					<label htmlFor="username" className="font-semibold ">
						Họ tên người dùng
					</label>
					<input
						type="text"
						id="username"
						className="px-2 py-1 w-[300px] outline-black bg-slate-300"
					/>
				</div>
				<div className="flex flex-col gap-y-1">
					<label htmlFor="email" className="font-semibold ">
						Email
					</label>
					<input
						type="text"
						id="email"
						className="px-2 py-1 w-[300px] outline-black bg-slate-300"
					/>
				</div>
				<div className="flex flex-col gap-y-1">
					<label htmlFor="password" className="font-semibold ">
						Mật khẩu
					</label>
					<input
						type="password"
						id="password"
						className="px-2 py-1 w-[300px] outline-black bg-slate-300"
					/>
				</div>
			</div>
			<button className="px-6 py-2 mt-8 text-lg font-semibold text-white transition-colors rounded-xl bg-button-primary hover-button">
				Đăng ký
			</button>
			<div className="flex flex-col items-center">
				<div className="mt-6 text-sm text-slate-400">Hoặc đăng ký bằng</div>
				<div className="flex items-center mt-2 gap-x-8">
					<img src={Google} alt="" className="w-8 cursor-pointer" />
					<img src={Facebook} alt="" className="w-8 cursor-pointer" />
					<img src={Instagram} alt="" className="w-8 cursor-pointer" />
				</div>
			</div>
		</motion.section>
	);
};

const LoginForm = ({ showLoginForm }) => {
	return (
		<motion.section
			className="absolute top-0 left-0 w-1.2 z-[2] flex flex-col items-center h-full py-12 px-28 bg-white "
			animate={{ x: showLoginForm ? "100%" : "0%" }}
			transition={{ bound: 0, duration: 0.6, ease: "easeInOut" }}
		>
			<h2 className="mb-10 text-3xl font-semibold">Đăng nhập</h2>
			<div className="flex flex-col gap-y-4">
				<div className="flex flex-col gap-y-1">
					<label htmlFor="email" className="font-semibold ">
						Email
					</label>
					<input
						type="text"
						id="email"
						className="px-2 py-1 w-[300px] outline-black bg-slate-300"
					/>
				</div>
				<div className="flex flex-col gap-y-1">
					<label htmlFor="password" className="font-semibold ">
						Mật khẩu
					</label>
					<input
						type="password"
						id="password"
						className="px-2 py-1 w-[300px] outline-black bg-slate-300"
					/>
				</div>
				<span className="text-sm cursor-pointer text-text-primary w-fit">
					Quên mật khẩu
				</span>
			</div>
			<button className="px-6 py-2 mt-[72px] text-lg font-semibold text-white transition-colors rounded-xl bg-button-primary hover-button">
				Đăng nhập
			</button>
			<div className="flex flex-col items-center">
				<div className="mt-6 text-sm text-slate-400">Hoặc đăng nhập bằng</div>
				<div className="flex items-center mt-2 gap-x-8">
					<img src={Google} alt="" className="w-8 cursor-pointer" />
					<img src={Facebook} alt="" className="w-8 cursor-pointer" />
					<img src={Instagram} alt="" className="w-8 cursor-pointer" />
				</div>
			</div>
		</motion.section>
	);
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

const LoginModal = ({ isShowLogin, setShowLogin }) => {
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
				<LoginForm showLoginForm={showLoginForm}></LoginForm>
				<RegisterForm showLoginForm={showLoginForm}></RegisterForm>
				<OverlayContainer
					showLoginForm={showLoginForm}
					setShowLoginForm={setShowLoginForm}
				></OverlayContainer>
			</motion.div>
		</Modal>
	);
};

export default LoginModal;
