import LeftArrowSVG from "@/Assets/Icons/SVG/LeftArrowSVG";
import RightArrowSVG from "@/Assets/Icons/SVG/RightArrowSVG";
import { ProvinceCard } from "@/Components/Content/ProvinceCard";
import getPopularProvinces from "@/Utils/getPopularProvinces";
import toLowerCaseNonAccentVietnamese from "@/Utils/toLowerCaseNonAccentVietnamese";
import capitalizeFirstLetter from "@/Utils/capitalizeFirstLetter";
import images_store from "@/Data/vietnam_provinces_img";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import classNames from "@/Utils/classNames";
import DotSlider from "@/Components/DotSlider";

const getImgName = (name) => {
	const img_name = toLowerCaseNonAccentVietnamese(name)
		.split(" ")
		.map((str) => capitalizeFirstLetter(str))
		.join("");
	const image = images_store.find((img) => img.name === img_name);
	return image;
};

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
	const [isAnimate, setIsAnimate] = useState(false);

	const handleClickSliderNavigation = (direction) => {
		switch (direction) {
			case "left":
				if (!isAnimate) {
					setSliderIndex((prev) => prev - 1);
				}
				setIsAnimate(true);

				break;
			case "right":
				if (!isAnimate) {
					setSliderIndex((prev) => prev + 1);
				}
				setIsAnimate(true);

				break;
			default:
				break;
		}
	};

	return (
		<div className="relative font-vietnam-pro">
			<h3 className=" content-header">Khám phá Việt Nam</h3>
			<div
				className={classNames(
					sliderIndex === 0 && " cursor-default pointer-events-none opacity-50",
					"absolute left-0 p-2 -translate-x-4 rounded-full top-[146px] z-10 bg-[#f2f2f2] shadow-2xl cursor-pointer transition-all hover-button group"
				)}
				onClick={() => handleClickSliderNavigation("left")}
			>
				<LeftArrowSVG className="w-5 h-5 text-black fill-current group-hover:text-black"></LeftArrowSVG>
			</div>
			<motion.div className="relative overflow-x-hidden scroll-smooth h-[200px] mt-6 bg-main-bg ">
				<motion.div
					className="absolute top-0 left-0 flex flex-nowrap gap-x-8"
					initial={{ x: 0 }}
					animate={{ x: `-${sliderIndex * 322}px` }}
					transition={{ duration: 0.5, bounce: 0, type: "spring" }}
					onAnimationComplete={() => setIsAnimate(false)}
				>
					{list_provinces.map((province) => {
						let name = province.name.replace("Thành phố ", "");
						name = name.replace("Tỉnh ", "");
						const province_img = getImgName(name);

						return (
							<ProvinceCard
								province_name={name}
								province_img={province_img.image}
								key={province.name}
							></ProvinceCard>
						);
					})}
				</motion.div>
			</motion.div>
			<div
				className={classNames(
					sliderIndex === list_provinces.length - 4 &&
						"opacity-50 cursor-default pointer-events-none",
					"absolute right-0 translate-x-4 p-2 rounded-full top-[146px] z-10 bg-[#f2f2f2] shadow-xl cursor-pointer transition-all hover-button group"
				)}
				onClick={() => handleClickSliderNavigation("right")}
			>
				<RightArrowSVG className="w-5 h-5 text-black fill-current group-hover:text-black"></RightArrowSVG>
			</div>
			<DotSlider
				length={list_provinces.length - 3}
				dotIndex={sliderIndex}
				setDotIndex={setSliderIndex}
				dotColor={"bg-blue-500"}
			></DotSlider>
		</div>
	);
};

export default DiscoverSection;
