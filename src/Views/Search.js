import SearchBar from "@/Layouts/Shared/Search/SearchBar";
// import SideBar from "@/Layouts/Shared/Sidebar/Sidebar";
import { useContext, useEffect, useState } from "react";
import FilterModal from "@/Layouts/Shared/Filter/FilterModal";
import map_bg from "@/Assets/Images/Others/map.png";
import LocationSVG from "@SVGComponent/Shared/LocationSVG";
import filter from "@IconCommon/Feature/filter.png";
import SelectorSearch from "@/Layouts/Site/Search/SelectorSearch";
import { SearchContext } from "@/Context/SearchContext";
import FiltersArea from "@/Layouts/Site/Search/FiltersArea";
import PropertyCard from "@/Components/Layout/PropertyCard";
import hotelData from "@/Data/HCM_hotels.json";
import { AnimatePresence, motion } from "framer-motion";
import { ConfigContext } from "@/Context/ConfigContext";
import MapModal from "@/Layouts/Shared/Map/MapModal";
import { QueryContext } from "@/Context/QueryContext";

const container = {
	hidden: { opacity: 0 },
	show: (load) => ({
		opacity: 1,
		transition: {
			staggerChildren: load ? 0.1 : 0,
		},
	}),
};

const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
	duration: 0.2,
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
	const [showMap, setShowMap] = useState(false);
	const [sortOption, setSortOption] = useState("Độ phổ biến");
	const { filters, filtersMethod } = useContext(SearchContext);
	const { scrollHistory, saveScrollHistory } = useContext(ConfigContext);
	const { loadStorage } = useContext(QueryContext);

	const [currentPage, setCurrentPage] = useState(0);

	const handleShowFilter = (event) => {
		event.stopPropagation();
		setShowFilter(true);
	};

	const sorter = (a, b) => {
		switch (sortOption) {
			case "Độ phổ biến":
				return 0;
			case "Giá cao nhất":
				if (
					a.composite_price_breakdown.gross_amount_per_night.value >
					b.composite_price_breakdown.gross_amount_per_night.value
				)
					return -1;
				return 1;
			case "Giá thấp nhất":
				if (
					a.composite_price_breakdown.gross_amount_per_night.value <
					b.composite_price_breakdown.gross_amount_per_night.value
				)
					return -1;
				return 1;
			case "Điểm đánh giá":
				if (a.review_score > b.review_score) return -1;
				return 1;
			default:
				break;
		}
	};

	useEffect(() => {
		loadStorage();
	}, []);

	return (
		<div className="flex flex-col w-full min-h-full px-32 py-8 bg-main-bg mb-96 font-vietnam-pro">
			<SearchBar overrides={styleSearchBar}></SearchBar>

			<FilterModal
				isShowFilter={isShowFilter}
				setShowFilter={setShowFilter}
			></FilterModal>

			<MapModal
				showMap={showMap}
				setShowMap={setShowMap}
				properties={hotelData[currentPage]}
			></MapModal>

			<div className="flex items-center mt-8">
				<div
					className=" w-[calc(544px*2/3)] h-[calc(96px+48px)] bg-no-repeat bg-cover flex items-center justify-center rounded-xl shadow-xl bg-center"
					style={{ backgroundImage: `url(${map_bg}` }}
				>
					<button
						className="flex items-center gap-2.5 px-5 py-1.5 font-semibold transition-colors bg-white border border-black rounded-lg text-sm hover:bg-button-primary hover:text-white group"
						onClick={() => setShowMap(true)}
					>
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
				custom={scrollHistory.y === 0}
			>
				<AnimatePresence>
					{hotelData[currentPage].sort(sorter).map((hotel, index) => {
						return (
							<PropertyCard
								hotel={hotel}
								variants={item}
								key={hotel.hotel_id}
								saveScrollHistory={saveScrollHistory}
								index={index}
								page={currentPage}
							></PropertyCard>
						);
					})}
				</AnimatePresence>
			</motion.section>
			<div className="flex items-center justify-center mt-8 gap-x-6">
				{[...Array(10)].map((v, index) => (
					<button
						className="flex items-center justify-center text-black transition-colors bg-white rounded-md shadow-lg h-9 w-9 hover:bg-button-primary hover:text-white"
						key={index}
						onClick={() => setCurrentPage(index % hotelData.length)}
					>
						{index + 1}
					</button>
				))}
			</div>
		</div>
	);
};

export default Search;
