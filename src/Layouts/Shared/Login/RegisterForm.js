import Facebook from "@IconCommon/Brands/facebook.png";
import Google from "@IconCommon/Brands/google.png";
import Instagram from "@IconCommon/Brands/instagram.png";
import { motion } from "framer-motion";

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

export default RegisterForm;
