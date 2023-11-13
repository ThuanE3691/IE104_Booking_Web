import BarPlot from "@/Components/Feature/Plot/BarPlot";
import RangeSlider from "@/Components/Feature/Slider/RangeSlider";
import formatNumber from "@/Utils/formatNumber";

const PriceFilter = ({ freqPrice, filters, SLIDER, filterMethod }) => {
	const onChangePrice = (e, type) => {
		let price = "";
		if (e.target.value !== "")
			price = parseInt(e.target.value.replaceAll(".", ""));
		const re = /^[0-9\b]+$/;
		if (price === "" || re.test(price)) {
			filterMethod.setPrice(type, price);
		}
	};

	return (
		<section>
			<h3 className="text-xl font-semibold">Giá tiền (mỗi đêm)</h3>
			<div className="relative mx-12 mt-32 mb-16">
				<BarPlot
					freq={freqPrice}
					range={filters.price}
					maxRange={SLIDER.MAX_RANGE}
					step={SLIDER.STEP}
				></BarPlot>
				<RangeSlider
					range={filters.price}
					filterMethod={filterMethod}
					maxSlider={SLIDER.MAX_RANGE}
					minSlider={SLIDER.MIN_RANGE}
					step={SLIDER.STEP}
				></RangeSlider>
			</div>
			<div className="flex items-center mx-12 font-vietnam-pro">
				<div className="px-3.5 py-1.5 transition-colors border-2 rounded-lg border-slate-200 focus-within:border-black">
					<p className="text-sm font-semibold select-none text-slate-400 mb-0.5">
						Giá thấp nhất
					</p>
					<div className="flex gap-x-1.5 items-center">
						<input
							type="text"
							className="w-64 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
							value={formatNumber(filters.price.min)}
							onChange={(e) => onChangePrice(e, filterMethod.minPrice)}
						/>
						<p className="select-none ">đ</p>
					</div>
				</div>
				<div className="w-6 h-1 mx-8 rounded-lg bg-slate-200"></div>
				<div className="px-3.5 py-1.5 transition-colors border-2 rounded-lg border-slate-200 focus-within:border-black">
					<p className="text-sm font-semibold select-none text-slate-400 mb-0.5">
						Giá cao nhất
					</p>

					<div className="flex gap-x-1.5">
						<input
							type="text"
							className="w-64 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
							value={formatNumber(filters.price.max)}
							onChange={(e) => onChangePrice(e, filterMethod.maxPrice)}
						/>
						<p className="select-none ">đ</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PriceFilter;
