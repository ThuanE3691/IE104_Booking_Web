import LeftArrowSVG from "@SVGComponent/Shared/LeftArrowSVG";
import RightArrowSVG from "@SVGComponent/Shared/RightArrowSVG";
import {
	eachDayOfInterval,
	format,
	getDay,
	endOfMonth,
	isToday,
	isPast,
	isEqual,
	isBefore,
	isAfter,
} from "date-fns";
import viLocale from "date-fns/locale/vi";
import { MotionConfig, motion, AnimatePresence } from "framer-motion";

const classNames = (...classes) => {
	return classes.filter(Boolean).join(" ");
};

const removeImmediately = {
	exit: { visibility: "hidden" },
};

const Day = ({
	day,
	dayIdx,
	selectedDate,
	handleSelectDay,
	variants,
	direction,
	handleHoverDay,
}) => {
	const isInPast = isPast(day) && !isToday(day);
	const _isToday =
		isToday(day) &&
		(selectedDate !== null ? !isEqual(day, selectedDate) : true);
	const isSelectedDateCheckIn =
		selectedDate.checkIn && isEqual(day, selectedDate.checkIn);
	const isSelectedDateCheckOut =
		(selectedDate.checkOut && isEqual(day, selectedDate.checkOut)) ||
		(selectedDate.temp && isEqual(day, selectedDate.temp));

	const isBetweenMode =
		selectedDate.checkIn && (selectedDate.checkOut || selectedDate.temp);
	const isBetween =
		isBetweenMode &&
		isAfter(day, selectedDate.checkIn) &&
		(isBefore(day, selectedDate.checkOut) || isBefore(day, selectedDate.temp));

	const style = {
		base: " flex w-[52px] h-10 items-center font-semibold justify-center before:rounded-full before:absolute before:w-10 before:h-10 before:transition-colors transition-colors relative z-10",
		past: "text-sub-text cursor-default",
		today: "before:bg-blue-500 text-white",
		normalHover: "before:hover:bg-sub-text relative z-10",
		inBetween: "bg-datepicker-connected",
		selected: " before:bg-button-primary text-white",
		startRange:
			"bg-gradient-to-r from-transparent to-datepicker-connected to-50%",
		endRange:
			"bg-gradient-to-l from-transparent to-datepicker-connected to-50%",
	};

	return (
		<motion.div
			key={day.toString()}
			onClick={() => handleSelectDay(day)}
			className={classNames(dayIdx === 0 && colStartClasses[getDay(day - 1)])}
			variants={variants}
			initial="enter"
			animate="middle"
			exit="exit"
			custom={direction}
			onMouseEnter={() => handleHoverDay(day, "enter")}
			onMouseLeave={() => handleHoverDay(day, "leave")}
		>
			<button
				className={classNames(
					isInPast && style.past,
					_isToday && style.today,
					!(
						isInPast ||
						_isToday ||
						isSelectedDateCheckOut ||
						isSelectedDateCheckIn
					) && style.normalHover,
					isBetween && style.inBetween,
					(isSelectedDateCheckIn || isSelectedDateCheckOut) && style.selected,
					isBetweenMode && isSelectedDateCheckIn && style.startRange,
					isBetweenMode && isSelectedDateCheckOut && style.endRange,
					style.base
				)}
				key={format(day, "yyyy-MM-dd")}
				before={format(day, "d")}
			>
				<time dateTime={format(day, "yyyy-MM-dd")} className="relative z-10">
					{format(day, "d")}
				</time>
			</button>
		</motion.div>
	);
};

const DatePicker = ({
	selectedDate,
	firstDayOfMonth,
	isFirstDatePicker,
	handleChangeMonth,
	direction,
	handleSelectDay,
	handleHoverDay,
}) => {
	let newsDay = eachDayOfInterval({
		start: firstDayOfMonth,
		end: endOfMonth(firstDayOfMonth),
	});

	let transition = { type: "easeInOut", bounce: 0, duration: 0.2 };

	let variants = {
		enter: (direction) => ({ x: `${direction * 100}%`, opacity: 0 }),
		middle: (direction) => ({ x: 0, opacity: 1 }),
		exit: (direction) => ({ x: `${-direction * 100}%`, opacity: 0 }),
	};

	const ordinal_list = [
		"Thứ 2",
		"Thứ 3",
		"Thứ 4",
		"Thứ 5",
		"Thứ 6",
		"Thứ 7",
		"CN",
	];

	return (
		<MotionConfig transition={transition}>
			<div className="flex flex-col items-center text-datepicker-primary">
				<AnimatePresence mode="popLayout" initial={false} custom={direction}>
					<header className="flex items-center justify-center w-full text-center">
						<motion.button
							onClick={() => handleChangeMonth("PREVIOUS")}
							variants={removeImmediately}
							exit="exit"
							data-ishidden={!isFirstDatePicker}
							className=" data-[ishidden=true]:hidden"
						>
							<LeftArrowSVG
								className={classNames(
									isPast(firstDayOfMonth) && "cursor-default text-sub-text",
									"w-5 h-5 fill-current stroke-current stroke-2 text-datepicker-primary"
								)}
							></LeftArrowSVG>
						</motion.button>

						<motion.time
							className="mx-auto font-semibold first-letter:uppercase"
							variants={variants}
							initial="enter"
							animate="middle"
							exit="exit"
							custom={direction}
							key={firstDayOfMonth}
						>
							{format(firstDayOfMonth, "MMMM - yyyy", { locale: viLocale })}
						</motion.time>

						<motion.button
							onClick={() => handleChangeMonth("NEXT")}
							variants={removeImmediately}
							data-ishidden={isFirstDatePicker}
							exit="exit"
							className=" data-[ishidden=true]:hidden"
						>
							<RightArrowSVG className="w-5 h-5 cursor-pointer fill-current stroke-2 text-datepicker-primary"></RightArrowSVG>
						</motion.button>
					</header>
					<motion.section
						key={format(firstDayOfMonth, "MMMM - yyyy", {
							locale: viLocale,
						}).toString()}
					>
						<section className="grid grid-cols-7 mt-4 text-xs font-semibold text-center text-sub-text ">
							{ordinal_list.map((ordinal) => {
								return (
									<motion.div
										variants={removeImmediately}
										className="w-[52px]"
										key={ordinal}
									>
										{ordinal}
									</motion.div>
								);
							})}
						</section>
						<section className="z-10 grid grid-cols-7 mt-4 text-sm gap-y-2">
							{newsDay.map((day, dayIdx) => {
								return (
									<Day
										day={day}
										dayIdx={dayIdx}
										selectedDate={selectedDate}
										handleSelectDay={handleSelectDay}
										variants={variants}
										direction={direction}
										handleHoverDay={handleHoverDay}
										key={day}
									></Day>
								);
							})}
						</section>
					</motion.section>
				</AnimatePresence>
			</div>
		</MotionConfig>
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
// after:absolute after:bg-datepicker-connected after:-right-3 after:w-6 after:h-full before:absolute
