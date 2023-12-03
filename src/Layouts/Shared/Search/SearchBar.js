import SearchIconSVG from "@SVGComponent/SearchBar/SearchIconSVG";
import LocationTab from "./LocationTab";
import DatePickerTab from "./DatePickerTab";
import classNames from "@/Utils/classNames";
import config from "@/Config";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ConfigContext } from "@/Context/ConfigContext";
import { useContext } from "react";
import GuestTab from "./GuestTab";
import { QueryContext } from "@/Context/QueryContext";

const SearchBar = ({ overrides }) => {
	const { saveScrollHistory } = useContext(ConfigContext);
	const { saveToStorage } = useContext(QueryContext);

	const handleOnClick = () => {
		saveToStorage();
		saveScrollHistory({ x: 0, y: 0 });
	};

	return (
		<motion.div
			className={classNames(
				"flex items-center justify-between px-8 py-6 shadow-2xl bg-gradient-to-tr from-main-bg from-70% font-nunito rounded-2xl flex-nowrap select-none z-10",
				overrides?.container
			)}
			layoutId="search-bar"
		>
			<LocationTab overrides={overrides?.locationTab}></LocationTab>
			<div className=" w-[1.5px] h-16 bg-sub-text"></div>
			<DatePickerTab overrides={overrides?.dateTab}></DatePickerTab>
			<GuestTab></GuestTab>
			<Link to={config.routes.search} onClick={handleOnClick}>
				<button className="p-4 transition-colors duration-200 rounded-full group bg-button-primary hover-button">
					<SearchIconSVG className="w-5 h-5 text-white fill-current group-hover:text-black"></SearchIconSVG>
				</button>
			</Link>
		</motion.div>
	);
};

export default SearchBar;
