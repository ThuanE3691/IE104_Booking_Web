import { motion } from "framer-motion";

const NavigateHeader = ({ positionArea }) => {
	const NAVBAR_HEIGHT = 74;
	const MARGIN = 32;

	const handleNavigate = (area) => {
		window.scrollTo({
			top: positionArea[area].offsetTop - NAVBAR_HEIGHT - MARGIN,
			left: 0,
			behavior: "smooth",
		});
	};

	const listHeader = [
		{
			text: "Ảnh",
			area: "image",
		},
		{
			text: "Giới thiệu",
			area: "introduction",
		},
		{
			text: "Dịch vụ",
			area: "service",
		},
		{
			text: "Đánh giá",
			area: "review",
		},
		{
			text: "Đặt phòng",
			area: "book",
		},
		{
			text: "Địa chỉ",
			area: "location",
		},
	];

	return (
		<motion.header
			className="fixed top-0 z-50 flex w-full px-32 py-6 bg-white border-b-2 font-vietnam-pro gap-x-8 border-slate-200"
			initial={{ y: "-100%" }}
			animate={{ y: "0%" }}
			exit={{ y: "-100%" }}
			transition={{ bound: 0, duration: 0.3 }}
		>
			{listHeader.map((item, index) => {
				return (
					<button
						key={index}
						className="relative font-semibold underline_element hover:after:w-full after:bg-black"
						onClick={() => handleNavigate(item.area)}
					>
						{item.text}
					</button>
				);
			})}
		</motion.header>
	);
};

export default NavigateHeader;
