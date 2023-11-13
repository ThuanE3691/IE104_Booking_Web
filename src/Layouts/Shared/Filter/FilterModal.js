import Modal from "@/Components/Feature/Layout/Modal";
import { motion } from "framer-motion";
import close from "@/Assets/Icons/Common/Feature/close.png";
import RangeSlider from "@/Components/Feature/Slider/RangeSlider";
import BarPlot from "@/Components/Feature/Plot/BarPlot";
import { useEffect } from "react";
import { SearchContext } from "@/Context/SearchContext";
import { useContext } from "react";
import formatNumber from "./../../../Utils/formatNumber";

const PriceFilter = ({ freqPrice, filters, SLIDER, filterMethod }) => {
	return (
		<section>
			<h3 className="text-xl font-semibold">Giá tiền (mỗi đêm)</h3>
			<div className="relative mx-12 mt-32 mb-16">
				<BarPlot
					freq={freqPrice}
					range={filters.price}
					maxRange={SLIDER.MAX_RANGE}
				></BarPlot>
				<RangeSlider
					range={filters.price}
					filterMethod={filterMethod}
					maxSlider={SLIDER.MAX_RANGE}
					minSlider={SLIDER.MIN_RANGE}
					step={70000}
				></RangeSlider>
			</div>
			<div className="flex items-center mx-12 font-vietnam-pro">
				<div className="px-3.5 py-1.5 transition-colors border-2 rounded-lg border-slate-200 focus-within:border-black">
					<p className="text-sm font-semibold select-none text-slate-400 mb-0.5">
						Giá thấp nhất
					</p>
					<div className="flex gap-x-1.5">
						<p className="select-none ">VND</p>
						<input
							type="text"
							className="w-64 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
							value={formatNumber(filters.price.min)}
						/>
					</div>
				</div>
				<div className="w-6 h-1 mx-8 rounded-lg bg-slate-200"></div>
				<div className="px-3.5 py-1.5 transition-colors border-2 rounded-lg border-slate-200 focus-within:border-black">
					<p className="text-sm font-semibold select-none text-slate-400 mb-0.5">
						Giá cao nhất
					</p>

					<div className="flex gap-x-1.5">
						<p className="select-none ">VND</p>
						<input
							type="text"
							className="w-64 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
							value={formatNumber(filters.price.max)}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

const modalVariants = {
	hidden: {
		y: "100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: "easeInOut",
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
};

const FilterModal = ({ isShowFilter, setShowFilter }) => {
	const stopPropagation = (event) => {
		event.stopPropagation();
	};

	const { filters, filterMethod, freqPrice, SLIDER } =
		useContext(SearchContext);

	useEffect(() => {
		filterMethod.setPrice(filterMethod.maxPrice, SLIDER.MAX_RANGE);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Modal isOpen={isShowFilter} onClose={() => setShowFilter(false)}>
			<motion.div
				className="px-8 py-4 bg-white min-w-[780px] rounded-xl "
				variants={modalVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				tabIndex="0"
				onClick={stopPropagation}
				key="filter-modal"
			>
				<header className="flex items-center justify-center text-2xl font-semibold">
					<h3 className="mx-auto">BỘ LỌC</h3>
					<button
						className="px-3 py-3 transition-colors translate-x-4 rounded-full hover:bg-slate-200 hover:cursor-pointer"
						onClick={() => setShowFilter(false)}
					>
						<img src={close} alt="" className="w-4 h-4 cursor-pointer" />
					</button>
				</header>
				<PriceFilter
					freqPrice={freqPrice}
					filterMethod={filterMethod}
					filters={filters}
					SLIDER={SLIDER}
				></PriceFilter>
			</motion.div>
		</Modal>
	);
};

export default FilterModal;
