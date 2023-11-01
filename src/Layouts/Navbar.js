import CurrencySVG from "@/Assets/Icons/SVG/Navbar/CurrencySVG";
import language_icon from "@/Assets/Icons/internet.png";
import logo from "@/Assets/Icons/travel.png";
import dark_mode from "@/Assets/Icons/night-mode.png";
import partners from "@/Assets/Icons/partners.png";
import light_mode from "@/Assets/Icons/sun.png";
import { motion } from "framer-motion";
import { useState } from "react";

const spring = {
	type: "spring",
	stiffness: 700,
	damping: 30,
};

const Navbar = () => {
	const [onDarkMode, setOnDarkMode] = useState(false);
	return (
		<header className="flex flex-row items-center gap-8 px-32 mt-4 font-vietnam-pro">
			<nav className="flex flex-col w-full">
				<ul className="flex items-center">
					<li className="flex items-center gap-6">
						<div className="flex items-center gap-1 cursor-pointer">
							<img src={language_icon} alt="" className="w-5 h-5" />
							<p>Tiếng Việt</p>
						</div>
						<div className="flex items-center gap-2 cursor-pointer">
							{/* <img src={currency} alt="" className="w-5 h-5" /> */}
							<CurrencySVG className="w-5 h-5"></CurrencySVG>
							<p>VNĐ</p>
						</div>

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
					</li>
					<li className="flex items-center gap-6 ml-auto">
						<button className="px-4 py-2 font-semibold transition-colors hover-button rounded-xl">
							Đăng nhập
						</button>
						<button className="px-4 py-2 font-semibold text-white transition-colors bg-button-primary rounded-xl hover-button">
							Đăng ký
						</button>
					</li>
				</ul>
				<div className="w-full h-0.5 my-3 bg-slate-200 rounded-md" />
				<ul className="flex items-center gap-8 text-xl">
					<li>
						<figure className="flex flex-col items-center cursor-pointer">
							<img src={logo} alt="Logo" className="w-10 h-10" />
							<figcaption className="mt-1 text-lg font-semibold text-blue-600">
								Travel
							</figcaption>
						</figure>
					</li>
					<li className="font-medium transition-colors cursor-pointer hover:text-text-primary">
						Về chúng tôi
					</li>
					<li className="font-medium transition-colors cursor-pointer hover:text-text-primary">
						Liên hệ
					</li>
					<li className="flex items-center gap-3 ml-auto cursor-pointer group">
						<img src={partners} alt="" className="w-8 h-8" />
						<p className="font-semibold transition-colors group-hover:text-text-primary">
							Trở thành đối tác
						</p>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
