import Modal from "@/Components/Feature/Layout/Modal";
import { motion } from "framer-motion";
import HotelImg from "@/Assets/Images/HotelType/CanHo.jpg";
import Facebook from "@IconCommon/Brands/facebook.png";
import Google from "@IconCommon/Brands/google.png";
import Instagram from "@IconCommon/Brands/instagram.png";

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

const LoginModal = ({ isShowLogin, setShowLogin }) => {
	const stopPropagation = (event) => {
		event.stopPropagation();
	};

	const handleShowOffModal = () => {
		setShowLogin(false);
	};
	return (
		<Modal isOpen={isShowLogin} onClose={handleShowOffModal}>
			<motion.div
				className="flex bg-white font-vietnam-pro "
				variants={modalVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				tabIndex="0"
				onClick={stopPropagation}
				key="filter-modal"
			>
				<div className="relative w-[524px] h-[544px] flex justify-center items-end">
					<img
						src={HotelImg}
						alt=""
						className="absolute object-cover w-[524px] h-[544px] z-0"
					/>
					<button className="relative z-10 px-6 py-2 text-lg font-semibold transition-colors bg-white -translate-y-[132px] text-text-primary rounded-xl hover:bg-text-primary hover:text-white h-fit w-fit">
						Đăng nhập
					</button>
				</div>
				<section className="flex flex-col items-center py-12 px-28">
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
				</section>
			</motion.div>
		</Modal>
	);
};

export default LoginModal;
