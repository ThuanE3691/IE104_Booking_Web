import { FaStar } from "react-icons/fa";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import formatNumber from "@/Utils/formatNumber";
import { motion } from "framer-motion";

const SmallPropertyCard = ({ hotel, ...properties }) => {
	// const facilities = hotel.unit_configuration_label.split("</b>: ")[1];

	return (
		<motion.section
			className="flex relative bg-white  rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] scroll-m-8 "
			key={hotel.hotel_id}
			onViewportEnter={() => properties.setInView(hotel.hotel_id)}
			// onClick={() => properties.setInView(hotel.hotel_id)}
			viewport={{ amount: 1, margin: "0px 0px -252px 0px" }}
			layout
		>
			{hotel.hotel_id === properties.isInView && (
				<motion.div
					className="absolute inset-0 z-10 w-full h-full ring-2 rounded-xl ring-text-primary"
					layoutId="ring-properties"
				></motion.div>
			)}
			<img
				src={hotel.max_1440_photo_url}
				alt=""
				className="object-cover h-[100%] w-52 rounded-l-xl"
			/>
			<div className="w-full px-4 py-4">
				<div className="flex w-full mb-1">
					<span className="mr-4 font-semibold">{hotel.hotel_name_trans}</span>
					<div className="flex items-center ml-auto gap-x-2">
						<div className="p-2 font-semibold text-white rounded-[10px_10px_10px_0px] bg-button-primary w-fit text-sm">
							{hotel.review_score.toFixed(1)}
						</div>
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
						<span className="text-xs text-red-500 line-through">
							{formatNumber(
								hotel.composite_price_breakdown.strikethrough_amount_per_night
									.value
							)}{" "}
							VND
						</span>
						<span className="font-semibold text-black text">
							{formatNumber(
								hotel.composite_price_breakdown.gross_amount_per_night.value
							)}{" "}
							VND
						</span>
						<button className="flex items-center justify-center py-2 mt-2 text-sm font-semibold text-white transition-colors rounded-xl bg-button-primary hover-button">
							Xem phòng <FaArrowRightLong className="ml-2"></FaArrowRightLong>
						</button>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default SmallPropertyCard;
