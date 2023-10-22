import CalendarSVG from "@/Assets/Icons/SVG/CalendarSVG";

const DatePickerTab = () => {
	return (
		<>
			<div className="flex items-start gap-3 px-4 py-4 transition-all duration-300 cursor-pointer rounded-2xl">
				<CalendarSVG className="w-6 h-6 mt-1 cursor-pointer fill-current text-sub-text"></CalendarSVG>
				<div className="cursor-pointer">
					<p className="text-xl font-bold">Nhận phòng</p>
					<p className="text-sm text-sub-text">Thời gian nhận phòng</p>
				</div>
			</div>
			<div className="flex items-start gap-3 px-3 py-4 transition-all duration-300 cursor-pointer rounded-2xl">
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
