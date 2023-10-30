import KhachSan from "@/Assets/Images/HotelType/KhachSan.jpg";
import CanHo from "@/Assets/Images/HotelType/CanHo.jpg";
import Villa from "@/Assets/Images/HotelType/Villa.jpg";
import Resort from "@/Assets/Images/HotelType/Resort.jpg";
import Camping from "@/Assets/Images/HotelType/Camping.jpg";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageCard = ({ styleContainer, styleImg, img, type, numsType }) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<motion.div
			className={styleContainer + " overflow-hidden relative cursor-pointer"}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			initial={{ opacity: 0, scale: 0 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, type: "spring" }}
		>
			<img src={img} alt="" className={styleImg} />
			<AnimatePresence>
				{isHover && (
					<motion.div
						className="absolute left-0 flex flex-col justify-end w-full h-full px-4 py-4 bg-black pointer-events-none bg-opacity-70 rounded-xl"
						initial={{ top: "100%" }}
						animate={{ top: "0" }}
						exit={{ top: "100%" }}
						transition={{
							duration: 1,
							type: "spring",
							bounce: 0,
							ease: "easeInOut",
						}}
					>
						<p className="text-2xl font-semibold text-white ">{type}</p>
						<p className="text-white ">{numsType} chỗ nghỉ</p>
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
					type="Resort"
					numsType={21420}
				></ImageCard>
				<div className="grid grid-cols-1 grid-rows-[repeat(2,250px)] row-span-2 gap-4">
					<div className="grid grid-cols-[4.5fr,5.5fr] gap-x-4 grid-rows-1">
						<ImageCard
							styleContainer="rounded-xl shadow-xl"
							styleImg="object-cover w-full h-full shadow-xl rounded-xl"
							img={KhachSan}
							type="Khách Sạn"
							numsType={40291}
						></ImageCard>
						<ImageCard
							styleContainer="rounded-xl shadow-xl"
							styleImg="object-cover w-full h-full shadow-xl rounded-xl"
							img={Camping}
							type="Camping"
							numsType={2052}
						></ImageCard>
					</div>
					<div className="grid grid-cols-[5.5fr,4.5fr] gap-4 grid-rows-1">
						<ImageCard
							styleContainer="rounded-xl shadow-xl"
							styleImg="object-cover w-full h-full shadow-xl rounded-xl"
							img={Villa}
							type="Villa"
							numsType={5102}
						></ImageCard>
						<ImageCard
							styleContainer="rounded-xl shadow-xl"
							styleImg="object-cover w-full h-full shadow-xl rounded-xl"
							img={CanHo}
							type="Căn Hộ"
							numsType={12312}
						></ImageCard>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TypeSection;
