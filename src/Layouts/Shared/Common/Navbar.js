import CurrencySVG from "@SVGComponent/Navbar/CurrencySVG";
import language_icon from "@IconCommon/Feature/internet.png";
import logo from "@IconCommon/Logo/travel.png";
import dark_mode from "@IconCommon/Feature/night-mode.png";
// import partners from "@IconCommon/Static/partners.png";
import light_mode from "@IconCommon/Feature/sun.png";
import { motion } from "framer-motion";
import { useState } from "react";

const spring = {
	type: "spring",
	stiffness: 700,
	damping: 30,
};

const Logo = () => {
	return (
		<figure className="flex flex-col items-center cursor-pointer">
			<img src={logo} alt="Logo" className="w-10 h-10" />
			<figcaption className="mt-1 text-lg font-semibold text-blue-600">
				Travel
			</figcaption>
		</figure>
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
	const [onDarkMode, setOnDarkMode] = useState(false);
	return (
		<header className="flex flex-row items-center gap-8 px-32 mt-4 font-vietnam-pro">
			<Logo></Logo>
			<nav className="flex items-center w-full">
				<div className="flex items-center gap-10 ml-12">
					<span className="text-lg font-medium transition-colors cursor-pointer hover:text-text-primary">
						Về chúng tôi
					</span>
					<span className="text-lg font-medium transition-colors cursor-pointer hover:text-text-primary">
						Liên hệ
					</span>
				</div>
				<div className="flex items-center gap-6 ml-auto">
					<div className="flex items-center gap-1 cursor-pointer">
						<img src={language_icon} alt="" className="w-5 h-5" />
						<p>Tiếng Việt</p>
					</div>
					<div className="flex items-center gap-2 cursor-pointer">
						<CurrencySVG className="w-5 h-5"></CurrencySVG>
						<p>VNĐ</p>
					</div>
					<DarkModeButton
						onDarkMode={onDarkMode}
						setOnDarkMode={setOnDarkMode}
					></DarkModeButton>
				</div>
				<div className="flex items-center gap-6 ml-auto">
					<button className="px-4 py-2 font-semibold transition-colors hover-button rounded-xl">
						Đăng nhập
					</button>
					<button className="px-4 py-2 font-semibold text-white transition-colors bg-button-primary rounded-xl hover-button">
						Đăng ký
					</button>
				</div>

				{/* <li className="flex items-center gap-3 ml-auto cursor-pointer group">
					<img src={partners} alt="" className="w-8 h-8" />
					<p className="font-semibold transition-colors group-hover:text-text-primary">
						Trở thành đối tác
					</p>
				</li> */}
			</nav>
		</header>
	);
};

export default Navbar;
