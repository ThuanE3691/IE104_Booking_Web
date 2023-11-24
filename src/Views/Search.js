import SearchBar from "@/Layouts/Shared/Search/SearchBar";
// import SideBar from "@/Layouts/Shared/Sidebar/Sidebar";
import { useContext, useState } from "react";
import FilterModal from "@/Layouts/Shared/Filter/FilterModal";
import map_bg from "@/Assets/Images/Others/map.png";
import LocationSVG from "@SVGComponent/Shared/LocationSVG";
import filter from "@IconCommon/Feature/filter.png";
import SelectorSearch from "@/Layouts/Site/Search/SelectorSearch";
import { SearchContext } from "@/Context/SearchContext";
import FiltersArea from "@/Layouts/Site/Search/FiltersArea";
import PropertyCard from "@/Components/Layout/PropertyCard";
import hotelData from "@/Data/HCM_hotels_search.json";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

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
	const [sortOption, setSortOption] = useState("Độ phổ biến");
	const { filters, filtersMethod } = useContext(SearchContext);

	const handleShowFilter = (event) => {
		event.stopPropagation();
		setShowFilter(true);
	};

	return (
		<>
			<div className="flex flex-col w-full min-h-full px-32 py-8 bg-main-bg mb-96 font-vietnam-pro">
				<SearchBar overrides={styleSearchBar}></SearchBar>

				<FilterModal
					isShowFilter={isShowFilter}
					setShowFilter={setShowFilter}
				></FilterModal>

				<div className="flex items-center mt-8">
					<div
						className=" w-[calc(544px*2/3)] h-[calc(96px+48px)] bg-no-repeat bg-cover flex items-center justify-center rounded-xl shadow-xl bg-center"
						style={{ backgroundImage: `url(${map_bg}` }}
					>
						<button className="flex items-center gap-2.5 px-5 py-1.5 font-semibold transition-colors bg-white border border-black rounded-lg text-sm hover:bg-button-primary hover:text-white group">
							<LocationSVG className="w-4 h-4 fill-current group-hover:text-white" />
							Xem trên bản đồ
						</button>
					</div>
					<div className="flex flex-col w-full">
						<div className="flex items-center">
							<div className="flex ml-8 gap-y-2">
								<p>
									Tìm được <span className="font-semibold">3200</span> chỗ nghỉ
								</p>
							</div>
							<div className="flex items-center ml-auto mr-4 gap-x-2">
								<span>Sắp xếp theo</span>
								<SelectorSearch
									sortOption={sortOption}
									setSortOption={setSortOption}
								></SelectorSearch>
							</div>
							<button
								className="px-2 py-2 bg-white border-2 rounded-lg border-slate-200 h-fit drop-shadow-lg "
								onClick={handleShowFilter}
							>
								<img src={filter} alt="" className="w-5 h-5" />
							</button>
						</div>
						<FiltersArea
							filters={filters}
							filtersMethod={filtersMethod}
						></FiltersArea>
					</div>
				</div>
				<motion.section
					className="flex flex-col mt-8 gap-y-8"
					variants={container}
					initial="hidden"
					animate="show"
				>
					{hotelData.result.map((hotel, index) => {
						return <PropertyCard hotel={hotel} variants={item}></PropertyCard>;
					})}
				</motion.section>
			</div>
		</>
	);
};

export default Search;
