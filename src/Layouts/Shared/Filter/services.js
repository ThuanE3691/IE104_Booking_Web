import { FaWifi } from "react-icons/fa6";
import { FaCocktail } from "react-icons/fa";
import {
	TbAirConditioning,
	TbFridge,
	TbIroning1,
	TbGrill,
} from "react-icons/tb";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import {
	MdOutlineLocalParking,
	MdCleaningServices,
	MdPool,
} from "react-icons/md";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { GrElevator } from "react-icons/gr";
import { IoIosRestaurant } from "react-icons/io";
import { BiSolidJoystick } from "react-icons/bi";
import StokeSVG from "@/Assets/Icons/SVGComponent/Services/StokeSVG";
import HairDryerSVG from "@/Assets/Icons/SVGComponent/Services/HairDryerSVG";
import MicrowaveSVG from "@/Assets/Icons/SVGComponent/Services/MicrowaveSVG";
import SafeBoxSVG from "./../../../Assets/Icons/SVGComponent/Services/SafeBoxSVG";
import SecureSVG from "@/Assets/Icons/SVGComponent/Services/SecureSVG";
import ReceptionistSVG from "@/Assets/Icons/SVGComponent/Services/ReceptionistSVG";
import GymSVG from "@/Assets/Icons/SVGComponent/Services/GymSVG";
import HotTubSVG from "@/Assets/Icons/SVGComponent/Services/HotTubSVG";
import MassageSVG from "@/Assets/Icons/SVGComponent/Services/MassageSVG";

const deviceService = {
	name: "Thiết bị",
	tags: [
		{
			name: "WiFi",
			icon: FaWifi,
		},
		{
			name: "Máy lạnh",
			icon: TbAirConditioning,
		},
		{
			name: "Bếp",
			svg: StokeSVG,
		},
		{
			name: "TV",
			icon: PiTelevisionSimpleBold,
		},
		{
			name: "Tủ lạnh",
			icon: TbFridge,
		},
		{
			name: "Máy sấy tóc",
			svg: HairDryerSVG,
			className: " w-5",
		},
		{
			name: "Lò vi sóng",
			svg: MicrowaveSVG,
		},
		{
			name: "Két an toàn",
			svg: SafeBoxSVG,
			className: " w-5",
		},
	],
};

const advanceService = {
	name: "Dịch vụ",
	tags: [
		{
			name: "Bảo vệ 24/7",
			svg: SecureSVG,
			className: " w-4",
		},
		{
			name: "Dịch vụ là ủi",
			icon: TbIroning1,
		},
		{
			name: "Đưa đón tận nơi",
			icon: BsFillTaxiFrontFill,
		},
		{
			name: "Dọn phòng hàng ngày",
			icon: MdCleaningServices,
		},
		{
			name: "Đỗ xe miễn phí",
			icon: MdOutlineLocalParking,
		},
		{
			name: "Quầy bar",
			icon: FaCocktail,
		},
		{
			name: "Lễ tân 24/7",
			svg: ReceptionistSVG,
			className: " w-5",
		},
	],
};

const utilityService = {
	name: "Tiện ích",
	tags: [
		{ name: "Thang máy", icon: GrElevator },
		{ name: "Hồ bơi", icon: MdPool },
		{ name: "Phòng gym", svg: GymSVG, className: " w-5" },
		{ name: "Nhà hàng", icon: IoIosRestaurant, size: 20 },
		{ name: "Phòng giải trí", icon: BiSolidJoystick },
		{ name: "Khu vực BBQ", icon: TbGrill, size: 20 },
		{ name: "Phòng xông hơi", svg: HotTubSVG, className: " w-5" },
		{ name: "Spa thư giãn", svg: MassageSVG, className: " w-5" },
	],
};

const services = [deviceService, advanceService, utilityService];

export default services;
