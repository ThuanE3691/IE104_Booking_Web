import IconRender from "@/Components/Feature/Layout/IconRender";
import services from "./services";
import { motion, AnimatePresence } from "framer-motion";

const checkedVariants = {
	uncheck: {
		pathLength: 0,
	},
	checked: {
		pathLength: 1,
	},
	transition: {
		duration: 0.05,
		type: "tween",
		ease: "easeOut",
	},
};

const ServiceSelect = ({ selectedServices, setSelectedServices }) => {
	const sizeDefault = 16;

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
									const isChecked =
										selectedServices.find(
											(services) => services.name === tag.name
										) !== undefined;
									return (
										<div
											className="flex items-center px-5 py-1.5 shadow-md cursor-pointer ring-1 ring-slate-200 rounded-2xl gap-x-2 w-fit hover:bg-slate-200 transition-all text-black text-opacity-70 hover:text-opacity-100 data-[ischecked=true]:text-opacity-100 data-[ischecked=true]:bg-slate-200"
											key={tag.name}
											data-ischecked={isChecked}
											onClick={() => setSelectedServices(tag)}
										>
											<AnimatePresence>
												{!isChecked && (
													<motion.div
														initial={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														exit={{ opacity: 0 }}
														className="flex items-center justify-center"
													>
														{tag.icon ? (
															<IconRender
																Icon={tag.icon}
																size={tag.size ? tag.size : sizeDefault}
															></IconRender>
														) : (
															tag.svg({
																className: ` fill-current`,
																style: {
																	width: tag.size
																		? tag.size
																		: sizeDefault + "px",
																},
															})
														)}
													</motion.div>
												)}
												{isChecked && (
													<div
														className={`relative h-5`}
														style={{
															width: tag.size ? tag.size : sizeDefault,
														}}
													>
														<motion.svg
															fill="none"
															stroke="currentColor"
															strokeWidth="3"
															className="absolute w-5 h-5 text-green-500 pointer-events-none"
															viewBox="0 0 24 24"
														>
															<motion.path
																variants={checkedVariants}
																initial="uncheck"
																animate="checked"
																transition="transition"
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M5 13l4 4L19 7"
															></motion.path>
														</motion.svg>
													</div>
												)}
											</AnimatePresence>
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
