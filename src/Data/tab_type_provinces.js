import BeachSVG from "@/Assets/Icons/SVG/TypeProvince/BeachSVG";
import NatureSVG from "@/Assets/Icons/SVG/TypeProvince/NatureSVG";
import LoveSVG from "@/Assets/Icons/SVG/TypeProvince/LoveSVG";
import MountainSVG from "@/Assets/Icons/SVG/TypeProvince/MountainSVG";
import AncientSVG from "@/Assets/Icons/SVG/TypeProvince/AncientSVG";

const className =
	"relative z-10 w-5 h-5 text-black fill-current group-data-[isActive=true]:text-white transition-colors delay-100";

const provinceType = [
	{
		name: "Yêu thích",
		image: <LoveSVG className={className}></LoveSVG>,
		tag: "favorite",
	},
	{
		name: "Bãi biển",
		image: <BeachSVG className={className}></BeachSVG>,
		tag: "beach",
	},
	{
		name: "Rừng núi",
		image: <MountainSVG className={className}></MountainSVG>,
		tag: "mountain",
	},
	{
		name: "Di tích",
		image: <AncientSVG className={className}></AncientSVG>,
		tag: "ancient",
	},
	{
		name: "Sinh thái",
		image: <NatureSVG className={className}></NatureSVG>,
		tag: "nature",
	},
];

export default provinceType;