import Modal from "@/Components/Feature/Layout/Modal";
import { motion } from "framer-motion";
import close from "@/Assets/Icons/Common/Feature/close.png";
import { useEffect } from "react";
import { SearchContext } from "@/Context/SearchContext";
import { useContext } from "react";
import PriceFilter from "./PriceFilter";
import StarRating from "./StarRating";

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
				<StarRating
					rating={filters.rating}
					setRating={filterMethod.setRating}
				></StarRating>
			</motion.div>
		</Modal>
	);
};

export default FilterModal;
