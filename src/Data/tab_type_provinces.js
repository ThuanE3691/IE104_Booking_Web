import BeachSVG from "@/Assets/Icons/SVG/BeachSVG";
import NatureSVG from "@/Assets/Icons/SVG/NatureSVG";
import CitySVG from "@/Assets/Icons/SVG/CitySVG";
import LoveSVG from "@/Assets/Icons/SVG/LoveSVG";
import RelaxSVG from "@/Assets/Icons/SVG/RelaxSVG";
import FavoriteSVG from "@/Assets/Icons/SVG/FavoriteSVG";

const className = "relative z-10 w-5 h-5 text-black fill-current";

const provinceType = [
	{
		name: "Yêu thích",
		image: <FavoriteSVG className={className}></FavoriteSVG>,
	},
	{
		name: "Bãi biển",
		image: <BeachSVG className={className}></BeachSVG>,
	},
	{
		name: "Thiên nhiên",
		image: <NatureSVG className={className}></NatureSVG>,
	},
	{
		name: "Thành phố",
		image: <CitySVG className={className}></CitySVG>,
	},
	{
		name: "Lãng mạn",
		image: <LoveSVG className={className}></LoveSVG>,
	},
	{
		name: "Thư giãn",
		image: <RelaxSVG className={className}></RelaxSVG>,
	},
];

export default provinceType;
