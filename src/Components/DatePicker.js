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
import { MotionConfig, motion, AnimatePresence } from "framer-motion";

const classNames = (...classes) => {
	return classes.filter(Boolean).join(" ");
};

const DatePicker = ({
	selectedDate,
	setSelectedDate,
	firstDayOfMonth,
	isFirstDatePicker,
	handleChangeMonth,
	direction,
}) => {
	let newsDay = eachDayOfInterval({
		start: firstDayOfMonth,
		end: endOfMonth(firstDayOfMonth),
	});

	const handleSelectDay = (day) => {
		if (!(isPast(day) && !isToday(day))) setSelectedDate(day);
	};

	let transition = { type: "spring", bounce: 0, duration: 0.2 };

	let variants = {
		enter: (direction) => ({ x: `${direction * 100}%`, opacity: 0 }),
		middle: (direction) => ({ x: 0, opacity: 1 }),
		exit: (direction) => ({ x: `${-direction * 100}%`, opacity: 0 }),
	};

	let removeImmediately = {
		exit: { visibility: "hidden" },
	};

	return (
		<MotionConfig transition={transition}>
			<div className="flex flex-col items-center text-datepicker-primary">
				<AnimatePresence mode="popLayout" initial={false} custom={direction}>
					<motion.div
						key={format(firstDayOfMonth, "MMMM - yyyy", {
							locale: viLocale,
						}).toString()}
					>
						<div className="flex items-center justify-center w-full text-center">
							{isFirstDatePicker && (
								<motion.button
									onClick={() => handleChangeMonth("PREVIOUS")}
									variants={removeImmediately}
									exit="exit"
								>
									<LeftArrowSVG className="w-5 h-5 cursor-pointer fill-current stroke-current stroke-2 text-datepicker-primary"></LeftArrowSVG>
								</motion.button>
							)}

							<motion.time
								className="mx-auto font-semibold first-letter:uppercase"
								variants={variants}
								initial="enter"
								animate="middle"
								exit="exit"
								custom={direction}
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
						</div>
						<div className="grid grid-cols-7 mt-4 text-xs font-semibold text-center text-sub-text gap-x-3">
							<motion.div variants={removeImmediately} className="w-10">
								CN
							</motion.div>
							<motion.div variants={removeImmediately} className="w-10">
								Thứ 2
							</motion.div>
							<motion.div variants={removeImmediately} className="w-10">
								Thứ 3
							</motion.div>
							<motion.div variants={removeImmediately} className="w-10">
								Thứ 4
							</motion.div>
							<motion.div variants={removeImmediately} className="w-10">
								Thứ 5
							</motion.div>
							<motion.div variants={removeImmediately} className="w-10">
								Thứ 6
							</motion.div>
							<motion.div variants={removeImmediately} className="w-10">
								Thứ 7
							</motion.div>
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
									<motion.div
										key={day.toString()}
										onClick={() => handleSelectDay(day)}
										className={classNames(
											dayIdx === 0 && colStartClasses[getDay(day)]
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
