import CalendarSVG from "@/Assets/Icons/SVG/CalendarSVG";
import DatePicker from "@/Components/DatePicker";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { startOfToday, format, addMonths, parse } from "date-fns";

const DatePickerTab = () => {
	const [showDatePicker, setShowDatePicker] = useState(false);
	let today = startOfToday();
	const [selectedDateArrival, setSelectedDateArrival] = useState(today);
	const [selectedDateGo, setSelectedDateGo] = useState(null);
	const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));

	let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

	const handleShowDatePicker = () => {
		setShowDatePicker((prev) => !prev);
	};
	return (
		<>
			<AnimatePresence>
				{showDatePicker && (
					<motion.div
						className="absolute bg-main-bg px-8 gap-x-10 -top-[350px] left-[336px] shadow-xl rounded-2xl py-8 font-poppins grid grid-cols-2 z-10"
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0, opacity: 0 }}
					>
						<DatePicker
							selectedDate={selectedDateArrival}
							setSelectedDate={setSelectedDateArrival}
							firstDayOfMonth={firstDayCurrentMonth}
							isFirstDatePicker={true}
						></DatePicker>
						<DatePicker
							selectedDate={selectedDateGo}
							setSelectedDate={setSelectedDateGo}
							firstDayOfMonth={addMonths(firstDayCurrentMonth, 1)}
							isFirstDatePicker={false}
						></DatePicker>
					</motion.div>
				)}
			</AnimatePresence>
			<div
				className="relative flex items-start gap-3 px-4 py-4 transition-all duration-300 cursor-pointer rounded-2xl"
				onClick={handleShowDatePicker}
			>
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
