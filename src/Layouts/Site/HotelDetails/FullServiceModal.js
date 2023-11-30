import Modal from "@/Components/Feature/Layout/Modal";
import { motion } from "framer-motion";
import services from "@/Layouts/Shared/Filter/services";
import IconRender from "@/Components/Feature/Layout/IconRender";

const modalVariants = {
	hidden: {
		y: "100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: "easeInOut",
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
};

const FullServiceModal = ({ showModal, setShowModal }) => {
	return (
		<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
			<motion.div
				className="bg-white flex flex-col font-vietnam-pro h-[544px] relative z-[11] rounded-xl"
				variants={modalVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				tabIndex="0"
				onClick={(e) => e.stopPropagation()}
				key="fullService-modal"
			>
				<div className="flex items-center border-b-2 border-slate-200">
					<h2 className="mx-4 my-3 text-lg font-semibold">Dịch vụ cung cấp</h2>
				</div>
				<div className="px-6 pt-4 pb-8 overflow-x-hidden overflow-y-scroll">
					<ul className="flex flex-col gap-y-8">
						{services.map((service) => {
							return (
								<li className="flex flex-col" key={service.name}>
									<span className="text-lg font-semibold">{service.name}</span>
									<section className="grid grid-cols-[300px,300px] grid-rows-3 mt-4 gap-y-8">
										{service.tags.map((tag) => {
											return (
												<div
													className="flex items-center gap-x-3"
													key={tag.name}
												>
													{tag.icon ? (
														<IconRender Icon={tag.icon} size={24}></IconRender>
													) : (
														tag.svg({ className: "w-6" })
													)}
													<span className="text-sm">{tag.name}</span>
												</div>
											);
										})}
									</section>
								</li>
							);
						})}
					</ul>
				</div>
			</motion.div>
		</Modal>
	);
};

export default FullServiceModal;
