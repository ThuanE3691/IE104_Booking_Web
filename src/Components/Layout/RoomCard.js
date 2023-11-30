import services from "@/Layouts/Shared/Filter/services";
import IconRender from "@/Components/Feature/Layout/IconRender";
import { TbRulerMeasure } from "react-icons/tb";
import { useState } from "react";
import { wrap } from "popmotion";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosBed } from "react-icons/io";
import { LuBedSingle } from "react-icons/lu";
import LeftArrowSVG from "@/Assets/Icons/SVGComponent/Shared/LeftArrowSVG";
import RightArrowSVG from "@/Assets/Icons/SVGComponent/Shared/RightArrowSVG";
import { FaImages } from "react-icons/fa";

const summary_services = [
	{
		services_index: 0,
		tags_index: 0,
	},
	{
		services_index: 2,
		tags_index: 0,
	},
	{
		services_index: 0,
		tags_index: 3,
	},
	{
		services_index: 1,
		tags_index: 4,
	},
	{
		services_index: 2,
		tags_index: 1,
	},
];

const variants = {
	enter: (direction) => {
		return {
			x: direction > 0 ? 1 : -1,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1 : -1,
			opacity: 0,
		};
	},
};

const ImageGallery = ({ photos, openRoomModal }) => {
	const [[image, direction], setImage] = useState([0, 0]);
	const imageNavigate = (newDirection) => {
		setImage([image + newDirection, newDirection]);
	};
	const [isHover, setHover] = useState(false);
	const imageIndex = wrap(0, photos.length, image);

	return (
		<div
			className="relative h-[250px] border-2 border-b-0 border-slate-200 rounded-t-2xl cursor-pointer overflow-hidden"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<AnimatePresence>
				{isHover && (
					<motion.div
						className={
							"absolute left-2 p-2 rounded-full top-[calc(50%-10px)] z-10 bg-white shadow-2xl cursor-pointer transition-all hover-button group"
						}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => imageNavigate(-1)}
						key="prev"
					>
						<LeftArrowSVG className="w-5 h-5 fill-current text-text-primary group-hover:text-black"></LeftArrowSVG>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence custom={direction} initial={false}>
				<motion.img
					key={image}
					src={photos[imageIndex].url_original}
					custom={direction}
					alt=""
					className="object-cover w-full h-[250px] rounded-t-xl select-none absolute"
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: "spring", stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					loading="lazy"
				/>
			</AnimatePresence>
			<AnimatePresence>
				{isHover && (
					<motion.div
						className={
							"absolute right-2 p-2 rounded-full top-[calc(50%-10px)] z-10 bg-white shadow-xl cursor-pointer transition-all hover-button group"
						}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => imageNavigate(1)}
						key="next"
					>
						<RightArrowSVG className="w-5 h-5 fill-current text-text-primary group-hover:text-black"></RightArrowSVG>
					</motion.div>
				)}
			</AnimatePresence>
			<div className="absolute z-10 flex items-center justify-center px-4 py-2 text-white bg-black rounded-lg bg-opacity-30 bottom-4 right-4 w-fit h-fit gap-x-2">
				<FaImages></FaImages>{" "}
				<span className="select-none">{photos.length}</span>
			</div>
		</div>
	);
};

const RoomCard = ({ room, block, ...properties }) => {
	const reverseCurrency = (str) => {
		return str.split(" ").reverse().join(" ");
	};

	return (
		<li className="flex flex-col w-[400px] rounded-2xl" {...properties}>
			<ImageGallery photos={room.photos}></ImageGallery>
			<section className="flex flex-col bg-white border-2 border-t-0 border-slate-200">
				<div className="px-3 py-3">
					<span className="font-semibold select-none">{block.room_name}</span>
					<div className="grid grid-cols-2 mt-4 gap-y-3">
						<span className="flex items-center text-sm gap-x-3">
							<TbRulerMeasure size={20}></TbRulerMeasure>
							Diện tích - {block.room_surface_in_m2} m&sup2;
						</span>
						{summary_services.map((service) => {
							const service_render =
								services[service.services_index].tags[service.tags_index];
							return (
								<li
									className="flex items-center gap-x-3"
									key={service_render.name}
								>
									{service_render.icon ? (
										<IconRender
											Icon={service_render.icon}
											size={20}
										></IconRender>
									) : (
										service_render.svg({ className: "w-5" })
									)}
									<span className="text-sm">{service_render.name}</span>
								</li>
							);
						})}
						{room.bed_configurations[0].bed_types.map((bed) => {
							return (
								<span
									className="flex items-center text-sm gap-x-3"
									key={bed.bed_type}
								>
									{bed.name_with_count.includes("đơn") ? (
										<LuBedSingle size={20}></LuBedSingle>
									) : (
										<IoIosBed size={20}></IoIosBed>
									)}
									{bed.name_with_count}
								</span>
							);
						})}
					</div>
					<button className="relative mt-3 underline_element hover:after:w-full text-text-primary after:bg-text-primary w-fit">
						Xem chi tiết
					</button>
				</div>
			</section>
			<section className="flex items-center px-3 py-4 bg-white border-2 border-t-0 rounded-b-xl border-slate-200">
				<div className="flex flex-col">
					<span className="text-xs text-red-400 line-through">
						{reverseCurrency(
							block.product_price_breakdown.strikethrough_amount.amount_rounded
						)}
					</span>
					<span className="text-lg font-semibold">
						{reverseCurrency(
							block.product_price_breakdown.gross_amount.amount_rounded
						)}
					</span>
				</div>
				<button className="px-4 py-1.5 ml-auto font-semibold text-white transition-colors rounded-xl bg-button-primary hover-button">
					Đặt ngay
				</button>
			</section>
		</li>
	);
};

export default RoomCard;
