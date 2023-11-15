import Modal from "@/Components/Feature/Layout/Modal";
import { motion } from "framer-motion";
import close from "@/Assets/Icons/Common/Feature/close.png";
import { useEffect } from "react";
import { SearchContext } from "@/Context/SearchContext";
import { useContext } from "react";
import PriceFilter from "./PriceFilter";
import StarRating from "./StarRating";
import TypeSelect from "./TypeSelect";
import ServiceSelect from "./ServiceSelect";

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

	const handleShowOffModal = () => {
		setShowFilter(false);
	};

	return (
		<Modal isOpen={isShowFilter} onClose={handleShowOffModal}>
			<motion.div
				className="bg-white min-w-[780px] rounded-xl "
				variants={modalVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				tabIndex="0"
				onClick={stopPropagation}
				key="filter-modal"
			>
				<header className="flex items-center justify-center py-4 text-2xl font-semibold border-b-2">
					<h3 className="mx-auto">BỘ LỌC</h3>
					<button
						className="px-3 py-3 mr-4 transition-colors rounded-full hover:bg-slate-200 hover:cursor-pointer"
						onClick={() => setShowFilter(false)}
					>
						<img src={close} alt="" className="w-4 h-4 cursor-pointer" />
					</button>
				</header>
				<div className="px-8 py-8 h-[500px] overflow-y-scroll overflow-x-hidden ">
					<PriceFilter
						freqPrice={freqPrice}
						filterMethod={filterMethod}
						filters={filters}
						SLIDER={SLIDER}
					></PriceFilter>
					<StarRating
						rating={filters.rating}
						setRating={filterMethod.setRating}
					></StarRating>
					<TypeSelect
						selected={filters.selected}
						setSelected={filterMethod.setSelected}
					></TypeSelect>
					<ServiceSelect></ServiceSelect>
				</div>
				<footer className="flex items-center w-full py-4 border-t-2 font-vietnam-pro">
					<span className="relative ml-8 font-semibold cursor-pointer underline_element after:bg-black hover:after:w-full ">
						Xóa bộ lọc
					</span>
					<button
						className="px-4 py-2 ml-auto mr-8 font-semibold text-white transition-colors hover:text-black hover:bg-slate-200 rounded-xl bg-button-primary"
						onClick={handleShowOffModal}
					>
						Hiện 900 chỗ nghỉ
					</button>
				</footer>
			</motion.div>
		</Modal>
	);
};

export default FilterModal;
