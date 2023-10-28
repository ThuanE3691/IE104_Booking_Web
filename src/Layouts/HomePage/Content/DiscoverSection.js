import LeftArrowSVG from "@/Assets/Icons/SVG/LeftArrowSVG";
import RightArrowSVG from "@/Assets/Icons/SVG/RightArrowSVG";
import { ProvinceCard } from "@/Components/Content/ProvinceCard";
import getPopularProvinces from "@/Utils/getPopularProvinces";
import toLowerCaseNonAccentVietnamese from "@/Utils/toLowerCaseNonAccentVietnamese";
import capitalizeFirstLetter from "@/Utils/capitalizeFirstLetter";
import images_store from "@/Data/vietnam_provinces_img";
import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import classNames from "@/Utils/classNames";

const DiscoverSection = () => {
	const popular_provinces = useMemo(
		() => [
			"Hà Nội",
			"Lào Cai",
			"Quảng Ninh",
			"Đà Nẵng",
			"Khánh Hòa",
			"Hồ Chí Minh",
			"Lâm Đồng",
			"Quảng Nam",
			"Huế",
			"Bà Rịa - Vũng Tàu",
			"An Giang",
			"Cà Mau",
		],
		[]
	);

	const list_provinces = useMemo(
		() => getPopularProvinces(popular_provinces),
		[popular_provinces]
	);

	const [sliderIndex, setSliderIndex] = useState(0);
	const [direction, setDirection] = useState(1);

	const handleClickSliderNavigation = (direction) => {
		switch (direction) {
			case "left":
				setSliderIndex((prev) => prev - 1);
				setDirection(-1);
				break;
			case "right":
				setSliderIndex((prev) => prev + 1);
				setDirection(1);
				break;
			default:
				break;
		}
	};

	return (
		<div className=" font-vietnam-pro">
			<h3 className=" content-header">Khám phá Việt Nam</h3>
			<div className="relative grid grid-cols-4 gap-8 mt-4">
				<div
					className={classNames(
						sliderIndex === 0 &&
							"opacity-50 cursor-default pointer-events-none",
						"absolute left-0 -translate-x-5 p-2 rounded-full top-[82px] z-10 bg-white shadow-xl cursor-pointer hover:opacity-50 transition-opacity"
					)}
					onClick={() => handleClickSliderNavigation("left")}
				>
					<LeftArrowSVG className="w-5 h-5"></LeftArrowSVG>
				</div>
				{list_provinces.slice(sliderIndex, sliderIndex + 4).map((province) => {
					let name = province.name.replace("Thành phố ", "");
					name = name.replace("Tỉnh ", "");
					const img_name = toLowerCaseNonAccentVietnamese(name)
						.split(" ")
						.map((str) => capitalizeFirstLetter(str))
						.join("");
					const province_img = images_store.find(
						(img) => img.name === img_name
					);

					return (
						<ProvinceCard
							province_name={name}
							province_img={province_img.image}
							key={province.name}
							direction={direction}
						></ProvinceCard>
					);
				})}
				<div
					className={classNames(
						sliderIndex === list_provinces.length - 4 &&
							"opacity-50 cursor-default pointer-events-none",
						"absolute right-0 translate-x-6 p-2 rounded-full top-[82px] z-10 bg-white shadow-xl cursor-pointer hover:opacity-50 transition-opacity"
					)}
					onClick={() => handleClickSliderNavigation("right")}
				>
					<RightArrowSVG className="w-5 h-5"></RightArrowSVG>
				</div>
			</div>
		</div>
	);
};

export default DiscoverSection;
