import classNames from "@/Utils/classNames";

const BarPlot = ({ freq, range }) => {
	const MAX_HEIGHT = 80;

	const maxCount = freq.reduce(
		(accumulator, item) => Math.max(accumulator, item.size),
		0
	);

	return (
		<div
			className={`absolute bottom-0 grid grid-rows-1 -scale-y-[1] gap-0.5`}
			style={{
				gridTemplateColumns: "repeat(" + freq.length + ",minmax(0,1fr))",
			}}
		>
			{freq.map((item, index) => {
				const height = (item.size / maxCount) * MAX_HEIGHT + "px";
				return (
					<div
						className={classNames(
							"w-3 transition-colors rounded-b-sm ",
							item.min >= range.min - 70000 && item.max <= range.max - 70000
								? "bg-button-primary"
								: "bg-slate-300"
						)}
						key={index}
						style={{ height: height }}
					></div>
				);
			})}
		</div>
	);
};

export default BarPlot;
