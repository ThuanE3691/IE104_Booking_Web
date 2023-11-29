import Modal from "@/Components/Feature/Layout/Modal";
import {
	modalVariants,
	stopPropagation,
} from "@/Components/Feature/Layout/Modal";
import { motion } from "framer-motion";

const RoomModal = ({ show, onClose, _room, properties }) => {
	const { room, block } = { ..._room };

	return (
		<Modal isOpen={show} onClose={onClose}>
			<motion.div
				className="bg-white flex flex-col font-vietnam-pro relative z-[11] rounded-2xl"
				variants={modalVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				tabIndex="0"
				onClick={stopPropagation}
				key="room-modal"
			>
				<header className="px-4 py-3 bg-white rounded-t-2xl ">
					<span className="font-semibold ">Thông tin phòng</span>
				</header>
				<section className="flex flex-col py-4">
					<img
						src={room.photos[0].url_original}
						alt=""
						className="px-2 w-[680px] h-[380px] object-cover rounded-[32px]"
					/>
					<div className="px-6 text-[#191e3b]">
						<h2 className="mt-4 text-xl font-semibold ">{block.room_name}</h2>
					</div>
				</section>
			</motion.div>
		</Modal>
	);
};

export default RoomModal;
