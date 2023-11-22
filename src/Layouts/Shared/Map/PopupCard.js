import { Popup } from "react-leaflet";
import "@/css/Map/map.css";

const PopupCard = ({ hotel, ...properties }) => {
	return (
		<Popup maxwidth="100%" maxheight="auto" {...properties}>
			<img
				src={hotel.max_1440_photo_url}
				alt=""
				className=" w-[200px] rounded-l-lg"
			/>
			<section className="w-full px-4 py-4 font-vietnam-pro">
				<h3 className="text-base font-semibold bg-white w-fit">
					{hotel.hotel_name_trans}
				</h3>
				<div className="flex items-center justify-start mt-2 gap-x-2 w-fit">
					<div className="p-2 font-semibold text-white rounded-[10px_10px_10px_0px] bg-button-primary w-fit text-xs">
						{hotel.review_score.toFixed(1)}
					</div>
					<div className="flex flex-col">
						<span className="text-xs font-semibold">
							{hotel.review_score_word}
						</span>
						<span className="text-xs">{hotel.review_nr} đánh giá</span>
					</div>
				</div>
			</section>
		</Popup>
	);
};

export default PopupCard;
