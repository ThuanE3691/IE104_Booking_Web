import { useParams } from "react-router-dom";
import SearchBar from "@/Layouts/Shared/Search/SearchBar";
import findHotel from "@/Utils/findHotel";
import { FaAngleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaImages } from "react-icons/fa";
import room_facilities from "@/Data/room_facilities.json";
import _ from "lodash";

const HotelDetails = () => {
	const { id } = useParams();

	const hotel = findHotel({
		page: 0,
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
			<div className="mt-16 mb-32">
				<span className="flex items-center gap-x-4">
					<span className="transition-opacity cursor-pointer hover:opacity-70">
						<Link to="/">Trang chủ</Link>
					</span>
					<FaAngleRight />
					<span className="transition-opacity cursor-pointer hover:opacity-70">
						<Link to="/search">{hotel.city_trans}</Link>
					</span>
					<FaAngleRight />
					<span className="font-semibold transition-opacity cursor-pointer text-text-primary hover:opacity-70">
						{hotel.district}
					</span>
				</span>
				<div className="grid grid-rows-[200px,200px] grid-cols-[2.5fr,1fr,1fr] gap-x-6 gap-y-4 mt-8">
					{hotel.photos.slice(0, 5).map((photo, index) => {
						return (
							<div
								className="relative  data-[isfirst=true]:row-span-2 cursor-pointer"
								data-isfirst={index === 0}
								key={index}
							>
								<img
									src={photo.url_max}
									className="object-cover w-full h-full rounded-md"
									alt=""
								/>
								{index === 4 && (
									<div className="absolute flex items-center justify-center px-4 py-2 text-white bg-black rounded-lg bg-opacity-30 bottom-4 right-4 w-fit h-fit gap-x-2">
										<FaImages></FaImages>{" "}
										<span>{hotel.photos.length - 5}+</span>
									</div>
								)}
							</div>
						);
					})}
				</div>
				<h2 className="mt-8 text-3xl font-semibold">
					{hotel.hotel_name_trans}
				</h2>
				<div className="flex items-center mt-4 font-semibold gap-x-2 text-text-primary">
					<BiSolidBuildingHouse size={14}></BiSolidBuildingHouse>
					<span className="text">{hotel.accommodation_type_name}</span>
					<div className="flex items-center gap-x-1">
						{[...Array(hotel.class)].map((value, index) => {
							return (
								<FaStar
									key={index}
									size={14}
									className="text-yellow-400 "
								></FaStar>
							);
						})}
					</div>
				</div>
				<span className="flex items-center mt-2 gap-x-1">
					<FaLocationDot></FaLocationDot> {hotel.address}, {hotel.district},{" "}
					{hotel.city_trans}
				</span>
				<fieldset className="relative px-4 py-4 border border-gray-300 border-solid z-[1] mt-8">
					<legend className="absolute text-lg font-semibold z-[10] inset-0 bg-main-bg w-fit h-fit -translate-y-4 pr-8 pb-8 -translate-x-1 select-none">
						Giới thiệu
					</legend>
					<p className="z-[11] bg-transparent relative text-justify leading-6">
						{!_.isEmpty(hotel.description)
							? hotel.description.description
							: "Khách sạn này hiện tại không có giới thiệu"}
					</p>
				</fieldset>
				<div className="mt-8">
					<span className="text-lg font-semibold">Các dịch vụ phổ biến</span>
					<div className="flex flex-col">
						{hotel.hotel_facilities.split(",").map((v) => {
							return <span>{room_facilities[v]}</span>;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelDetails;
