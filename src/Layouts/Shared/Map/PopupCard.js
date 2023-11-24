import { Popup } from "react-leaflet";
import { FaLocationDot } from "react-icons/fa6";
import formatNumber from "@/Utils/formatNumber";

import "@/css/Map/map.css";

const PopupCard = ({ hotel, ...properties }) => {
	return (
		<Popup maxwidth="100%" maxheight="auto" {...properties}>
			<img
				src={hotel.max_1440_photo_url}
				alt=""
				className=" w-[300px] h-[220px] rounded-[30px_30px_0_0] z-[1]"
			/>
			<div className="absolute z-10 w-full h-[30px] left-0 top-[200px] bg-white rounded-tr-[30px]"></div>

			<section className="flex flex-col w-full px-4 py-4 font-vietnam-pro">
				<h3 className="text-base font-semibold bg-white w-fit">
					{hotel.hotel_name_trans}
				</h3>
				{/* <div className="flex items-center justify-start mt-2 gap-x-2 w-fit">
					<div className="p-2 font-semibold text-white rounded-[10px_10px_10px_0px] bg-button-primary w-fit text-xs">
						{hotel.review_score.toFixed(1)}
					</div>
					<div className="flex flex-col">
						<span className="text-xs font-semibold">
							{hotel.review_score_word}
						</span>
						<span className="text-xs">{hotel.review_nr} đánh giá</span>
					</div>
				</div> */}
				<span className="flex items-center mt-2 gap-x-1">
					<FaLocationDot></FaLocationDot> {hotel.district}, {hotel.city_trans}
				</span>
				<span className="self-end justify-end mt-10 text-lg font-semibold text-text-primary">
					{formatNumber(
						hotel.composite_price_breakdown.gross_amount_per_night.value
					)}{" "}
					VND/ đêm
				</span>
			</section>
		</Popup>
	);
};

export default PopupCard;
