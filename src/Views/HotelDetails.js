import { useParams } from "react-router-dom";
import SearchBar from "@/Layouts/Shared/Search/SearchBar";
import findHotel from "@/Utils/findHotel";

const HotelDetails = () => {
	const { id } = useParams();

	const hotel = findHotel({
		hotelId: id,
	});

	const styleSearchBar = {
		container: "relative",
		locationTab: {
			yPosition: -125,
			isOnTop: false,
		},
		dateTab: {
			defaultTop: "110%",
			defaultPosition: "left-[370px]",
		},
	};

	return (
		<div className="flex flex-col w-full min-h-full px-32 bg-main-bg font-vietnam-pro">
			<SearchBar overrides={styleSearchBar}></SearchBar>
			{hotel.hotel_name_trans}
		</div>
	);
};

export default HotelDetails;
