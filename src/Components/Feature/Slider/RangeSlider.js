import { useRef, useEffect } from "react";

const RangeSlider = ({ range, filterMethod, minSlider, maxSlider }) => {
	const progressRef = useRef(null);
	const minSliderRef = useRef(null);
	const maxSliderRef = useRef(null);

	const price_gap = 140000;

	const setProgressBar = (minValue, maxValue) => {
		const progressBar = progressRef.current;

		progressBar.style.left =
			((parseInt(minValue) - 35000) / maxSlider) * 100 + "%";
		progressBar.style.right =
			100 - ((parseInt(maxValue) + 35000) / maxSlider) * 100 + "%";
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
		<div className="relative z-10 w-full h-1 my-32 rounded cursor-pointer pointer-events-auto bg-slate-200">
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
				step={70000}
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
				step={70000}
			/>
		</div>
	);
};

export default RangeSlider;
