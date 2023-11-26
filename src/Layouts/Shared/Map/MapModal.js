import Modal from "@/Components/Feature/Layout/Modal";
import { LayoutGroup, motion } from "framer-motion";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "@/css/Map/map.css";
import PopupCard from "./PopupCard";
import SmallPropertyCard from "@/Components/Layout/SmallPropertyCard";
import { useState } from "react";

const modalVariants = {
	hidden: {
		y: "100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: "easeInOut",
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
};

const MapModal = ({ showMap, setShowMap, properties }) => {
	const defaultProps = {
		center: [properties[0].latitude, properties[0].longitude],
		zoom: 13,
	};

	const stopPropagation = (event) => {
		event.stopPropagation();
	};

	const handleShowOffModal = () => {
		setShowMap(false);
	};

	const [isInView, setInView] = useState(properties[0].hotel_id);

	const handleOnClickMarker = (hotelId) => {
		const element = document.getElementById("properties-" + hotelId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const customIcon = new Icon({
		iconUrl: "https://cdn-icons-png.flaticon.com/128/6153/6153497.png",
		iconSize: [38, 38],
	});

	return (
		<Modal isOpen={showMap} onClose={handleShowOffModal}>
			<motion.div
				className="bg-white flex font-vietnam-pro w-[1348px] h-[544px] relative"
				variants={modalVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				tabIndex="0"
				onClick={stopPropagation}
				key="filter-modal"
			>
				<motion.ul
					className="bg-white w-[674px] flex flex-col overflow-x-hidden overflow-y-scroll gap-y-8 py-4 px-4 scroll-smooth"
					layout
				>
					{properties.map((hotel, index) => {
						return (
							<SmallPropertyCard
								hotel={hotel}
								key={hotel.hotel_id}
								isInView={isInView}
								setInView={setInView}
								index={index}
								id={"properties-" + hotel.hotel_id}
							></SmallPropertyCard>
						);
					})}
				</motion.ul>
				<MapContainer center={defaultProps.center} zoom={defaultProps.zoom}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
					></TileLayer>
					{properties.map((hotel) => {
						return (
							<Marker
								key={hotel.hotel_name_trans}
								position={[hotel.latitude, hotel.longitude]}
								icon={customIcon}
								eventHandlers={{
									click: () => handleOnClickMarker(hotel.hotel_id),
								}}
							>
								<PopupCard hotel={hotel} key={hotel.hotel_name_trans} />
							</Marker>
						);
					})}
				</MapContainer>
			</motion.div>
		</Modal>
	);
};

export default MapModal;
