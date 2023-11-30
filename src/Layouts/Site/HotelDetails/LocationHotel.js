import "@/css/Map/location.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Popup } from "react-leaflet";
import { Icon } from "leaflet";

const LocationHotel = ({ address, district, city, position }) => {
	const defaultProps = {
		center: position,
		zoom: 17,
	};

	const customIcon = new Icon({
		iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776000.png",
		iconSize: [38, 38],
	});

	return (
		<section className="w-full my-8" name="location">
			<h2 className="text-xl font-semibold">Vị trí của chỗ nghỉ</h2>
			<div className="mt-8 w-full h-[500px]">
				<MapContainer
					center={defaultProps.center}
					zoom={defaultProps.zoom}
					scrollWheelZoom={false}
					className="hotel-location"
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
					></TileLayer>

					<Marker position={position} icon={customIcon}>
						<Popup>
							{address}, {district}, {city}
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</section>
	);
};

export default LocationHotel;
