import HotelData from "@/Data/HCM_hotels.json";

const findHotel = ({ page, hotelId }) => {
	const result = HotelData[page].find((hotel) => {
		return hotel.hotel_id === parseInt(hotelId);
	});
	return result;
};

export default findHotel;
