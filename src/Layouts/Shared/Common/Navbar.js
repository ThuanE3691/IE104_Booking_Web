/* eslint-disable no-unused-vars */
import CurrencySVG from "@SVGComponent/Navbar/CurrencySVG";
import language_icon from "@IconCommon/Feature/internet.png";
import logo from "@IconCommon/Logo/travor.png";
import dark_mode from "@IconCommon/Feature/night-mode.png";
// import partners from "@IconCommon/Static/partners.png";
import light_mode from "@IconCommon/Feature/sun.png";
import user from "@IconCommon/Feature/user.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import config from "@/Config";
import CaretDownSVG from "@/Assets/Icons/SVGComponent/Navbar/CaretDownSVG";

const spring = {
	type: "spring",
	stiffness: 700,
	damping: 30,
};

const Logo = () => {
	return (
		<Link to={config.routes.home}>
			<figure className="flex flex-col items-center cursor-pointer">
				<img src={logo} alt="Logo" className="h-24 w-28" />
			</figure>
		</Link>
	);
};

const DarkModeButton = ({ onDarkMode, setOnDarkMode }) => {
	return (
		<div
			data-ison={onDarkMode}
			className="flex items-center w-16 h-8 px-1 py-1 cursor-pointer justify-start select-none bg-slate-200 rounded-2xl data-[ison=true]:justify-end relative"
			onClick={() => setOnDarkMode(!onDarkMode)}
		>
			<motion.div
				className="relative z-10 w-6 h-full bg-white rounded-full"
				transition={spring}
				layout
			></motion.div>
			<img
				src={dark_mode}
				alt=""
				className="absolute z-0 w-4 h-4 ml-auto mr-1 right-1"
			/>
			<img
				src={light_mode}
				alt=""
				className="absolute z-0 w-4 h-4 ml-1 ml-auto left-1"
			/>
		</div>
	);
};

const Navbar = () => {
	const [showLogin, setShowLogin] = useState(false);
	return (
		<header className="flex flex-row items-center gap-8 mt-4 px-52 font-vietnam-pro">
			<Logo></Logo>
			<nav className="flex items-center w-full">
				<div className="flex items-center gap-12 ml-auto">
					<span className="text-lg font-medium transition-colors cursor-pointer hover:text-text-primary">
						Dịch vụ
					</span>
					<span className="text-lg font-medium transition-colors cursor-pointer hover:text-text-primary">
						Về chúng tôi
					</span>
					<span className="text-lg font-medium transition-colors cursor-pointer hover:text-text-primary">
						Liên hệ
					</span>
				</div>
				<div className="flex items-center ml-auto gap-7">
					<div className="flex items-center gap-2">
						<div className="flex items-center gap-2 px-2 py-2 transition-colors rounded-full cursor-pointer hover:bg-slate-200">
							<img src={language_icon} alt="" className="w-5 h-5" />
						</div>
						<div className="flex items-center gap-2 px-2 py-2 transition-colors rounded-full cursor-pointer hover:bg-slate-200">
							<CurrencySVG className="w-5 h-5 "></CurrencySVG>
						</div>
					</div>

					{/* <div
						className="relative flex items-center gap-3 cursor-pointer"
						onClick={() => setShowLogin(!showLogin)}
					>
						<img src={user} alt="" className="w-8 h-8" />
						<CaretDownSVG
							className={`w-3 h-3 transition-all ${
								showLogin ? "rotate-0" : "rotate-180"
							}`}
						></CaretDownSVG>

						{showLogin && <section className="absolute"></section>}
					</div> */}

					{/* <DarkModeButton
						onDarkMode={onDarkMode}
						setOnDarkMode={setOnDarkMode}
					></DarkModeButton> */}
					<div className="flex items-center gap-2">
						<button className="px-4 py-2 font-semibold transition-colors duration-200 hover-button rounded-xl">
							Đăng ký
						</button>
						<button className="px-4 py-2 font-semibold text-white transition-colors bg-button-primary rounded-xl hover-button">
							Đăng nhập
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
