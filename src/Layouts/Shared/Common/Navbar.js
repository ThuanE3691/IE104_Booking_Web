/* eslint-disable no-unused-vars */
import CurrencySVG from "@SVGComponent/Navbar/CurrencySVG";
import language_icon from "@IconCommon/Feature/internet.png";
import logo from "@IconCommon/Logo/travor.png";
import dark_mode from "@IconCommon/Feature/night-mode.png";
// import partners from "@IconCommon/Static/partners.png";
import light_mode from "@IconCommon/Feature/sun.png";
import user from "@IconCommon/Feature/user.png";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "@/Config";
import CaretDownSVG from "@/Assets/Icons/SVGComponent/Navbar/CaretDownSVG";
import avatar from "@/Assets/Images/User/avatar_1.jpg";
import LogOutSVG from "@/Assets/Icons/SVGComponent/Navbar/LogOutSVG";
import PartnersSVG from "@/Assets/Icons/SVGComponent/Navbar/PartnersSVG";
import EditSVG from "@/Assets/Icons/SVGComponent/Navbar/EditSVG";
import InformationSVG from "@/Assets/Icons/SVGComponent/Navbar/InformationSVG";
import PointSVG from "@/Assets/Icons/SVGComponent/Navbar/PointSVG";
import LoginModal from "../Login/LoginModal";

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

const DarkModeButton = ({ darkMode, setDarkMode }) => {
	return (
		<div
			data-ison={darkMode}
			className="flex items-center w-12 h-6 px-1 py-1 cursor-pointer justify-start select-none bg-slate-200 rounded-2xl data-[ison=true]:justify-end relative"
			onClick={() => setDarkMode(!darkMode)}
		>
			<motion.div
				className="relative z-10 w-4 h-full bg-white rounded-full"
				transition={spring}
				layout
			></motion.div>
			<img
				src={dark_mode}
				alt=""
				className="absolute z-0 w-3 h-3 ml-auto mr-1 right-1"
			/>
			<img
				src={light_mode}
				alt=""
				className="absolute z-0 w-3 h-3 ml-1 ml-auto left-1"
			/>
		</div>
	);
};

const UserService = ({ handleLogOut }) => {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<motion.section
			className="absolute top-0 translate-y-16 -left-12 rounded-xl min-w-[200px] px-4 py-3 bg-white z-50 drop-shadow-2xl font-inter cursor-default"
			onClick={(e) => e.stopPropagation()}
			key="user-service"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<ul className="flex flex-col gap-1.5">
				<li className="mb-1 font-semibold">Tài khoản của tôi</li>
				<li className="flex gap-2 text-sm transition-colors cursor-pointer hover:text-text-primary w-fit">
					<EditSVG className="w-4 h-4 fill-current group-hover:text-text-primary"></EditSVG>
					Chỉnh sửa hồ sơ
				</li>
				<li className="flex gap-2 text-sm transition-colors cursor-pointer hover:text-text-primary w-fit">
					<InformationSVG className="w-4 h-4 fill-current group-hover:text-text-primary"></InformationSVG>
					Chỗ ở của tôi
				</li>
				<li className="flex gap-2 text-sm transition-colors cursor-pointer hover:text-text-primary w-fit">
					<PointSVG className="w-4 h-4 fill-current group-hover:text-text-primary"></PointSVG>
					Điểm thưởng
				</li>
				<li className="flex items-center gap-2 text-sm transition-colors cursor-pointer hover:text-text-primary group">
					<PartnersSVG className="w-4 h-4 fill-current group-hover:text-text-primary"></PartnersSVG>
					Trở thành đối tác
				</li>
			</ul>
			<div className="w-full h-0.5 bg-slate-200 rounded my-2"></div>
			<ul className="flex flex-col gap-1.5">
				<li className="mb-1 font-semibold">Cài đặt của tôi</li>
				<li className="flex items-center gap-2 text-sm transition-colors cursor-pointer hover:text-text-primary w-fit">
					<img src={language_icon} alt="" className="w-4 h-4" />
					Tiếng Việt
				</li>
				<li className="flex items-center gap-2 text-sm transition-colors cursor-pointer hover:text-text-primary w-fit">
					<CurrencySVG className="w-4 h-4 "></CurrencySVG>
					Tiền tệ: VNĐ
				</li>
				<li className="flex items-center gap-2 text-sm transition-colors cursor-pointer hover:text-text-primary w-fit">
					<span>Chế độ </span>
					<DarkModeButton
						darkMode={darkMode}
						setDarkMode={setDarkMode}
					></DarkModeButton>
				</li>
			</ul>
			<div
				className="flex items-center justify-center gap-2 px-2 py-2 mt-3 mb-2 font-semibold transition-colors rounded-lg cursor-pointer hover:bg-button-primary hover:text-white bg-slate-200 group"
				onClick={handleLogOut}
			>
				<LogOutSVG className="w-5 h-5 fill-current group-hover:text-white"></LogOutSVG>
				Đăng xuất
			</div>
		</motion.section>
	);
};

const Navbar = () => {
	const [showLogin, setShowLogin] = useState(false);
	const [isLogin, setLogin] = useState(false);
	const [showService, setShowService] = useState(false);

	const handleShowLogin = () => {
		setShowLogin(true);
	};

	const handleLogin = () => {
		setShowLogin(false);
		localStorage.setItem("isLogin", "true");
		setLogin(true);
	};

	const handleLogOut = () => {
		localStorage.setItem("isLogin", "false");
		setShowService(false);
		setLogin(false);
	};

	useEffect(() => {
		const loginState = localStorage.getItem("isLogin");
		if (loginState === "true") handleLogin();
		else handleLogOut();
	}, []);

	return (
		<>
			<motion.header
				className="z-10 flex flex-row items-center w-full gap-8 pt-4 bg-white px-52 font-vietnam-pro"
				layoutId="navbar"
			>
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
						{isLogin && (
							<div
								className="relative flex items-center gap-3 cursor-pointer "
								onClick={() => setShowService(!showService)}
							>
								<img
									src={avatar}
									alt=""
									className="object-contain w-10 h-10 rounded-full"
								/>
								<span className="font-semibold">Anh Thư</span>
								<CaretDownSVG
									className={`w-3 h-3 transition-[transform] ${
										!showService ? "rotate-0" : "rotate-180"
									}`}
								></CaretDownSVG>

								<AnimatePresence>
									{showService && (
										<UserService handleLogOut={handleLogOut}></UserService>
									)}
								</AnimatePresence>
							</div>
						)}

						{!isLogin && (
							<div className="flex items-center gap-2">
								<button className="px-4 py-2 font-semibold transition-colors duration-200 hover-button rounded-xl">
									Đăng ký
								</button>
								<button
									className="px-4 py-2 font-semibold text-white transition-colors bg-button-primary rounded-xl hover-button"
									onClick={handleShowLogin}
								>
									Đăng nhập
								</button>
							</div>
						)}
					</div>
				</nav>
			</motion.header>
			<LoginModal
				isShowLogin={showLogin}
				setShowLogin={setShowLogin}
				handleLogIn={handleLogin}
			></LoginModal>
		</>
	);
};

export default Navbar;
