import CurrencySVG from "@/Assets/Icons/SVG/CurrencySVG";
import DarkModeSVG from "@/Assets/Icons/SVG/DarkModeSVG";

import vnimg from "@/Assets/Images/vietnam.png";
// flex flex-row mx-14 gap-x-5
const Navbar = () => {
	return (
		<div className="flex flex-row items-center mx-14 font-vietnam-pro">
			<div className="flex flex-row gap-x-8">
				<div className="text-center cursor-pointer w-36">Logo</div>
				<div className="text-center transition-all cursor-pointer hover:text-text-primary hover:font-semibold">
					Về chúng tôi
				</div>
				<div className="text-center transition-all cursor-pointer hover:text-text-primary hover:font-semibold">
					Liên hệ
				</div>
				<div className="ml-3 font-bold text-center transition-all cursor-pointer hover:text-text-primary">
					Trở Thành Đối Tác
				</div>
			</div>

			<div className="flex flex-row items-center justify-between w-2/5 ml-auto">
				<div className="flex flex-row gap-x-1.5">
					<div className="mx-3 cursor-pointer fill-current w-9 h-9 hover:text-slate-500">
						<DarkModeSVG></DarkModeSVG>
					</div>
					<div className="flex flex-row items-center gap-x-2 ">
						<img src={vnimg} alt="Vietnam" className="cursor-pointer h-9 w-9" />
						<div className="w-0.5 h-6 mx-2.5 bg-black"></div>
						<CurrencySVG className="h-6 cursor-pointer fill-current hover:text-slate-500"></CurrencySVG>
					</div>
				</div>

				<div className="flex flex-row gap-x-2">
					<div className="px-3 py-2 m-1 font-semibold text-center transition-colors bg-white cursor-pointer hover:text-text-primary ">
						Đăng nhập
					</div>
					<div className="px-3 py-2 m-1 font-semibold text-center text-white transition-colors rounded-lg cursor-pointer bg-button-primary hover:bg-slate-200 hover:text-black hover:border-black ">
						Đăng ký
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
