import LeftArrowSVG from "@SVGComponent/Shared/LeftArrowSVG";
import RightArrowSVG from "@SVGComponent/Shared/RightArrowSVG";
import { ProvinceCard } from "@/Components/Layout/ProvinceCard";
import getFilterProvinces from "@/Utils/getFilterProvinces";
import images_store from "@/Data/vietnam_provinces_img";
import { useState } from "react";
import { motion } from "framer-motion";
import classNames from "@/Utils/classNames";
import DotSlider from "@/Components/Feature/Slider/DotSlider";
import TabSlider from "@/Components/Feature/Slider/TabSlider";
import provinceType from "@/Data/tab_type_provinces";

const getFilterLocation = (filterTag) => {
	const imgs = images_store.filter((img) => img.tag.includes(filterTag));
	const location = getFilterProvinces(imgs);
	return location;
};

const DiscoverSection = () => {
	const [sliderIndex, setSliderIndex] = useState(0);
	const [isAnimate, setIsAnimate] = useState(false);
	const [tabActive, setTabActive] = useState(0);

	const [provincesDisplay, setProvincesDisplay] = useState(
		getFilterLocation(provinceType[tabActive].tag)
	);

	const handleClickSliderNavigation = (direction) => {
		switch (direction) {
			case "left":
				if (!isAnimate) {
					setSliderIndex((prev) => prev - 1);
				}
				break;
			case "right":
				if (!isAnimate) {
					setSliderIndex((prev) => prev + 1);
				}
				break;
			default:
				break;
		}
		setIsAnimate(true);
	};

	const handleOnChangeTab = (index) => {
		setTabActive(index);
		setProvincesDisplay(getFilterLocation(provinceType[index].tag));
		setSliderIndex(0);
	};

	return (
		<div className="relative font-vietnam-pro">
			<h3 className=" content-header">Khám phá Việt Nam</h3>
			<TabSlider
				listItem={provinceType}
				tabActive={tabActive}
				handleOnChangeTab={handleOnChangeTab}
			></TabSlider>
			<motion.div
				className={classNames(
					sliderIndex === 0 && " cursor-default pointer-events-none opacity-50",
					"absolute left-0 p-2 -translate-x-4 rounded-full top-[199px] z-10 bg-[#f2f2f2] shadow-2xl cursor-pointer transition-all hover-button group"
				)}
				animate={{ opacity: sliderIndex === 0 ? 0 : 1 }}
				onClick={() => handleClickSliderNavigation("left")}
			>
				<LeftArrowSVG className="w-5 h-5 text-black fill-current group-hover:text-black"></LeftArrowSVG>
			</motion.div>

			<motion.div
				className="relative overflow-x-hidden scroll-smooth h-[200px] mt-6 bg-main-bg "
				layout
			>
				<motion.div
					className="absolute top-0 left-0 flex flex-nowrap gap-x-8"
					initial={{ x: 0 }}
					animate={{ x: `-${sliderIndex * 322}px` }}
					transition={{ duration: 0.5, bounce: 0, type: "spring" }}
					onAnimationComplete={() => setIsAnimate(false)}
				>
					{provincesDisplay.map((province, index) => {
						return (
							<ProvinceCard
								province_name={province.name}
								province_img={province.image}
								key={province.name + " - " + index}
							></ProvinceCard>
						);
					})}
				</motion.div>
			</motion.div>
			<motion.div
				className={classNames(
					sliderIndex === provincesDisplay.length - 4 &&
						"opacity-50 cursor-default pointer-events-none",
					"absolute right-0 translate-x-4 p-2 rounded-full top-[199px] z-10 bg-[#f2f2f2] shadow-xl cursor-pointer transition-all hover-button group"
				)}
				onClick={() => handleClickSliderNavigation("right")}
				animate={{
					opacity: sliderIndex === provincesDisplay.length - 4 ? 0 : 1,
				}}
			>
				<RightArrowSVG className="w-5 h-5 text-black fill-current group-hover:text-black"></RightArrowSVG>
			</motion.div>
			<DotSlider
				length={provincesDisplay.length >= 3 ? provincesDisplay.length - 3 : 1}
				dotIndex={sliderIndex}
				setDotIndex={setSliderIndex}
				dotColor={"bg-blue-500"}
			></DotSlider>
		</div>
	);
};

export default DiscoverSection;
