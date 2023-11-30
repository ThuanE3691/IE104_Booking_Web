import Modal from "@/Components/Feature/Layout/Modal";
import { LayoutGroup, motion } from "framer-motion";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "@/css/Map/map.css";
import PopupCard from "./PopupCard";
import SmallPropertyCard from "@/Components/Layout/SmallPropertyCard";
import { useState, useRef } from "react";
import "leaflet.smooth_marker_bouncing";

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
		zoom: 14,
	};

	const stopPropagation = (event) => {
		event.stopPropagation();
	};

	const handleShowOffModal = () => {
		setShowMap(false);
	};

	const [isInView, setInView] = useState(properties[0].hotel_id);
	const markerRef = useRef(null);

	const handleOnClickMarker = (hotelId) => {
		const element = document.getElementById("properties-" + hotelId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const AnimateMarker = () => {
		markerRef.current.setBouncingOptions({
			exclusive: true,
		});
		markerRef.current.toggleBouncing();
	};

	const customIcon = new Icon({
		iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776000.png",
		iconSize: [38, 38],
	});

	return (
		<Modal isOpen={showMap} onClose={handleShowOffModal}>
			<motion.div
				className="bg-white flex font-vietnam-pro w-[1348px] h-[544px] relative z-[11]"
				variants={modalVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				tabIndex="0"
				onClick={stopPropagation}
				key="map-modal"
			>
				<LayoutGroup id="ring">
					<motion.ul
						className="relative flex flex-col px-4 py-4 overflow-x-hidden bg-white gap-y-8 scroll-smooth w-[674px]"
						style={{ overflowY: "scroll" }}
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
									AnimateMarker={AnimateMarker}
								></SmallPropertyCard>
							);
						})}
					</motion.ul>
				</LayoutGroup>
				<section className="w-[50%] h-full">
					<MapContainer
						center={defaultProps.center}
						zoom={defaultProps.zoom}
						className="map-modal"
					>
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
									ref={hotel.hotel_id === isInView ? markerRef : null}
									eventHandlers={{
										click: () => {
											handleOnClickMarker(hotel.hotel_id);
										},
									}}
								>
									<PopupCard hotel={hotel} key={hotel.hotel_name_trans} />
								</Marker>
							);
						})}
					</MapContainer>
				</section>
			</motion.div>
		</Modal>
	);
};

export default MapModal;
