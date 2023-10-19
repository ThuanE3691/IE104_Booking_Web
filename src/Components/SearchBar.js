import CalendarSVG from "@/Assets/Icons/SVG/CalendarSVG";
import NavigationSVG from "@/Assets/Icons/SVG/NavigationSVG";
import TravelerSVG from "@/Assets/Icons/SVG/TravelerSVG";
import SearchIconSVG from "@/Assets/Icons/SVG/SearchIconSVG";

const SearchBar = () => {
	return (
		<div className="absolute flex items-center justify-between gap-8 px-16 py-12 shadow-2xl bg-main-bg -bottom-16 inset-x-16 font-vietnam-pro rounded-2xl flex-nowrap">
			<div className="flex items-start gap-3">
				<NavigationSVG className="w-5 h-5 mt-1 -rotate-90 cursor-pointer fill-current text-sub-text"></NavigationSVG>
				<div className="cursor-pointer">
					<p className="text-2xl font-semibold">Địa điểm</p>
					<p className="text-sm text-sub-text">Nơi bạn muốn đến </p>
				</div>
			</div>
			<div className="flex items-start gap-3">
				<CalendarSVG className="w-5 h-5 mt-1 cursor-pointer fill-current text-sub-text"></CalendarSVG>
				<div className="cursor-pointer">
					<p className="text-2xl font-semibold">Nhận phòng</p>
					<p className="text-sm text-sub-text">Thời gian nhận phòng</p>
				</div>
			</div>
			<div className="flex items-start gap-3">
				<CalendarSVG className="w-5 h-5 mt-1 cursor-pointer fill-current text-sub-text"></CalendarSVG>
				<div className="cursor-pointer">
					<p className="text-2xl font-semibold">Trả phòng</p>
					<p className="text-sm text-sub-text">Thời gian trả phòng</p>
				</div>
			</div>
			<div className="flex items-start gap-3">
				<TravelerSVG className="w-6 h-6 cursor-pointer fill-current text-sub-text"></TravelerSVG>
				<div className="cursor-pointer">
					<p className="text-2xl font-semibold">Hành khách</p>
					<p className="text-sm text-sub-text">Thêm số lượng hành khách</p>
				</div>
			</div>
			<button className=" bg-[#3b71fe] p-4 rounded-full">
				<SearchIconSVG className="w-5 h-5 text-white fill-current"></SearchIconSVG>
			</button>
		</div>
	);
};

export default SearchBar;
