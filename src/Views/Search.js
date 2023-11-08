import SearchBar from "@/Layouts/Shared/Search/SearchBar";
// import SideBar from "@/Layouts/Shared/Sidebar/Sidebar";
import { useState } from "react";
import FilterModal from "@/Layouts/Shared/Filter/FilterModal";
import map_bg from "@/Assets/Images/Others/map.png";
import LocationSVG from "@SVGComponent/Shared/LocationSVG";
import filter from "@IconCommon/Feature/filter.png";

const Search = () => {
	const styleSearchBar = {
		container: "relative",
		locationTab: {
			yPosition: -125,
			isOnTop: false,
		},
		dateTab: {
			defaultTop: "110%",
			defaultPosition: "left-[370px]",
		},
	};

	const [isShowFilter, setShowFilter] = useState(false);

	const handleShowFilter = (event) => {
		event.stopPropagation();
		setShowFilter(true);
	};

	return (
		<>
			<div className="flex flex-col w-full min-h-full px-32 py-8 bg-main-bg mb-96">
				<SearchBar overrides={styleSearchBar}></SearchBar>

				<FilterModal
					isShowFilter={isShowFilter}
					setShowFilter={setShowFilter}
				></FilterModal>

				<div className="flex items-center mt-8">
					<div
						className=" w-[calc(544px*1/2)] h-[calc(96px*1/2)] bg-no-repeat bg-contain flex items-center justify-center rounded-xl shadow-xl"
						style={{ backgroundImage: `url(${map_bg}` }}
					>
						<button className="flex items-center gap-2.5 px-5 py-1.5 font-semibold transition-colors bg-white border border-black rounded-lg text-sm hover:bg-button-primary hover:text-white group">
							<LocationSVG className="w-4 h-4 fill-current group-hover:text-white" />
							Xem trên bản đồ
						</button>
					</div>
					<div className="flex items-center ml-8">
						<span>Sắp xếp theo</span>
						<select className="px-4 py-2 bg-white">
							<option>Giá tiền</option>
							<option>Đánh giá của khách</option>
							<option>Được gợi ý</option>
						</select>
						<p className="ml-4">
							Tìm được <span className="font-semibold">3200</span> chỗ nghỉ
						</p>
					</div>
					<button
						className="px-2 py-2 ml-auto bg-white border-2 border-slate-200 h-fit "
						onClick={handleShowFilter}
					>
						<img src={filter} alt="" className="w-5 h-5" />
					</button>
				</div>
			</div>
		</>
	);
};

export default Search;
