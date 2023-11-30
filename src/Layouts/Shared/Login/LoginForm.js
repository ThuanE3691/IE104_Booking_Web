import { motion } from "framer-motion";
import Facebook from "@IconCommon/Brands/facebook.png";
import Google from "@IconCommon/Brands/google.png";
import Instagram from "@IconCommon/Brands/instagram.png";

const LoginForm = ({ showLoginForm, handleLogIn }) => {
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
			<button
				className="px-6 py-2 mt-[72px] text-lg font-semibold text-white transition-colors rounded-xl bg-button-primary hover-button"
				onClick={handleLogIn}
			>
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

export default LoginForm;
