import CalendarSVG from "@/Assets/Icons/SVG/SearchBar/CalendarSVG";
import DatePicker from "@/Components/DatePicker";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
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
	getWeeksInMonth,
} from "date-fns";
import viLocale from "date-fns/locale/vi";
import classNames from "@/Utils/classNames";

const getFirstDayOfMonth = (date) => {
	return parse(format(date, "MMM-yyyy"), "MMM-yyyy", new Date());
};

const TimeRender = ({ date }) => {
	return (
		<time
			dateTime={format(date, "dd MMMM, yyyy")}
			className="text-xl font-bold"
		>
			{format(date, "dd MMMM, yyyy", { locale: viLocale })}
		</time>
	);
};

const DatePickerTab = ({ overrides }) => {
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [selectedDate, setSelectedDate] = useState({
		arrival: null,
		go: null,
		order: 1,
	});

	const [isChangeHeight, setIsChangeHeight] = useState(false);

	const [firstDayOfMonth, setFirstDayOfMonth] = useState(
		getFirstDayOfMonth(startOfToday())
	);
	const [direction, setDirection] = useState(1);

	const handleShowDatePicker = () => {
		setShowDatePicker((prev) => !prev);
		if (!showDatePicker && selectedDate.arrival) {
			const monthDisplay =
				getMonth(selectedDate.arrival) % 2 !== 0
					? selectedDate.arrival
					: add(selectedDate.arrival, { months: -1 });
			setFirstDayOfMonth(getFirstDayOfMonth(monthDisplay));
		} else {
			setFirstDayOfMonth(getFirstDayOfMonth(startOfToday()));
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

	useEffect(() => {
		const numOfWeek_1 = getWeeksInMonth(firstDayOfMonth, { locale: viLocale });
		const numOfWeek_2 = getWeeksInMonth(add(firstDayOfMonth, { months: 1 }), {
			locale: viLocale,
		});

		if (numOfWeek_1 === 6 || numOfWeek_2 === 6) {
			setIsChangeHeight(true);
		} else {
			setIsChangeHeight(false);
		}
	}, [firstDayOfMonth]);

	return (
		<>
			<AnimatePresence>
				{showDatePicker && (
					<motion.div
						className={classNames(
							"absolute bg-main-bg px-8 gap-x-10 shadow-xl rounded-2xl py-8 font-poppins grid grid-cols-2 z-10",
							overrides?.defaultPosition
						)}
						initial={{
							scale: 0,
							opacity: 0,
							top: !isChangeHeight
								? overrides?.defaultTop
								: overrides?.handleChangeHeight,
						}}
						animate={{
							scale: 1,
							opacity: 1,
							top: !isChangeHeight
								? overrides?.defaultTop
								: overrides?.handleChangeHeight,
						}}
						exit={{
							scale: 0,
							opacity: 0,
							top: !isChangeHeight
								? overrides?.defaultTop
								: overrides?.handleChangeHeight,
						}}
						transition={{
							top: { duration: 0.1 },
							type: "spring",
							bounce: 0.2,
							duration: 0.5,
						}}
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
					{selectedDate.arrival !== null ? (
						<TimeRender date={selectedDate.arrival}></TimeRender>
					) : (
						<p className="text-xl font-bold">Nhận phòng</p>
					)}
					<p className="text-sm text-sub-text">Thời gian nhận phòng</p>
				</div>
			</div>
			<div
				className="flex items-start gap-3 px-3 py-4 transition-all duration-300 cursor-pointer rounded-2xl"
				onClick={handleShowDatePicker}
			>
				<CalendarSVG className="w-6 h-6 mt-1 cursor-pointer fill-current text-sub-text"></CalendarSVG>
				<div className="cursor-pointer">
					{selectedDate.go !== null ? (
						<TimeRender date={selectedDate.go}></TimeRender>
					) : (
						<p className="text-xl font-bold">Trả phòng</p>
					)}
					<p className="text-sm text-sub-text">Thời gian trả phòng</p>
				</div>
			</div>
		</>
	);
};

export default DatePickerTab;
