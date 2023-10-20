import CalendarSVG from "@/Assets/Icons/SVG/CalendarSVG";
import NavigationSVG from "@/Assets/Icons/SVG/NavigationSVG";
import TravelerSVG from "@/Assets/Icons/SVG/TravelerSVG";
import SearchIconSVG from "@/Assets/Icons/SVG/SearchIconSVG";
import Selector from "../../Components/Selector";
import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";

const SearchBar = () => {
	const ref = useRef(null);

	const [location, setLocation] = useState({
		active: false,
		content: "",
	});

	const handleSelectLocation = (locationSelected) => {
		setLocation({
			...location,
			active: false,
			content: locationSelected,
		});
	};

	const onChangeLocation = (event) => {
		setLocation({
			...location,
			content: event.target.value,
			active: true,
		});
	};

	return (
		<div className="absolute flex items-center justify-between p-8 shadow-2xl bg-gradient-to-tr from-main-bg from-70% -bottom-16 inset-x-16 font-vietnam-pro rounded-2xl flex-nowrap">
			<div
				className={`relative flex items-start gap-3 px-2 py-8 transition-all duration-300 cursor-pointer hover:shadow-2xl rounded-2xl ${
					location.active && "shadow-2xl"
				}`}
			>
				<NavigationSVG className="w-6 h-6 mt-1 -rotate-90 cursor-pointer fill-current text-sub-text"></NavigationSVG>
				<AnimatePresence>
					{location.active && (
						<Selector handleSelectLocation={handleSelectLocation}></Selector>
					)}
				</AnimatePresence>
				<div className="cursor-pointer">
					<input
						className={`text-2xl w-56 font-semibold outline-none placeholder-inherit min-w-full`}
						placeholder="Địa điểm"
						ref={ref}
						onChange={onChangeLocation}
						value={location.content}
						onClick={() => setLocation({ ...location, active: true })}
					></input>
					<p className="text-sm text-sub-text">Nơi bạn muốn đến </p>
				</div>
			</div>

			<div className=" w-[1.5px] h-24 bg-sub-text"></div>

			<div className="flex items-start gap-3 px-3 py-8 transition-all duration-300 cursor-pointer hover:shadow-2xl rounded-2xl">
				<CalendarSVG className="w-6 h-6 mt-1 cursor-pointer fill-current text-sub-text"></CalendarSVG>
				<div className="cursor-pointer">
					<p className="text-2xl font-semibold">Nhận phòng</p>
					<p className="text-sm text-sub-text">Thời gian nhận phòng</p>
				</div>
			</div>
			<div className="flex items-start gap-3 px-3 py-8 transition-all duration-300 cursor-pointer hover:shadow-2xl rounded-2xl">
				<CalendarSVG className="w-6 h-6 mt-1 cursor-pointer fill-current text-sub-text"></CalendarSVG>
				<div className="cursor-pointer">
					<p className="text-2xl font-semibold">Trả phòng</p>
					<p className="text-sm text-sub-text">Thời gian trả phòng</p>
				</div>
			</div>
			<div className="flex items-start gap-3 px-3 py-8 transition-all duration-300 cursor-pointer hover:shadow-2xl rounded-2xl">
				<TravelerSVG className="cursor-pointer fill-current w-7 h-7 text-sub-text"></TravelerSVG>
				<div className="cursor-pointer">
					<p className="text-2xl font-semibold">Hành khách</p>
					<p className="text-sm text-sub-text">Thêm số lượng hành khách</p>
				</div>
			</div>
			<button className=" bg-[#3b71fe] p-4 rounded-full hover:opacity-60 transition-opacity duration-200">
				<SearchIconSVG className="w-5 h-5 text-white fill-current"></SearchIconSVG>
			</button>
		</div>
	);
};

export default SearchBar;
