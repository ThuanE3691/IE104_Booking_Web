import KhachSan from "@/Assets/Images/HotelType/KhachSan.jpg";
import CanHo from "@/Assets/Images/HotelType/CanHo.jpg";
import Villa from "@/Assets/Images/HotelType/Villa.jpg";
import Resort from "@/Assets/Images/HotelType/Resort.jpg";
import Camping from "@/Assets/Images/HotelType/Camping.jpg";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import formatNumber from "@/Utils/formatNumber";

const hoverCardVariants = {
	mouseOut: { top: "100%" },
	mouseEnter: {
		top: "0",
		transition: {
			duration: 0.8,
			type: "spring",
			bounce: 0,
			ease: "easeInOut",
		},
	},
	mouseLeave: {
		top: "100%",
		transition: {
			duration: 0.2,
		},
	},
};

const ImageCard = ({
	styleContainer,
	styleImg,
	img,
	type,
	numsType,
	minPrice,
	isLarge,
}) => {
	const [isHover, setIsHover] = useState(false);

	const handleClick = () => {
		if (window.confirm(`Giá tiền thấp nhất của ${type} là ${minPrice}`)) {
		} else {
		}
	};

	return (
		<motion.div
			className={
				styleContainer + " overflow-hidden relative cursor-pointer group"
			}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onClick={handleClick}
			initial={{ opacity: 0, scale: 0 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true, margin: "200px" }}
			transition={{ duration: 0.5, type: "spring" }}
		>
			<img src={img} alt="" className={styleImg} />
			<AnimatePresence>
				{isHover && (
					<motion.div
						className="absolute left-0 flex flex-col justify-end w-full h-full px-4 py-4 bg-black pointer-events-none bg-opacity-70 rounded-xl group"
						initial="mouseOut"
						animate="mouseEnter"
						exit="mouseLeave"
						variants={hoverCardVariants}
						data-islarge={isLarge}
					>
						<p className="text-2xl font-semibold text-white ">{type}</p>
						<p className="mt-1 group-data-[islarge=true]:mt-1.5 text-white">
							{numsType} chỗ nghỉ
						</p>
						<p className="mt-0.5 group-data-[islarge=true]:mt-1 text-white ">
							{formatNumber(minPrice)}đ/đêm
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

const TypeSection = () => {
	return (
		<section className="font-vietnam-pro">
			<h3 className="content-header">Lựa chọn chỗ nghỉ phù hợp</h3>
			<div className="grid grid-cols-[4fr,6fr] grid-rows-[repeat(2,250px)] gap-4 mt-6">
				<ImageCard
					styleContainer="row-span-2 row-start-1 shadow-xl rounded-xl"
					styleImg="object-cover w-full h-full rounded-xl"
					img={Resort}
					type="Khu nghỉ dưỡng"
					numsType={21420}
					isLarge={true}
					minPrice={"3500000"}
				></ImageCard>
				<div className="grid grid-cols-1 grid-rows-[repeat(2,250px)] row-span-2 gap-4">
					<div className="grid grid-cols-[4.5fr,5.5fr] gap-x-4 grid-rows-1">
						<ImageCard
							styleContainer="rounded-xl shadow-xl"
							styleImg="object-cover w-full h-full shadow-xl rounded-xl"
							img={KhachSan}
							type="Khách sạn"
							numsType={40291}
							minPrice={"400000"}
						></ImageCard>
						<ImageCard
							styleContainer="rounded-xl shadow-xl"
							styleImg="object-cover w-full h-full shadow-xl rounded-xl"
							img={Camping}
							type="Khu cắm trại"
							numsType={2052}
							minPrice={"1000000"}
						></ImageCard>
					</div>
					<div className="grid grid-cols-[5.5fr,4.5fr] gap-4 grid-rows-1">
						<ImageCard
							styleContainer="rounded-xl shadow-xl"
							styleImg="object-cover w-full h-full shadow-xl rounded-xl"
							img={Villa}
							type="Biệt thự"
							numsType={5102}
							minPrice={"15000000"}
						></ImageCard>
						<ImageCard
							styleContainer="rounded-xl shadow-xl"
							styleImg="object-cover w-full h-full shadow-xl rounded-xl"
							img={CanHo}
							type="Căn hộ"
							numsType={12312}
							minPrice={"2000000"}
						></ImageCard>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TypeSection;
