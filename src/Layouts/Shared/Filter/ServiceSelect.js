import { FaWifi } from "react-icons/fa6";
import { TbAirConditioning, TbFridge } from "react-icons/tb";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import IconRender from "@/Components/Feature/Layout/IconRender";
import StokeSVG from "@/Assets/Icons/SVGComponent/Services/StokeSVG";
import HairDryerSVG from "@/Assets/Icons/SVGComponent/Services/HairDryerSVG";

const ServiceSelect = () => {
	const sizeDefault = 16;
	const svgDefault = " w-6";

	const services = [
		{
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
			],
		},
	];

	return (
		<section className=" font-vietnam-pro">
			<h3 className="text-xl font-semibold ">Các dịch vụ tiện ích</h3>
			<article className="my-4 ml-8">
				{services.map(({ name, tags }) => {
					return (
						<section className="" key={name}>
							<h4 className="font-semibold">{name}</h4>
							<div className="flex mt-2 gap-x-4">
								{tags.map((tag, index) => {
									return (
										<div
											className="flex items-center px-5 py-1.5 shadow-lg cursor-pointer ring-1 ring-slate-200 rounded-2xl gap-x-2 w-fit hover:bg-slate-200 transition-all text-black text-opacity-70 hover:text-opacity-100"
											key={tag.name}
										>
											{tag.icon ? (
												<IconRender
													Icon={tag.icon}
													size={tag.size ? tag.size : sizeDefault}
												></IconRender>
											) : (
												tag.svg({
													className: tag.className
														? tag.className
														: svgDefault + " fill-current",
												})
											)}
											<span className="text-sm ">{tag.name}</span>
										</div>
									);
								})}
							</div>
						</section>
					);
				})}
			</article>
		</section>
	);
};

export default ServiceSelect;
