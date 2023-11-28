import RoomCard from "@/Components/Layout/RoomCard";
import { motion } from "framer-motion";
import classNames from "./../../../Utils/classNames";
import RightArrowSVG from "@/Assets/Icons/SVGComponent/Shared/RightArrowSVG";
import LeftArrowSVG from "@/Assets/Icons/SVGComponent/Shared/LeftArrowSVG";
import { useState } from "react";

const RoomAvailable = ({ rooms }) => {
	const [sliderIndex, setSliderIndex] = useState(0);
	const [isAnimate, setAnimate] = useState(false);

	const handleNavigateCard = (direction) => {
		if (isAnimate) return;

		setAnimate(true);
		if (direction === "left") {
			if (sliderIndex > 0) setSliderIndex((prev) => prev - 1);
		} else {
			if (sliderIndex < rooms.block.length - 3)
				setSliderIndex((prev) => prev + 1);
		}
	};

	return (
		<section className="relative my-8">
			<h2 className="text-lg font-semibold">Các phòng trống</h2>
			<div>
				<motion.div
					className={classNames(
						"absolute left-0 p-2 -translate-x-12 rounded-full top-[calc(50%-32px)] z-10 bg-[#f2f2f2] shadow-2xl cursor-pointer transition-all hover-button group"
					)}
					animate={{
						opacity: sliderIndex === 0 ? 0 : 1,
						display: sliderIndex === 0 ? "none" : "block",
					}}
					onClick={() => handleNavigateCard("left")}
				>
					<LeftArrowSVG className="w-5 h-5 text-black fill-current group-hover:text-black"></LeftArrowSVG>
				</motion.div>

				<div className="relative min-h-[650px] overflow-x-hidden w-full mt-4">
					<motion.ul
						className="absolute top-0 flex gap-x-4 z-[0]"
						initial={{ x: 0 }}
						animate={{ x: `-${sliderIndex * 416}px` }}
						transition={{ duration: 0.5, bounce: 0, type: "spring" }}
						onAnimationComplete={() => setAnimate(false)}
					>
						{rooms.block.map((block) => {
							const room = rooms.rooms[block.room_id];
							return (
								<RoomCard
									room={room}
									block={block}
									key={block.block_id}
								></RoomCard>
							);
						})}
					</motion.ul>
				</div>
				{rooms.block.length > 3 && (
					<motion.div
						className={classNames(
							"absolute right-0 translate-x-10 p-2 rounded-full top-[calc(50%-32px)] z-10 bg-[#f2f2f2] shadow-xl cursor-pointer transition-all hover-button group"
						)}
						onClick={() => handleNavigateCard("right")}
						animate={{
							opacity: sliderIndex === rooms.block.length - 3 ? 0 : 1,
							display:
								sliderIndex === rooms.block.length - 3 ? "none" : "block",
						}}
					>
						<RightArrowSVG className="w-5 h-5 text-black fill-current group-hover:text-black"></RightArrowSVG>
					</motion.div>
				)}
			</div>
		</section>
	);
};

export default RoomAvailable;
