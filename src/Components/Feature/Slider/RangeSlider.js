import { useRef, useEffect } from "react";
import formatNumber from "./../../../Utils/formatNumber";

const RangeSlider = ({ range, filterMethod, minSlider, maxSlider, step }) => {
	const progressRef = useRef(null);
	const minSliderRef = useRef(null);
	const maxSliderRef = useRef(null);

	const price_gap = 140000;

	const setProgressBar = (minValue, maxValue) => {
		const progressBar = progressRef.current;

		progressBar.style.left =
			((parseInt(minValue) - step / 2) / maxSlider) * 100 + "%";
		progressBar.style.right =
			100 - ((parseInt(maxValue) + step / 2) / maxSlider) * 100 + "%";
	};

	const handleDrag = (e) => {
		let minValue = minSliderRef.current.value;
		let maxValue = maxSliderRef.current.value;

		if (maxValue - minValue < price_gap) {
			if (e.target.name === "min-slider") {
				minValue = minSliderRef.current.value = parseInt(maxValue) - price_gap;
			} else {
				maxValue = maxSliderRef.current.value = parseInt(minValue) + price_gap;
			}
		}

		filterMethod.setPrice(filterMethod.minPrice, minValue);
		filterMethod.setPrice(filterMethod.maxPrice, maxValue);
	};

	useEffect(() => {
		minSliderRef.current.value = range.min;
		maxSliderRef.current.value = range.max;
		setProgressBar(range.min, range.max);
	}, []);

	useEffect(() => {
		setProgressBar(range.min, range.max);
	}, [range.min, range.max]);

	return (
		<div className="relative z-10 w-full h-1 rounded cursor-pointer pointer-events-auto bg-slate-200">
			<div
				ref={progressRef}
				className="absolute left-0 right-0 h-1 rounded pointer-events-none bg-button-primary"
			></div>
			<input
				type="range"
				data-slider="min"
				name="min-slider"
				className="absolute bg-transparent appearance-none pointer-events-none -top-2.5 w-full"
				min={minSlider}
				max={maxSlider}
				ref={minSliderRef}
				onChange={handleDrag}
				step={step}
			/>
			<input
				type="range"
				data-slider="max"
				name="max-slider"
				className="absolute bg-transparent appearance-none pointer-events-none -top-2.5 w-full"
				min={minSlider}
				max={maxSlider}
				ref={maxSliderRef}
				onChange={handleDrag}
				step={step}
			/>
			<span className="absolute inset-0 mt-4 -translate-x-6 select-none text-md font-vietnam-pro">
				{formatNumber(minSlider)}đ
			</span>
			<span className="absolute right-0 mt-4 translate-x-10 select-none text-md font-vietnam-pro">
				{formatNumber(maxSlider)}đ
			</span>
		</div>
	);
};

export default RangeSlider;
