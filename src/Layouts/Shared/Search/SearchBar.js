import TravelerSVG from "@SVGComponent/SearchBar/TravelerSVG";
import SearchIconSVG from "@SVGComponent/SearchBar/SearchIconSVG";
import LocationTab from "./LocationTab";
import DatePickerTab from "./DatePickerTab";
import classNames from "@/Utils/classNames";
import config from "@/Config";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SearchBar = ({ overrides }) => {
	return (
		<motion.div
			className={classNames(
				"flex items-center justify-between px-8 py-6 shadow-2xl bg-gradient-to-tr from-main-bg from-70% font-nunito rounded-2xl flex-nowrap select-none",
				overrides?.container
			)}
			layoutId="search-bar"
		>
			<LocationTab overrides={overrides?.locationTab}></LocationTab>
			<div className=" w-[1.5px] h-16 bg-sub-text"></div>
			<DatePickerTab overrides={overrides?.dateTab}></DatePickerTab>
			<div className="flex items-start gap-3 px-3 py-4 transition-all duration-300 cursor-pointer hover:shadow-2xl rounded-2xl">
				<TravelerSVG className="cursor-pointer fill-current w-7 h-7 text-sub-text"></TravelerSVG>
				<div className="cursor-pointer">
					<p className="text-xl font-bold">Hành khách</p>
					<p className="text-sm text-sub-text">Thêm số lượng hành khách</p>
				</div>
			</div>
			<Link to={config.routes.search}>
				<button className="p-4 transition-colors duration-200 rounded-full group bg-button-primary hover-button">
					<SearchIconSVG className="w-5 h-5 text-white fill-current group-hover:text-black"></SearchIconSVG>
				</button>
			</Link>
		</motion.div>
	);
};

export default SearchBar;
