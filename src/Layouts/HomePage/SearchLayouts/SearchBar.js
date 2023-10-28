import TravelerSVG from "@/Assets/Icons/SVG/TravelerSVG";
import SearchIconSVG from "@/Assets/Icons/SVG/SearchIconSVG";
import LocationTab from "./LocationTab";
import DatePickerTab from "./DatePickerTab";

const SearchBar = () => {
	return (
		<div className="absolute flex items-center justify-between px-8 py-6 shadow-2xl bg-gradient-to-tr from-main-bg from-70% -bottom-16 inset-x-16 font-nunito rounded-2xl flex-nowrap select-none">
			<LocationTab></LocationTab>
			<div className=" w-[1.5px] h-16 bg-sub-text"></div>
			<DatePickerTab></DatePickerTab>
			<div className="flex items-start gap-3 px-3 py-4 transition-all duration-300 cursor-pointer hover:shadow-2xl rounded-2xl">
				<TravelerSVG className="cursor-pointer fill-current w-7 h-7 text-sub-text"></TravelerSVG>
				<div className="cursor-pointer">
					<p className="text-xl font-bold">Hành khách</p>
					<p className="text-sm text-sub-text">Thêm số lượng hành khách</p>
				</div>
			</div>
			<button className="p-4 transition-colors duration-200 rounded-full group bg-button-primary hover-button">
				<SearchIconSVG className="w-5 h-5 text-white fill-current group-hover:text-black"></SearchIconSVG>
			</button>
		</div>
	);
};

export default SearchBar;
