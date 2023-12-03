import { FaStar } from "react-icons/fa";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import formatNumber from "@/Utils/formatNumber";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SmallPropertyCard = ({
	hotel,
	isInView,
	setInView,
	id,
	page,
	AnimateMarker,
}) => {
	// const facilities = hotel.unit_configuration_label.split("</b>: ")[1];

	const navigate = useNavigate();

	const handleOnClick = () => {
		navigate(`/search/hotel/${page}/${hotel.hotel_id}`);
	};

	const handleInView = (hotel_id) => {
		setInView(hotel_id);
		AnimateMarker();
	};

	return (
		<motion.li
			className={`flex relative bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] scroll-m-8 transition ease-in-out ${
				isInView === hotel.hotel_id && " ring-2 ring-text-primary"
			}`}
			key={hotel.hotel_id}
			onViewportEnter={() => handleInView(hotel.hotel_id)}
			viewport={{ amount: 1, margin: "0px 0px -252px 0px" }}
			id={id}
			name={"small" + id}
			layout
		>
			<img
				src={hotel.max_1440_photo_url}
				alt=""
				className="object-cover h-[100%] w-52 rounded-l-xl"
				loading="lazy"
			/>
			<div className="relative z-10 w-full px-4 py-4 cursor-pointer">
				<div className="flex w-full mb-1">
					<span className="mr-4 font-semibold">{hotel.hotel_name_trans}</span>
					<div className="flex items-center ml-auto gap-x-2">
						{hotel.review_score ? (
							<div className="p-2 font-semibold text-white rounded-[10px_10px_10px_0px] bg-button-primary w-fit text-sm">
								{hotel.review_score.toFixed(1)}
							</div>
						) : (
							<div className="h-10"></div>
						)}
					</div>
				</div>
				<div className="flex items-center font-semibold gap-x-1 text-text-primary">
					<BiSolidBuildingHouse size={12}></BiSolidBuildingHouse>
					<span className="text-xs ">{hotel.accommodation_type_name}</span>
					<div className="flex items-center gap-x-1">
						{[...Array(hotel.class)].map((value, index) => {
							return (
								<FaStar
									key={index}
									size={10}
									className="text-yellow-400 "
								></FaStar>
							);
						})}
					</div>
				</div>
				<div className="flex mt-2 text-text-primary">
					<div className="flex flex-col">
						<span className="flex items-center text-xs gap-x-1">
							<FaLocationDot></FaLocationDot> {hotel.district},{" "}
							{hotel.city_trans}
						</span>
						<div className="mt-4">
							<span className="text-sm font-semibold text-black">
								{hotel.accommodation_type_name} 1 phòng ngủ
							</span>
						</div>
					</div>
					<div className="flex flex-col ml-auto text-end gap-y-1">
						<span className="text-xs text-black">Mỗi đêm, 2 người lớn</span>
						{hotel.composite_price_breakdown.strikethrough_amount_per_night ? (
							<span className="text-xs text-red-500 line-through">
								{formatNumber(
									hotel.composite_price_breakdown.strikethrough_amount_per_night
										.value
								)}{" "}
								VND
							</span>
						) : (
							<div className="h-4"></div>
						)}
						<span className="font-semibold text-black text">
							{formatNumber(
								hotel.composite_price_breakdown.gross_amount_per_night.value
							)}{" "}
							VND
						</span>
						<button
							className="flex items-center justify-center py-2 mt-2 text-sm font-semibold text-white transition-colors rounded-xl bg-button-primary hover-button"
							onClick={handleOnClick}
						>
							Xem phòng <FaArrowRightLong className="ml-2"></FaArrowRightLong>
						</button>
					</div>
				</div>
			</div>
		</motion.li>
	);
};

export default SmallPropertyCard;
