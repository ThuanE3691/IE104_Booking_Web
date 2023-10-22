import CalendarSVG from "@/Assets/Icons/SVG/CalendarSVG";
import DatePicker from "@/Components/DatePicker";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const DatePickerTab = () => {
	const [showDatePicker, setShowDatePicker] = useState(false);
	const handleShowDatePicker = () => {
		setShowDatePicker((prev) => !prev);
	};
	return (
		<>
			<div
				className="relative flex items-start gap-3 px-4 py-4 transition-all duration-300 cursor-pointer rounded-2xl"
				onClick={handleShowDatePicker}
			>
				<AnimatePresence>
					{showDatePicker && (
						<motion.div
							className="absolute bg-main-bg w-[375%] h-[350px] -top-[360px] shadow-xl rounded-2xl py-8 px-4 font-inter grid grid-cols-2"
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0, opacity: 0 }}
						>
							<DatePicker></DatePicker>
							<DatePicker></DatePicker>
						</motion.div>
					)}
				</AnimatePresence>

				<CalendarSVG className="w-6 h-6 mt-1 cursor-pointer fill-current text-sub-text"></CalendarSVG>
				<div className="cursor-pointer">
					<p className="text-xl font-bold">Nhận phòng</p>
					<p className="text-sm text-sub-text">Thời gian nhận phòng</p>
				</div>
			</div>
			<div
				className="flex items-start gap-3 px-3 py-4 transition-all duration-300 cursor-pointer rounded-2xl"
				onClick={handleShowDatePicker}
			>
				<CalendarSVG className="w-6 h-6 mt-1 cursor-pointer fill-current text-sub-text"></CalendarSVG>
				<div className="cursor-pointer">
					<p className="text-xl font-bold">Trả phòng</p>
					<p className="text-sm text-sub-text">Thời gian trả phòng</p>
				</div>
			</div>
		</>
	);
};

export default DatePickerTab;
