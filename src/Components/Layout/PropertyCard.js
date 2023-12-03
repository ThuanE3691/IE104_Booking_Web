import { FaStar } from "react-icons/fa";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaBed } from "react-icons/fa6";
import { FaShower } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import formatNumber from "@/Utils/formatNumber";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };

const HotelCard = ({
	hotel,
	saveScrollHistory,
	page,
	index,
	...properties
}) => {
	const navigate = useNavigate();

	const handleOnClick = () => {
		saveScrollHistory({
			x: 0,
			y: document.documentElement.scrollTop,
		});
		navigate(`/search/hotel/${page}/${hotel.hotel_id}`);
	};

	return (
		<motion.section
			className="flex bg-white  rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
			{...properties}
			key={hotel.hotel_id}
			layoutId={`property-${hotel.hotel_id}`}
			layout
			transition={transition}
		>
			<motion.img
				src={hotel.max_1440_photo_url}
				alt=""
				className="object-cover w-64 h-64 rounded-l-xl"
				layoutId={`main-img-${hotel.hotel_id}`}
				loading="lazy"
			/>
			<div className="w-full px-8 py-4">
				<div className="flex w-full">
					<motion.h2
						className="text-xl font-semibold"
						layoutId={`hotel-name-${hotel.hotel_id}`}
					>
						{hotel.hotel_name_trans}
					</motion.h2>
					{hotel.review_score ? (
						<div className="flex items-center ml-auto gap-x-2">
							<div className="flex flex-col">
								<span className="font-semibold text-end">
									{hotel.review_score_word}
								</span>
								<span className="text-sm">{hotel.review_nr} đánh giá</span>
							</div>
							<div className="font-semibold text-white rounded-[10px_10px_10px_0px] bg-button-primary w-[43px] h-[38px] flex justify-center items-center">
								{hotel.review_score.toFixed(1)}
							</div>
						</div>
					) : (
						<div className="h-10"></div>
					)}
				</div>
				<motion.div
					className="flex items-center font-semibold gap-x-1 text-text-primary"
					layoutId={`hotel-type-${hotel.hotel_id}`}
				>
					<BiSolidBuildingHouse size={14}></BiSolidBuildingHouse>
					<span className="text-sm">{hotel.accommodation_type_name}</span>
					<div className="flex items-center gap-x-1">
						{[...Array(hotel.class)].map((value, index) => {
							return (
								<FaStar
									key={index}
									size={12}
									className="text-yellow-400 "
								></FaStar>
							);
						})}
					</div>
				</motion.div>
				<div className="flex mt-2 text-text-primary">
					<div className="flex flex-col">
						<motion.span
							className="flex items-center gap-x-1"
							layoutId={`hotel-address-${hotel.hotel_id}`}
						>
							<FaLocationDot></FaLocationDot> {hotel.district},{" "}
							{hotel.city_trans}
						</motion.span>
						<div className="mt-4">
							<span className="font-semibold text-black ">
								{hotel.accommodation_type_name} 1 phòng ngủ
							</span>
							<div className="flex items-center mt-2 gap-x-6">
								<div className="flex items-center gap-x-1.5">
									<FaPerson></FaPerson>
									<span className="text-sm font-semibold text-black">
										2 người lớn
									</span>
								</div>
								<div className="flex items-center gap-x-1.5">
									<FaBed></FaBed>
									<span className="text-sm font-semibold text-black">
										1 phòng ngủ
									</span>
								</div>
								<div className="flex items-center gap-x-1.5">
									<FaShower></FaShower>
									<span className="text-sm font-semibold text-black">
										1 phòng tắm
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col ml-auto text-end gap-y-1">
						<span className="text-black">Mỗi đêm, 2 người lớn</span>
						{hotel.composite_price_breakdown.strikethrough_amount_per_night ? (
							<span className="text-sm text-red-500 line-through">
								{formatNumber(
									hotel.composite_price_breakdown.strikethrough_amount_per_night
										.value
								)}{" "}
								VND
							</span>
						) : (
							<div className="h-5"></div>
						)}
						<span className="text-xl font-semibold text-black">
							{formatNumber(
								hotel.composite_price_breakdown.gross_amount_per_night.value
							)}{" "}
							VND
						</span>
						<button
							className="flex items-center justify-center py-2 mt-4 text-lg font-semibold text-white transition-colors rounded-xl bg-button-primary hover-button"
							onClick={handleOnClick}
						>
							Xem phòng <FaArrowRightLong className="ml-2"></FaArrowRightLong>
						</button>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default HotelCard;
