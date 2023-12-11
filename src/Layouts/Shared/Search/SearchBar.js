import SearchIconSVG from "@SVGComponent/SearchBar/SearchIconSVG";
import LocationTab from "./LocationTab";
import DatePickerTab from "./DatePickerTab";
import classNames from "@/Utils/classNames";
import config from "@/Config";
import { motion } from "framer-motion";
import { ConfigContext } from "@/Context/ConfigContext";
import { useContext, useEffect, useState } from "react";
import GuestTab from "./GuestTab";
import { QueryContext } from "@/Context/QueryContext";
import Tooltip from "@/Components/Layout/Tooltip";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ overrides }) => {
	const navigate = useNavigate();
	const { saveScrollHistory } = useContext(ConfigContext);
	const { saveToStorage, showOffAll, checkFillForm } = useContext(QueryContext);

	const [notFillForm, setFillForm] = useState(false);

	const handleOnClick = () => {
		setFillForm(true);

		if (!checkFillForm()) return;

		setFillForm(false);

		showOffAll();
		saveToStorage();
		saveScrollHistory({ x: 0, y: 0 });

		navigate(config.routes.search);
	};

	useEffect(() => {
		setFillForm(false);
	}, []);

	return (
		<motion.div
			className={classNames(
				"flex items-center justify-between px-8 py-6 shadow-2xl bg-gradient-to-tr from-main-bg from-70% font-nunito rounded-2xl flex-nowrap select-none z-10",
				overrides?.container
			)}
			layoutId="search-bar"
		>
			<LocationTab
				overrides={overrides?.locationTab}
				notFillForm={notFillForm}
			></LocationTab>
			<div className=" w-[1.5px] h-16 bg-sub-text"></div>
			<DatePickerTab
				overrides={overrides?.dateTab}
				notFillForm={notFillForm}
			></DatePickerTab>
			<GuestTab></GuestTab>
			<Tooltip text="Tìm kiếm ngay">
				<button
					className="p-4 transition-colors duration-200 rounded-full group bg-button-primary hover-button"
					onClick={handleOnClick}
				>
					<SearchIconSVG className="w-5 h-5 text-white fill-current group-hover:text-black"></SearchIconSVG>
				</button>
			</Tooltip>
		</motion.div>
	);
};

export default SearchBar;
