import CalendarSVG from "@/Assets/Icons/SVG/CalendarSVG";
import DatePicker from "@/Components/DatePicker";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
	startOfToday,
	format,
	add,
	parse,
	isPast,
	isToday,
	isBefore,
	getMonth,
	isAfter,
} from "date-fns";

const getFirstDayOfMonth = (date) => {
	return parse(format(date, "MMM-yyyy"), "MMM-yyyy", new Date());
};

const DatePickerTab = () => {
	const [showDatePicker, setShowDatePicker] = useState(false);
	let today = startOfToday();
	const [selectedDate, setSelectedDate] = useState({
		arrival: today,
		go: null,
		order: 1,
	});
	const [firstDayOfMonth, setFirstDayOfMonth] = useState(
		getFirstDayOfMonth(today)
	);
	const [direction, setDirection] = useState(1);

	const handleShowDatePicker = () => {
		setShowDatePicker((prev) => !prev);
		if (!showDatePicker) {
			const monthDisplay =
				getMonth(selectedDate.arrival) % 2 !== 0
					? selectedDate.arrival
					: add(selectedDate.arrival, { months: -1 });
			setFirstDayOfMonth(getFirstDayOfMonth(monthDisplay));
		}
	};

	const handleSelectDay = (day) => {
		if (!(isPast(day) && !isToday(day))) {
			if (
				(isBefore(day, selectedDate.arrival) || selectedDate.order === 1) &&
				!(selectedDate.go !== null && isAfter(day, selectedDate.go))
			)
				setSelectedDate({
					...selectedDate,
					arrival: day,
					order: 2,
				});
			else {
				setSelectedDate({
					...selectedDate,
					go: day,
					order: 1,
				});
			}
		}
	};

	const handleChangeMonth = (direction) => {
		switch (direction) {
			case "PREVIOUS":
				if (isPast(firstDayOfMonth)) return;
				const firstDayPreviousMonth = add(firstDayOfMonth, { months: -1 });
				setDirection(-1);
				setFirstDayOfMonth(firstDayPreviousMonth);
				break;
			case "NEXT":
				const firstDayNextMonth = add(firstDayOfMonth, { months: 1 });
				setDirection(1);
				setFirstDayOfMonth(firstDayNextMonth);
				break;
			default:
				break;
		}
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
							selectedDate={selectedDate}
							firstDayOfMonth={firstDayOfMonth}
							isFirstDatePicker={true}
							handleChangeMonth={handleChangeMonth}
							direction={direction}
							handleSelectDay={handleSelectDay}
						></DatePicker>
						<DatePicker
							selectedDate={selectedDate}
							firstDayOfMonth={add(firstDayOfMonth, {
								months: 1,
							})}
							isFirstDatePicker={false}
							handleChangeMonth={handleChangeMonth}
							direction={direction}
							handleSelectDay={handleSelectDay}
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
