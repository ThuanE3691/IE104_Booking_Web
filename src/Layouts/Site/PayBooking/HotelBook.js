import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const HotelBook = ({ hotel }) => {
	return (
		<section className="flex flex-col w-full px-4 py-3 border-2 rounded-lg border-slate-200 gap-y-2 h-fit">
			<span className="font-semibold">{hotel.hotel_name_trans}</span>
			<div className="flex items-center font-semibold gap-x-2 text-text-primary">
				<BiSolidBuildingHouse size={12}></BiSolidBuildingHouse>
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
			</div>
			<span className="flex items-center text-sm gap-x-1">
				<FaLocationDot></FaLocationDot> {hotel.address}, {hotel.district},{" "}
				{hotel.city_trans}
			</span>
			<div className="flex items-center mt-1 gap-x-2">
				<span className="flex justify-center items-center font-semibold text-white bg-button-primary w-[43px] h-[40px] rounded-[8px_8px_8px_0]">
					{hotel.review_score.toFixed(1)}
				</span>
				<span className="font-semibold ">{hotel.review_score_word}</span>
				<span className="ml-3 text-sm font-medium">
					{hotel.review_nr} đánh giá
				</span>
			</div>
		</section>
	);
};

export default HotelBook;
