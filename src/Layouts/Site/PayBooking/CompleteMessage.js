import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const checkedVariants = {
	uncheck: {
		opacity: 0,
		pathLength: 0,
	},
	checked: {
		opacity: 1,
		pathLength: 1,
	},
	transition: {
		delay: 0.4,
		opacity: {
			duration: 0.02,
		},
		duration: 0.1,
		type: "tween",
		ease: "easeOut",
	},
};

const CompleteMessage = () => {
	return (
		<motion.div
			className="flex justify-center w-full my-48 mt-24 mb-96"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3, delay: 0.2 }}
			key="complete-message"
		>
			<div className="flex flex-col items-center gap-y-8">
				<div className="bg-green-600 w-[60px] h-[60px] rounded-full flex justify-center items-center relative ">
					<motion.svg
						fill="none"
						stroke="currentColor"
						strokeWidth="3"
						className="absolute w-9 h-9 text-white pointer-events-none mx-0.5 my-0.5"
						viewBox="0 0 24 24"
						key="complete"
					>
						<motion.path
							variants={checkedVariants}
							initial="uncheck"
							animate="checked"
							transition={checkedVariants["transition"]}
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M5 13l4 4L19 7"
						></motion.path>
					</motion.svg>
				</div>
				<h2 className="text-3xl font-semibold ">Đặt phòng thành công</h2>
				<p className=" w-[885px] text-justify">
					Thông tin chi tiết về đơn đặt phòng của bạn đã được gửi qua email. Cảm
					ơn bạn đã sử dụng dịch vụ của chúng tôi. Mọi chi tiết vui lòng liên hệ
					qua email hoặc hotline để{" "}
					<span className="font-semibold text-button-primary">Travor</span> có
					thể giải đáp cho quý khách hàng sớm nhất có thể.
				</p>
				<Link to="/" className="ml-auto">
					<button className="relative flex items-center font-semibold text-button-primary gap-x-2 underline_element hover:after:w-full after:bg-button-primary">
						Trở về trang chủ <FaArrowRightLong></FaArrowRightLong>
					</button>
				</Link>
			</div>
		</motion.div>
	);
};

export default CompleteMessage;
