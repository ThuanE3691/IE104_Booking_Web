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
	isBefore,
	isAfter,
} from "date-fns";
import viLocale from "date-fns/locale/vi";
import { MotionConfig, motion, AnimatePresence } from "framer-motion";

const classNames = (...classes) => {
	return classes.filter(Boolean).join(" ");
};

const DatePicker = ({
	selectedDate,
	firstDayOfMonth,
	isFirstDatePicker,
	handleChangeMonth,
	direction,
	handleSelectDay,
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

	let removeImmediately = {
		exit: { visibility: "hidden" },
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
					<motion.div
						key={format(firstDayOfMonth, "MMMM - yyyy", {
							locale: viLocale,
						}).toString()}
					>
						<header className="flex items-center justify-center w-full text-center">
							{isFirstDatePicker && (
								<motion.button
									onClick={() => handleChangeMonth("PREVIOUS")}
									variants={removeImmediately}
									exit="exit"
								>
									<LeftArrowSVG
										className={classNames(
											isPast(firstDayOfMonth) && "cursor-default text-sub-text",
											"w-5 h-5 fill-current stroke-current stroke-2 text-datepicker-primary"
										)}
									></LeftArrowSVG>
								</motion.button>
							)}

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
							{!isFirstDatePicker && (
								<motion.button
									onClick={() => handleChangeMonth("NEXT")}
									variants={removeImmediately}
									exit="exit"
								>
									<RightArrowSVG className="w-5 h-5 cursor-pointer fill-current stroke-2 text-datepicker-primary"></RightArrowSVG>
								</motion.button>
							)}
						</header>
						<div className="grid grid-cols-7 mt-4 text-xs font-semibold text-center text-sub-text ">
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
						</div>
						<div className="z-10 grid grid-cols-7 mt-4 text-sm gap-y-2">
							{newsDay.map((day, dayIdx) => {
								const isInPast = isPast(day) && !isToday(day);
								const _isToday =
									isToday(day) &&
									(selectedDate !== null ? !isEqual(day, selectedDate) : true);
								const isSelectedDateArrival =
									selectedDate.arrival && isEqual(day, selectedDate.arrival);
								const isSelectedDateGo =
									selectedDate.go && isEqual(day, selectedDate.go);

								const isBetweenMode = selectedDate.arrival && selectedDate.go;
								const isBetween =
									isBetweenMode &&
									isAfter(day, selectedDate.arrival) &&
									isBefore(day, selectedDate.go);

								return (
									<motion.div
										key={day.toString()}
										onClick={() => handleSelectDay(day)}
										className={classNames(
											dayIdx === 0 && colStartClasses[getDay(day - 1)]
										)}
										variants={variants}
										initial="enter"
										animate="middle"
										exit="exit"
										custom={direction}
									>
										<button
											className={classNames(
												isInPast && "text-sub-text cursor-default",
												!isInPast && isBefore(day, selectedDate.arrival) && "",
												_isToday && "before:bg-blue-500 text-white",
												!(
													isInPast ||
													_isToday ||
													isSelectedDateGo ||
													isSelectedDateArrival
												) && "before:hover:bg-sub-text relative z-10",
												isBetween && " bg-datepicker-connected",
												(isSelectedDateArrival || isSelectedDateGo) &&
													"before:bg-datepicker-selected text-white",
												isBetweenMode &&
													isSelectedDateArrival &&
													" bg-gradient-to-r from-transparent to-datepicker-connected to-50%",
												isBetweenMode &&
													isSelectedDateGo &&
													" bg-gradient-to-l from-transparent to-datepicker-connected to-50%",
												" flex w-[52px] h-10 items-center font-semibold justify-center before:rounded-full before:absolute before:w-10 before:h-10  transition-colors relative z-10"
											)}
											key={format(day, "yyyy-MM-dd")}
											before={format(day, "d")}
										>
											<time
												dateTime={format(day, "yyyy-MM-dd")}
												className="relative z-10"
											>
												{format(day, "d")}
											</time>
										</button>
									</motion.div>
								);
							})}
						</div>
					</motion.div>
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
