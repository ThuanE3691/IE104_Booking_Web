import services from "@/Layouts/Shared/Filter/services";
import IconRender from "@/Components/Feature/Layout/IconRender";
import FullServiceModal from "./FullServiceModal";
import { useState } from "react";

const ServiceHave = () => {
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

	const [showFullService, setShowFull] = useState(false);

	return (
		<>
			<div className="mt-8" name="service">
				<span className="text-xl font-semibold">Các dịch vụ phổ biến</span>
				<ul className="grid grid-cols-[300px,300px] grid-rows-3 my-6 gap-y-8">
					{summary_services.map((service) => {
						const service_render =
							services[service.services_index].tags[service.tags_index];
						return (
							<li
								className="flex items-center gap-x-3"
								key={service_render.name}
							>
								{service_render.icon ? (
									<IconRender Icon={service_render.icon} size={32}></IconRender>
								) : (
									service_render.svg({ className: "w-8" })
								)}
								<span>{service_render.name}</span>
							</li>
						);
					})}
				</ul>
				<button
					className="relative cursor-pointer font-semibold text-text-primary underline_element after:bg-text-primary after:translate-y-[0.5px] hover:after:w-full"
					onClick={() => setShowFull(true)}
				>
					Xem tất cả
				</button>
			</div>
			<FullServiceModal
				showModal={showFullService}
				setShowModal={setShowFull}
			></FullServiceModal>
		</>
	);
};

export default ServiceHave;
