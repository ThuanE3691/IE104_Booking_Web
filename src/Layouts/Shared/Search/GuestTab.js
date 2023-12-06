import TravelerSVG from "@SVGComponent/SearchBar/TravelerSVG";
import { FaPlus, FaMinus } from "react-icons/fa";
import { QueryContext } from "@/Context/QueryContext";
import { Fragment, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CountBox = ({ name, value, handleChangeValue }) => {
	return (
		<div className="flex items-center justify-center px-2 py-1 border-2 rounded-md w-28 border-slate-200 gap-x-6">
			<FaPlus
				className="text-sm transition-opacity cursor-pointer text-button-primary hover:opacity-60"
				onClick={() => handleChangeValue(name, 1)}
			></FaPlus>
			{value}
			<FaMinus
				className="text-sm transition-opacity cursor-pointer text-button-primary hover:opacity-60"
				onClick={() => handleChangeValue(name, -1)}
			></FaMinus>
		</div>
	);
};

const GuestTab = () => {
	const { hotelOptions, setHotelOptions } = useContext(QueryContext);

	const handleChangeValue = (name, valueChange) => {
		if (hotelOptions[name] === 0 && valueChange < 0) return;
		if (
			(name === "room" || name === "adults") &&
			hotelOptions[name] === 1 &&
			valueChange < 0
		)
			return;

		setHotelOptions({
			...hotelOptions,
			[name]: hotelOptions[name] + valueChange,
		});
	};

	const options = [
		{
			label: "Nguời lớn",
			name: "adults",
		},
		{
			label: "Trẻ em",
			name: "child",
		},
		{
			label: "Phòng",
			name: "room",
		},
	];

	const handleOnBlur = (event) => {
		if (!event.relatedTarget) {
			setHotelOptions({ ...hotelOptions, show: false });
		}
	};

	const handleShow = (e) => {
		setHotelOptions({ ...hotelOptions, show: !hotelOptions.show });
	};

	return (
		<div
			className="relative flex items-start gap-3 px-3 py-4 transition-all duration-300 cursor-pointer hover:shadow-2xl rounded-2xl"
			tabIndex="-1"
			onClick={handleShow}
			onBlur={handleOnBlur}
		>
			<TravelerSVG className="fill-current w-7 h-7 text-sub-text"></TravelerSVG>
			<div className="cursor-pointer">
				<p className="text-xl font-bold">Hành khách</p>
				<p className="text-sm text-sub-text">Thêm số lượng hành khách</p>
			</div>
			<AnimatePresence>
				{hotelOptions.show && (
					<motion.div
						className="absolute grid items-center grid-cols-2 px-4 py-3 font-semibold shadow-xl cursor-default w-[120%] gap-y-2 gap-x-2 left-0 bg-main-bg rounded-xl font-nunito -top-[180%] z-10"
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0, opacity: 0 }}
						onClick={(e) => e.stopPropagation()}
					>
						{options.map((option, index) => {
							return (
								<Fragment key={index}>
									<span key={option.label}>{option.label}</span>
									<CountBox
										name={option.name}
										value={hotelOptions[option.name]}
										key={index}
										handleChangeValue={handleChangeValue}
									/>
								</Fragment>
							);
						})}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default GuestTab;
