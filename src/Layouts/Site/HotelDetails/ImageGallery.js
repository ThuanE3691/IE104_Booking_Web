import Modal, {
	stopPropagation,
	modalVariants,
} from "@/Components/Feature/Layout/Modal";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import RightArrowSVG from "@/Assets/Icons/SVGComponent/Shared/RightArrowSVG";
import LeftArrowSVG from "@/Assets/Icons/SVGComponent/Shared/LeftArrowSVG";
import { wrap } from "popmotion";
import { useRef } from "react";

const sliderVariants = {
	incoming: (direction) => ({
		x: direction > 0 ? "100%" : "-100%",
		scale: 1.2,
		opacity: 0,
	}),
	active: { x: 0, scale: 1, opacity: 1 },
	exit: (direction) => ({
		x: direction > 0 ? "-100%" : "100%",
		scale: 1,
		opacity: 0.2,
	}),
};

const sliderTransition = {
	duration: 1,
	ease: [0.56, 0.03, 0.12, 1.04],
};

const ImageGallery = ({
	show,
	setShow,
	hotelName,
	setImageOnShow,
	imageOnShow,
	direction,
	photos,
}) => {
	const asideRef = useRef(null);

	const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
		const { top, left, bottom, right } = el.getBoundingClientRect();
		const { innerHeight, innerWidth } = window;
		return partiallyVisible
			? ((top > 0 && top < innerHeight) ||
					(bottom > 0 && bottom < innerHeight)) &&
					((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
			: top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
	};

	const swipeToImage = (swipeDirection) => {
		setImageOnShow([imageOnShow + swipeDirection, swipeDirection]);
		let new_id = imageOnShow + swipeDirection;
		if (new_id < 0) new_id = photos.length - 1;
		else if (new_id >= photos.length) new_id = 0;
		const nextImage = asideRef.current.children[new_id];

		if (!elementIsVisibleInViewport(nextImage)) {
			asideRef.current.scrollTo({
				left: nextImage.offsetLeft,
				top: nextImage.offsetTop - 8,
				behavior: "smooth",
			});
		}
	};

	const skipToImage = (imageId) => {
		let changeDirection;
		if (imageId > imageOnShow) {
			changeDirection = 1;
		} else if (imageId < imageOnShow) {
			changeDirection = -1;
		}
		setImageOnShow([imageId, changeDirection]);
	};

	const activeImageIndex = wrap(0, photos.length, imageOnShow);

	return (
		<Modal isOpen={show} onClose={() => setShow(false)} key="image-modal">
			{show && (
				<div
					className="flex w-screen h-screen text-white bg-black font-vietnam-pro"
					variants={modalVariants}
					onClick={stopPropagation}
					initial="hidden"
					animate="visible"
					exit="exit"
					key="modal-container"
				>
					<aside
						className="relative w-[300px] grid grid-cols-2 overflow-y-scroll gap-3 p-2 h-full scroll-smooth overflow-x-hidden new_scroll_bar"
						ref={asideRef}
					>
						{photos.map((photo, index) => {
							return (
								<div className="relative w-full h-[125px]" key={photo.photo_id}>
									<img
										src={photo.url_max}
										alt=""
										data-onshow={activeImageIndex === index}
										className="object-cover rounded-lg w-full h-full cursor-pointer hover:ring-[3px] hover:ring-white brightness-[0.6] transition-all select-none data-[onshow=true]:brightness-100 data-[onshow=true]:hover:ring-transparent delay-[brightness_0.3s]"
										onClick={() => skipToImage(index)}
									/>
									{activeImageIndex === index && (
										<motion.div
											layoutId="ring-gallery"
											className="inset-0 absolute w-full h-full ring-[3px] ring-white rounded-lg z-[10]"
										></motion.div>
									)}
								</div>
							);
						})}
					</aside>
					<div className="z-0 flex flex-col items-center flex-grow px-4 py-4">
						<header className="flex items-center w-full">
							<span className="font-semibold ">{hotelName}</span>
							<button
								className="p-1 ml-auto transition-colors rounded-full hover:bg-white hover:text-button-primary"
								onClick={() => setShow(false)}
							>
								<IoIosClose
									className="text-xl select-none "
									size={32}
								></IoIosClose>
							</button>
						</header>
						<div className="relative flex items-center justify-center w-full h-full ">
							<motion.div
								className="mr-auto relative p-2 rounded-full z-10 hover:bg-[#f2f2f2] shadow-xl cursor-pointer transition-all hover-button group"
								onClick={() => swipeToImage(-1)}
							>
								<LeftArrowSVG className="w-8 h-8 text-white fill-current group-hover:text-button-primary"></LeftArrowSVG>
							</motion.div>
							<div className="relative w-[840px] h-[560px] overflow-hidden">
								<AnimatePresence initial={false} custom={direction}>
									<motion.img
										className="w-full h-full object-cover absolute rounded-xl  will-change-[opacity_transform]"
										src={photos[activeImageIndex].url_max}
										custom={direction}
										variants={sliderVariants}
										initial="incoming"
										animate="active"
										exit="exit"
										transition={sliderTransition}
										key={photos[activeImageIndex].photo_id}
									></motion.img>
								</AnimatePresence>
							</div>
							<motion.div
								className="ml-auto relative p-2 rounded-full z-10 hover:bg-[#f2f2f2] shadow-xl cursor-pointer transition-all hover-button group"
								onClick={() => swipeToImage(1)}
							>
								<RightArrowSVG className="w-8 h-8 text-white fill-current group-hover:text-button-primary"></RightArrowSVG>
							</motion.div>
						</div>
						<span className="select-none">
							{activeImageIndex + 1} / {photos.length}
						</span>
					</div>
				</div>
			)}
		</Modal>
	);
};

export default ImageGallery;
