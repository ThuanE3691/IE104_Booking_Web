import services from "@/Layouts/Shared/Filter/services";
import IconRender from "@/Components/Feature/Layout/IconRender";
import { TbRulerMeasure } from "react-icons/tb";

const summary_services = [
	{
		services_index: 0,
		tags_index: 0,
	},
	{
		services_index: 1,
		tags_index: 0,
	},

	{
		services_index: 2,
		tags_index: 0,
	},
	{
		services_index: 0,
		tags_index: 3,
	},
	{
		services_index: 1,
		tags_index: 4,
	},
	{
		services_index: 2,
		tags_index: 1,
	},
];

const RoomCard = ({ room, block }) => {
	return (
		<li className="flex flex-col">
			<img
				src={room.photos[0].url_original}
				alt=""
				className="object-cover w-full h-[250px] rounded-t-2xl"
			/>
			<section className="flex flex-col bg-white border-2 border-b-slate-200">
				<div className="px-2 py-2">
					<span className="font-semibold ">{block.room_name}</span>
					<div className="flex flex-col mt-2 gap-y-3">
						<span className="flex items-center text-sm gap-x-3">
							<TbRulerMeasure size={20}></TbRulerMeasure>
							Diện tích - {block.room_surface_in_m2} m&sup2;
						</span>
						{summary_services.map((service) => {
							const service_render =
								services[service.services_index].tags[service.tags_index];
							return (
								<li
									className="flex items-center gap-x-3"
									key={service_render.name}
								>
									{service_render.icon ? (
										<IconRender
											Icon={service_render.icon}
											size={20}
										></IconRender>
									) : (
										service_render.svg({ className: "w-5" })
									)}
									<span className="text-sm">{service_render.name}</span>
								</li>
							);
						})}
					</div>
					<button className="relative mt-2 underline_element hover:after:w-full text-text-primary after:bg-text-primary w-fit">
						Xem chi tiết
					</button>
				</div>
			</section>
			<section className="flex items-center px-2 py-2 bg-white border-2 border-t-0 rounded-b-xl">
				<div className="flex flex-col">
					<span className="text-xs text-red-400 line-through">
						{block.product_price_breakdown.strikethrough_amount.amount_rounded}
					</span>
					<span className="text-lg font-semibold">
						{block.product_price_breakdown.gross_amount.amount_rounded}
					</span>
				</div>
				<button className="px-3 py-1 ml-auto font-semibold text-white transition-colors rounded-xl bg-button-primary hover-button">
					Đặt ngay
				</button>
			</section>
		</li>
	);
};

export default RoomCard;
