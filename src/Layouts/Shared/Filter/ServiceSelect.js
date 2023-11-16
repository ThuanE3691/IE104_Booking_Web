import IconRender from "@/Components/Feature/Layout/IconRender";
import services from "./services";

const ServiceSelect = () => {
	const sizeDefault = 16;
	const svgDefault = " w-6";

	return (
		<section className=" font-vietnam-pro">
			<h3 className="text-xl font-semibold ">Các dịch vụ tiện ích</h3>
			<article className="flex flex-col my-4 ml-8 gap-y-6">
				{services.map(({ name, tags }) => {
					return (
						<section className="" key={name}>
							<h4 className="font-semibold">{name}</h4>
							<div className="flex items-center mt-2 fle gap-x-4 w-[757px] flex-wrap gap-y-3 ">
								{tags.map((tag, index) => {
									return (
										<div
											className="flex items-center px-5 py-1.5 shadow-md cursor-pointer ring-1 ring-slate-200 rounded-2xl gap-x-2 w-fit hover:bg-slate-200 transition-all text-black text-opacity-70 hover:text-opacity-100"
											key={tag.name}
										>
											{tag.icon ? (
												<IconRender
													Icon={tag.icon}
													size={tag.size ? tag.size : sizeDefault}
												></IconRender>
											) : (
												tag.svg({
													className:
														(tag.className ? tag.className : svgDefault) +
														" fill-current",
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
