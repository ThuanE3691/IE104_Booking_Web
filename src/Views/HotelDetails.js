import { useParams } from "react-router-dom";
import SearchBar from "@/Layouts/Shared/Search/SearchBar";
import findHotel from "@/Utils/findHotel";
import { FaAngleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaImages } from "react-icons/fa";
import _ from "lodash";
import {
	AnimatePresence,
	motion,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";
import ServiceHave from "@/Layouts/Site/HotelDetails/ServiceHave";
import ReviewsArea from "@/Layouts/Site/HotelDetails/ReviewsArea";
import RoomAvailable from "@/Layouts/Site/HotelDetails/RoomAvailable";
import ImageGallery from "@/Layouts/Site/HotelDetails/ImageGallery";
import { useState, useMemo, useEffect } from "react";
import NavigateHeader from "@/Layouts/Site/HotelDetails/NavigateHeader";
import LocationHotel from "@/Layouts/Site/HotelDetails/LocationHotel";

const imgVariants = {
	enter_down: {
		opacity: "0%",
		y: "-100%",
	},
	enter_up: {
		opacity: "0%",
		y: "100%",
	},
	enter: {
		y: 0,
		opacity: "100%",
	},
	transition: {
		duration: 0.3,
		bounce: 0,
		type: "spring",
		ease: "easeInOut",
	},
};

const normalVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
	transition: {
		duration: 0.3,
	},
};

const HotelDetails = () => {
	const { id } = useParams();

	const hotel = useMemo(
		() =>
			findHotel({
				page: 0,
				hotelId: id,
			}),
		[id]
	);

	const [showHeader, setShowHeader] = useState(false);
	const [positionArea, setPositionArea] = useState({
		image: null,
		introduction: null,
		service: null,
		review: null,
		book: null,
		location: null,
	});

	const [showGallery, setShowGallery] = useState(false);
	const [[imageOnShow, direction], setImageOnShow] = useState([0, 0]);

	const onClickImage = (index) => {
		setShowGallery(true);
		setImageOnShow([index, 0]);
	};

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

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (positionArea.image)
			setShowHeader(
				latest > positionArea.image.offsetTop + positionArea.image.offsetHeight
			);
	});

	useEffect(() => {
		setTimeout(() => {
			const imageDOM = document.querySelector("div[name='image-display']");
			const introductionDOM = document.querySelector(
				"fieldset[name='introduction']"
			);
			const serviceDOM = document.querySelector("div[name='service']");
			const reviewDOM = document.querySelector("section[name='review']");
			const locationDOM = document.querySelector("section[name='location']");
			const bookDOM = document.querySelector("section[name='book']");

			setPositionArea((prev) => {
				return {
					...prev,
					image: imageDOM,
					introduction: introductionDOM,
					service: serviceDOM,
					review: reviewDOM,
					book: bookDOM,
					location: locationDOM,
				};
			});
		}, 500);
	}, []);

	return (
		<>
			<AnimatePresence>
				{showHeader && <NavigateHeader positionArea={positionArea} />}
			</AnimatePresence>
			<div className="flex flex-col w-full min-h-full px-32 bg-main-bg font-vietnam-pro">
				<SearchBar overrides={styleSearchBar}></SearchBar>
				<div className="mt-16 mb-32">
					<motion.span
						className="flex items-center gap-x-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
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
					</motion.span>
					<div
						name="image-display"
						className="grid grid-rows-[200px,200px] grid-cols-[2.5fr,1fr,1fr] gap-x-6 gap-y-4 mt-8"
					>
						<AnimatePresence>
							{hotel.photos.slice(0, 5).map((photo, index) => {
								return (
									<motion.div
										className="relative data-[isfirst=true]:row-span-2 cursor-pointer"
										data-isfirst={index === 0}
										key={photo.photo_id}
										variants={index > 0 ? imgVariants : null}
										initial={
											index === 2 || index === 3 ? "enter_down" : "enter_up"
										}
										animate="enter"
										exit={
											index === 2 || index === 3 ? "enter_down" : "enter_up"
										}
										transition="transition"
										onClick={() => onClickImage(index)}
										layoutId={index === 0 && `main-img-${hotel.hotel_id}`}
									>
										<motion.img
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
									</motion.div>
								);
							})}
						</AnimatePresence>
					</div>
					<motion.h2
						className="mt-8 text-3xl font-semibold"
						layoutId={`hotel-name-${hotel.hotel_id}`}
					>
						{hotel.hotel_name_trans}
					</motion.h2>
					<motion.div
						className="flex items-center mt-4 font-semibold gap-x-2 text-text-primary"
						layoutId={`hotel-type-${hotel.hotel_id}`}
					>
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
					</motion.div>
					<motion.span
						className="flex items-center mt-2 gap-x-1"
						layoutId={`hotel-address-${hotel.hotel_id}`}
					>
						<FaLocationDot></FaLocationDot> {hotel.address}, {hotel.district},{" "}
						{hotel.city_trans}
					</motion.span>
					<motion.fieldset
						className="relative px-4 py-4 border border-gray-300 border-solid z-[1] mt-10"
						variants={normalVariants}
						initial="initial"
						animate="animate"
						exit="exit"
						name="introduction"
					>
						<legend className="absolute text-xl font-semibold z-[10] inset-0 bg-main-bg w-fit h-fit -translate-y-4 pr-8 pb-8 -translate-x-1 select-none">
							Giới thiệu
						</legend>
						<p className="z-[11] bg-transparent relative text-justify leading-6">
							{!_.isEmpty(hotel.description)
								? hotel.description.description
								: "Khách sạn này hiện tại không có giới thiệu"}
						</p>
					</motion.fieldset>
					<ServiceHave></ServiceHave>
					<ReviewsArea
						hotel_reviews={hotel.review_list}
						review_score={hotel.review_score}
						review_score_word={hotel.review_score_word}
					></ReviewsArea>
					<RoomAvailable rooms={hotel.rooms}></RoomAvailable>
					<LocationHotel
						address={hotel.address}
						district={hotel.district}
						city={hotel.city_trans}
						position={[hotel.latitude, hotel.longitude]}
					></LocationHotel>
				</div>
				<ImageGallery
					show={showGallery}
					setShow={setShowGallery}
					hotelName={hotel.hotel_name_trans}
					imageOnShow={imageOnShow}
					setImageOnShow={setImageOnShow}
					photos={hotel.photos}
					direction={direction}
				></ImageGallery>
			</div>
		</>
	);
};

export default HotelDetails;
