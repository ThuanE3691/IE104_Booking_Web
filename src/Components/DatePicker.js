import LeftArrowSVG from "@/Assets/Icons/SVG/LeftArrowSVG";
import RightArrowSVG from "@/Assets/Icons/SVG/RightArrowSVG";
import {
	eachDayOfInterval,
	format,
	getDay,
	endOfMonth,
	isToday,
	isPast,
	isEqual,
} from "date-fns";
import viLocale from "date-fns/locale/vi";
import { useState } from "react";

const classNames = (...classes) => {
	return classes.filter(Boolean).join(" ");
};

const DatePicker = ({
	selectedDate,
	setSelectedDate,
	firstDayOfMonth,
	isFirstDatePicker,
}) => {
	let newsDay = eachDayOfInterval({
		start: firstDayOfMonth,
		end: endOfMonth(firstDayOfMonth),
	});

	const handleSelectDay = (day) => {
		if (!(isPast(day) && !isToday(day))) setSelectedDate(day);
	};

	console.log();

	return (
		<div className="flex flex-col items-center text-datepicker-primary">
			<div className="flex items-center justify-center w-full text-center">
				{isFirstDatePicker && (
					<LeftArrowSVG className="w-5 h-5 fill-current stroke-current stroke-2 text-datepicker-primary"></LeftArrowSVG>
				)}
				<time className="mx-auto font-semibold first-letter:uppercase">
					{format(firstDayOfMonth, "MMMM - yyyy", { locale: viLocale })}
				</time>
				{!isFirstDatePicker && (
					<RightArrowSVG className="w-5 h-5 fill-current stroke-2 text-datepicker-primary"></RightArrowSVG>
				)}
			</div>
			<div className="grid grid-cols-7 mt-4 text-xs font-semibold text-center text-sub-text gap-x-3">
				<div className="w-10">CN</div>
				<div className="w-10">Thứ 2</div>
				<div className="w-10">Thứ 3</div>
				<div className="w-10">Thứ 4</div>
				<div className="w-10">Thứ 5</div>
				<div className="w-10">Thứ 6</div>
				<div className="w-10">Thứ 7</div>
			</div>
			<div className="grid grid-cols-7 mt-4 text-sm gap-x-3 gap-y-2">
				{newsDay.map((day, dayIdx) => {
					const isInPast = isPast(day) && !isToday(day);
					const _isToday =
						isToday(day) &&
						(selectedDate !== null ? !isEqual(day, selectedDate) : true);
					const isSelectedDate =
						selectedDate !== null ? isEqual(day, selectedDate) : false;
					return (
						<div
							key={day.toString()}
							onClick={() => handleSelectDay(day)}
							className={classNames(
								dayIdx === 0 && colStartClasses[getDay(day)]
							)}
						>
							<button
								className={classNames(
									isInPast && "text-sub-text cursor-default",
									_isToday && "bg-blue-500 text-white",
									isSelectedDate && " bg-datepicker-selected text-white",
									!(isInPast || _isToday || isSelectedDate) &&
										"hover:bg-sub-text",
									"mx-auto flex w-10 h-10 items-center font-semibold justify-center rounded-full transition-colors"
								)}
							>
								<time dateTime={format(day, "yyyy-MM-dd")}>
									{format(day, "d")}
								</time>
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const colStartClasses = [
	"col-start-1",
	"col-start-2",
	"col-start-3",
	"col-start-4",
	"col-start-5",
	"col-start-6",
	"col-start-7",
];

export default DatePicker;
