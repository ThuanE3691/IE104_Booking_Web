import HotelData from "@/Data/HCM_hotels_search.json";

const findHotel = ({ hotelId }) => {
	const result = HotelData.result.find((hotel) => {
		return hotel.hotel_id === parseInt(hotelId);
	});
	return result;
};

export default findHotel;
