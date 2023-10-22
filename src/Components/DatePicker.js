import {
	eachDayOfInterval,
	format,
	startOfToday,
	isSameDay,
	isSameMonth,
	endOfMonth,
	startOfMonth,
} from "date-fns";
import viLocale from "date-fns/locale/vi";

const classNames = (...classes) => {
	return classes.filter(Boolean).join(" ");
};

const DatePicker = () => {
	let today = startOfToday();
	let newsDay = eachDayOfInterval({
		start: startOfMonth(today),
		end: endOfMonth(today),
	});

	return (
		<div className="flex flex-col items-center text-datepicker-primary">
			<div className="text-center">
				<time className="font-semibold">Tháng 10 - 2023</time>
			</div>
			<div className="grid grid-cols-7 mt-2 text-sm font-bold text-center text-sub-text gap-x-3">
				<div>Thứ 2</div>
				<div>Thứ 3</div>
				<div>Thứ 4</div>
				<div>Thứ 5</div>
				<div>Thứ 6</div>
				<div>Thứ 7</div>
				<div className="pl-1 text-start">CN</div>
			</div>
			<div className="grid grid-cols-7 mt-1 gap-x-3">
				{newsDay.map((day, idx) => {
					return (
						<div key={day.toString()}>
							<button
								className={classNames(
									"mx-auto flex w-9 h-8 items-center justify-center rounded-full"
								)}
							>
								<time dateTime={day.date}>{format(day, "d")}</time>
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DatePicker;
