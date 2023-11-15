import { FaHouseChimney, FaHotel } from "react-icons/fa6";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { GiSpookyHouse, GiCampingTent } from "react-icons/gi";
import IconRender from "@/Components/Feature/Layout/IconRender";

const TypeSelect = ({ selected, setSelected }) => {
	const sizeDefault = 30;

	const types = [
		{
			name: "Khách sạn",
			icon: FaHotel,
		},
		{
			name: "Căn hộ",
			icon: BiSolidBuildingHouse,
		},
		{
			name: "Khu cắm trại",
			icon: GiCampingTent,
			size: 35,
		},
		{
			name: "Biệt thự",
			icon: GiSpookyHouse,
		},
		{
			name: "Homestay",
			icon: FaHouseChimney,
		},
	];

	const checked_list = Array.from({ length: types.length }, (v, k) => {
		return selected.find((item) => item.id === k) !== undefined;
	});

	return (
		<section className="font-vietnam-pro">
			<h3 className="text-xl font-semibold">Các loại chỗ nghỉ</h3>
			<div className="flex items-center justify-center gap-8 my-8">
				{types.map((type, index) => {
					return (
						<div
							className="flex flex-col items-center pt-5 pb-3 ring-1 ring-slate-200 hover:ring-2 hover:ring-black rounded-xl shadow-lg cursor-pointer w-36 gap-y-2.5  transition-colors data-[ischecked=true]:bg-slate-200 data-[ischecked=true]:ring-black data-[ischecked=true]:ring-2 "
							onClick={() => setSelected(type, index)}
							data-ischecked={checked_list[index]}
							key={type.name}
						>
							<IconRender
								Icon={type.icon}
								size={type.size ? type.size : sizeDefault}
								className="text-button-primary "
							></IconRender>
							<span className="text-sm">{type.name}</span>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default TypeSelect;
